const timerDisplay = document.querySelector(".display-time");
const stop = document.getElementById("stopBtn");
const start = document.getElementById("startBtn");
const restart = document.getElementById("restartBtn");

let msecs = 0;
let secs = 0;
let mins = 0;

let timerId = null;

function startTimer() {
  msecs++;
  if (msecs == 100) {
    secs++;
    msecs = 0;
  }
  if (secs == 60) {
    mins++;
  }

  let msecsString = msecs < 10 ? `0${msecs}` : msecs;
  let secsString = secs < 10 ? `0${secs}` : secs;
  let minsString = mins < 10 ? `0${mins}` : mins;

  timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecs}`;
}

startBtn.addEventListener("click", function () {
  if (timerId !== null) {
    clearInterval(timerId);
  }
  timerId = setInterval(startTimer, 10);
});
stopBtn.addEventListener("click", function () {
  clearInterval(timerId);
});

restart.addEventListener("click", function () {
  clearInterval(timerId);
  timerDisplay.innerHTML = `00 : 00 :00`;
});
