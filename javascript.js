let gridSize = 16;

const container = document.querySelector('#container');

function resetGrid() {
  container.replaceChildren();

  gridSize = prompt('How many blocks per row do you want (max. 100)');

  if(gridSize > 100) {
    gridSize = 100;
  }

  createGrid();
}

function createGrid(){
  for (let index = 0; index < (gridSize*gridSize); index++) {
    const div = document.createElement('div');
    const divWidth = (600 / gridSize) - 1.6;

    div.style.border = '1px solid black';
    div.style.flexGrow = 1;
    div.style.flexShrink = 0;
    div.style.flexBasis = `${divWidth}px`;

    div.addEventListener('mouseenter', function() {
      const red = Math.floor(255 * Math.random());
      const green = Math.floor(255 * Math.random());
      const blue = Math.floor(255 * Math.random());
      this.style.backgroundColor = `rgb(${red},${green},${blue})`;
    });

    container.appendChild(div);
  }
}

createGrid();