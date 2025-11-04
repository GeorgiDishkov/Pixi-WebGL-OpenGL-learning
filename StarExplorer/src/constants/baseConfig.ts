import type { Camera } from "../types";

export const baseConfig = {
  camera: {
    width: 800,
    height: 800,
  },
  world: {
    width: 4000,
    height: 4000,
  },
  colors: {
    background: "#111111",
    block: "#BB0000",
    point: "#00BBFF",
  },
  enemiesCount: 200,
};

export const camera: Camera = {
  position: { x: 0, y: 0 },
};
