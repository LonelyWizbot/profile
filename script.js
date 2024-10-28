const button = document.getElementById('soundButton');
const sound = document.getElementById('soundEffect');

// Add click event listener to the button
button.addEventListener('click', () => {
  sound.play();
});
