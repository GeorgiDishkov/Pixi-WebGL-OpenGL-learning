import type { Player } from "../types";
import { baseConfig } from "./baseConfig";

export const player: Player = {
  position: { x: 0, y: 0 },
  speed: 2,
  color: baseConfig.colors.point,
  size: 15,
  radius: 200,
};
