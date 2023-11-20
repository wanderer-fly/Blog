function calculateFPS() {
    const now = performance.now();
    const elapsed = now - lastFrameTime;
    lastFrameTime = now;
    const fps = 1000 / elapsed;
    fpsCounter.textContent = fps.toFixed(2);

    requestAnimationFrame(calculateFPS);
}


let lastFrameTime = performance.now();
const fpsCounter = document.getElementById('fpsCounter');

// Start the FPS calculation loop
calculateFPS();