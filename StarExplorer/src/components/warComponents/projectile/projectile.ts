import { player } from "../../../constants/playerConstants";
import { ProjectileEnum, type ProjectileType } from "../../../types";

export type ProjectileInstance = {
  id: string;
  type: ProjectileEnum;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: { width: number; height: number };
  range: number;
  traveled: number;
  speed: number;
  fromPlayer: boolean; // дали е изстрелян от player или enemy
};

const activeProjectiles: ProjectileInstance[] = [];
let shootingInterval: number | null = null;

/**
 * Създава projectile, базиран на дадена конфигурация
 */
export const spawnProjectile = (
  config: ProjectileType,
  fromPlayer = true,
  angle = 0
) => {
  const speed = config.typeProjectile === ProjectileEnum.LASER ? 12 : 6;
  const range = 400;

  const vx = Math.cos(angle) * speed;
  const vy = Math.sin(angle) * speed;

  const projectile: ProjectileInstance = {
    id: crypto.randomUUID(),
    type: config.typeProjectile,
    x: player.position.x + player.size / 2,
    // x: player.position.x + player.size.width / 2, // TODO: Add width and height to make player more flexable (when add skins)
    y: player.position.y + player.size / 2,
    // y: player.position.y + player.size.height / 2, // TODO: Add width and height to make player more flexable (when add skins)
    vx,
    vy,
    color: config.color,
    size: config.size,
    range,
    traveled: 0,
    speed,
    fromPlayer,
  };

  activeProjectiles.push(projectile);
};

/**
 * Обновява позициите на всички активни projectiles
 */

export const startProjectileLoop = (activeAbility: ProjectileType) => {
  if (shootingInterval) clearInterval(shootingInterval);

  shootingInterval = window.setInterval(() => {
    spawnProjectile(activeAbility, true, 0); // в дясно
  }, activeAbility.cooldown * 100); // cooldown се мащабира (примерно)
};

export const stopProjectileLoop = () => {
  if (shootingInterval) {
    clearInterval(shootingInterval);
    shootingInterval = null;
  }
};

export const updateProjectiles = () => {
  for (let i = activeProjectiles.length - 1; i >= 0; i--) {
    const p = activeProjectiles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.traveled += p.speed;

    // Премахваме ако е извън обсег
    if (p.traveled > p.range) {
      activeProjectiles.splice(i, 1);
      continue;
    }

    // Тук можеш да добавиш collision detection с enemies/player
  }
};

/**
 * Рендира всички projectiles върху canvas-а
 */
export const renderProjectiles = (ctx: CanvasRenderingContext2D) => {
  for (const p of activeProjectiles) {
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size.width * 4, p.size.height * 4);
  }
};

/**
 * Дава достъп до активните projectile-и
 */
export const getActiveProjectiles = () => activeProjectiles;
