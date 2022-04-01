document.getElementById("modes-button").addEventListener("click", gameDrop);

/**either hides or shows game modes dropdown */
function gameDrop (event) {
    let gameModeList = document.getElementById("game-drop-content");

    if(gameModeList.style.display ==="block") {
        gameModeList.style.display ="none";
    } else {
        gameModeList.style.display ="block";
    }
}

document.getElementById("rules").addEventListener("click", rulesDrop);

/**either hides or shows rules dropdown */
function rulesDrop (event) {
    let rulesList = document.getElementById("rules-drop-content");

    if(rulesList.style.display ==="block") {
        rulesList.style.display ="none";
    } else {
        rulesList.style.display ="block";
    }
}

document.getElementById("rpsls-rules").addEventListener("click", rpslsRules);

/**shows or closes rpsls rules window */
function rpslsRules(event) {
    let rpslsRulesWindow = document.getElementById("rpsls-rules-window");

    if (rpslsRulesWindow.style.display ==="block") {
        rpslsRulesWindow.style.display ="none";
    } else {
        rpslsRulesWindow.style.display ="block";
    }
}