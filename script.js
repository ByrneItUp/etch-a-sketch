const container = document.querySelector('.container');
let blockNumber = 16;
let userChoice;
let divs;

function createGrid (blockNumber) {
  let n = Math.sqrt(blockNumber);
  container.style.setProperty('grid-template', `repeat(${n}, 1fr) / repeat(${n}, 1fr)`);
  for (let i=1; i<=blockNumber; i++) {
    let div = document.createElement('div');
    div.id = 'jsBlock' + i;
    div.className = 'square';
    container.appendChild(div);
  }
  divs = document.querySelectorAll('.square');
  divs.forEach(div => div.addEventListener('mouseover', changeColor));
}

createGrid(blockNumber);

function changeColor(e) {
  this.style.backgroundColor = '#'+Math.floor(Math.random() * 10000);
}


const clearBtn = document.querySelector('button[name="clearBtn"]');
clearBtn.addEventListener('click', startAgain);

function startAgain (e) {
  for (let i=0; i<divs.length; i++) {
    divs[i].style.backgroundColor = 'inherit';
  }
  userChoice = prompt('How many squares wide would you like your new drawing pad to be?', 'eg, 10');
  blockNumber = userChoice * userChoice;
  container.innerHTML = '';
  createGrid(blockNumber);
}
