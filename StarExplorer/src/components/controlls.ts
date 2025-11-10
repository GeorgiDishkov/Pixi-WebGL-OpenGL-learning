import { baseConfig, camera } from "../constants/baseConfig";
import { currentInput, KeyMap } from "../constants/controllersConstant";
import { PlayerHUD } from "../constants/HUDConfig";
import { player } from "../constants/playerConstants";
import { Input, type EnemyType, type PlayerType, type Vector2 } from "../types";
import { findEnemyNearCursor } from "./warComponents/utils";

export const setupInput = () => {
  const handleKey = (pressed: boolean) => (event: KeyboardEvent) => {
    const key = event.key as Input;

    console.log("key", key);

    // Само ако клавишът съществува в нашия enum
    if (key in currentInput) {
      currentInput[key] = pressed;
    }

    console.log("Pressed:", key, "=>", pressed);
  };

  window.addEventListener("keydown", handleKey(true));
  window.addEventListener("keyup", handleKey(false));

  // 💡 По-добра практика: да върнеш cleanup функция
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

    // Проверяваме дали сме кликнали вътре в HUD-а
    if (
      mouseX >= possition.x &&
      mouseX <= possition.x + width &&
      mouseY >= possition.y &&
      mouseY <= possition.y + height
    ) {
      console.log("triggered");
      const abilityWidth = 75;
      const index = Math.floor((mouseX - possition.x) / abilityWidth);

      if (abilities[index]) {
        // Деактивираме всички останали
        abilities.forEach((a) => (a.isActive = false));

        // Активираме избраната
        abilities[index].isActive = true;

        console.log(`Selected ability: ${abilities[index].name}`);
      }
    }
  });
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
