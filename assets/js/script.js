document.getElementById("modes-button").addEventListener("click", gameDrop);
document.getElementById("rules").addEventListener("click", rulesDrop);

function gameDrop (event) {
    let gameModeList = document.getElementById("game-drop-content");

    if(gameModeList.style.display ==="block") {
        gameModeList.style.display ="none";
    } else {
        gameModeList.style.display ="block";
    }
}

function rulesDrop (event) {
    let rulesList = document.getElementById("rules-drop-content");

    if(rulesList.style.display ==="block") {
        rulesList.style.display ="none";
    } else {
        rulesList.style.display ="block";
    }
}
