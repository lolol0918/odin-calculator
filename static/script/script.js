const numberButtons = document.querySelectorAll(".number");
const display = document.getElementById("display");
const clearBtn = document.getElementById("clear");
const deleteButton = document.getElementById("backspace");

const clear = () => {
    display.value = 0;
}

const backspace = () => {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        clear();
    }  
} 


deleteButton.addEventListener("click", backspace);

clearBtn.addEventListener("click", clear);


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