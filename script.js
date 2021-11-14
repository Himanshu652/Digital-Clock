let timeEL = document.getElementById('time');
let containerIn = document.querySelector('.container-in');

function digitalClock(){
    let seconds = new Date().getSeconds();
    let minutes = new Date().getMinutes();
    let currentTime = new Date().toLocaleTimeString();
    
    let hours = parseInt(currentTime.slice(0,2));

    if(minutes < 52){
        containerIn.classList.add('sunrise');
        containerIn.classList.remove('night');
    }else{
        containerIn.classList.add('night');
        containerIn.classList.remove('sunrise');
    }
    timeEL.innerHTML = `${hours < 10 ? '0' + hours:hours}:${minutes < 10 ? '0' + minutes:minutes}:${seconds < 10 ? '0' + seconds:seconds}`;
}
setInterval(digitalClock,1000);
