const numberButtons = document.querySelectorAll(".number");
const display = document.getElementById("display");

const clear = () => {
    display.value = 0;
}

const clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click", clear());


numberButtons.forEach(numberButton => {
    numberButton.addEventListener("click", () => {
        const value = numberButton.dataset.value;

        // IF input is NaN
            // IF it is an operator
                // store
            // ELSE IF it is delete
                // Delete the end of the value
            // ELSE IF clear
                // clear the value

        if (display.value == 0) {
            display.value = value;
        } else {
            display.value += value;
        }
        
    });
});