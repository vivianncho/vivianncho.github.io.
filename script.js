

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtned");

function myFunction1() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

var videoOne = document.getElementById("myVideoOne");
var btnOne = document.getElementById("myBtnedOne");


function myFunction() {
  if (videoOne.paused) {
    videoOne.play();
    btnOne.innerHTML = "Pause";
  } else {
    videoOne.pause();
    btnOne.innerHTML = "Play";
  }
}

