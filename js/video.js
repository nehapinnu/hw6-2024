var video;
var volume;

window.addEventListener("load", function () {
  console.log("Good job opening the window");
  volume = document.querySelector("#volume");
  video = document.querySelector(".video");
  video.loop = false;
  video.autoplay = false;
  updateVolume();
});

document.querySelector("#play").addEventListener("click", function () {
  console.log("Play Video");
  video.play();
  updateVolume();
});

document.querySelector("#pause").addEventListener("click", function () {
  console.log("Pause Video");
  video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
  video.playbackRate *= 0.9;
  console.log("Slow down Video")
  console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
  video.playbackRate /= 0.9;
  console.log("Speed up Video");
  console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
	console.log("Skip ahead");
  if (video.currentTime + 10 > video.duration) {
    video.currentTime = 0;
    console.log("Your current time is " + video.currentTime);
  } else {
    video.currentTime += 10;
  }
  console.log("Your current time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function () {
  if (video.muted) {
    video.muted = false;
    this.textContent = "Mute";
	console.log("Unmute");
  } else {
    video.muted = true;
    this.textContent = "Unmute";
	console.log("Mute");
  }
});

document.querySelector("#slider").addEventListener("input", function () {
  video.volume = this.value / 100;
  updateVolume();
  console.log("The current value is " + video.volume)
});

document.querySelector("#vintage").addEventListener("click", function () {
  video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
  video.classList.remove("oldSchool");
});

function updateVolume() {
  volume.textContent = Math.round(video.volume * 100) + "%";
}