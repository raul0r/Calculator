// JavaScript Code to Make Your Calculator Functional

// Function to display values on the output screen
// This function takes a value as an argument and displays it on the calculator's output screen.
// If the screen currently displays "0", it replaces it with the new value. Otherwise, it appends the value.
function display(value) {
    const outputScreen = document.getElementById("outputscreen");
    if (outputScreen.value === "0") {
        outputScreen.value = value;
    } else {
        outputScreen.value += value;
    }
}

// Function to clear the output screen
// This function resets the output screen to "0".
function Clear() {
    document.getElementById("outputscreen").value = "0";
}

// Function to delete the last character from the output screen
// This function removes the last character from the output screen.
// If the screen becomes empty, it sets the value back to "0".
function del() {
    const outputScreen = document.getElementById("outputscreen");
    outputScreen.value = outputScreen.value.slice(0, -1);
    if (outputScreen.value === "") {
        outputScreen.value = "0";
    }
}

// Function to perform the calculation
// This function evaluates the mathematical expression displayed on the output screen.
// If there's an error in the calculation (e.g., invalid input), it displays "Error".
function Calculate() {
    try {
        const outputScreen = document.getElementById("outputscreen");
        outputScreen.value = eval(outputScreen.value);
    } catch (err) {
        outputScreen.value = "Error";
    }
}

// Attach event listeners for keyboard support
// This event listener allows the user to interact with the calculator using the keyboard.
document.addEventListener("keydown", function(event) {
    const key = event.key;
    const outputScreen = document.getElementById("outputscreen");

    // Handle number keys and operator keys
    // If the key pressed is a number or an operator, it will be displayed on the output screen.
    if ((key >= 0 && key <= 9) || ["+", "-", "*", "/", ".", "%"].includes(key)) {
        if (outputScreen.value === "0") {
            outputScreen.value = key;
        } else {
            outputScreen.value += key;
        }
    }

    // Handle backspace key
    // If the backspace key is pressed, it deletes the last character on the output screen.
    if (key === "Backspace") {
        del();
    }

    // Handle Enter key for calculating
    // If the Enter key is pressed, it performs the calculation.
    if (key === "Enter") {
        Calculate();
    }

    // Handle Escape key for clearing the screen
    // If the Escape key is pressed, it clears the output screen.
    if (key === "Escape") {
        Clear();
    }
});
