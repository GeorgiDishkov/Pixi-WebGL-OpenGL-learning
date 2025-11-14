import {
  // moveCharacterByInput,
  // moveCharacterRandomly,
  movePlayerToDestination,
  setupHUDClick,
  setupInput,
  setupMouse,
  updateCameraFollow,
} from "./components/controlls";
import { renderAbilityHUD, renderCharacter } from "./components/render";
import {
  enemiesStack,
  generateEnemies,
  generateProjectiles,
  renderBackground,
  setupContext,
} from "./components/setup";
import { player } from "./constants/playerConstants";
import { renderProjectiles } from "./render/renderProjectiles";
import { checkForActiveAbilities } from "./updates/checkForActiveAbilities";
import { updateHUD } from "./updates/updateHUD";
import { updateProjectilesLogic } from "./updates/updateProjectiles";
import { updateInputState } from "./utils/helpers";

let lastTimestamp = 0;

const canvas = document.getElementById("canvas-app") as HTMLCanvasElement;

function setupGame(canvas: HTMLCanvasElement) {
  generateProjectiles();
  generateEnemies();
  setupInput();
  setupHUDClick(canvas);
  setupMouse(canvas, enemiesStack);
}

function render(context: CanvasRenderingContext2D) {
  renderBackground(context);
  movePlayerToDestination();
  renderProjectiles(context);
  for (const enemy of enemiesStack) {
    // moveCharacterRandomly(enemy);
    renderCharacter(context, enemy);
  }

  renderCharacter(context, player);
}

function renderUI(context: CanvasRenderingContext2D) {
  renderAbilityHUD(context);
}

function update(deltaTime: number) {
  updateCameraFollow();
  updateHUD();
  updateInputState();
  checkForActiveAbilities(deltaTime);
  updateProjectilesLogic(deltaTime);
}

export const main = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) throw "Cannot get 2D context";
  setupGame(canvas);

  const animation = (timestamp: number) => {
    if (!lastTimestamp) lastTimestamp = timestamp;

    const deltaTime = (timestamp - lastTimestamp) / 1000; // в секунди
    lastTimestamp = timestamp;

    const context = setupContext(canvas);

    update(deltaTime);

    render(context);

    renderUI(context);

    requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};

main(canvas);
