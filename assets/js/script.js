document.getElementById("modes-button").addEventListener("click", gameDrop);

/**either hides or shows game modes dropdown */
function gameDrop(event) {
    let gameModeList = document.getElementById("game-drop-content");

    if (gameModeList.style.display === "block") {
        gameModeList.style.display = "none";
    } else {
        gameModeList.style.display = "block";
    }
}

window.addEventListener("click", function(event) {
    let dropdownContent = document.getElementsByClassName("dropdown-content");
    const rpslsRulesWindow = document.getElementById("rpsls-rules-window");
    let rpslsRulesFull = rpslsRulesWindow.children[0, 1, 2];

    if (event.target === rpslsRulesWindow) {
        if (rpslsRulesWindow.style.display === "flex") {
        rpslsRulesWindow.style.display = "none";
        }
    }

    if (event.target.classList.contains("menu-button") === false) {
        for (dropdown of dropdownContent) {
            dropdown.style.display = "none";
        }
    }
})

document.getElementById("rules").addEventListener("click", rulesDrop);

/**either hides or shows rules dropdown */
function rulesDrop(event) {
    let rulesList = document.getElementById("rules-drop-content");

    if (rulesList.style.display === "block") {
        rulesList.style.display = "none";
    } else {
        rulesList.style.display = "block";
    }
}

document.getElementById("rpsls-rules").addEventListener("click", rpslsRules);

/**shows or closes rpsls rules window */
function rpslsRules(event) {
    let rpslsRulesWindow = document.getElementById("rpsls-rules-window");

    if (rpslsRulesWindow.style.display === "flex") {
        rpslsRulesWindow.style.display = "none";
    } else {
        rpslsRulesWindow.style.display = "flex";
    }
}

let playerChoices = document.getElementsByClassName("rpsls-selector");

/**Changes player choice to selected option and creates confirm button */
for (const playerChoice of playerChoices) {
    playerChoice.addEventListener("click", function playerSelection() {
        let playerSelected = document.getElementById("player-selection");
        var playerPick ="";

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
    })
}
