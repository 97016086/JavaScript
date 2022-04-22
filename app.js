const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const ronde = document.getElementById('ronde');
const winner = document.getElementById('winner');
const computerPoints = document.getElementById('computer-points');
const userPoints = document.getElementById('user-points');
let userChoice;
let computerChoice;
let computerpunten = 0;
let gebruikerpunten = 0;
let result;
let round = 0;
let winnaar;


//de e staat voor event en gaat als functie door de click functie. 
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    if (round === 5){
        return;
    }
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    round++;
    generateComputerChoice();
    getResult();
    uiteindelijkeWinnaar();

    ronde.innerHTML = round;
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


    if (computerChoice === userChoice){
        result = 'Het is een Gelijkspel';  
    }

    if(computerChoice =='steen' && userChoice == 'papier'){
       result = 'Jij hebt deze ronde gewonnen';
       ++gebruikerpunten;
    }else if(computerChoice == 'papier' && userChoice == 'steen'){
        result = 'De computer heeft deze ronde gewonnen';
        ++computerpunten;
    }

    if(computerChoice =='steen' && userChoice == 'schaar'){
        result = 'De computer heeft deze ronde gewonnen';
        ++computerpunten;
    }else if(computerChoice =='schaar' && userChoice == 'steen'){
        result = 'Jij hebt deze ronde gewonnen';
        ++gebruikerpunten;
    }

    if(computerChoice == 'papier' && userChoice == 'schaar'){
        result ='Jij hebt deze ronde gewonnen';
        ++gebruikerpunten;
    }else if(computerChoice == 'schaar' && userChoice == 'papier'){
        result ='De computer heeft deze ronde gewonnen';
        ++computerpunten;
    }
  
    resultDisplay.innerHTML = result;
    userPoints.innerHTML = gebruikerpunten;
    computerPoints.innerHTML = computerpunten;
   
}

function uiteindelijkeWinnaar() {
    
    if(gebruikerpunten > computerpunten && round === 5){
        winnaar = "Gefeliciteerd,  jij hebt gewonnen";
    }if(gebruikerpunten < computerpunten && round === 5){
        winnaar = "De computer heeft gewonnen";
    }else if(gebruikerpunten === computerpunten && round === 5){
        winnaar = "Het is gelijkspel";
    }
    
    
    if(round === 5){
        winner.innerHTML = winnaar;
      
       
        
    }


 


}

function reset() {
    
    document.getElementById('winner').innerHTML = "";
    document.getElementById('result').innerHTML = "";
    document.getElementById('ronde').innerHTML = "";
    document.getElementById('computer-points').innerHTML = 0;
    document.getElementById('user-points').innerHTML = 0;
    document.getElementById('user-choice').innerHTML = "";
    document.getElementById('computer-choice').innerHTML = "";
}