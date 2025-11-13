import { EnemyVariationEnum, ProjectileEnum } from "../types/enums";

export const ENEMY_CONFIGS = {
  [EnemyVariationEnum.BASIC]: {
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
    ability: {
      key: "basic-laser",
      color: "rgba(223, 255, 80, 1)",
      isActive: false,
      name: "Laser Shot",
      size: { width: 4, height: 12 },
      typeProjectile: ProjectileEnum.LASER,
      cooldown: 3, 
    },
    isFocused: false,
    isAlive: true,
  },

  [EnemyVariationEnum.NORMAL]: {
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
    ability: {
      key: "normal-rocket",
      color: "rgb(255, 180, 50)",
      isActive: false,
      name: "Mini Rocket",
      size: { width: 6, height: 6 },
      typeProjectile: ProjectileEnum.ROCKET,
      cooldown: 5,
    },
    isFocused: false,
    isAlive: true,
  },

  [EnemyVariationEnum.BIG]: {
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
    ability: {
      key: "big-laser-burst",
      color: "rgba(255, 159, 50, 1)",
      isActive: false,
      name: "Laser Burst",
      size: { width: 8, height: 20 },
      typeProjectile: ProjectileEnum.LASER,
      cooldown: 8,
    },
    isFocused: false,
    isAlive: true,
  },
};
export const ENEMY_RATIOS = {
  basic: 0.5, // 50%
  normal: 0.3, // 30%
  big: 0.2, // 20%
};
