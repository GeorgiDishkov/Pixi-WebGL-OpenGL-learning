import { EnemyVariationEnum, ProjectileEnum } from "../types/enums";

export const ENEMY_CONFIGS = {
  [EnemyVariationEnum.BASIC]: {
    speed: 1,
    size: 5,
    radius: 10,
    currentHealth: 50,
    maxHealth: 50,
    color: "rgb(200, 50, 50)",
    ability: {
      key: "basic-laser",
      isActive: false,
      name: "Laser Shot",
      typeProjectile: {
        color: "rgba(223, 255, 80, 1)",
        size: { width: 4, height: 12 },
        damage: 10,
        speed: 1.5,
        projectileKind: ProjectileEnum.LASER,
      },
      cooldown: 3,
      _cooldownTimer:0
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
    ability: {
      key: "normal-rocket",
      isActive: false,
      name: "Mini Rocket",
      typeProjectile: {
        color: "rgb(255, 180, 50)",
        size: { width: 6, height: 6 },
        damage: 15,
        speed: 1.25,
        projectileKind: ProjectileEnum.LASER,
      },
      cooldown: 5,
            _cooldownTimer:0
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
    ability: {
      key: "big-laser-burst",
      isActive: false,
      name: "Laser Burst",
      typeProjectile: {
        color: "rgba(255, 159, 50, 1)",
        size: { width: 8, height: 20 },
        damage: 20,
        speed: 1,
        projectileKind: ProjectileEnum.LASER,
      },
      cooldown: 8,
      _cooldownTimer:0
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
