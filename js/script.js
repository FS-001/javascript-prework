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
        const messagePlayerWin = 'Ty wygrywasz',
        messageComputerWin = 'Ja (komputer) wygrywam!',
        messageDraw = 'Remis!';

        if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
            printMessage(messageDraw);
        } else if ( argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage(messagePlayerWin);
        } else if ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            printMessage(messageComputerWin);
        } else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            printMessage(messageComputerWin);
        } else if ( argComputerMove == 'papier' && argPlayerMove == 'papier') {
            printMessage(messageDraw);
        } else if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage(messagePlayerWin);
        } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            printMessage(messagePlayerWin);
        } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            printMessage(messageComputerWin);
        } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
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