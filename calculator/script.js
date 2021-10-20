const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");

function sendNumberValue(number) {
    calculatorDisplay.textContent === "0"
        ? (calculatorDisplay.textContent = number)
        : (calculatorDisplay.textContent += number);
}

function sendOperatorValue(operator) {
    calculatorDisplay.textContent += operator;
}

function addDecimal() {
    // If no decimal, add one
    if (!calculatorDisplay.textContent.includes(".")) {
        calculatorDisplay.textContent += ".";
    }
}

// Add Event Listener for numbers, operators, decimal buttons
inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener("click", () => sendNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains("operator")) {
        inputBtn.addEventListener("click", () => sendOperatorValue(inputBtn.value));
    } else if (inputBtn.classList.contains("decimal")) {
        inputBtn.addEventListener("click", addDecimal);
    }
});

// Reset dispaly
function resetAll() {
    calculatorDisplay.textContent = "0";
}

// Event Listener
clearBtn.addEventListener("click", resetAll);
