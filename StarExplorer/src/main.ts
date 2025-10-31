import { baseConfig } from "./constants/baseConfig";

const canvas = document.getElementById("canvas-app") as HTMLCanvasElement;

const setupContext = (canvas: HTMLCanvasElement) => {
  canvas.width = baseConfig.camera.width;
  canvas.height = baseConfig.camera.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw "Cannot get 2D context";
  return ctx;
};

const renderBackground = (ctx: CanvasRenderingContext2D) => {
  ctx.fillStyle = baseConfig.colors.background;
  ctx.fillRect(0, 0, baseConfig.camera.width, baseConfig.camera.height);
};

export const main = (canvas: HTMLCanvasElement) => {
  const ctx = setupContext(canvas);
  let cameraX = 0;
  let cameraY = 0;
  const cameraSpeed = 10;

  const player = {
    x: baseConfig.camera.width / 2,
    y: baseConfig.camera.height / 2,
    w: 20,
    h: 30,
  };

  const points = Array.from({ length: 100 }, () => ({
    x: Math.random() * baseConfig.world.width,
    y: Math.random() * baseConfig.world.height,
    r: 6,
  }));

  const keys = new Set<string>();
  window.addEventListener("keydown", (e) => keys.add(e.key));
  window.addEventListener("keyup", (e) => keys.delete(e.key));

  const update = () => {
    // key movements
    if (keys.has("ArrowUp")) cameraY -= cameraSpeed;
    if (keys.has("ArrowDown")) cameraY += cameraSpeed;
    if (keys.has("ArrowLeft")) cameraX -= cameraSpeed;
    if (keys.has("ArrowRight")) cameraX += cameraSpeed;

    cameraX = Math.max(
      0,
      Math.min(cameraX, baseConfig.world.width - baseConfig.camera.width)
    );
    cameraY = Math.max(
      0,
      Math.min(cameraY, baseConfig.world.height - baseConfig.camera.height)
    );
  };

  const render = () => {
    renderBackground(ctx);

    ctx.fillStyle = baseConfig.colors.point;
    for (const point of points) {
      if (
        point.x > cameraX - point.r && // check if point is visible on a left side of player view
        point.x < cameraX + baseConfig.camera.width + point.r && // check if point is visible on a right side of player view
        point.y > cameraY - point.r && // check if point is visible on a top side of player view
        point.y < cameraY + baseConfig.camera.height + point.r // check if point is visible on a bottom side of player view
      ) {
        const screenX = point.x - cameraX; // take a real X coordinates in players view
        const screenY = point.y - cameraY; // take a real Y coordinates in players view
        ctx.beginPath();
        ctx.arc(screenX, screenY, point.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    ctx.fillStyle = baseConfig.colors.block;
    ctx.fillRect(
      player.x - player.w / 2,
      player.y - player.h / 2,
      player.w,
      player.h
    );

    ctx.font = "30px Arial red";
    ctx.fillText(`X - ${cameraX}`, 20, 25);
    ctx.fillText(`Y - ${cameraY}`, 20, 50);
  };

  const loop = () => {
    update();
    render();
    requestAnimationFrame(loop);
  };

  requestAnimationFrame(loop);
};

main(canvas);
