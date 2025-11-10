export enum Input {
  Up = "w",
  Left = "a",
  Down = "s",
  Right = "d",

  ArrowUp = "ArrowUp",
  ArrowLeft = "ArrowLeft",
  ArrowDown = "ArrowDown",
  ArrowRight = "ArrowRight",

  Space = " ",
  Enter = "Enter",
  Control = "Control",

  Key1 = "1",
  Key2 = "2",
  Key3 = "3",
  Key4 = "4",
  Key5 = "5",
  Key6 = "6",
  Key7 = "7",
  Key8 = "8",
  Key9 = "9",
  Key0 = "0",
}

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

export enum EnemyVariation {
  BASIC = "basic",
  NORMAL = "normal",
  BIG = "big",
}

export type EnemyType = {
  position: Vector2;
  type: EnemyVariation;
  speed: number;
  color: string;
  size: number;
  radius: number;
  currentHealth: number;
  maxHealth: number;
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

export enum ProjectileEnum {
  LASER = "laser",
  ROCKET = "rocket",
}

export type ProjectileType = {
  id: number;
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
