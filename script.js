const boxesContainer = document.getElementById("boxes");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => boxesContainer.classList.toggle("big"));

function createBoxes() {
  for (let i = 0; i < 4; i++) //so this controls the number of boxes columns 
  {
    for (let j = 0; j < 4; j++) //so this controls the number of boxes rows
    {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`; //so this controls the position of the boxes
      boxesContainer.appendChild(box);
    }
  }
}

createBoxes();
