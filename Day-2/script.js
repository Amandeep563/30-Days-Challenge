const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const milliseconds = document.getElementById('milliseconds');

let startTime, updatedTime, difference, timerInterval;
let running = false;

// Add event listerners to buttons to call repestive functions on click
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

function start() {
    // check if the stopwatch is not already running
    if (!running) {
        startTime = new Date().getTime();
        timerInterval = setInterval(updateTime, 10);
        running = true;
    }
}

function stop() {
    if (running) {
        clearInterval(timerInterval);
        running = false;
        // savedTime = difference;
    }
}

function reset() {
    clearInterval(timerInterval);
    running = false;
    minutes.textContent = '00';
    seconds.textContent = '00';
    milliseconds.textContent = '00';
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const minutesElapsed = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const secondsElapsed = Math.floor((difference % (1000 * 60)) / 1000);
    const millisecondsElapsed = Math.floor((difference % 1000) / 10);

    minutes.textContent = pad(minutesElapsed);
    seconds.textContent = pad(secondsElapsed);
    milliseconds.textContent = pad(millisecondsElapsed);
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}