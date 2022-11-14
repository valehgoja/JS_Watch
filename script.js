//StopWatch
let startStopWatchbtn = document.querySelector(".startStopWatch");
let stopWatchTimer = document.querySelector(".stopWatchTimer");
let resetStopWatch = document.querySelector(".resetStopWatch");

let StopWatchSecond = 0;
let StopWatchMilliSecond = 0;
let StopWatchMinute = 0;
stopWatchTimer.innerHTML = `${StopWatchMinute}:${StopWatchSecond}.${StopWatchMilliSecond}`;
let starter = true;
resetStopWatch.disabled = true;
let stopperStopWatch = null;
startStopWatchbtn.addEventListener("click", function start() {
  starter = true;
  stopperStopWatch = setInterval(function () {
    if (starter) {
      stopWatchTimer.innerHTML = `${StopWatchMinute} : ${StopWatchSecond}.${StopWatchMilliSecond}`;

      if (StopWatchMilliSecond <= 100) {
        StopWatchMilliSecond++;
      } else {
        StopWatchMilliSecond = 0;
      }

      if (StopWatchMilliSecond == 100) {
        StopWatchSecond++;
      }

      if (StopWatchSecond == 60) {
        StopWatchMinute++;
        StopWatchSecond = 0;
      }
      if (
        StopWatchMinute == 59 &&
        StopWatchSecond == 59 &&
        StopWatchMilliSecond == 100
      ) {
        StopWatchSecond = 0;
        StopWatchMilliSecond = 0;
        StopWatchMinute = 0;
      }
    }
  }, 10);
  startStopWatchbtn.disabled = true;
  resetStopWatch.disabled = false;
});

resetStopWatch.addEventListener("click", function () {
  starter = false;
  StopWatchSecond = 0;
  StopWatchMilliSecond = 0;
  StopWatchMinute = 0;
  stopWatchTimer.innerHTML = `${StopWatchMinute}.${StopWatchSecond}.${StopWatchMilliSecond}`;
  startStopWatchbtn.disabled = false;
  resetStopWatch.disabled = true;
  clearInterval(stopperStopWatch);
});

//NowClock

setInterval(function () {
  let nowClock = document.querySelector(".nowClock");

  let date = new Date();
  let seconds = date.getSeconds();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  nowClock.innerHTML = `${hours}:${minutes}:${seconds}`;
}, 1);

//Alarm

let alarmMinute = document.querySelector(".alarm_minute");
let alarmSecond = document.querySelector(".alarm_second");
let startAlarm = document.querySelector(".startAlarm");
let resetAlarm = document.querySelector(".stopAlarm");
let mySound = document.querySelector("audio");
resetAlarm.disabled = true;
alarmMinute.value = 0;
alarmSecond.value = 0;
let stoperAlarm = null;
startAlarm.addEventListener("click", function () {
  if (alarmSecond.value == 0 && alarmMinute.value == 0) {
    alert("Add second or minute");
  } else {
    resetAlarm.disabled = false;
    startAlarm.disabled = true;
    stoperAlarm = setInterval(function () {
      if (alarmSecond.value == 0 && alarmMinute.value == 0) {
        mySound.play();
      } else {
        if (alarmSecond.value < 60 && alarmMinute.value < 60) {
          if (alarmSecond.value == 0 && alarmMinute.value > 0) {
            alarmMinute.value--;
            alarmSecond.value = 60;
          }
          alarmSecond.value--;
        }
      }
    }, 1000);
  }
});

resetAlarm.addEventListener("click", function () {
  startAlarm.disabled = false;
  resetAlarm.disabled = true;
  alarmMinute.value = 0;
  alarmSecond.value = 0;
  clearInterval(stoperAlarm);
});
