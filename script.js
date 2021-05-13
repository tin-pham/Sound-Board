const buttonContainer = document.querySelector('.button-container');

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((sound) => {
  const button = document.createElement('button');
  button.classList.add('button');
  button.innerText = sound;
  button.addEventListener('click', () => {
    stopSound();
    document.getElementById(sound).play();
  });
  buttonContainer.appendChild(button);
});

function stopSound() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}
