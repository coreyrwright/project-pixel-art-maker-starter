/**
 * @description This listens for a "submit" event by the user in the 
 * choose grid size form, then calls the submit form funtion.
 */

document.getElementById("sizePicker").onsubmit = function () {
    submitForm();
};

/**
 * @description Function submitForm() takes user input from the html form
 * to create user defined canvas size.
 * Passes the user input for canvas size to the makeGrid() function.
 */

function submitForm(){
    event.preventDefault();
    const gridHeight = (document.getElementById("inputHeight").value);
    const gridWidth = (document.getElementById("inputWidth").value);
    makeGrid(gridHeight, gridWidth);
}

/**
 * @description Function makes grid (technically a table) based on user input
 * @param {number from user form} gridHeight 
 * @param {number from user form} gridWidth 
 */

function makeGrid(gridHeight, gridWidth) {
    const canvas = document.getElementById("pixelCanvas");
    const canvasGrid = document.createElement("tbody");

    for (let i = 0; i < gridHeight; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < gridWidth; j++) {
            const cell = document.createElement("td");
        row.appendChild(cell);
        };
    canvasGrid.appendChild(row);
    };

    canvas.innerHTML = ""; //Clears the current grid when user clicks submit.
    canvas.appendChild(canvasGrid); // Creates a new grid.
    addColor(); /** After creating the grid, calls the color function 
    to let user color the grid. */
}

/**
 * @description Function addColor() lets user color grid that was created.
 * @description For the event listener, important to use "mousedown", 
 * otherwise, an entire row or the whole grid can be colored when user drags
 * mouse while it is clicked.
 */

function addColor() {
    document.getElementById("pixelCanvas").addEventListener("mousedown",
    function (event) {
        const cell = event.target;
        const color = colorPicker.value;
        cell.style.backgroundColor = color;
    })
}

/**
 * @description This sets the initial user grid to be a nice 20x20 grid
 * so that user can begin making art immediately.
 * @description This will be over-riden by future user grid size input.
 */

makeGrid(20, 20);