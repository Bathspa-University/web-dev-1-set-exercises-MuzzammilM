
// Select all elements with the class 'sound'
const sounds = document.querySelectorAll('.sound');

// Iterate over each element with the class 'sound'
sounds.forEach(sound => {
    // Add a click event listener to each element
    sound.addEventListener('click', () => {
        // Create a new Audio object with the source set to the value of the data-sound attribute of the clicked element
        const audio = new Audio(sound.dataset.sound);
        // Play the audio
        audio.play();
    });
});