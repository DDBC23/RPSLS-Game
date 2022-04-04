/** shows or hides dropdown buttons and pop out windows based on event target */
window.addEventListener("click", function (event) {
    // dropdown content show or hide
    const dropdownContent = document.getElementsByClassName("dropdown-content");

    if (event.target.classList.contains("menu-button") === false) {
        for (dropdown of dropdownContent) {
            dropdown.style.display = "none";
        }
    }

    // rules dropdown show or hide
    const rulesList = document.getElementById("rules-drop-content");
    const rulesButton = document.getElementById("rules");

    if (event.target === rulesButton) {
        if (rulesList.style.display = "none") {
            rulesList.style.display = "block";
        }
    } else if (event.target !== rulesButton) {
        rulesList.style.display = "none";
    }

    // modes dropdown show or hide
    const gameModeList = document.getElementById("game-drop-content");
    const modesButton = document.getElementById("modes");

    if (event.target === modesButton) {
        if (gameModeList.style.display = "none") {
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
})

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
        roundChoices.style.transform = "scale(120%)";

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
        console.log("victory");
        playerWin();
    } else if (loss === true) {
        console.log("Defeat");
        playerLoss();
    } else if (draw === true) {
        console.log("stalemate");
        roundReset();
    }

    document.getElementById("player-selection").removeAttribute("data-type");
    document.getElementById("computer-selection").removeAttribute("data-type");
}

let score = 0;

/** updates score, displays winner message and calls roundReset function */
function playerWin() {
    score++;
    var newScore = score;
    let currentScore = document.getElementById("score");
    currentScore.innerText = ("Score: " + newScore);

    document.getElementById("game-countdown").innerHTML = `<p>Winner!</p>`;

    setTimeout(() => {
        roundReset();
    }, 2000);
}

let playerLives = 3;

function playerLoss() {
    playerLives--;
    var newPlayerLives = playerLives;

    let livesBoxes = document.getElementsByClassName("lives-boxes");

    for (livesBox of livesBoxes) {

        if (newPlayerLives = 2) {
            console.log(newPlayerLives);
            livesBox[0].innerHTML = `<p>X</p>`;
        }
    }

    setTimeout(() => {
        roundReset();
    }, 2000);
}

/** resets interface and calls playerSelection function */
function roundReset() {
    let roundChoices = document.getElementById("selections");
    let playerChoices = document.getElementsByClassName("rpsls-selector");

    document.getElementById("game-countdown").innerHTML = `<p>vs.</p>`;

    roundChoices.style.margin = "2rem 3rem 0 3rem";
    roundChoices.style.transform = "scale(100%)";

    let choiceTags = roundChoices.getElementsByTagName("figcaption");
    for (i = 0; i < choiceTags.length; i++) {
        choiceTags[i].style.display = "block";
    }

    for (i = 0; i < playerChoices.length; i++) {
        playerChoices[i].style.display = "block";
    }

    playerSelection();
}