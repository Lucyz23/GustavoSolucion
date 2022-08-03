let currentColor = 'black';

function populatePixelBoard(size) {
  const board = document.getElementById('pixel-board');
  board.style.setProperty('--size', size);
  var fc = board.firstChild;

  while( fc ) {
        board.removeChild(fc);
        fc = board.firstChild;
  }

  for (let i = 0; i < size * size; i ++) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.innertHtml = '&nbsp;';
    pixel.style.backgroundColor = 'white';
    pixel.addEventListener('click', function(e) {
      pixel.style.backgroundColor = currentColor;
    });

    board.appendChild(pixel);
  }
}

function selectColor(e) {
  document.querySelectorAll('.color').forEach(function(el) {
    el.target.classList.remove('selected');
  });

  e.target.classList.add('selected');
  currentColor = e.target.style.backgroundColor;
}

const size = document.getElementById('size-board').value;
populatePixelBoard(size);

document.getElementById('clear-board').addEventListener('click', function (e) { populatePixelBoard(document.getElementById('size-board').value); } );
document.getElementById('size-board').addEventListener('change', function (e) { populatePixelBoard(e.target.value); } );
