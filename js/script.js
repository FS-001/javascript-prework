{
let  playGame = function(playerInput){

    clearMessages();

    let getMoveName = function(argMoveId){
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

    let displayResult = function(argComputerMove, argPlayerMove){

        console.log('moves:', argComputerMove, argPlayerMove);
        const messagePlayerWin = 'Ty wygrywasz!',
        messageComputerWin = 'Ja (komputer) wygrywam!',
        messageDraw = 'Remis!',
        choice1 = 'kamień',
        choice2 = 'papier',
        choice3 = 'nożyce';

        if( argComputerMove == choice1 && argPlayerMove == choice1){
            printMessage(messageDraw);
        } else if ( argComputerMove == choice1 && argPlayerMove == choice2) {
            printMessage(messagePlayerWin);
        } else if ( argComputerMove == choice1 && argPlayerMove == choice3) {
            printMessage(messageComputerWin);
        } else if( argComputerMove == choice2 && argPlayerMove == choice1){
            printMessage(messageComputerWin);
        } else if ( argComputerMove == choice2 && argPlayerMove == choice2) {
            printMessage(messageDraw);
        } else if ( argComputerMove == choice2 && argPlayerMove == choice3) {
            printMessage(messagePlayerWin);
        } else if( argComputerMove == choice3 && argPlayerMove == choice1){
            printMessage(messagePlayerWin);
        } else if ( argComputerMove == choice3 && argPlayerMove == choice2) {
            printMessage(messageComputerWin);
        } else if ( argComputerMove == choice3 && argPlayerMove == choice3) {
            printMessage(messageDraw);
        } else if ( argPlayerMove == 'nieznany ruch') {
            printMessage('Partia nie zostanie zaliczona');
        }
    }

    // Computer's move
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    let computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);

    // Player's move
    console.log('Gracz wpisał: ' + playerInput);
    let playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);
    displayResult(computerMove, playerMove);

}

document.getElementById('play-rock').addEventListener('click', function(){playGame(1);});
document.getElementById('play-paper').addEventListener('click', function(){playGame(2);});
document.getElementById('play-scissors').addEventListener('click', function(){playGame(3);});
}