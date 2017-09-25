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



window.countdownTimer = window.countdownTimer || {};

(function() {
  const endTime = document.querySelector("input[name='end-time']");

  var startCountDown = function(e){
    e.preventDefault();
    var endHour = document.querySelector('.end-hour')

    var endMinute = document.querySelector('.end-minute')
    var endDisplay = endHour.value + " : " + endMinute.value
    var endTimeDisplay = document.querySelector('.end-time-description')
    endTimeDisplay.insertAdjacentText('beforeend', endDisplay);
  }


  window.countdownTimer.init = function() {
    document.querySelector('.save-end-time').addEventListener('click', startCountDown);
  };

})();


