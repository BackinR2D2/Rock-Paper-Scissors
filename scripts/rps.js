const game = () => {
    const choices = document.querySelectorAll('img');
    const rock = document.querySelectorAll('img')[0]
    const paper = document.querySelectorAll('img')[1]
    const scissors = document.querySelectorAll('img')[2]
    const userImgChoice = document.querySelectorAll('.choiceImg')[0];
    const computerImgChoice = document.querySelectorAll('.choiceImg')[1];
    const situation = document.querySelector('.situation');
    let userScore = document.querySelector('.user');
    let computerScore = document.querySelector('.computer');
    let intUserScore = Number(userScore.innerText);
    let intComputerScore = Number(computerScore.innerText);
    let userWon = false;
    let computerWon = false;
    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            let userChoice = '';
            const options = ['rock', 'paper', 'scissors'];
            let computerRand = Math.floor(Math.random() * 3);
            let computerChoice = options[computerRand];
            if (choice === rock) {
                userChoice = 'rock'
                userImgChoice.setAttribute('src', 'https://img.icons8.com/officel/60/000000/rock.png');
            }
            if (choice === paper) {
                userChoice = 'paper'
                userImgChoice.setAttribute('src', 'https://img.icons8.com/wired/60/000000/paper-plane.png');
            }
            if (choice === scissors) {
                userChoice = 'scissors'
                userImgChoice.setAttribute('src', 'https://img.icons8.com/officel/60/000000/scissors.png');
            }
            if (computerChoice === 'rock') {
                computerImgChoice.setAttribute('src', 'https://img.icons8.com/officel/60/000000/rock.png');
            }
            if (computerChoice === 'paper') {
                computerImgChoice.setAttribute('src', 'https://img.icons8.com/wired/60/000000/paper-plane.png');
            }
            if (computerChoice === 'scissors') {
                computerImgChoice.setAttribute('src', 'https://img.icons8.com/officel/60/000000/scissors.png');
            }

            checkWinner(userChoice, computerChoice);
            score(userWon, computerWon);
        })
    })

    const checkWinner = (userChoice, computerChoice) => {
        if (userChoice === 'rock' && computerChoice === 'paper') {

            computerWon = true;
            userWon = false;

        } else if (userChoice === 'rock' && computerChoice === 'scissors') {

            userWon = true;
            computerWon = false;
        } else if (userChoice === 'paper' && computerChoice === 'rock') {

            userWon = true;
            computerWon = false;
        } else if (userChoice === 'paper' && computerChoice === 'scissors') {

            computerWon = true;
            userWon = false;
        } else if (userChoice === 'scissors' && computerChoice === 'rock') {

            computerWon = true;
            userWon = false;
        } else if (userChoice === 'scissors' && computerChoice === 'paper') {

            userWon = true;
            computerWon = false;
        } else {

            userWon = false;
            computerWon = false;
        }
    }

    const score = (userWon, computerWon) => {
        if (userWon === true && computerWon === false) {
            intUserScore++;
            userScore.textContent = intUserScore;
            situation.textContent = 'User won!'
            situation.style.color = 'rgb(12, 94, 11)';
        }
        if (userWon === false && computerWon === true) {
            intComputerScore++;
            computerScore.textContent = intComputerScore;
            situation.textContent = 'Computer won!'
            situation.style.color = 'rgb(12, 94, 11)';
        }
        if (userWon === false && computerWon === false) {
            situation.textContent = 'It\'s a tie!'
            situation.style.color = 'rgb(47,79,79)';
        }
    }
}

game();