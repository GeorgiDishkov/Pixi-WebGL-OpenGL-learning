import { camera } from "../constants/baseConfig";
import type { Enemy, Player } from "../types";

export const renderCharacter = (
  context: CanvasRenderingContext2D,
  character: Player | Enemy
) => {
  const halfSize = character.size * 0.5;

  const x = character.position.x - halfSize;
  const y = character.position.y - halfSize;
  const size = character.size;
  const radius = character.radius;

  const xCameraDifference = x - camera.position.x;
  const yCameraDifference = y - camera.position.y;

  context.fillStyle = character.color;
  context.fillRect(xCameraDifference, yCameraDifference, size, size);

  context.beginPath();
  context.arc(
    xCameraDifference + halfSize,
    yCameraDifference + halfSize,
    radius,
    0,
    Math.PI * 2
  );
  context.fillStyle = "rgba(0, 0, 255, 0.1)";
  context.fill();
};
