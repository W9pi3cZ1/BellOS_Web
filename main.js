var audio = new Audio("https://fs-im-kefu.7moor-fs1.com/29397395/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1679817184752/ls.mp3");
var btn = document.querySelector("#Btn");
var Time;
var Time2 = new Array(0,0);
var dayTime = Date();
var dayTime2 = new Array(0,0);
var flag = false;
btn.addEventListener('click',() => {
    flag = false;
    Time = document.querySelector("#Time").value
    Time2[0] = parseInt(Time.split(":")[0]);
    Time2[1] = parseInt(Time.split(":")[1]);
    console.log(Time2);
});

function ifTime(){
    dayTime = new Date();
    dayTime2[0] = dayTime.getHours();
    dayTime2[1] = dayTime.getMinutes();
    if(dayTime2[0] == Time2[0] && dayTime2[1] == Time2[1]){
        console.log("true");
        if(!flag){
            audio.load();
            audio.play();
            flag=true;
        }
    }else{
        console.log("false");
    }
}

setInterval(ifTime,1000)
