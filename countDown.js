function getRemainTime(endTime){
	var time = Date.parse(endTime) - Date.parse(new Date());
	var hours = Math.floor(time / (1000 * 60 * 60) % 24);
	var minutes = Math.floor((time / 1000 / 60) % 60);
	var seconds = Math.floor((time / 1000) % 60);
	return{
		'totalTime': time,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}

function showHappy() {
   document.getElementById('happyDiv').style.display = "block";
   document.getElementById('clockdiv').style.display = "none";
}
function turnRed() {
	document.getElementById('secondsid').style.color = "magenta";
}
function InitializeClock(id, endTime){
	var clock = document.getElementById(id);
	var hoursSpan = clock.querySelector('.hours');
	var minutesSpan = clock.querySelector('.minutes');
	var secondsSpan = clock.querySelector('.seconds');
	function updateClock(){
		var remainTime = getRemainTime(endTime);
		
		hoursSpan.innerHTML = ('0' + remainTime.hours).slice(-2);
		minutesSpan.innerHTML = ('0' + remainTime.minutes).slice(-2);
		secondsSpan.innerHTML = ('0' + remainTime.seconds).slice(-2);
		
		if(remainTime.totalTime <= 5000 && remainTime.totalTime > 0){
			turnRed();
		}
		if(remainTime.totalTime <= 0){
			clearInterval(timeinterval);
			showHappy();
		}
	}
	updateClock();
	var timeinterval = setInterval(updateClock, 1000);
	
	
}
var currentTime = Date.parse(new Date());
var deadline = new Date(currentTime + 8 * 1000);
InitializeClock('clockdiv', deadline);
