/** shows or hides dropdown buttons and pop out windows based on event target */
window.addEventListener("click", function (event) {

    const dropdownContent = document.getElementsByClassName("dropdown-content");

    // hides all dropdown menu buttons
    if (!event.target.classList.contains("menu-button")) {
        for (dropdown of dropdownContent) {
            dropdown.style.display = "none";
        }
    }

    // rules dropdown show or hide
    const rulesList = document.getElementById("rules-drop-content");
    const rulesButton = document.getElementById("rules");

    if (event.target === rulesButton) {
        if (rulesList.style.display !== "block") {
            rulesList.style.display = "block";
        }
    } else if (event.target !== rulesButton) {
        rulesList.style.display = "none";
    }

    // modes dropdown show or hide
    const gameModeList = document.getElementById("game-drop-content");
    const modesButton = document.getElementById("modes");

    if (event.target === modesButton) {
        if (gameModeList.style.display !== "block") {
            gameModeList.style.display = "block";
        }
    } else if (event.target !== modesButton) {
        gameModeList.style.display = "none";
    }

    // rpsls rules window show or hide
    const rpslsRules = document.getElementById("rpsls-rules");
    const rpslsRulesWindow = document.getElementById("rpsls-rules-window");

    if (event.target === rpslsRules) {
        rpslsRulesWindow.style.display = "flex";
    } else if (event.target !== rpslsRules) {
        rpslsRulesWindow.style.display = "none";
    }

    // high scores window show or hide
    const highScores = document.getElementById("high-scores");
    const highScoresWindow = document.getElementById("high-scores-window");

    if (event.target === highScores) {
        highScoresWindow.style.display = "flex";
    } else if (event.target !== highScores) {
        highScoresWindow.style.display = "none";
    }
})

/** resets the game area and global variables */
function newGame() {
    document.getElementById("game-over-window").style.display = "none";
    document.getElementById("game-area").style.display = "block";
    document.getElementById("game-name").style.display = "block";

    let livesBox = document.getElementsByClassName("lives-box");
    for (let i = 0; i < livesBox.length; i++) {
        livesBox[i].innerHTML = `<p></p>`;
    }

    document.getElementById("score").innerText = 0;
    losses = 0;

    roundReset();

}

document.getElementById("rpsls-selection").addEventListener("click", playerSelection());

/**changes player choice to selected option and creates confirm button */
function playerSelection() {

    let playerChoices = document.getElementsByClassName("rpsls-selector");

    for (const playerChoice of playerChoices) {
        playerChoice.addEventListener("click", function () {
            let playerSelected = document.getElementById("player-selection");
            var playerPick = "";

            if (this.getAttribute("data-type") === "rock-selector") {
                playerSelected.innerHTML = `<img src="/assets/images/rock.jpg" alt="icon for rock">
                <figcaption>Ready to rock?</figcaption>
                <button id="player-confirm">Confirm choice</button>`;
                playerPick = "rock";
            } else if (this.getAttribute("data-type") === "paper-selector") {
                playerSelected.innerHTML = `<img src="/assets/images/paper.jpg" alt="icon for paper">
                <figcaption>Ready to wrap this up?</figcaption>
                <button id="player-confirm">Confirm choice</button>`;
                playerPick = "paper";
            } else if (this.getAttribute("data-type") === "scissors-selector") {
                playerSelected.innerHTML = `<img src="/assets/images/scissors.jpg" alt="icon for scissors">
                <figcaption>Will you make the cut?</figcaption>
                <button id="player-confirm">Confirm choice</button>`;
                playerPick = "scissors";
            } else if (this.getAttribute("data-type") === "lizard-selector") {
                playerSelected.innerHTML = `<img src="/assets/images/lizard.jpg" alt="icon for lizard">
                <figcaption>Ready to gecko-ing?</figcaption>
                <button id="player-confirm">Confirm choice</button>`;
                playerPick = "lizard";
            } else if (this.getAttribute("data-type") === "spock-selector") {
                playerSelected.innerHTML = `<img src="/assets/images/spock.jpg" alt="icon for Spock">
                <figcaption>Ready to Trek them out?</figcaption>
                <button id="player-confirm">Confirm choice</button>`;
                playerPick = "spock";
            }
            playerSelected.setAttribute("data-type", playerPick);
            roundStart();
        })
    }
}


