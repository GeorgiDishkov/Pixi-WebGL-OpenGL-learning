import { projectileStack } from "../components/setup";
import { camera } from "../constants/baseConfig";

export function renderProjectiles(ctx: CanvasRenderingContext2D) {
  projectileStack.forEach((p) => {
    if (!p.isFlying) return;

    // --- Render с camera трансформация ---
    const screenX = p.x - camera.position.x;
    const screenY = p.y - camera.position.y;

    ctx.fillStyle = p.type.color;
    ctx.fillRect(screenX, screenY, p.type.size.width, p.type.size.height);
  });
}
