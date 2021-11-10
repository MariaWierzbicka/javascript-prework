function getMoveName(argMoveId){
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

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);



let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);

console.log('Komputer: ' + computerMove + ' Gracz: ' + playerMove);



function displayResult(argComputerMove, argPlayerMove){
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

let result = displayResult(computerMove, playerMove)