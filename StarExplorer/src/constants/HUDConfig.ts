import { ProjectileEnum } from "../types/enums";
import { type PlayerHUDType, type AbilityType } from "../types/types";
import { baseConfig } from "./baseConfig";
import { player } from "./playerConstants";

export const abilitiesConfigutation: AbilityType[] = [
  {
    id: 1,
    key: "x1Laser",
    isActive: true,
    name: "Slim Laser",
    cooldown: player.attack.attackSpeed,
    _cooldownTimer: 0,
    typeProjectile: {
      speed: 60,
      size: {
        width: 3,
        height: 1,
      },
      color: "#59c6fdff",
      damage: player.attack.damage,
      projectileKind: ProjectileEnum.LASER,
    },
  },
  {
    id: 2,
    key: "x2Laser",
    name: "Normal Laser",
    isActive: false,
    cooldown: player.attack.attackSpeed,
    _cooldownTimer: 0,
    typeProjectile: {
      speed: 15,
      size: {
        width: 3,
        height: 1,
      },
      color: "#59fdb9ff",
      damage: player.attack.damage * 2,
      projectileKind: ProjectileEnum.LASER,
    },
  },
  {
    id: 3,
    key: "x3Laser",
    name: "Giant Laser",
    isActive: true,
    cooldown: player.attack.attackSpeed,
    _cooldownTimer: 0,
    typeProjectile: {
      speed: 20,
      size: {
        width: 3,
        height: 1,
      },
      color: "#ff00bfff",
      damage: player.attack.damage * 3,
      projectileKind: ProjectileEnum.LASER,
    },
  },
  {
    id: 4,
    key: "basicRocket",
    name: "Rocket",
    isActive: false,
    cooldown: 3,
    _cooldownTimer: 0,
    typeProjectile: {
      speed: 5,
      size: {
        width: 3,
        height: 1,
      },
      color: "#ff6600",
      damage: player.attack.damage * 5,
      projectileKind: ProjectileEnum.ROCKET,
    },
  },
  {
    id: 5,
    key: "heavyRocket",
    name: "Heavy Rocket",
    isActive: false,
    cooldown: 3 * 1.5,
    _cooldownTimer: 0,
    typeProjectile: {
      speed: 20,
      size: {
        width: 3,
        height: 1,
      },
      color: "#ff3300",
      damage: player.attack.damage * 7,
      projectileKind: ProjectileEnum.ROCKET,
    },
  },
];

export const PlayerHUD: PlayerHUDType = {
  width: abilitiesConfigutation.length * 75 + 15,
  height: 60,
  possition: {
    x: baseConfig.camera.width / 4,
    y: baseConfig.camera.height - 100,
  },
  padding: 15,
  abilities: abilitiesConfigutation,
};
