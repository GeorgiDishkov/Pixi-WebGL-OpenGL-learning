import { enemiesStack, spawnProjectile } from "../components/setup";
import { PlayerHUD } from "../constants/HUDConfig";
import { player } from "../constants/playerConstants";

export function checkForActiveAbilities(deltaTime: number) {
  const { abilities } = PlayerHUD;
  const activeAbility = abilities.find((ability) => ability.isActive);
  if (!activeAbility) return;

  if (activeAbility._cooldownTimer > 0) {
    activeAbility._cooldownTimer -= deltaTime;
    return; // още не може да стреля
  }

  const focusedEnemy = enemiesStack.find((enemy) => enemy.isFocused);
  if (!focusedEnemy) {
    return;
  }

  const xDirection = player.position.x - focusedEnemy.position.x;
  const yDirection = player.position.y - focusedEnemy.position.y;

  const distance = Math.hypot(xDirection, yDirection);

  if (distance > player.radius) {
    return;
  }
  activeAbility._cooldownTimer -= deltaTime;

  spawnProjectile({
    x: player.position.x,
    y: player.position.y,
    type: activeAbility.typeProjectile,
    cooldown: activeAbility.cooldown,
    enemyId: focusedEnemy.id,
    isFiredFromPlayer: true,
  });
  activeAbility._cooldownTimer = activeAbility.cooldown;
}
