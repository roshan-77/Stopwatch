var time = document.querySelector(".time")
var sec = 0;
var hrs = 0;
var min = 0;
var milsec = 0;
var intervalID = 0;
var btnStatus = "stop";

function Start(){
    if(btnStatus === "stop"){
        intervalID = setInterval(updateDisplay, 10);
        btnStatus = "start"
    }
}

function Stop(){
    clearInterval(intervalID)
    btnStatus = "stop"
}

function Clear(){
    clearInterval(intervalID)
    clearNumbers()
    time.textContent = "00:00:00.00"
    btnStatus = "stop"
}

function updateDisplay(){
    if(milsec>98){
        if(sec>58){
            min++
            sec= (-1)
            if(min>58){
                hrs++;
                min=(-1)
            }
        }
        sec++
        milsec= (-1)
    }
    time.textContent = `${formatTime(hrs)}:${formatTime(min)}:${formatTime(sec)}.${formatTime(milsec)}`
    milsec++;
}

function formatTime(value){
    return value<10 ? `0${value}`:value
}

function clearNumbers(){
    sec = 0;
    hrs = 0;
    min = 0;
    milsec = 0;
}