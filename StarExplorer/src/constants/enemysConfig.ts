import { EnemyVariation } from "../types";

export const ENEMY_CONFIGS = {
  [EnemyVariation.BASIC]: {
    speed: 1,
    size: 5,
    radius: 10,
    currentHealth: 50,
    maxHealth: 50,
    color: "rgb(200, 50, 50)",
    attack: {
      damage: 10,
      attackSpeed: 1.5,
    },
    isFocused: false,
    isAlive: true
  },
  [EnemyVariation.NORMAL]: {
    speed: 2.5,
    size: 8,
    radius: 15,
    currentHealth: 100,
    maxHealth: 100,
    color: "rgb(180, 100, 50)",
    attack: {
      damage: 15,
      attackSpeed: 1.25,
    },
    isFocused: false,
    isAlive: true
  },
  [EnemyVariation.BIG]: {
    speed: 0.8,
    size: 15,
    radius: 30,
    currentHealth: 150,
    maxHealth: 150,
    color: "rgb(150, 20, 20)",
    attack: {
      damage: 20,
      attackSpeed: 1,
    },
    isFocused: false,
    isAlive: true
  },
};

export const ENEMY_RATIOS = {
  basic: 0.5, // 50%
  normal: 0.3, // 30%
  big: 0.2, // 20%
};
