import { baseConfig, camera } from "../constants/baseConfig";
import { currentInput } from "../constants/controllersConstant";
import { PlayerHUD } from "../constants/HUDConfig";
import { player } from "../constants/playerConstants";
import { InputEnum } from "../types/enums";
import { type EnemyType, type PlayerType } from "../types/types";
import { findEnemyNearCursor } from "./warComponents/utils";

export const setupInput = () => {
  const handleKey = (pressed: boolean) => (event: KeyboardEvent) => {
    const key = event.key as InputEnum;

    if (key in currentInput) {
      currentInput[key] = pressed;
    }
  };

  window.addEventListener("keydown", handleKey(true));
  window.addEventListener("keyup", handleKey(false));

  return () => {
    window.removeEventListener("keydown", handleKey(true));
    window.removeEventListener("keyup", handleKey(false));
  };
};
export const setupHUDClick = (canvas: HTMLCanvasElement) => {
  const { possition, abilities, width, height } = PlayerHUD;
  canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // const focusedEnemy =
    if (
      mouseX >= possition.x &&
      mouseX <= possition.x + width &&
      mouseY >= possition.y &&
      mouseY <= possition.y + height
    ) {
      const abilityWidth = 75;
      const index = Math.floor((mouseX - possition.x) / abilityWidth);

      if (abilities[index]) {
        abilities.forEach((a) => (a.isActive = false));

        abilities[index].isActive = true;
      }
    }
  });
};

export const moveCharacterByInput = () => {
  const isHorizontalMovement =
    currentInput[InputEnum.Left] || currentInput[InputEnum.Right];
  const isVerticalMovement =
    currentInput[InputEnum.Up] || currentInput[InputEnum.Down];
  let speed = player.speed;
  if (isHorizontalMovement && isVerticalMovement) speed *= Math.SQRT1_2;

  if (currentInput[InputEnum.Up] || currentInput[InputEnum.ArrowUp])
    player.position.y -= player.speed;
  if (currentInput[InputEnum.Left] || currentInput[InputEnum.ArrowLeft])
    player.position.x -= player.speed;
  if (currentInput[InputEnum.Down] || currentInput[InputEnum.ArrowDown])
    player.position.y += player.speed;
  if (currentInput[InputEnum.Right] || currentInput[InputEnum.ArrowRight])
    player.position.x += player.speed;
};

export const moveCharacterRandomly = (character: PlayerType | EnemyType) => {
  const cyrcle = Math.PI * 2;
  const randomAngle = Math.random() * cyrcle;

  const randomVelocity = {
    x: Math.cos(randomAngle) * character.speed,
    y: Math.sin(randomAngle) * character.speed,
  };

  character.position.x += randomVelocity.x;
  character.position.y += randomVelocity.y;
};

export const updateCameraFollow = () => {
  camera.position.x = player.position.x;
  camera.position.y = player.position.y;

  camera.position.x -= baseConfig.camera.width * 0.5;
  camera.position.y -= baseConfig.camera.height * 0.5;
};

export function setupMouse(canvas: HTMLCanvasElement, enemies: EnemyType[]) {
  canvas.addEventListener("contextmenu", (e) => e.preventDefault());

  let isRightMouseDown = false;

  canvas.addEventListener("mousedown", (event) => {
    const worldX = event.offsetX + camera.position.x;
    const worldY = event.offsetY + camera.position.y;

    if (event.button === 2) {
      isRightMouseDown = true;
      player.isTargetMove = true;
      player.targetDestination = { x: worldX, y: worldY };
    }

    if (event.button === 0) {
      findEnemyNearCursor(worldX, worldY, enemies);
    }
  });

  canvas.addEventListener("mousemove", (event) => {
    if (!isRightMouseDown) return;

    const worldX = event.offsetX + camera.position.x;
    const worldY = event.offsetY + camera.position.y;

    player.targetDestination = { x: worldX, y: worldY };
  });

  canvas.addEventListener("mouseup", (event) => {
    if (event.button === 2) {
      isRightMouseDown = false;
      player.isTargetMove = true;
    }
  });

  canvas.addEventListener("mouseleave", () => {
    isRightMouseDown = false;
    player.isTargetMove = false;
  });
}

export function movePlayerToDestination() {
  if (!player.isTargetMove) return;

  const dx = player.targetDestination.x - player.position.x;
  const dy = player.targetDestination.y - player.position.y;
  const distance = Math.hypot(dx, dy);

  if (distance < 2) {
    player.isTargetMove = false;
    return;
  }

  const dirX = dx / distance;
  const dirY = dy / distance;

  // движение
  player.position.x += dirX * player.speed;
  player.position.y += dirY * player.speed;
}
