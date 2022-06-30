function startSimulator() {
  document.getElementsByClassName("blocker")[0].style.display = "none";
  document.getElementById("blocker_button").style.display = "none";
  setTimeout(function () {
    document.getElementsByClassName("loader")[0].style.display = "block";
  }, 5000);
  setTimeout(function () {
    document.getElementsByClassName("blocker")[0].style.display = "block";
  }, 14000);
  setTimeout(function () {
    document.getElementsByClassName("blocker")[0].style.display = "none";
    setTimeout(function () {
      new Audio("assets/audio/bootaudio.mp3").play();
    }, 2000);
    document.getElementsByClassName("miui_div")[0].style.display = "grid";
    document.getElementsByClassName("xiaomi_div")[0].style.display = "none";
    document.getElementsByClassName("loader")[0].style.display = "none";
  }, 16000);
}
