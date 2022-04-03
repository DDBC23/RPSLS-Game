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

let playerChoices = document.getElementsByClassName("rpsls-selector");

/**Changes player choice to selected option and creates confirm button */
for (const playerChoice of playerChoices) {
    playerChoice.addEventListener("click", function playerSelection() {
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

/** player choice confirmation and round start */
function roundStart() {
    document.getElementById("player-confirm").addEventListener("click", function () {

        document.getElementById("player-confirm").style.display = "none";
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
        countDown();
    })
}

function countDown() {
    let counter = document.getElementById("game-countdown").getElementsByTagName("p")[0];
    
        for (i = 4; i > 0;) {
            if ([i] > 1) {
                console.log([i] - 1);
                counter.innerText = [i] - 1;
                i--;
            } else if ([i] >= 1) {
                console.log("Go!");
                counter.innerText = "Go!";
                i--;
            }
        }
}