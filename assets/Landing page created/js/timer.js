function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.innerHTML = "<span class='con-time-block'>" + minutes + "</span>:<span class='con-time-block'>" + seconds + "</span>";

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function() {
    var fiveMinutes = 30 * 13, display = document.querySelector('#timer');
    startTimer(fiveMinutes, display);
};
