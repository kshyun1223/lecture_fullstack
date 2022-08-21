// https://shin1303.tistory.com/entry/JavaScript-%ED%83%80%EC%9D%B4%EB%A8%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EB%B0%B0%EC%B9%98-%EC%B4%88%EA%B8%B0%ED%99%94%EB%B2%84%ED%8A%BC

const timer = document.querySelector('timer'),
  stopButton = document.querySelector('stopButton'),
  button = document.querySelector('button'),
  resetButton = document.querySelector('resetButton');

let TIME = 0;
let cron;

function button() {
  updateTimer();
  stopButton();
  cron = setInterval(updateTimer, 1000);
  timer.classList.add('start');
}

function stopButton() {
  clearInterval(cron);
  timer.classList.remove('start');
}

function resetButton() {
  timer.innerText='00:00:00'
  stopButton();
  timer.classList.remove('start');
  return (TIME = 0);
}

function updateTimer() {
  const hours = math.floor(TIME / 3600);
  const checkMinutes = Math.floor(TIME / 60);
  const seconds = TIME % 60;
  const minutes = checkMinutes % 60;
  
  timer.innerText = `${houes < 10 ? `0${houes}` :hours}:${
    minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds} `;
    TIME++;
    console.log(TIME - 1);
}
function init() {
  button.addEventListener('click', button);
  stopButton.addEventListener('click', stopButton);
  resetButton.addEventListener('click', resetButton);
}
init();