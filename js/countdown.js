/*

Prompt: Make a Countdown LKTimer to show the time until a given time is reached.

Details: Given a Javascript DateTime object, create a Javascript program
and user interface that does the following:
  - Provide a link to JSFiddle, Codepen, or similar with working code.
  - Displays the hours, minutes, and seconds until the given time in HTML
    - Ex: "XX hours, YY minutes, ZZ seconds remaining"
  - Updates every second to show the remaining time
  - When the time has passed, should show "00 hours, 00 minutes, 00 seconds remaining"
  - For bonus points, make it look nice.

Implementation:
  - set valid date
  - calculate the time remaining
  - covert the time to readable format
  - show decreasing time
  - stop clock when current time is reached
*/

// TO DO - DISPLAY TIME GOING DOWN


window.countdownTimer = window.countdownTimer || {};

(function() {
  const endTime = document.querySelector("input[name='end-time']");

  var startCountDown = function(e){
    e.preventDefault();
    var endHour = document.querySelector('.end-hour').value;
    var endMinute = document.querySelector('.end-minute').value;

    if (endHour == "") {
      endHour = 0;
    } else {
      endHour = parseInt(endHour, 10);
    }
    if (endMinute == "") {
      endMinute = 0;
    } else {
      endMinute = parseInt(endMinute, 10);
    }

    var currentTime = new Date();
    var year = currentTime.getFullYear();
    var month = currentTime.getMonth();
    var day = currentTime.getDate();
    var hours = currentTime.getHours() + endHour;
    var minutes = currentTime.getMinutes() + endMinute;
    var seconds = currentTime.getSeconds()



    console.log("hour:  ", hours)
    console.log("minute:  ", minutes)

    // var endDisplay = endHour.value + " : " + endMinute.value
    var endTimeDisplay = document.querySelector('.end-time')
    var stopTime = new Date(year, month, day, hours, minutes, seconds)
    endTimeDisplay.textContent = stopTime;
  }

  function displayCurrentTime(){
    var todaysDate = new Date;
    var year = todaysDate.getFullYear();
    var month = todaysDate.getMonth();
    var day = todaysDate.getDate();
    var currentTime = document.querySelector('.current-time')

    var futureDate = new Date(year + 1, month, day)
    currentTime.insertAdjacentText('beforeend', todaysDate);
    var deadline = futureDate
    initializeCurrentTimeClock('.current-time', futureDate);
  }


function initializeCurrentTimeClock(className){
    var clock = document.querySelector(className);
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds()

    if (minutes < 10){
        minutes = "0" + minutes
    }
    var timeString = hours + ":" + minutes + " " + seconds + " ";
    if(hours > 11){
        timeString += "PM";
    } else {
        timeString += "AM";
    }
    document.querySelector('.current-time').innerHTML = timeString
}
setInterval(initializeCurrentTimeClock, 1000);

  // function initializeClock(className, endtime){
  //   var clock = document.querySelector(className);
  //   var timeinterval = setInterval(function(){
  //     var t = getTimeRemaining(endtime);
  //     clock.innerHTML = 'days: ' + t.days + '<br>' +
  //                       'hours: '+ t.hours + '<br>' +
  //                       'minutes: ' + t.minutes + '<br>' +
  //                       'seconds: ' + t.seconds;
  //     if(t.total<=0){
  //       clearInterval(timeinterval);
  //     }
  //   },1000);
  // }

  // function getTimeRemaining(endtime){
  //   var t = Date.parse(endtime) - Date.parse(new Date());
  //   var seconds = Math.floor( (t/1000) % 60 );
  //   var minutes = Math.floor( (t/1000/60) % 60 );
  //   var hours = Math.floor( (t/(1000*60*60)) % 24 );
  //   var days = Math.floor( t/(1000*60*60*24) );
  //   return {
  //     'total': t,
  //     'days': days,
  //     'hours': hours,
  //     'minutes': minutes,
  //     'seconds': seconds
  //   };
  // }

  var displayDate = new Date()

  window.countdownTimer.init = function() {
    document.querySelector('.save-end-time').addEventListener('click', startCountDown);
    displayCurrentTime();
  };

})();


