import { baseConfig, camera } from "../constants/baseConfig";
import { player } from "../constants/playerConstants";
import type { Enemy } from "../types";

export const setupContext = (canvas: HTMLCanvasElement) => {
  canvas.width = baseConfig.camera.width;
  canvas.height = baseConfig.camera.height;

  const ctx = canvas.getContext("2d");
  if (!ctx) throw "Cannot get 2D context";
  return ctx;
};

export const renderBackground = (context: CanvasRenderingContext2D) => {
  context.fillStyle = baseConfig.colors.background;
  context.fillRect(0, 0, baseConfig.camera.width, baseConfig.camera.height);

  context.font = "16px serif ";
  context.fillStyle = "green";
  context.fillText(`player - x: ${player.position.x}`, 20, 25);
  context.fillText(`player - y: ${player.position.y}`, 20, 50);
  context.fillText(`camera - x: ${camera.position.x}`, 20, 75);
  context.fillText(`camera - y: ${camera.position.y}`, 20, 100);
};

export const generateEnemies = () => {
  const enemies: Enemy[] = [];

  for (let i = 0; i < baseConfig.enemiesCount; i++) {
    const newEnemy: Enemy = {
      position: {
        x: -1000 + Math.random() * 2000,
        y: -1000 + Math.random() * 2000,
      },
      speed: 1,
      size: 5 + Math.random() * 10,
      color: `rgb(${100 + Math.random() * 155}, 10, 10)`,
      radius: Math.random() * (20 - 10) + 20,
    };

    enemies.push(newEnemy);
  }

  return enemies;
};
