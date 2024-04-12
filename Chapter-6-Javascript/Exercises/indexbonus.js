// Array of randomly generated RGB colors
const colors = generateRandomColors(3);
// Index of the correct color
let correctColorIndex = Math.floor(Math.random() * 3);
// Player's score
let score = 0;
// Player's remaining lives
let lives = 3;

// DOM elements
const rgbValue = document.getElementById('rgbValue');
const colorOptions = document.getElementById('colorOptions');
const message = document.getElementById('message');
const resetButton = document.getElementById('resetButton');

// Update colors and initialize game
updateColors();

// Event listener for color options
colorOptions.addEventListener('click', function(e) {
    if (e.target.classList.contains('colorOption')) {
        const clickedColorIndex = Array.from(colorOptions.children).indexOf(e.target);
        if (clickedColorIndex === correctColorIndex) {
            score++;
            message.textContent = 'Correct!';
        } else {
            lives--;
            message.textContent = 'Incorrect!';
        }
        if (lives === 0) {
            endGame();
        } else {
            updateColors();
        }
    }
});

// Event listener for reset button
resetButton.addEventListener('click', function() {
    score = 0;
    lives = 3;
    updateColors();
    message.textContent = '';
});

// Update colors and display RGB value
function updateColors() {
    correctColorIndex = Math.floor(Math.random() * 3);
    const correctColor = colors[correctColorIndex];
    rgbValue.textContent = `RGB: ${correctColor}`;
    colorOptions.innerHTML = '';
    for (let i = 0; i < colors.length; i++) {
        const colorOption = document.createElement('div');
        colorOption.classList.add('colorOption');
        colorOption.style.backgroundColor = colors[i];
        colorOptions.appendChild(colorOption);
    }
}

// End the game and display final score
function endGame() {
    message.textContent = `Game Over! Score: ${score}`;
    rgbValue.textContent = '';
}

// Generate an array of num random RGB colors
function generateRandomColors(num) {
    const colorsArr = [];
    for (let i = 0; i < num; i++) {
        const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        colorsArr.push(color);
    }
    return colorsArr; 
}

