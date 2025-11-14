import { baseConfig, camera } from "../constants/baseConfig";
import { ENEMY_CONFIGS, ENEMY_RATIOS } from "../constants/enemysConfig";
import { player } from "../constants/playerConstants";
import { EnemyVariationEnum, ProjectileEnum } from "../types/enums";
import {
  type EnemyType,
  type ProjectileInstance,
  type ProjectileType,
  type spawnProjectileType,
} from "../types/types";

export const setupContext = (canvas: HTMLCanvasElement) => {
  canvas.width = baseConfig.camera.width;
  canvas.height = baseConfig.camera.height;

  const ctx = canvas.getContext("2d");
  if (!ctx) throw "Cannot get 2D context";
  return ctx;
};

export const renderBackground = (context: CanvasRenderingContext2D) => {
  context.fillStyle = baseConfig.colors.background;
  context.fillRect(0, 0, baseConfig.camera.width, baseConfig.camera.height);

  context.font = "16px serif ";
  context.fillStyle = "green";
  context.fillText(`player - x: ${player.position.x}`, 20, 25);
  context.fillText(`player - y: ${player.position.y}`, 20, 50);
  context.fillText(`camera - x: ${camera.position.x}`, 20, 75);
  context.fillText(`camera - y: ${camera.position.y}`, 20, 100);
};

export const enemiesStack: EnemyType[] = [];

export const generateEnemies = () => {
  const total = baseConfig.enemiesGenerationCount;

  const counts: Record<EnemyVariationEnum, number> = {
    [EnemyVariationEnum.BASIC]: Math.floor(total * ENEMY_RATIOS.basic),
    [EnemyVariationEnum.NORMAL]: Math.floor(total * ENEMY_RATIOS.normal),
    [EnemyVariationEnum.BIG]: Math.floor(total * ENEMY_RATIOS.big),
  };

  (Object.entries(counts) as [EnemyVariationEnum, number][]).forEach(
    ([type, count]) => {
      const enemyConfiguration = ENEMY_CONFIGS[type];

      for (let i = 0; i < count; i++) {
        enemiesStack.push({
          ...enemyConfiguration,
          id: crypto.randomUUID(),
          type: type,
          position: {
            x: -1000 + Math.random() * 2000,
            y: -1000 + Math.random() * 2000,
          },
        });
      }
    }
  );
};

export const projectileStack: ProjectileInstance[] = [];

export const generateProjectiles = () => {
  for (let i = 0; i < baseConfig.projectilesGenerationCount; i++) {
    const projectile: ProjectileInstance = {
      id: crypto.randomUUID(),
      type: {
        color: "red",
        speed: 10,
        damage: 10,
        size: { width: 5, height: 5 },
        projectileKind: ProjectileEnum.LASER,
      },
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      isFlying: false,
    };
    projectileStack.push(projectile);
  }
};

export function spawnProjectile({
  x,
  y,
  type,
  cooldown,
  enemyId,
  isFiredFromPlayer,
}: spawnProjectileType) {
  const freeProjectile = projectileStack.find((p) => !p.isFlying);

  if (!freeProjectile) return;

  freeProjectile.x = x;
  freeProjectile.y = y;
  freeProjectile.cooldown = cooldown;

  freeProjectile.isFlying = true;
  freeProjectile.type = type;
  freeProjectile.enemyId = enemyId;
  freeProjectile.isFiredFromPlayer = isFiredFromPlayer;
}
