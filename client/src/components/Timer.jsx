import React from 'react';

export default function Timer({setShowch, timeRemaining, setTimeRemaining, stop}) {

    var countDownDate = new Date().getTime() + timeRemaining; //Add 15 mins to current time
    let pause = false

    function reset() {
        setShowch("resetFAIL")
        pause = true
        setTimeRemaining(902000)
    }

    function resetAproposito() {
        pause = true
        setTimeRemaining(902000)
        window.location.reload();
    }


    var countdownfunction = setInterval(function () {
        if(stop || pause) return
        
        var now = new Date().getTime();

        var distance = countDownDate - now;
        setTimeRemaining(distance)
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        distance = distance - 1000
        

        if (distance < 0) {
            clearInterval(countdownfunction);
            document.getElementById("countdown1").innerHTML = "0m 0s";
            reset()
            setShowch("resetFAIL")
            return;
        }
        document.getElementById("countdown1").innerHTML = minutes + "m " + seconds + "s ";
    }, 1000);


    return (
        <>
            <div class="timer">
                <div className="timerNum">
                    <p className="">Tiempo restante:</p>
                    <p id="countdown1"></p>
                </div>
                <br />
                <div class="timerNum" id="reset">
                    <span onClick={resetAproposito} className="btnxdas">Reiniciar</span>
                </div>
            </div>
        </>
    )
}