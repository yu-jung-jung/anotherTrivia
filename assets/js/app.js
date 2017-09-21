//timer

document.getElementById('timer').innerHTML =
  03 + ":" + 00;

startTimer();

function startTimer() {

  var presentTime = document.getElementById('timer').innerHTML;

  var timeArray = presentTime.split(/[:]+/);

  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));

  if(m<0){alert('time out')}
  
  document.getElementById('timer').innerHTML = m + ":" + s;

  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {

  if (sec < 10 && sec >= 0) {sec = "0" + sec}; 
  if (sec < 0) {sec = "59"};
  return sec;
}

//set answer for quiz


var answers = new Array(5);
answers[0] = "Priates of the Pancreas";
answers[1] = "He wanted a clean start"
answers[2] = "I am in great pain"
answers[3] = "Scary Brandon";
answers[4] = "20 years";

