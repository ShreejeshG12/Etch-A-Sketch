// Add DOM elements inside a div container to create a square of as many boxes as the user inputs using prompt
const container = document.querySelector(".container");

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

createAGrid(16)

const cells = document.querySelectorAll(".column");

cells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "navy";
    })
})