let gridSize = 16;

const container = document.querySelector('#container');

function createGrid(){
  for (let index = 0; index < (gridSize*gridSize); index++) {
    const div = document.createElement('div');
    const divWidth = (100 / gridSize) - 0.4;

    div.style.border = '1px solid black';
    div.style.flexGrow = 1;
    div.style.flexShrink = 0;
    div.style.flexBasis = `${divWidth}%`;

    div.addEventListener('mouseenter', function() {
      this.style.backgroundColor = 'black';
    });

    container.appendChild(div);
  }
}

createGrid();