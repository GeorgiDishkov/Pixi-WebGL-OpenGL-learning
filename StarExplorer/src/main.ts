import {
  moveCharacterByInput,
  moveCharacterRandomly,
  movePlayerToDestination,
  setupHUDClick,
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
import {
  renderProjectiles,
  startProjectileLoop,
  stopProjectileLoop,
  updateProjectiles,
} from "./components/warComponents/projectile/projectile";
import { abilitiesConfigutation } from "./constants/HUDConfig";
import { player } from "./constants/playerConstants";
import { updateHUD } from "./updates/updateHUD";
import { updateInputState } from "./utils/helpers";

const canvas = document.getElementById("canvas-app") as HTMLCanvasElement;

export const main = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) throw "Cannot get 2D context";
  const enemies = generateEnemies();
  setupInput();
  setupHUDClick(canvas);

  setInterval(() => {
    const activeAbility = abilitiesConfigutation.find((a) => a.isActive);
    if (activeAbility) {
      startProjectileLoop(activeAbility);
    } else {
      stopProjectileLoop();
    }
  }, 200);

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

    //updates
    setupMouse(canvas, enemies);
    movePlayerToDestination();
    updateCameraFollow();
    updateHUD();

    // render
    updateProjectiles();
    renderCharacter(context, player);
    renderProjectiles(context);
    renderAbilityHUD(context);

    updateInputState();

    requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};

main(canvas);
