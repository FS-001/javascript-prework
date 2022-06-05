// getMoveName function

function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
}

// displayResult function

function displayResult(argComputerMove, argPlayerMove){

    console.log('moves:', argComputerMove, argPlayerMove);
    
    if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remis!');
    } else if ( argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Ty wygrywasz!');
    } else if ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        printMessage('Ja (komputer) wygrywam!');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Ja (komputer) wygrywam!');
    } else if ( argComputerMove == 'papier' && argPlayerMove == 'papier') {
        printMessage('Remis!');
    } else if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Ty wygrywasz!');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        printMessage('Ja (komputer) wygrywam!');
    } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
        printMessage('Remis!');
    } else if ( argPlayerMove == 'nieznany ruch') {
        printMessage('Partia nie zostanie zaliczona');
    }
}

// Computer's move

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
/*
if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2) {
    computerMove = 'papier';
} else if (randomNumber == 3) {
    computerMove = 'nożyce';
}
*/
printMessage('Mój ruch to: ' + computerMove);

// Player's move

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);
/*
if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else if (playerInput == '3') {
    playerMove = 'nożyce';
}
*/
printMessage('Twój ruch to: ' + playerMove);

// Result of one turn
// Wstawić tutaj wywołanie funkcji displayResult!
displayResult(computerMove, playerMove);