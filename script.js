'use strict';

let watch = document.querySelector('.watch');
let time = document.querySelector('.watch .time');

let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

console.log(start)

console.log(time);


let seconds = 0;
let interval = null;

startBtn.addEventListener('click', startF);
stopBtn.addEventListener('click', stopF);
resetBtn.addEventListener('click', resetF);

function timeStart(){
    seconds++;
    let hrs = Math.floor(seconds/3600);
    let min = Math.floor((seconds -(hrs*3600))/60);
    let secs= seconds%60;


    if(hrs<10){hrs = '0'+hrs};
    if(min<10){min = '0'+min};
    if(secs<10){secs = '0'+secs};

    time.textContent= `${hrs}:${min}:${secs}`;

}

function startF(){
    if (interval){
        return
    }

    interval = setInterval(timeStart,1000);
}
function stopF(){
    clearInterval(interval);
    interval = null;
}
function resetF(){
    stopF();
    seconds=0;
    time.textContent= `00:00:00`;
}