/** player choice confirmation and round start */
function roundStart() {
    document.getElementById("player-confirm").addEventListener("click", function (event) {

        let playerChoices = document.getElementsByClassName("rpsls-selector");
        this.remove();
        let roundChoices = document.getElementById("selections")

        roundChoices.style.margin = "10rem 10rem 8rem 10rem";

        let choices = roundChoices.getElementsByClassName("choice-container")
        for (i = 0; i < choices.length; i++) {
            choices[i].style.transform = "scale(1.2)";
        }

        let choiceTags = roundChoices.getElementsByTagName("figcaption");
        for (i = 0; i < choiceTags.length; i++) {
            choiceTags[i].style.display = "none";
        }

        for (i = 0; i < playerChoices.length; i++) {
            playerChoices[i].style.display = "none";
        }
        roundCountdown();
    })
}

/** starts and displays countdown timer when round begins */
function roundCountdown() {

    document.getElementById("game-countdown").innerHTML = `<p></p>`;

    let i = 4;

    countdownTimer();

    /** sets delay on roundCounter function */
    function countdownTimer() {
        if (i >= 1) {
            setTimeout(() => {
                roundCounter();
            }, 1000);
        }
    }

    /** displays countdown timer and calls computerChoice function */
    function roundCounter() {
        i--;
        if (i >= 1) {
            countdownTimer();
            document.getElementById("game-countdown").innerHTML = `<p>${i}</p>`;
        } else if (i <= 0) {
            document.getElementById("game-countdown").innerHTML = `<p>Go!</p>`;
            setTimeout(() => {
                computerChoice();
            }, 1000);
        }
    }
}

/** generates computer choice at random and calls checkWinner function */
function computerChoice() {
    const computerSelection = document.getElementById("computer-selection");
    var computerSelected = Math.floor(Math.random() * 5);

    if (computerSelected === 0) {
        computerSelection.setAttribute("data-type", "rock");
        computerSelection.innerHTML = `<img src="/assets/images/rock.jpg" alt="icon for rock">`;
    } else if (computerSelected === 1) {
        computerSelection.setAttribute("data-type", "paper");
        computerSelection.innerHTML = `<img src="/assets/images/paper.jpg" alt="icon for paper">`;
    } else if (computerSelected === 2) {
        computerSelection.setAttribute("data-type", "scissors");
        computerSelection.innerHTML = `<img src="/assets/images/scissors.jpg" alt="icon for scissors">`;
    } else if (computerSelected === 3) {
        computerSelection.setAttribute("data-type", "lizard");
        computerSelection.innerHTML = `<img src="/assets/images/lizard.jpg" alt="icon for lizard">`;
    } else if (computerSelected === 4) {
        computerSelection.setAttribute("data-type", "spock");
        computerSelection.innerHTML = `<img src="/assets/images/spock.jpg" alt="icon for Spock">`;
    }
    checkWinner();
}

/** verifies round winner and calls each result function */
function checkWinner() {
    let player = document.getElementById("player-selection").getAttribute("data-type");
    let computer = document.getElementById("computer-selection").getAttribute("data-type");

    // player picked rock
    if (player === "rock") {
        if (computer === "scissors") {
            var win = true;
        } else if (computer === "lizard") {
            var win = true;
        } else if (computer === "paper") {
            var loss = true;
        } else if (computer === "spock") {
            var loss = true;
        } else {
            var draw = true;
        }
        // player picked paper
    } else if (player === "paper") {
        if (computer === "rock") {
            var win = true;
        } else if (computer === "spock") {
            var win = true;
        } else if (computer === "scissors") {
            var loss = true;
        } else if (computer === "lizard") {
            var loss = true;
        } else {
            var draw = true;
        }
        // player picked scissors
    } else if (player === "scissors") {
        if (computer === "paper") {
            var win = true;
        } else if (computer === "lizard") {
            var win = true;
        } else if (computer === "rock") {
            var loss = true;
        } else if (computer === "spock") {
            var loss = true;
        } else {
            var draw = true;
        }
        // player picked lizard
    } else if (player === "lizard") {
        if (computer === "paper") {
            var win = true;
        } else if (computer === "spock") {
            var win = true;
        } else if (computer === "rock") {
            var loss = true;
        } else if (computer === "scissors") {
            var loss = true;
        } else {
            var draw = true;
        }
        // player picked spock
    } else if (player === "spock") {
        if (computer === "rock") {
            var win = true;
        } else if (computer === "scissors") {
            var win = true;
        } else if (computer === "paper") {
            var loss = true;
        } else if (computer === "lizard") {
            var loss = true;
        } else {
            var draw = true;
        }
    }

    // calls function based on result
    if (win === true) {
        playerWin();
    } else if (loss === true) {
        losses++;
        playerLoss();
    } else if (draw === true) {
        playerDraw();
    }

    document.getElementById("player-selection").removeAttribute("data-type");
    document.getElementById("computer-selection").removeAttribute("data-type");
}

