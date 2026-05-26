// Add DOM elements inside a div container to create a square of as many boxes as the user inputs using prompt
const container = document.querySelector(".container");

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

createAGrid(45)

const cells = document.querySelectorAll(".column");

cells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        cell.style.backgroundColor = `rgb(${r},${g},${b})`;
    })
});