import type { PlayerType } from "../types";
import { baseConfig } from "./baseConfig";

export const player: PlayerType = {
  position: { x: 0, y: 0 },
  speed: 2,
  color: baseConfig.colors.point,
  size: 15,
  radius: 200,
  currentHealth: 300,
  maxHealth: 300,
  attack: {
    damage: 5,
    attackSpeed: 0.7
  },
  isTargetMove: false,
  targetDestination: { x: 0, y: 0 }
};
