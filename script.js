///		veriables


// getting html elements value
var 
	newGameBtn = document.getElementById('js-newGameButton'),
	pickRock = document.getElementById('js-playerPick_rock'),
	pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors'),
    pickLizard = document.getElementById('js-playerPick_lizard'),
    pickSpock = document.getElementById('js-playerPick_spock'),
	showRules = document.getElementById('js-rules-bt');

    console.log(showRules);

// getting a chosen character
var
    playAsHoward = document.getElementById('js-pickPerson_howard');
    playAsRajesh = document.getElementById('js-pickPerson_rajesh');
    playAsLeonard = document.getElementById('js-pickPerson_leonard');
    playAsRajesh = document.getElementById('js-pickPerson_rajesh');
    playAsPeny = document.getElementById('js-pickPerson_peny'),
    characterPhoto = document.getElementById('js-characterPhoto');



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
    resultsElem = document.getElementById('js-resultsTableElement'),
    messageElem = document.getElementById('js-message');
    roundNumber = document.getElementById('js-round-counter'),
    ruleSection = document.getElementById('js-rules-section');

console.log(ruleSection);

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
    
    switch (pickedHaracter){
        case 'howard':
            player.name = 'Howard Wolowitc';
            characterPhoto.src = 'images/howard-wolowitz.jpg';
            console.log(characterPhoto);
        break;
        case 'rajesh':
            player.name = 'Rajesh Koothrappali';
            characterPhoto.src = 'images/raj_koothrappali.jpg';
        break;
        case 'leonard':
            player.name = 'Leonard Hofstadter';
            characterPhoto.src = 'images/leonard_big_bang_a_p.jpg';
        break;
        case 'peny':
            player.name = 'Peny';
            characterPhoto.src = 'images/penny.jpg';
        break;
    }
    
    newGame();
}


// new game function - starting new game
function newGame() {
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
        //  wstawione
        playerPickElem.innerHTML = '';
        computerPickElem.innerHTML = '';
        playerResultElem.innerHTML = '';
        computerResultElem.innerHTML = '';
        

      break;
    case 'ended':
        newGameBtn.innerText = 'Try again';
    case 'notStarted':
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';    //none
        resultsElem.style.display = 'none';
        messageElem.innerHTML = 'Battle status.';
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
    computerPick = getComputerPick();

    playerPickElem.innerHTML = 'hits with ' + playerPick + '.';
    computerPickElem.innerHTML = 'hits with ' + computerPick + '.';
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
        
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        computer.score++;
    } else {
    	computerResultElem.innerHTML = playerResultElem.innerHTML = "Draw";
    }
    printTheMessage(winnerIs);
    setGamePoints(); 
    finishGame(); 
}

// seting up points
function setGamePoints() {
	
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

function printTheMessage (winnerIs){

    if (winnerIs == 'player'){
        winnerIs = player.name;
    } else if (winnerIs == 'computer') {
        winnerIs = 'Sheldon Cooper';
    } else {
        winnerIs = 'No one';
    }
    messageElem.innerHTML = winnerIs + ' wins this round.<br> Hit again !'
    roundCounter();
}

function roundCounter(){
    roundNumber.innerHTML++;
}


//show rules

function showRulesSection() {
    
    if (ruleSection.style.display === "none") {
        ruleSection.style.display = "block";
    } else {
        ruleSection.style.display = "none";
    }
}


//finishing the game

function finishGame(){
	var wygrywa = player.name;
	if (player.score == 10 || computer.score == 10){
		if (computer.score > player.score){
			wygrywa = 'Dr Sheldon Kooper';
		}
		alert('Koniec gry. Wygrywa ' + wygrywa);
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
playAsRajesh.addEventListener('click', function() { haracterPick('rajesh') });
playAsLeonard.addEventListener('click', function() { haracterPick('leonard') });
playAsPeny.addEventListener('click', function() { haracterPick('peny') });
showRules.addEventListener('click', function() { showRulesSection() });


setGameElements();
//setGamePoints();

