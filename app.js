const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let computerPoints = document.getElementById('computer-points');
let userPoints = document.getElementById('user-points');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();

}));

function generateComputerChoice() {
    const randomNummer = Math.floor(Math.random()* 3);
    
    if(randomNummer === 0){
        computerChoice = 'steen';
    }
    if(randomNummer === 1){
        computerChoice = 'schaar';
    }
    if(randomNummer === 2) {
        computerChoice = 'papier';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    computerPoints = 0;
    userPoints = 0;

    if (computerChoice === userChoice){
        result = 'Het is een Gelijkspel';
        
    }

    if(computerChoice =='steen' && userChoice == 'papier'){
       result = 'Jij hebt gewonnen';
       userPoints++;
    }else if(computerChoice == 'papier' && userChoice == 'steen'){
        result = 'De computer heeft gewonnen';
    }

    if(computerChoice =='steen' && userChoice == 'schaar'){
        result = 'De computer heeft gewonnen';
        computerPoints++;
    }else if(computerChoice =='schaar' && userChoice == 'steen'){
        result = 'Jij hebt gewonnen';
    }

    if(computerChoice == 'papier' && userChoice == 'schaar'){
        result ='Jij hebt gewonnen';
        userPoints++;
    }else if(computerChoice == 'schaar' && userChoice == 'papier'){
        result ='De computer heeft gewonnen';
    }
  
    resultDisplay.innerHTML = result;
}