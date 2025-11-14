import { enemiesStack, projectileStack } from "../components/setup";
import { player } from "../constants/playerConstants";

export function updateProjectilesLogic(deltaTime: number) {
  projectileStack.forEach((p) => {
    if (!p.isFlying) return;

    const targetEnemy = enemiesStack.find((e) => e.id === p.enemyId);

    if (p.isFiredFromPlayer && targetEnemy) {
      const dx = targetEnemy.position.x - p.x;
      const dy = targetEnemy.position.y - p.y;
      const distance = Math.hypot(dx, dy);

      if (distance < 1) {
        targetEnemy.currentHealth -= p.type.damage;
        p.isFlying = false;
        p.enemyId = undefined;
        console.log("Hit enemy!");
        return;
      }

      const dirX = dx / distance;
      const dirY = dy / distance;

      p.x += dirX * p.type.speed * deltaTime;
      p.y += dirY * p.type.speed * deltaTime;
    } else if (!p.isFiredFromPlayer) {
      const dx = player.position.x - p.x;
      const dy = player.position.y - p.y;
      const distance = Math.hypot(dx, dy);

      if (distance < 1) {
        player.currentHealth -= p.type.damage;
        p.isFlying = false;
        p.enemyId = undefined;
        console.log("Hit player!");
        return;
      }

      const dirX = dx / distance;
      const dirY = dy / distance;

      p.x += dirX * p.type.speed * deltaTime;
      p.y += dirY * p.type.speed * deltaTime;
    }
  });
}
