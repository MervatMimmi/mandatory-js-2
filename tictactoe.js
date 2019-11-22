let containers = document.querySelectorAll('.container');
let player = 'X';
let winner = false;
let winComb = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
];
startGame();

//====== select the container and add event listener for each container.=======
function startGame() {
for (var i = 0; i < containers.length; i++) {
  let container = containers[i];
  container.addEventListener('click', onClick);
  }
}
//console.log(containers.length);

/* ===================Every other click on an empty container ==================
======================should be x and every other should be an 0.=============*/
function onClick(e) {
  let container = e.target;
  if (container.innerHTML === '') {
      player = player ==='X' ? '0': 'X';
      container.innerHTML = player;
  }
  rowInLine();
}

//=============================== 3 in a row ===================================
function rowInLine() {
  let containInRow = containers;
  winComb.forEach(function(containComb){
  let positionZero = containInRow[containComb[0]].innerHTML;
  //console.log(containComb[0]);
  let positionOne = containInRow[containComb[1]].innerHTML;
  let positionTwo = containInRow[containComb[2]].innerHTML;
  //console.log(positionZero + ':' + positionOne + ':' + positionTwo); //if you want to se how many in a row
  winner = positionZero !== '' && positionZero === positionOne && positionOne === positionTwo;
  //console.log(winner); if you want to se if its true or false
    if (winner === true) {
    gameOver();
    time();
    }
  });
}

//=================== no more moves is allowed================================
function gameOver() {
    for (var i = 0; i < containers.length; i++) {
      let container = containers[i];
      container.removeEventListener('click', onClick);
    }
}

//===================== Do you want to play again =============================
function modal() {
  let modal = document.querySelector('.modal');
  modal.style.display= 'flex';
  let text = document.querySelector('.modal-popup');

  document.querySelector('.button-no').addEventListener('click', function(){
  modal.style.display='none';
  });

  let buttonYes = document.querySelector('.button-yes').addEventListener('click', function () {
    for (var i = 0; i < containers.length; i++) {
      containers[i].innerHTML = '';
      modal.style.display ='none';
    }
  startGame();
  });
}

  ///=======================setTimeout=====================
  function time() {
    setTimeout(function() {
      modal();
    },1500);
  }
