window.onload = function () {
    let seconds = 0;
    let tens = 0;
    let appendTens = document.getElementById('tens')
    let appendSeconds = document.getElementById('seconds')

    let btnStart = document.getElementById('btnStart');
    let btnStop = document.getElementById('btnStop');
    let btnReset = document.getElementById('btnReset');

    let interval;
    /*
    Add event listners
     */
    btnStart.addEventListener('click', function (){
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    })
    btnStop.addEventListener('click', function (){
        clearInterval(interval);
    })

    btnReset.addEventListener('click', function (){
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    })

    function startTimer(){
        tens++;

        if (tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9){
            appendTens.innerHTML = tens;
        }
        if (tens > 99){
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;

        }
        if (seconds > 0){
            appendSeconds.innerHTML = seconds;
        }

    }
}