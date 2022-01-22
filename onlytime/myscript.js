function Time(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var pmoram = "AM";

    if(hours  == 0){
        hours=12;
    }
    if(hours > 12){
        hours = hours-12;
        pmoram = "PM";

    }

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds= (seconds <10 ) ? '0' + seconds : seconds;
    
    var time = hours +":"+minutes+":"+seconds+" "+pmoram;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(Time, 1000);


}


Time();
