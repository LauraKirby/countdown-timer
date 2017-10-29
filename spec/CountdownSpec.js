describe('some test that needs a fixture', function(){
  beforeEach(function(){
    var fixture = '<p>Current time: <span class="current-time"></span></p>' +
                  '<button class="primary-btn save-end-time" >Start countdown</button>' +
                  '<input type="text" name="end-hour">' +
                  '<input type="text" name="end-minute">';

    document.body.insertAdjacentHTML('afterbegin', fixture);
  });

  afterEach(function(){
    document.body.remove(document.querySelector('save-end-time'));
  });

  beforeEach(function() {
    window.countdownTimer.init();
  });

  // it('should have a button', function(){
  //   var button = document.querySelector("button");
  //   expect(button.innerText).toBe('Start countdown');
  // });

  it('should display the current time', function(){
    var currentTime = document.querySelector(".current-time");
    var todaysDate = new Date;
    expect(currentTime.innerText).toBe(todaysDate);
  });
});