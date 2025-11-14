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
  projectileStack,
  renderBackground,
  setupContext,
} from "./components/setup";
import { player } from "./constants/playerConstants";
import { checkForActiveAbilities } from "./updates/checkForActiveAbilities";
import { updateHUD } from "./updates/updateHUD";
import { updateProjectiles } from "./updates/updateProjectiles";
import { updateInputState } from "./utils/helpers";

let lastTimestamp = 0;

const canvas = document.getElementById("canvas-app") as HTMLCanvasElement;

export const main = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) throw "Cannot get 2D context";
  // pregenerate prijectiles
  generateProjectiles();
  console.log("generated projectiles", projectileStack);

  // pregenerate enemies
  generateEnemies();
  console.log("generated enemies", enemiesStack);

  setupInput();
  setupHUDClick(canvas);

  // setInterval(() => {
  //   const activeAbility = abilitiesConfigutation.find((a) => a.isActive);
  //   if (activeAbility) {
  //     startProjectileLoop(activeAbility);
  //   } else {
  //     stopProjectileLoop();
  //   }
  // }, 200);

  // TODO: Separete main in 3 type of operations/functions (setup , update and draw/render)

  const animation = (timestamp: number) => {
    if (!lastTimestamp) lastTimestamp = timestamp;

    const deltaTime = (timestamp - lastTimestamp) / 1000; // в секунди
    lastTimestamp = timestamp;

    // render on every frame
    const context = setupContext(canvas);
    renderBackground(context);
    setupMouse(canvas, enemiesStack);
    movePlayerToDestination();

    // render enemies

    // targetEnemy(enemies)

    //updates
    updateCameraFollow();
    updateHUD();
    updateInputState();
    checkForActiveAbilities(deltaTime);
    updateProjectiles(context, deltaTime);

    // render
    // updateProjectiles();
    // renderProjectiles(context);
    for (const enemy of enemiesStack) {
      // moveCharacterRandomly(enemy);
      renderCharacter(context, enemy);
    }

    renderCharacter(context, player);
    renderAbilityHUD(context);
    requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};

main(canvas);
