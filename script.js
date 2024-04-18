/*------------------mode switching------------*/
function light(){


    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        mode.src = "images/switch.png";
        document.querySelector(".light").innerHTML ="Dark Mode";
    }
    else{
        mode.src = "images/switch black.png";
        document.querySelector(".light").innerHTML="Light Mode"
    }
 }

var mode = document.querySelector("#mode");
 mode.onclick = function (){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        mode.src = "images/switch.png";
        document.querySelector(".light").innerHTML ="Dark Mode";

    }
    else{
        mode.src = "images/switch black.png";
        document.querySelector(".light").innerHTML="Light Mode"
    }
 }
/*--------------------------video play------------------------*/

function openPopup(videoSrc = 'images/my website video.mp4') {
    var popup = document.getElementById('videoPopup');
    var video = document.getElementById('popupVideo');
    video.src = videoSrc;
    popup.style.display = 'block';
    video.play();
}

function closePopup() {
    var popup = document.getElementById('videoPopup');
    var video = document.getElementById('popupVideo');
    popup.style.display = 'none';
    video.pause(); // Pause the video when the popup is closed
}
/*-------------------------hamburger nav----------------------------*/
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  /*------------------------------------lightmode hamburger---------------------------------*/
  function lime(){


    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        mode.src = "images/switch.png";
        document.querySelector(".lantern").innerHTML ="Dark Mode";
    }
    else{
        mode.src = "images/switch black.png";
        document.querySelector(".lantern").innerHTML="Light Mode"
    }
 }
