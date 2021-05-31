/*let player = 0;
let computer = 0;

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");


function game(playerChoice, computerChoice) {

    rock.addEventListener("click", function rockChoice(){
        console.log("rock");
    });
    
    paper.addEventListener("click", function paperChoice(){
        console.log("paper");
    });
    
    scissors.addEventListener("click", function scissorsChoice(){
        console.log("scissors");
    });

    let rockValue = rock.nodeValue;
    console.log(rockValue);

    computerChoice = Math.floor(Math.random()*3);
    if (computerChoice === 0) {
        return "rock ";
    }else if (computerChoice === 1) {
        return "scissors"
    }else if (computerChoice === 2) {
        return "paper";
    }else {
        return "nothing";
    }

    
};

console.log(game());*/

const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");


        playBtn.addEventListener("click", ()=> {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    const playMatch = () => {
        let rock = document.querySelector(".options .rock");
        let paper = document.querySelector(".options .paper");
        let scissors = document.querySelector(".options .scissors");
        /*const options = document.querySelector(".options button");*/
        const options = [rock, paper, scissors];
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");


        const computerOptions = ["rock", "paper", "scissors"];
    

        options.forEach(option => {
            option.addEventListener("click", function() {
               const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                compareHands(this.textContent, computerChoice);

                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
            });
        });
    };

    const updateScore = () => {
        playerScore = document.querySelector(".palyer-score p");
        computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = `${pScore}`;
        computerScore.textContent = `${cScore}`;
        console.log(`for ${pScore} and for ${cScore}`);
    }


    const compareHands = (playerChoice, computerChoice) => {

        const winner = document.querySelector(".winner");

        if(playerChoice === computerChoice) {
            winner.textContent = "It is a tie";
            return;
        }

        if(playerChoice === "rock"){
            if(computerChoice === "scissors"){
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === "paper"){
            if(computerChoice === "scissors"){
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === "scissors"){
            if(computerChoice === "rock"){
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
    }


    startGame();
    playMatch();
    //updateScore();
};
game();






































