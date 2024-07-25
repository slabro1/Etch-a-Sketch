
const grid = document.querySelector("#grid")
grid.setAttribute("style", "display: flex;") 

for (let i = 0; i < 16; i++) {
    const column = document.createElement("div");
    grid.appendChild(column);
    for (let j = 0; j < 15; j++) {
        const gridItem = document.createElement("div");
        column.appendChild(gridItem);
    }
}

