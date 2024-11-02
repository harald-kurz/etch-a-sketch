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
      this.style.backgroundColor = 'black';
    });

    container.appendChild(div);
  }
}

createGrid();