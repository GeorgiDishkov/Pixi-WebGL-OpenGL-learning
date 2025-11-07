import type { EnemyType, PlayerType } from "../../types"

export function findDirection(player: PlayerType, enemy: EnemyType) {
    const xDirection = player.position.x - enemy.position.x
    const yDirection = player.position.y - enemy.position.y

    return Math.hypot(xDirection, yDirection)
}

export function findEnemyNearCursor(x: number, y: number, enemies: EnemyType[]) {
    for (const enemy of enemies) {
        const dx = x - enemy.position.x
        const dy = y - enemy.position.y
        const dist = Math.hypot(dx, dy)

        if (dist <= enemy.size) {
            enemy.isFocused = true
        } else {
            enemy.isFocused = false
        }
    }
}