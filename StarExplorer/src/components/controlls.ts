import { baseConfig, camera } from "../constants/baseConfig";
import { currentInput, KeyMap } from "../constants/controllersConstant";
import { player } from "../constants/playerConstants";
import { Input, type EnemyType, type PlayerType, type Vector2 } from "../types";
import { findEnemyNearCursor } from "./warComponents/utils";




export const setupInput = () => {
  const handleKey = (pressed: boolean) => (event: KeyboardEvent) => {
    const input = KeyMap[event.key];
    if (input) currentInput[input] = pressed;
  };

  window.addEventListener("keydown", handleKey(true));
  window.addEventListener("keyup", handleKey(false));
};

export const moveCharacterByInput = () => {
  const isHorizontalMovement =
    currentInput[Input.Left] || currentInput[Input.Right];
  const isVerticalMovement = currentInput[Input.Up] || currentInput[Input.Down];
  let speed = player.speed;
  if (isHorizontalMovement && isVerticalMovement) speed *= Math.SQRT1_2;

  if (currentInput[Input.Up] || currentInput[Input.ArrowUp])
    player.position.y -= player.speed;
  if (currentInput[Input.Left] || currentInput[Input.ArrowLeft])
    player.position.x -= player.speed;
  if (currentInput[Input.Down] || currentInput[Input.ArrowDown])
    player.position.y += player.speed;
  if (currentInput[Input.Right] || currentInput[Input.ArrowRight])
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
  canvas.addEventListener("contextmenu", (e) => e.preventDefault()); // спираме контекстното меню

  canvas.addEventListener("mousedown", (event) => {
    // Преобразуваме координатите на екрана в координати на света
    const worldX = event.offsetX + camera.position.x;
    const worldY = event.offsetY + camera.position.y;



    if (event.button === 2) {
      // десен бутон → движение
      player.isTargetMove = true
      player.targetDestination = { x: worldX, y: worldY };
    }

    if (event.button === 0) {
      // ляв бутон → фокус върху враг
      findEnemyNearCursor(worldX, worldY, enemies);
    }
  });
}


export function movePlayerToTarget() {
  if (!player.isTargetMove) return;

  const dx = player.targetDestination.x - player.position.x;
  const dy = player.targetDestination.y - player.position.y;
  const distance = Math.hypot(dx, dy);

  if (distance < 2) {
    // достатъчно близо → спираме
    player.isTargetMove = false;
    return;
  }

  // нормализирана посока
  const dirX = dx / distance;
  const dirY = dy / distance;

  // движение
  player.position.x += dirX * player.speed;
  player.position.y += dirY * player.speed;
}