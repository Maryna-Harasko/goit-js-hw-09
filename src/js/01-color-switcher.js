const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let intervalId = null;
let intervalActive = false;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

startBtn.addEventListener('click', () => {
    if(!intervalActive){
        intervalId = setInterval(() => {
            document.body.style.backgroundColor = getRandomHexColor();
        }, 1000);
        intervalActive = true;
    }
});


stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalActive = false;
});
