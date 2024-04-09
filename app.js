document.addEventListener("DOMContentLoaded", function() {
    
    const startingMinutes = +prompt("Minutda raqam kiriting:");
    let time = startingMinutes * 60;
    let alert1 = document.getElementById("alert1");
    const countdownEl = document.getElementById("countdown");
    const startBtn = document.getElementById("btn1");
    const stopBtn = document.getElementById("btn2");
    const resetBtn = document.getElementById("btn3");

    let interval = null; 

    function updateCountdown() {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        let seconds = time % 60;

        countdownEl.textContent = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

        if (time <= 10 && time !==0) {
            alert1.classList.add('show');
            countdownEl.style.color = "red";
            alert1.textContent = " Vaqtingiz 10 sekuntdan kam qoldi!!! ";
            alert1.style.display ="block";
            alert1.style.color ="red";
        }else if(time===0){
            countdownEl.style.color = "";
            alert1.style.display ="none";
        }
         else {
            countdownEl.style.color = ""; 
        }
    }

    function startTimer() {
        if (interval === null) { 
            interval = setInterval(() => {
                if (time <= 0) {
                    clearInterval(interval);
                    interval = null; 
                    startBtn.disabled = false; 
                    alert("Your time is up!");
                } else {
                    time--;
                    updateCountdown();
                }
            }, 1000);
        }
        startBtn.disabled = true; 
    }

    stopBtn.disabled = true;
    resetBtn.disabled = true;

    updateCountdown();


    //Start button
    startBtn.addEventListener('click', () => {
        if (time === 0) { 
            time = startingMinutes * 60;  
        }
        startTimer(); 
        stopBtn.disabled = false;
        resetBtn.disabled = false;
        alert1.style.display ="none";
    });


    // Stop button
    stopBtn.addEventListener('click', () => {
        if (interval !== null) {
            clearInterval(interval);
            interval = null; 
            startBtn.disabled = false; 
        }
    });


    // Reset
    resetBtn.addEventListener('click', () => {
        if (interval !== null) {
            clearInterval(interval);
            interval = null;
        }
        time = startingMinutes * 60; 
        updateCountdown(); 
        startBtn.disabled = false; 
        alert1.style.display ="none";
    });
});