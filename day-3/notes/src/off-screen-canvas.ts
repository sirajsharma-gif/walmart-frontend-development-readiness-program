const worker = new Worker(new URL("./worker.ts", import.meta.url), {
  type: "module",
  name: "offscreen-canvas-worker",
  credentials: "same-origin",
});

const canvas = document.getElementById(
  "main-canvas",
) as HTMLCanvasElement | null;

if (!canvas) {
  throw new Error("Canvas element not found");
}

const offscreen = canvas.transferControlToOffscreen();

worker.onmessage = (event) => {
  console.log("Message from worker: ", event);
};

worker.postMessage({ canvas: offscreen }, [offscreen]);

const freezeButtonElement = document.getElementById(
  "freeze-btn",
) as HTMLButtonElement | null;

if (!freezeButtonElement) {
  throw new Error("Freeze button element not found");
}

let count = 0;
freezeButtonElement.addEventListener("click", () => {
  while (count < 100000000000) {
    count++;
  }

  const countElement = document.getElementById("count");
  if (countElement) {
    countElement.textContent = `Count: ${count}`;
  }
});
