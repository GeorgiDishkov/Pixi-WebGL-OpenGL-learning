import { ENEMY_CONFIGS } from "../../constants/enemysConfig";
import { player } from "../../constants/playerConstants";
import type { EnemyType } from "../../types/types";

export function targetEnemy(enemies: EnemyType[]) {
  let closestEnemy = null;
  let closestDistance = Infinity;

  for (const enemy of enemies) {
    const xDirection = player.position.x - enemy.position.x;
    const yDirection = player.position.y - enemy.position.y;

    const distance = Math.hypot(xDirection, yDirection);

    if (distance < closestDistance) {
      if (closestEnemy) {
        closestEnemy.isFocused = false;
        closestEnemy.color = ENEMY_CONFIGS[closestEnemy.type].color;
      }

      closestDistance = distance;
      closestEnemy = enemy;
      closestEnemy.isFocused = true;
      closestEnemy.color = "blue";
    } else {
      enemy.color = ENEMY_CONFIGS[enemy.type].color;
    }
  }
}
