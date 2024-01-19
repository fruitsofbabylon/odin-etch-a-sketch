const container = document.createElement('div');
document.body.appendChild(container);
container.classList.add('container');

function createGrid(gridNum) {
    for (let i = 1; i <= gridNum * gridNum; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.cssText = 'flex-basis: ' + 100 / gridNum + '%;';
        container.appendChild(square);
    }
    fillSquares();
}

createGrid(16);
document.body.appendChild(container);

const btn = document.createElement('button');
btn.textContent = 'Change Grid'
document.body.append(btn);

btn.addEventListener('click', () => {
    let newGridNum = prompt('Please enter a number of squares per side for the new grid');
    if (parseInt(newGridNum, 10) && newGridNum <= 100 && newGridNum > 0) {
        container.replaceChildren();
        createGrid(newGridNum);
    } else {
        alert('Please use any positive number less than 100');
    }
});

function fillSquares() {
    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.classList.add('color');
        });
    });
};