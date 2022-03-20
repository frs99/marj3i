//DIV FOR ICON - NAVBAR
var navbarIcon = document.querySelector('.navbar-icons');
var forOpen = document.querySelector('.fa-bars');
var forClose = document.querySelector('.fa-times');
//LIST UL
var headerList = document.querySelector('.headerList');
//BUTTON SUPPORT
var btnSupport = document.querySelector('.a-support');
//BUTTON SHOW MORE
var btnStart = document.querySelector('.start');


//To show and hide navbar - RESPONSIVE
function navbar() {
  forOpen.classList.toggle('close');
  forClose.classList.toggle('close');
  headerList.classList.toggle('openList');
  btnSupport.classList.toggle('openSupport');
  btnStart.classList.toggle('ux1');
}

//LINK FOR LOGO
document.querySelector(".logo").style.cursor = "pointer";
document.querySelector(".logo").onclick = () => {
  window.location.href = "/";
};


//To hide the menu after click "a" - RESPONSIVE
// function hideUl() {
//     headerList.classList.toggle('openList');
//     forOpen.classList.toggle('close');
//     forClose.classList.toggle('close');
//     btnSupport.classList.toggle('openSupport');
//     btnStart.classList.toggle('ux1');
// }


/* HOME */
//To show and hide navbar - RESPONSIVE
navbarIcon.onclick = navbar;

//To hide the menu after click "a" - RESPONSIVE
// var i = 0;
// for (i = 0; i < clickList.length; i++){
//     clickList[i].onclick =  hideUl;
// };
// btnSupport.onclick = hideUl;