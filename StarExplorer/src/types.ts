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

export type Player = {
  position: Vector2;
  speed: number;
  color: string;
  size: number;
  radius: number;
  currentHealth: number;
  maxHealth: number;
  attack: PlayerAttackStats;
};
export type EnemyAttackStats = {
  damage: number;
  attackSpeed: number;
};

export enum EnemyType {
  BASIC = "basic",
  NORMAL = "normal",
  BIG = "big",
}

export type Enemy = {
  position: Vector2;
  type: EnemyType;
  speed: number;
  color: string;
  size: number;
  radius: number;
  currentHealth: number;
  maxHealth: number;
  attack: EnemyAttackStats;
};
