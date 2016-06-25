var demo_02_02;
(function (demo_02_02) {
    var timerId = -1, interval = 25, ms = 0, seconds = 0, minutes = 0, startTimer = function () {
        if (timerId === -1) {
            timerId = window.setInterval('demo_02_02.turnTimerOn()', interval);
        }
    }, displayTimer = function () {
        document.getElementById('milliseconds').innerHTML = ms.toString();
        document.getElementById('seconds').innerHTML = seconds.toString();
        document.getElementById('minutes').innerHTML = minutes.toString();
    }, pauseTimer = function () {
        window.clearInterval(timerId);
        timerId = -1;
    }, clearTimer = function () {
        pauseTimer();
        ms = 0;
        seconds = 0;
        minutes = 0;
        displayTimer();
    }, init = function (startButton, pauseButton, clearButton) {
        document.getElementById(startButton).
            addEventListener("click", startTimer, false);
        document.getElementById(pauseButton).
            addEventListener("click", pauseTimer, false);
        document.getElementById(clearButton).
            addEventListener("click", clearTimer, false);
        displayTimer();
    };
    function turnTimerOn() {
        ms += interval;
        if (ms >= 1000) {
            ms = 0;
            seconds += 1;
        }
        if (seconds >= 60) {
            ms = 0;
            seconds = 0;
            minutes += 1;
        }
        displayTimer();
    }
    demo_02_02.turnTimerOn = turnTimerOn;
    ;
    window.onload = function () {
        init('startButton', 'pauseButton', 'clearButton');
    };
})(demo_02_02 || (demo_02_02 = {}));
