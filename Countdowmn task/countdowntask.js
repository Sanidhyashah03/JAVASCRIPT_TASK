let timer = 10;
let timerInterval;
let paused = false;

const paraElement = document.getElementById("a1");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const stopButton = document.getElementById("stop");

startButton.onclick = function () {
    if (paused == true) {
        paused = false;
        startTimer();
    }
    else {
        startTimer();
    }
}

pauseButton.onclick = function () {
    clearInterval(timerInterval);
    paused = true;
    startButton.disabled = false;
    pauseButton.disabled = true;
};

stopButton.onclick = function () {
    clearInterval(timerInterval);
    timer = 10;
    paraElement.textContent = timer;
    startButton.disabled = false;
    pauseButton.disabled = true;
    stopButton.disabled = true;
};

function startTimer() {
    timerInterval = setInterval(function () {
        if (timer > 0) {
            timer = timer - 1;
            paraElement.textContent = timer;
        } else {
            clearInterval(timerInterval);
        }
    }, 1000);
}
