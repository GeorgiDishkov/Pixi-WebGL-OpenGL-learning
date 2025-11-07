import { camera } from "../constants/baseConfig";
import { PlayerHUD } from "../constants/HUDConfig";
import type { EnemyType, PlayerType } from "../types";

export const renderCharacter = (
  context: CanvasRenderingContext2D,
  character: PlayerType | EnemyType
) => {
  const halfSize = character.size * 0.5;

  const x = character.position.x - halfSize;
  const y = character.position.y - halfSize;
  const size = character.size;
  const radius = character.radius;
  const isFocused = character?.isFocused || false

  const xCameraDifference = x - camera.position.x;
  const yCameraDifference = y - camera.position.y;

  context.fillStyle = isFocused ? "green" : character.color;
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

export function renderAbilityHUD(context: CanvasRenderingContext2D) {

  const hudX = PlayerHUD.possition.x
  const hudY = PlayerHUD.possition.y
  const width = PlayerHUD.width
  const height = PlayerHUD.height
  const padding = PlayerHUD.padding


  context.fillStyle = "rgba(83, 189, 250, 0.23)";
  context.fillRect(hudX, hudY, width, height);

  PlayerHUD.abilities.forEach((ability, i) => {

    const abilityWidth = 60
    const abilityHeight = 40

    const x = hudX + padding + i * (abilityWidth + padding);
    const y = hudY + (height - abilityHeight) / 2;

    context.strokeStyle = ability.isActive ? "#fff" : "#666";
    context.lineWidth = ability.isActive ? 3 : 1;
    context.strokeRect(x, y, abilityWidth, abilityHeight);

    context.fillStyle = ability.color;
    context.globalAlpha = ability.isActive ? 1 : 0.6;
    context.fillRect(x, y, abilityWidth, abilityHeight);
    context.globalAlpha = 1;

    if (ability.cooldown > 0) {
      context.fillStyle = "rgba(0,0,0,0.6)";
      context.fillRect(x, y, abilityWidth, abilityHeight);

      context.fillStyle = "#fff";
      context.font = "14px Arial";
      context.textAlign = "center";
      context.fillText(
        ability.cooldown.toFixed(0),
        x + abilityWidth / 2,
        y + abilityHeight / 1.6
      );
    }

    // име на умението (по-долу)
    context.fillStyle = "#ddd";
    context.font = "10px Arial";
    context.textAlign = "center";
    context.fillText(ability.name, x + abilityHeight / 2, y + abilityWidth + 12);
  });
}