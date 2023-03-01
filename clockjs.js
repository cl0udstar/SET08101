function showTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();

    if(hrs < 10){
        hrs = "0" + hrs
    }

    if(min < 10){
        min = "0" + min
    }

    if(sec < 10){
        sec = "0" + sec
    }
    
    document.getElementById('hours').innerHTML = hrs
    document.getElementById('minutes').innerHTML = min
    document.getElementById('seconds').innerHTML = sec
}

setInterval(showTime, 10);