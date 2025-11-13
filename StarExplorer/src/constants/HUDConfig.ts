import { ProjectileEnum } from "../types/enums";
import {
  type PlayerHUDType,
  type ProjectileType,
} from "../types/types";
import { baseConfig } from "./baseConfig";
import { player } from "./playerConstants";

export const abilitiesConfigutation: ProjectileType[] = [
  {
    id: 1,
    key: "x1Laser",
    size: {
      width: 3,
      height: 1,
    },
    name: "Slim Laser",
    isActive: true,
    color: "#59c6fdff",
    cooldown: player.attack.attackSpeed,
    typeProjectile: ProjectileEnum.LASER,
  },
  {
    id: 2,
    key: "x2Laser",
    size: {
      width: 2,
      height: 1,
    },
    name: "Normal Laser",
    isActive: false,
    color: "#00aaff",
    cooldown: player.attack.attackSpeed,
    typeProjectile: ProjectileEnum.LASER,
  },
  {
    id: 3,
    key: "x3Laser",
    size: {
      width: 3,
      height: 1,
    },
    name: "Giant Laser",
    isActive: true,
    color: "#0066ff",
    cooldown: player.attack.attackSpeed,
    typeProjectile: ProjectileEnum.LASER,
  },
  {
    id: 4,
    key: "basicRocket",
    size: {
      width: 4,
      height: 2,
    },
    name: "Rocket",
    isActive: false,
    color: "#ff6600",
    cooldown: 3,
    typeProjectile: ProjectileEnum.ROCKET,
  },
  {
    id: 5,
    key: "heavyRocket",
    size: {
      width: 6,
      height: 3,
    },
    name: "Heavy Rocket",
    isActive: false,
    color: "#ff3300",
    cooldown: 3 * 1.5,
    typeProjectile: ProjectileEnum.ROCKET,
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