/** updates score, displays winner message and calls roundReset function */
function playerWin() {

    let score = document.getElementById("score");
    var newScore = parseInt(score.innerText);

    newScore++;
    score.innerText = parseInt(newScore);

    document.getElementById("game-countdown").innerHTML = `<p>Winner!</p>`;

    setTimeout(() => {
        roundReset();
    }, 2000);
}

/** displays draw message and calls roundReset function */
function playerDraw() {

    document.getElementById("game-countdown").innerHTML = `<p>Draw!</p>`;

    setTimeout(() => {
        roundReset();
    }, 2000);
}

let losses = 0;

/** updates lives boxes and calls either roundReset or gameOver function*/
function playerLoss() {

    document.getElementById("game-countdown").innerHTML = `<p>Defeat!</p>`;

    let livesBox = document.getElementsByClassName("lives-box");

    if (losses === 1) {
        livesBox[0].innerHTML = `<p>X</p>`;
        setTimeout(() => {
            roundReset();
        }, 2000);
    } else if (losses === 2) {
        livesBox[1].innerHTML = `<p>X</p>`;
        setTimeout(() => {
            roundReset();
        }, 2000);
    } else if (losses === 3) {
        livesBox[2].innerHTML = `<p>X</p>`;
        setTimeout(() => {
            gameOver();
        }, 2000);
    }
}

/** resets interface and calls playerSelection function */
function roundReset() {

    // resets selections styling
    let roundChoices = document.getElementById("selections");

    let choices = roundChoices.getElementsByClassName("choice-container")
    for (i = 0; i < choices.length; i++) {
        choices[i].style.transform = "scale(1)";
    }

    let choiceTags = roundChoices.getElementsByTagName("figcaption");
    for (i = 0; i < choiceTags.length; i++) {
        choiceTags[i].style.display = "block";
    }

    roundChoices.style.margin = "2rem 3rem 0 3rem";
    roundChoices.style.transform = "scale(1)";

    // resets selections images and captions
    document.getElementById("player-selection").innerHTML = `<img src="/assets/images/question-mark.jpg" alt="question mark icon">
    <figcaption>Make your choice!</figcaption>`;
    document.getElementById("computer-selection").innerHTML = `<img src="/assets/images/question-mark.jpg" alt="question mark icon">
    <figcaption>What could it be...</figcaption>`;
    document.getElementById("game-countdown").innerHTML = `<p>vs.</p>`;

    // resets rpsls-selector styling
    let playerChoices = document.getElementsByClassName("rpsls-selector");

    for (i = 0; i < playerChoices.length; i++) {
        playerChoices[i].style.display = "block";
    }

    if (losses < 4 === true) {
        playerSelection();
    }
}

/** ends current game, displays game score and calls newGame function */
function gameOver() {
    document.getElementById("game-area").style.display = "none";
    document.getElementById("game-name").style.display = "none";

    let endScore = document.getElementById("score").innerText;
    let gameOverWindow = document.getElementById("game-over-window");

    gameOverWindow.style.display = "flex";
    gameOverWindow.getElementsByTagName("h2")[0].innerHTML = `You scored: ${endScore}`;

    let startNewGame = document.getElementById("new-game");

    startNewGame.addEventListener("click", function () {
        document.getElementById("game-area").style.display = "block";
        newGame();
    })
}

function highScore() {

}