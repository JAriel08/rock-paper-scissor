// buttons
let rockEl = document.querySelector("#rockEl");
let paperEl = document.querySelector("#paperEl");
let scissorsEl = document.querySelector("#scissorsEl");

// events
rockEl.addEventListener("click", rockFunction);
paperEl.addEventListener("click", paperFunction);
scissorsEl.addEventListener("click", scissorsFunction);

// elements
let gamePlay = document.querySelector("#gamePlay")
let container = document.querySelector("#gameplay");

let i = "";

let yourScore = 0;

let computerScore = 0;

function getRandomValue() {
    i = Math.floor(Math.random () * 3);
    return i;
}

function rockFunction() {
    getRandomValue();

    if (i == 0) {
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = "<span>✊</span>";
        itemDiv.classList.add("item-div");
        document.body.appendChild(itemDiv);

        if (yourScore == 5) {
        alert("Congrats, you win! Please refresh the page to play again :)");
        } else if (computerScore == 5) {
            alert("You lose! Please refresh the page to play again :)");
        }

        function nxtRound() {
        nxtRoundBtn.classList.add("next-round");
        rockEl.removeAttribute("disabled");
        paperEl.removeAttribute("disabled");
        scissorsEl.removeAttribute("disabled");

        newPlayer.removeChild(newPlayer.lastElementChild);
        itemDiv.removeChild(itemDiv.lastElementChild);
    }
        
        
    } else if (i == 1) {
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = "<span>✋</span>";
        itemDiv.classList.add("item-div");
        document.body.appendChild(itemDiv);
        computerScore += 1;
        document.querySelector("#computerScore").innerHTML = "Computer Score: " + computerScore;

        if (yourScore == 5) {
        alert("Congrats, you win! Please refresh the page to play again :)");
        } else if (computerScore == 5) {
            alert("You lose! Please refresh the page to play again :)");
        }

        function nxtRound() {
        nxtRoundBtn.classList.add("next-round");    
        rockEl.removeAttribute("disabled");
        paperEl.removeAttribute("disabled");
        scissorsEl.removeAttribute("disabled");

        newPlayer.removeChild(newPlayer.lastElementChild);
        itemDiv.removeChild(itemDiv.lastElementChild);

    }

    } else if (i == 2) {
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = "<span>✌️</span>";
        itemDiv.classList.add("item-div");
        document.body.appendChild(itemDiv);
        yourScore += 1;
        document.querySelector("#yourScore").innerHTML = "Your Score: " + yourScore;

        if (yourScore == 5) {
        alert("Congrats, you win! Please refresh the page to play again :)");
        } else if (computerScore == 5) {
            alert("You lose! Plesese refresh the page to play again :)" );
        }

        function nxtRound() {
        nxtRoundBtn.classList.add("next-round");
        rockEl.removeAttribute("disabled");
        paperEl.removeAttribute("disabled");
        scissorsEl.removeAttribute("disabled");

        newPlayer.removeChild(newPlayer.lastElementChild);
        itemDiv.removeChild(itemDiv.lastElementChild);
    }

    } else {
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = "<span>error</span>";
        itemDiv.classList.add("item-div");
        document.body.appendChild(itemDiv);

        function nxtRound() {
        nxtRoundBtn.classList.add("next-round");
        rockEl.removeAttribute("disabled");
        paperEl.removeAttribute("disabled");
        scissorsEl.removeAttribute("disabled");
        

        newPlayer.removeChild(newPlayer.lastElementChild);
        itemDiv.removeChild(itemDiv.lastElementChild);
    }
    }

    let newPlayer = document.createElement("div");
    newPlayer.innerHTML = "<span>✊</span>";
    newPlayer.className = "new-player"
    document.body.appendChild(newPlayer);

    // Attribute
    rockEl.setAttribute("disabled", "");
    paperEl.setAttribute("disabled", "");
    scissorsEl.setAttribute("disabled", "");


    let nxtRoundBtn = document.createElement("button");
    nxtRoundBtn.innerHTML = "Next Round";
    nxtRoundBtn.classList.add("nxt-round-btn");
    document.body.appendChild(nxtRoundBtn);

    nxtRoundBtn.addEventListener("click", nxtRound)


    let matchHistory = document.querySelector("#matchHistory");


    let history = document.createElement("span");
        history.innerHTML = "✊ " + i;
        if (i == 0) {
            history.innerHTML = "✊ " + "✊";
        } else if (i == 1) {
            history.innerHTML = "✊🏻 " + "✋";
        } else if (i == 2) {
            history.innerHTML = "✊ " + "✌🏻";
        } else {
            return "error"
        }
        history.classList.add("match-history");
        matchHistory.appendChild(history);
        
    if (yourScore == 5 || computerScore == 5) {
    nxtRoundBtn.setAttribute("disabled", "");
    } else {
        return "error";
    }
}

