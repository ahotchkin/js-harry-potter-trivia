function mute() {
  if (DOMElements.audio.muted === false) {
    DOMElements.audio.muted = true;
    DOMElements.speaker.src = "./styles/images/mute.png";
  } else {
    DOMElements.audio.muted = false;
    DOMElements.speaker.src = "./styles/images/unmute.png";
  };
}
