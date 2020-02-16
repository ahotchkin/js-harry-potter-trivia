const audio = document.getElementById("audio");
const speaker = document.getElementById("speaker");

function play() {
  audio.play();
}

function mute() {
  if (audio.muted === false) {
    audio.muted = true;
    speaker.src = "./styles/images/mute.png";
  } else {
    audio.muted = false;
    speaker.src = "./styles/images/unmute.png";
  };
}
