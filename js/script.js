{
    const playGame = function (playerInput){

        clearMessages()

        const getMoveName = function(argMoveId){
            if(argMoveId == 1){
                return 'kamień';
            } else if(argMoveId == 2){
                return 'papier';
            } else if(argMoveId == 3){
                return 'nożyce';
            }
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }

        const  randomNumber = Math.floor(Math.random() * 3 + 1),
            computerMove = getMoveName(randomNumber),
            playerMove = getMoveName(playerInput);

        console.log('Wylosowana liczba to: ' + randomNumber);

        printMessage('Mój ruch to: ' + computerMove);

        console.log('Gracz wpisał: ' + playerInput);

        printMessage('Twój ruch to: ' + playerMove);

        console.log('Komputer: ' + computerMove + ' Gracz: ' + playerMove);


        const displayResult = function(argComputerMove, argPlayerMove){
            if(argComputerMove == 'kamień' && argPlayerMove== 'papier'
                    || argComputerMove == 'papier' && argPlayerMove == 'nożyce'
                    || argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
                printMessage('Ty wygrywasz!');
            } else if(argComputerMove == argPlayerMove){
                printMessage('Remis');
            } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'
                    ||argComputerMove == 'nożyce' && argPlayerMove == 'papier'
                    ||argComputerMove == 'papier' && argPlayerMove == 'kamień'){
                printMessage('Przegrałeś :(');
            } else{
            printMessage('Nieznany ruch, wybierz 1, 2 lub 3');
            }
        }
        displayResult(computerMove, playerMove)
    }

    document.getElementById('play-rock').addEventListener('click', function(){
        playGame(1);
    });

    document.getElementById('play-paper').addEventListener('click', function(){
        playGame(2);
    });
    document.getElementById('play-scissors').addEventListener('click', function(){
        playGame(3);
    });
}