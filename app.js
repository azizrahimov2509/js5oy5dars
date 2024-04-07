const startingMinutes = parseInt(prompt("Minutda raqam kiriting va boshlash uchun 'OK' tugmaisi bosing!"));
let time = startingMinutes*60;
const countdownEl = document.getElementById("countdown");
const startBtn = document.getElementById("btn1");
const stopBtn = document.getElementById("btn2");
const resetBtn = document.getElementById("btn3");


if(startingMinutes>60){
  alert("Bu 1 soatdan ko'proq!");
  clearInterval(clicker)
} 

let interval;

let remainingTime = 0; 


startBtn.disabled = true;

 let clicker = startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
   
    if (remainingTime === 0) { 
        time = startingMinutes * 60;
    } else { 
        time = remainingTime;
    }
    updateCountdown();
});


stopBtn.addEventListener('click', () => {
    startBtn.disabled = false;
    clearInterval(interval);
    remainingTime = time;
});


resetBtn.addEventListener('click', () => {
    startBtn.disabled = false;
    clearInterval(interval);
    countdownEl.textContent = "00:00";
    remainingTime = 0; 
});




function updateCountdown() {
            const minutes = Math.floor(time / 60);
            let seconds = time % 60;

            countdownEl.textContent = `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`; 


    interval = setInterval(() => {

      if (time <=0) {
        startBtn.disabled = false;
        clearInterval(interval);
        countdownEl.textContent = "00:00";
        alert("Your time is up!");
        }else{
        time--;
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        countdownEl.textContent = `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

      }
        
       
    }, 1000); 
}

updateCountdown();

