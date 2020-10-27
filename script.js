let game = {};

game.init = function() {
    setupModeButtons();
    squaresEventListener();
    reset();
}

game.init();

let numOfSquares = 6;
let colours = [];
let pickedColour;
let squares = document.querySelectorAll(".square");
let colourText = document.getElementById("colourDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetBtn = document.getElementById("reset");
let modeBtns = document.querySelectorAll(".mode");
colourText.textContent = pickedColour;

init();

function init() {
    // Mode Buttons Even Listener
    setupModeButtons();
    // Squares Event Listener
    squaresEventListener();
    // Reset
    reset();
}


function reset() {
    colours = generateRandomColours(numOfSquares);
    pickedColour = pickColour();
    colourText.textContent = pickedColour;
    resetBtn.textContent = "New Colours";
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";

    for (let i = 0; i < squares.length; i++) {
        if (colours[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colours[i];
        }
        else {
            squares[i].style.display = "none";
        }
        
    }
    
}

function squaresEventListener() {
    for (let i = 0; i < squares.length; i++) {

        squares[i].addEventListener("click", function() {
            let clickedColour = this.style.backgroundColor;
            if (clickedColour === pickedColour) {
                messageDisplay.textContent = "Correct!";
                changeColours(clickedColour);
                h1.style.backgroundColor = clickedColour;
                resetBtn.textContent = "Play Again?";
            }
            else {
                messageDisplay.textContent = "Try Again";
                this.style.backgroundColor = "rgb(35, 35, 35)";
            }
        });
    }
}

function setupModeButtons() {
    for (let i = 0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener("click", function() {
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
    
            this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
            reset();
        });
    }
}

function pickColour() {
    let randomNum = Math.floor(Math.random() * colours.length);
    return colours[randomNum];
};

function changeColours(colour) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colour;
    }
};

function generateRandomColours(num) {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push(randomColour());
    }
    return arr;

    function randomColour() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        return "rgb(" + r + ", " + g + ", " + b + ")";
    };
};

resetBtn.addEventListener("click", function() {
    reset();
});
