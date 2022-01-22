var button = document.querySelector("button");
var a;

function Time() {
    a= 1;
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (hours == 0){
        hours =12;
    }
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes <10) ? '0' + minutes : minutes;
    seconds = (seconds<10) ? '0' + seconds: seconds;

    var time = hours +":"+minutes+":"+seconds;
    document.getElementById("datetime").innerText = time;
    document.getElementById("datetime").textContent = time;
    refreshing=setTimeout(Time, 1000);
}
function datetime(){
    a=0;
    var date = new Date();
    var daynum = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    month =month +1;
    var days = daynum+'.'+month+'.'+year;
    document.getElementById("datetime").innerText = days;
    document.getElementById("datetime").textContent = days;
}

button.onclick = function change(){
    if (a==0){
        Time();
        document.getElementById("Text").innerHTML = "Time";
    }else{
        datetime();
        clearTimeout(refreshing);
        document.getElementById("Text").innerHTML = "Date";
    }
    
}
datetime();
document.getElementById("Text").innerHTML = "Date";