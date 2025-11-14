import type { EnemyVariationEnum, ProjectileEnum } from "./enums";

export type Vector2 = {
  x: number;
  y: number;
};

export type Camera = {
  position: Vector2;
};

export type PlayerAttackStats = {
  damage: number;
  attackSpeed: number;
};

export type PlayerType = {
  position: Vector2;
  speed: number;
  color: string;
  size: number;
  radius: number;
  currentHealth: number;
  maxHealth: number;
  attack: PlayerAttackStats;
  isTargetMove: boolean;
  targetDestination: Vector2;
};

export type EnemyType = {
  id: string;
  position: Vector2;
  type: EnemyVariationEnum;
  speed: number;
  color: string;
  size: number;
  radius: number;
  currentHealth: number;
  maxHealth: number;
  ability: AbilityType;
  isFocused: boolean;
  isAlive: boolean;
};

export type Projectile = {
  possition: Vector2;
  width: number;
  height: number;
  color: string;
};

export type AbilityType = {
  id?: number;
  key: string;
  isActive: boolean;
  name: string;
  typeProjectile: ProjectileType;
  cooldown: number;
  _cooldownTimer: number;
};

export type ProjectileType = {
  color: string;
  size: { width: number; height: number };
  speed: number;
  damage: number;
  projectileKind: ProjectileEnum;
};

export type PlayerHUDType = {
  width: number;
  height: number;
  padding: number;
  possition: Vector2;
  abilities: AbilityType[];
};

export type ProjectileInstance = {
  id?: string;
  type: ProjectileType;
  x: number; // Позиция X, от която се изстрелва
  y: number; // Позиция Y, от която се изстрелва
  vx: number; // Скорост по X
  vy: number; // Скорост по Y
  cooldown?: number; // През колко време спаун
  isFlying: boolean; // Статус дали лети или не
  enemyId?: string;
  isFiredFromPlayer?: boolean;
};

export type spawnProjectileType = {
  x: number;
  y: number;
  type: ProjectileType;
  cooldown: number;
  enemyId: string;
  isFiredFromPlayer: boolean;
};