// Paper Function
function paperFunction() {
    getRandomValue();

    if (i == 0) {
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = "<span>✊</span>";
        itemDiv.classList.add("item-div");
        document.body.appendChild(itemDiv);
        yourScore += 1;
        document.querySelector("#yourScore").innerHTML = "Your Score: " + yourScore;

        if (yourScore == 5) {
        alert("Congrats, you win! Please refresh the page to play again :)");
        } else if (computerScore == 5) {
            alert("You lose! Please refresh the page to play again :)");
        }

        function nxtRound() {
        nxtRoundBtn.classList.add("next-round");
        rockEl.removeAttribute("disabled");
        paperEl.removeAttribute("disabled");
        scissorsEl.removeAttribute("disabled");

        newPlayer.removeChild(newPlayer.lastElementChild);
        itemDiv.removeChild(itemDiv.lastElementChild);
    }
        
        
    } else if (i == 1) {
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = "<span>✋</span>";
        itemDiv.classList.add("item-div");
        document.body.appendChild(itemDiv);
        
        if (yourScore == 5) {
        alert("Congrats, you win! Please refresh the page to play again :)");
        } else if (computerScore == 5) {
            alert("You lose! Please refresh the page to play again :)");
        }

        function nxtRound() {
        nxtRoundBtn.classList.add("next-round");
        rockEl.removeAttribute("disabled");
        paperEl.removeAttribute("disabled");
        scissorsEl.removeAttribute("disabled");

        newPlayer.removeChild(newPlayer.lastElementChild);
        itemDiv.removeChild(itemDiv.lastElementChild);
    }

    } else if (i == 2) {
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = "<span>✌️</span>";
        itemDiv.classList.add("item-div");
        document.body.appendChild(itemDiv);
        computerScore += 1;
        document.querySelector("#computerScore").innerHTML = "Computer Score: " + computerScore;

        if (yourScore == 5) {
        alert("Congrats, you win! Please refresh the page to play again :)");
        } else if (computerScore == 5) {
            alert("You lose! Please refresh the page to play again :)");
        }
        

        function nxtRound() {
        nxtRoundBtn.classList.add("next-round");
        rockEl.removeAttribute("disabled");
        paperEl.removeAttribute("disabled");
        scissorsEl.removeAttribute("disabled");

        newPlayer.removeChild(newPlayer.lastElementChild);
        itemDiv.removeChild(itemDiv.lastElementChild);
    }

    } else {
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = "<span>error</span>";
        itemDiv.classList.add("item-div");
        document.body.appendChild(itemDiv);

        function nxtRound() {
        nxtRoundBtn.classList.add("next-round");
        rockEl.removeAttribute("disabled");
        paperEl.removeAttribute("disabled");
        scissorsEl.removeAttribute("disabled");

        newPlayer.removeChild(newPlayer.lastElementChild);
        itemDiv.removeChild(itemDiv.lastElementChild);
    }
    }

    let newPlayer = document.createElement("div");
    newPlayer.innerHTML = "<span>✋</span>";
    newPlayer.className = "new-player"
    document.body.appendChild(newPlayer);

    // Attribute
    rockEl.setAttribute("disabled", "");
    paperEl.setAttribute("disabled", "");
    scissorsEl.setAttribute("disabled", "");

    let nxtRoundBtn = document.createElement("button");
    nxtRoundBtn.innerHTML = "Next Round";
    nxtRoundBtn.classList.add("nxt-round-btn");
    document.body.appendChild(nxtRoundBtn);

    nxtRoundBtn.addEventListener("click", nxtRound)

    let matchHistory = document.querySelector("#matchHistory");


    let history = document.createElement("span");
        history.innerHTML = "✋ " + i;
        if (i == 0) {
            history.innerHTML = "✋ " + "✊🏻";
        } else if (i == 1) {
            history.innerHTML = "✋ " + "✋";
        } else if (i == 2) {
            history.innerHTML = "✋🏻 " + "✌️";
        } else {
            return "error"
        }
    history.classList.add("match-history");
    matchHistory.appendChild(history);

    if (yourScore == 5 || computerScore == 5) {
    nxtRoundBtn.setAttribute("disabled", "");
    } else {
        return "error";
    }
}
// Scissors Function
function scissorsFunction() {
    getRandomValue();

    if (i == 0) {
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = "<span>✊</span>";
        itemDiv.classList.add("item-div");
        document.body.appendChild(itemDiv);


        computerScore += 1;
        document.querySelector("#computerScore").innerHTML = "Computer Score: " + computerScore;

        if (yourScore == 5) {
        alert("Congrats, you win! Please refresh the page to play again :)");
        } else if (computerScore == 5) {
            alert("You lose! Please refresh the page to play again :)");
        }
        

        function nxtRound() {
        nxtRoundBtn.classList.add("next-round");   
        rockEl.removeAttribute("disabled");
        paperEl.removeAttribute("disabled");
        scissorsEl.removeAttribute("disabled");

        newPlayer.removeChild(newPlayer.lastElementChild);
        itemDiv.removeChild(itemDiv.lastElementChild);
    }
        
        
    } else if (i == 1) {
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = "<span>✋</span>";
        itemDiv.classList.add("item-div");
        document.body.appendChild(itemDiv);


        yourScore += 1;
        document.querySelector("#yourScore").innerHTML = "Your Score: " + yourScore;
        
        if (yourScore == 5) {
        alert("Congrats, you win! Please refresh the page to play again :)");
        } else if (computerScore == 5) {
            alert("You lose! Please refresh the page to play again :)");
        }

        function nxtRound() {
        nxtRoundBtn.classList.add("next-round");    
        rockEl.removeAttribute("disabled");
        paperEl.removeAttribute("disabled");
        scissorsEl.removeAttribute("disabled");

        newPlayer.removeChild(newPlayer.lastElementChild);
        itemDiv.removeChild(itemDiv.lastElementChild);
    }

    } else if (i == 2) {
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = "<span>✌️</span>";
        itemDiv.classList.add("item-div");
        document.body.appendChild(itemDiv);
        
        if (yourScore == 5) {
        alert("Congrats, you win! Please refresh the page to play again :)");
        } else if (computerScore == 5) {
            alert("You lose! Please refresh the page to play again :)");
        }
        
        function nxtRound() {
        nxtRoundBtn.classList.add("next-round");
        rockEl.removeAttribute("disabled");
        paperEl.removeAttribute("disabled");
        scissorsEl.removeAttribute("disabled");

        newPlayer.removeChild(newPlayer.lastElementChild);
        itemDiv.removeChild(itemDiv.lastElementChild);
    }

    } else {
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = "<span>error</span>";
        itemDiv.classList.add("item-div");
        document.body.appendChild(itemDiv);

        function nxtRound() {
        nxtRoundBtn.classList.add("next-round");
        rockEl.removeAttribute("disabled");
        paperEl.removeAttribute("disabled");
        scissorsEl.removeAttribute("disabled");

        newPlayer.removeChild(newPlayer.lastElementChild);
        itemDiv.removeChild(itemDiv.lastElementChild);
    }
    }

    let newPlayer = document.createElement("div");
    newPlayer.innerHTML = "<span>✌️</span>";
    newPlayer.className = "new-player"
    document.body.appendChild(newPlayer);

    // Attribute
    rockEl.setAttribute("disabled", "");
    paperEl.setAttribute("disabled", "");
    scissorsEl.setAttribute("disabled", "");


    let nxtRoundBtn = document.createElement("button");
    nxtRoundBtn.innerHTML = "Next Round";
    nxtRoundBtn.classList.add("nxt-round-btn");
    document.body.appendChild(nxtRoundBtn);

    nxtRoundBtn.addEventListener("click", nxtRound)

    let matchHistory = document.querySelector("#matchHistory");

    let history = document.createElement("span");
        history.innerHTML = "✌️ " + i;
        if (i == 0) {
            history.innerHTML = "✌🏻 " + "✊";
        } else if (i == 1) {
            history.innerHTML = "✌️ " + "✋🏻";
        } else if (i == 2) {
            history.innerHTML = "✌️ " + "✌️";
        } else {
            return "error"
        }
    history.classList.add("match-history");
    matchHistory.appendChild(history);
    
    if (yourScore == 5 || computerScore == 5) {
    nxtRoundBtn.setAttribute("disabled", "");
    } else {
        return "error";
    }
}

prompt("Hi Dear Player! The rule is simple, you just need to reach a score of 5 first in order to win. If you win, you will receive double the money you bet. How much is your bet($)? Enjoy!");