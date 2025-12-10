const container = document.getElementById("grid-container");
const resizeBtn = document.getElementById("resize-btn");
const DEFAULT_SIZE = 16;
const MAX_SIZE = 100;
const CONTAINER_SIZE = 960;

function createGrid(size) {
  container.innerHTML = "";
  const squareSize = CONTAINER_SIZE / size;
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.addEventListener("mouseenter", () => {
      square.classList.add("hovered");
    });
    square.addEventListener("mouseleave", () => {
      square.classList.remove("hovered");
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
