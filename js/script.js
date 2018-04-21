///		veriables


// getting html elements value
var 
	newGameBtn = document.getElementById('js-newGameButton'),
	pickRock = document.getElementById('js-playerPick_rock'),
	pickPaper = document.getElementById('js-playerPick_paper'),
	pickScissors = document.getElementById('js-playerPick_scissors');


// declaration player and computer veriables

var 
	gameState = 'notStarted',  //started // ended //notStarted
    player = {
        name: '',
        score: 10
    },
    computer = {
        score: 0
    };

console.log('czytam punkty z obiektu ' + player.score);
player.score++;
console.log('czytam punkty z obiektu ' + player.score);


// game containers
var 
	newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');


//	computer points and player points and name displayed in score table
var 
	playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');



// player and computer choice and resoult
var 
	playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');



//			FUNCTIONS

console.log(gameState);
console.log(pickElem);
//playerPointsElem.innerHTML = 'kikiki';
console.log(playerPointsElem);

// seting up points
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

// new game function - starting new game
function newGame() {
  player.name = prompt('Please enter your name', 'imię gracza');
  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();

    playerNameElem.innerHTML = player.name;
    setGamePoints(); 
  }
}

// game state function
function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
      break;
    case 'ended':
        newGameBtn.innerText = 'Jeszcze raz';
    case 'notStarted':
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
  }
}


// generating a computer choice
function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];  // generate a number 0-2
}

// puting in the html code the player and the computer choices
// calling getCOmputerPick function
//calling checkRound function
function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    checkRoundWinner(playerPick, computerPick);
}

// checking who wins
function checkRoundWinner(playerPick, computerPick) {
	console.log('punkty gracza z wewnatrz funkcji' + player.score);

  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'none'; // remis
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {

        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Winkkkkk!";
        //document.write('wygrywa gracz');
        player.score++;
        console.log('punkty gracza w funkcji' + player.score);
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Winuuuuu!";
        computer.score++;
    } else {
    	computerResultElem.innerHTML = playerResultElem.innerHTML = "Draw";
    }
    setGamePoints(); 
    finishGame(); 
}

console.log('punkty gracza po funkcji' + player.score);
console.log('punkty komputera' + computer.score);

// seting up points
function setGamePoints() {
	console.log('punkty playera z funkcji setGamePoints' + player.score)
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

//finishing the game

function finishGame(){
	var wygrywa = player.name;
	if (player.score == 3 || computer.score == 3){
		if (computer.score > player.score){
			wygrywa = 'Komputer';
		}
		alert('koniec gry. Wygrywa ' + wygrywa);
		gameState = 'ended';
		setGameElements()
	}
}


// 		BUTTONS

// listening of a start button
newGameBtn.addEventListener('click', newGame);

// listening of weapon buttons and start function
pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });


setGameElements();
//setGamePoints();

console.log('playerma punktuw' + playerPointsElem.innerHTML);