function makeGrid() {
    const container = document.createElement('div');
    document.body.appendChild(container);
    container.classList.add("container");

    for (let i = 1; i <= 256; i++) {
        const square = document.createElement('div');
        square.classList.add("square");
        container.appendChild(square);
    }
};

makeGrid();