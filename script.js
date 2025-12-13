const container = document.getElementById("grid-container");
const resizeBtn = document.getElementById("resize-btn");
const DEFAULT_SIZE = 16;
const MAX_SIZE = 100;
const CONTAINER_SIZE = 960;

let isMouseDown = false;

// Track mouse state globally on the document
document.addEventListener("mousedown", () => {
  isMouseDown = true;
});
document.addEventListener("mouseup", () => {
  isMouseDown = false;
});

function createGrid(size) {
  container.innerHTML = "";
  const squareSize = CONTAINER_SIZE / size;
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    // Change background on mousedown or mouseenter while mouse is down
    square.addEventListener("mousedown", () => {
      square.classList.add("hovered");
    });
    square.addEventListener("mouseenter", () => {
      if (isMouseDown) {
        square.classList.add("hovered");
      }
    });
    container.appendChild(square);
  }
}

resizeBtn.addEventListener("click", () => {
  let newSize = prompt(`Enter grid size (max ${MAX_SIZE}):`, DEFAULT_SIZE);
  newSize = parseInt(newSize);
  if (isNaN(newSize) || newSize < 1 || newSize > MAX_SIZE) {
    alert("Invalid size");
    return;
  }
  createGrid(newSize);
});
createGrid(DEFAULT_SIZE);
