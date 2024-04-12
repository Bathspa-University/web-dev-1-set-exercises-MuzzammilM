const sounds = document.querySelectorAll('.sound');

sounds.forEach(sound => {
    sound.addEventListener('click', () => {
        const audio = new Audio(sound.dataset.sound);
        audio.play();
    });
});
