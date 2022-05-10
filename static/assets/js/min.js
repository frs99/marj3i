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

//TO TOP
//Get the button:
// totop = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     totop.style.display = "block";
//   } else {
//     totop.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// totop.onclick = function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }