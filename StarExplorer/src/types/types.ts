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
export type EnemyAttackStats = {
  damage: number;
  attackSpeed: number;
};

export type EnemyType = {
  id?: number
  position: Vector2;
  type: EnemyVariationEnum;
  speed: number;
  color: string;
  size: number;
  radius: number;
  currentHealth: number;
  maxHealth: number;
  ability: ProjectileType;
  attack: EnemyAttackStats;
  isFocused: boolean;
  isAlive: boolean;
};

export type Projectile = {
  possition: Vector2;
  width: number;
  height: number;
  color: string;
};

export type ProjectileType = {
  id?: number
  key: string;
  color: string;
  isActive: boolean;
  name: string;
  size: {
    width: number;
    height: number;
  };
  typeProjectile: ProjectileEnum;
  cooldown: number;
};

export type PlayerHUDType = {
  width: number;
  height: number;
  padding: number;
  possition: Vector2;
  abilities: ProjectileType[];
};

export type ProjectileInstance = {
  id?: number;
  type: ProjectileEnum;
  x: number; // Позиция X, от която се изстрелва
  y: number; // Позиция Y, от която се изстрелва
  vx: number; // Скорост по X
  vy: number; // Скорост по Y
  color: string; // Цвят на projectile-а
  size: { width: number; height: number }; // Размери
  isFlying: number; // Статус дали лети или не
  speed: number; // Скорост
  damage: number; // Щети
};
