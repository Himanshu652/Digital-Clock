let timeEL = document.getElementById('time');
let bodyEl = document.body;

function digitalClock(){
    let seconds = new Date().getSeconds();
    let minutes = new Date().getMinutes();
    let currentTime = new Date().toLocaleTimeString();
    
    let hours = parseInt(currentTime.slice(0,2));

    if(hours < 18){
        bodyEl.classList.add('sunrise');
        bodyEl.classList.remove('night');
    }else{
        bodyEl.classList.add('night');
        bodyEl.classList.remove('sunrise');
    }
    timeEL.innerHTML = `${hours < 10 ? '0' + hours:hours}:${minutes < 10 ? '0' + minutes:minutes}:${seconds < 10 ? '0' + seconds:seconds}`;
}
setInterval(digitalClock,1000);
