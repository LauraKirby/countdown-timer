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

// 1. select input
// 2. add end-time to timer controller
// 3. calculate the countdown
// 4. display the countdown in the UI

// Timer Controller - keep track of the times times that a person
var timeController = (function(){
  var startTime = function(){
    this.time = new Date();
    this.hour = this.time.getHours();
    this.minute = this.time.getMinutes();
    this.seconds = this.time.getSeconds();
  };

  var endTime = function(minute, hour){
    this.minute = minute;
    this.hour = hour;
    this.second = 0;
  };

  var data = {
    allTimes: {
      starting: [],
      ending: []
    }
  };

  // allow other modules to add a new item to data structure

  return {
    currentTime: function(){
      var newStartTime = new startTime();
      timeString = newStartTime.hour + ":" + newStartTime.minute;
      return timeString;
    },

    addEndTime: function(endMinute, endHour) {
      var newEndTime, newStartTime;
      newEndTime = new endTime(endMinute, endHour);
      newStartTime = new startTime();
      console.log("new end time: ", newEndTime);

      data.allTimes.starting.push(newStartTime);
      data.allTimes.ending.push(newEndTime);
      return newEndTime;
    },

    testing: function(){
      console.log(data);
    }
  };
})();

// User Interface Controller - create functionality for the UI
var UIController = (function(){
  // allows us to store the css selector strings in one place
  var domStrings = {
    inputHour: '.end-hour',
    inputMinute: '.end-minute',
    endTimeBtn: '.add-end-time',
    currentTime: '.current-time',
    timerEnd: 'end-time-description'
  };

  return {
    getInput: function(){
      return {
        hour: document.querySelector(domStrings.inputHour).value,
        minute: document.querySelector(domStrings.inputMinute).value
      };
    },

    getDomStrings: function(){
      return domStrings;
    },

    addListTime: function(){
      // Create HTML string with placeholder
      // replace placeholder with actual data
      // insert the html into the DOM
    },
  };

})();

// Global app controller
// make controller only have function

var controller = (function(timeCtrl, UICtrl){
  var setupEventListeners = function(){
    var domStrings = UICtrl.getDomStrings();

    document.querySelector(domStrings.currentTime).innerHTML = timeCtrl.currentTime();
    document.querySelector(domStrings.endTimeBtn).addEventListener('click', ctrlAddEndTime);
  };

  var ctrlAddEndTime = function(e) {
    e.preventDefault();
    var input, newEndTime;

    input = UICtrl.getInput();
    newEndTime = timeCtrl.addEndTime(input.minute, input.hour);
    console.log(input);
  };



  // create a public 'init' function
  return {
    init: function(){
      console.log('init func');
      setupEventListeners();
    }
  };
})(timeController, UIController);


controller.init();
