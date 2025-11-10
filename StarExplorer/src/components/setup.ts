import { baseConfig, camera } from "../constants/baseConfig";
import { ENEMY_CONFIGS, ENEMY_RATIOS } from "../constants/enemysConfig";
import { player } from "../constants/playerConstants";
import { EnemyVariation, type EnemyType } from "../types";

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

export const generateEnemies = (): EnemyType[] => {
  const enemies: EnemyType[] = [];
  const total = baseConfig.enemiesCount;

  const counts = {
    [EnemyVariation.BASIC]: Math.floor(total * ENEMY_RATIOS.basic),
    [EnemyVariation.NORMAL]: Math.floor(total * ENEMY_RATIOS.normal),
    [EnemyVariation.BIG]: Math.floor(total * ENEMY_RATIOS.big),
  };

  Object.entries(counts).forEach(([type, count]) => {
    const enemyConfiguration = ENEMY_CONFIGS[type as EnemyVariation];

    for (let i = 0; i < count; i++) {
      enemies.push({
        ...enemyConfiguration,
        type: type as EnemyVariation,
        position: {
          x: -1000 + Math.random() * 2000,
          y: -1000 + Math.random() * 2000,
        },
      });
    }
  });

  return enemies;
};
