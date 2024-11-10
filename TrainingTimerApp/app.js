let timer;
let countdownTime;
let isRunning = false;
let currentPhase = 'idle';
let roundCount = 0;
let audio = new Audio('data:audio/wav;base64,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');

const timeDisplay = document.getElementById('timeDisplay');
const statusDisplay = document.getElementById('statusDisplay');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateStatus(status) {
    statusDisplay.textContent = status;
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    roundCount = 0;
    startReadyPhase();
}

function startReadyPhase() {
    currentPhase = 'ready';
    countdownTime = 5;
    updateDisplay(countdownTime);
    updateStatus('Ready');

    timer = setInterval(() => {
        countdownTime--;
        updateDisplay(countdownTime);
        audio.play();

        if (countdownTime === 0) {
            clearInterval(timer);
            startTrainingPhase();
        }
    }, 1000);

    keepScreenAwake();
}

function startTrainingPhase() {
    currentPhase = 'training';
    countdownTime = 60;
    updateDisplay(countdownTime);
    updateStatus('Training');

    timer = setInterval(() => {
        countdownTime--;
        updateDisplay(countdownTime);

        if(countdownTime < 6 && countdownTime > 0)
        {
            audio.play();
        }

        if (countdownTime === 0) {
            clearInterval(timer);
            audio.play();
            roundCount++;
            if (roundCount < 2) {
                startPausePhase();
            } else {
                finishWorkout();
            }
        }
    }, 1000);
}

function startPausePhase() {
    currentPhase = 'pause';
    countdownTime = 15;
    updateDisplay(countdownTime);
    updateStatus('Pause');

    timer = setInterval(() => {
        countdownTime--;
        updateDisplay(countdownTime);

        if(countdownTime < 6 && countdownTime > 0)
        {
            audio.play();
        }

        if (countdownTime === 0) {
            clearInterval(timer);
            audio.play();
            startTrainingPhase();
        }
    }, 1000);
}

function finishWorkout() {
    isRunning = false;
    releaseScreenWake();
    updateStatus('Fertig');
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
    releaseScreenWake();
    updateStatus('Gestoppt');
}

function resetTimer() {
    stopTimer();
    updateDisplay(0);
    updateStatus('');
    currentPhase = 'idle';
    roundCount = 0;
}

function keepScreenAwake() {
    if ('wakeLock' in navigator) {
        navigator.wakeLock.request('screen').then(lock => {
            wakeLock = lock;
        });
    }
}

function releaseScreenWake() {
    if (wakeLock !== null) {
        wakeLock.release();
        wakeLock = null;
    }
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

// Initialisierung
updateDisplay(0);
updateStatus('');