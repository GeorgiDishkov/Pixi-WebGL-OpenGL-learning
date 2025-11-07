import {
  moveCharacterByInput,
  moveCharacterRandomly,
  movePlayerToDestination,
  setupInput,
  setupMouse,
  updateCameraFollow,
} from "./components/controlls";
import { renderAbilityHUD, renderCharacter } from "./components/render";
import {
  generateEnemies,
  renderBackground,
  setupContext,
} from "./components/setup";
import { player } from "./constants/playerConstants";


const canvas = document.getElementById("canvas-app") as HTMLCanvasElement;

export const main = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) throw "Cannot get 2D context";
  const enemies = generateEnemies();
  setupInput();
  const animation = () => {
    // render on every frame
    const context = setupContext(canvas);
    renderBackground(context);

    // render enemies
    for (const enemy of enemies) {
      // moveCharacterRandomly(enemy);
      renderCharacter(context, enemy);
    }

    // targetEnemy(enemies)


    // controllers update
    setupMouse(canvas, enemies)
    movePlayerToDestination()
    updateCameraFollow();
    // moveCharacterByInput();

    // render player
    renderCharacter(context, player);

    //render HUD
    renderAbilityHUD(context)

    requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};

main(canvas);
