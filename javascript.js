// Add DOM elements inside a div container to create a square of as many boxes as the user inputs using prompt
const container = document.querySelector(".container");

const btn = document.querySelector(".button");
const createBtn = document.createElement("button");
btn.appendChild(createBtn);
createBtn.textContent = "Click to Create";


function getGridSize() {
    let gridSize;
    while (true) {
        gridSize = Number(prompt("What size board do you want (1-100)"));

        if (gridSize > 0 && gridSize <= 100) {
            return gridSize;
        } 
        
    }
    
}

function createAGrid(N) {
    container.innerHTML = "";
    for (let i = 0; i < N; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        container.appendChild(rowDiv);
        for (let j = 0; j < N; j++) {
            const colDiv = document.createElement("div");
            colDiv.classList.add("column");
            rowDiv.appendChild(colDiv);
        }
        
    }
};

createBtn.addEventListener("click", () => {
    createAGrid(getGridSize());
});



container.addEventListener("mouseover", (e) => {
    if (!e.target.classList.contains("column")) return;

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    e.target.style.backgroundColor = `rgb(${r},${g},${b})`; 
}) 

