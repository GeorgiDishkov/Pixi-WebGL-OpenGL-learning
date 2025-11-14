import { enemiesStack, projectileStack } from "../components/setup";
import { camera } from "../constants/baseConfig";
import { player } from "../constants/playerConstants";

export function updateProjectilesLogic(deltaTime: number) {
  projectileStack.forEach((p) => {
    if (!p.isFlying) return;

    const targetEnemy = enemiesStack.find((e) => e.id === p.enemyId);

    // Ако projectile е fired от player и има target
    if (p.isFiredFromPlayer && targetEnemy) {
      const dx = targetEnemy.position.x - p.x;
      const dy = targetEnemy.position.y - p.y;
      const distance = Math.hypot(dx, dy);

      if (distance < 1) {
        // Hit
        targetEnemy.currentHealth -= p.type.damage;
        p.isFlying = false;
        p.enemyId = undefined;
        console.log("Hit enemy!");
        return;
      }

      // Нормализиране на вектора и движение
      const dirX = dx / distance;
      const dirY = dy / distance;

      p.x += dirX * p.type.speed * deltaTime;
      p.y += dirY * p.type.speed * deltaTime;
    } else if (!p.isFiredFromPlayer) {
      // Projectile към player
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
