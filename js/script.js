///		veriables


// getting html elements value
var 
	newGameBtn = document.getElementById('js-newGameButton'),
	pickRock = document.getElementById('js-playerPick_rock'),
	pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors'),
    pickLizard = document.getElementById('js-playerPick_lizard'),
	pickSpock = document.getElementById('js-playerPick_spock');

// getting a chosen character
var
    playAsHoward = document.getElementById('js-pickPerson_howard');


console.log(playAsHoward);

console.log(pickLizard);
// declaration player and computer veriables

var 
	gameState = 'notStarted',  //started // ended //notStarted
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

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


// seting up points
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}


function haracterPick(pickedHaracter){
    console.log('wywolano haracterPick')
    switch (pickedHaracter){
        case 'howard':
            player.name = 'Howard Wolowitc'
        break;
    }
    console.log(player.name + 'w funkcji haracter pick');
    newGame();
}

console.log(player.name + 'imie gracza');



// new game function - starting new game
function newGame() {

//  player.name = prompt('Please enter your name', 'imię gracza');
 
console.log(player.name + 'z funkcji newGame');

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
        pickElem.style.display = 'none';    //none
        resultsElem.style.display = 'none';
  }
}


// generating a computer choice
function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    return possiblePicks[Math.floor(Math.random()*5)];  // generate a number 0-5
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
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'none'; // remis
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'rock' &&  playerPick == 'lizard') ||
        (computerPick == 'paper' &&  playerPick == 'spock') ||
        (computerPick == 'paper' &&  playerPick == 'rock') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'scissors' &&  playerPick == 'lizard') ||
        (computerPick == 'lizard' &&  playerPick == 'spock') ||
        (computerPick == 'lizard' &&  playerPick == 'paper') ||
        (computerPick == 'spock' &&  playerPick == 'scissors') ||
        (computerPick == 'spock' &&  playerPick == 'rock')) {

        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Win!";
        //document.write('wygrywa gracz');
        player.score++;
        console.log('punkty gracza w funkcji' + player.score);
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        computer.score++;
    } else {
    	computerResultElem.innerHTML = playerResultElem.innerHTML = "Draw";
    }
    setGamePoints(); 
    finishGame(); 
}

// seting up points
function setGamePoints() {
	console.log('punkty playera z funkcji setGamePoints' + player.score)
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

//finishing the game

function finishGame(){
	var wygrywa = player.name;
	if (player.score == 10 || computer.score == 10){
		if (computer.score > player.score){
			wygrywa = 'Dr Sheldon Kooper';
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
pickLizard.addEventListener('click', function() { playerPick('lizard') });
pickSpock.addEventListener('click', function() { playerPick('spock') });


//button with names

playAsHoward.addEventListener('click', function() { haracterPick('howard') });
console.log(playAsHoward);

setGameElements();
//setGamePoints();

console.log('playerma punktuw' + playerPointsElem.innerHTML);