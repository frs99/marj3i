//DIV FOR ICON - NAVBAR
var navbarIcon = document.querySelector('.navbar');
var forOpen = document.querySelector('.fa-bars');
var forClose = document.querySelector('.fa-times');
//LIST UL
var headerList = document.querySelector('.headerList');
//BUTTON SUPPORT
var btnSupport = document.querySelector('.a-support');
//BUTTON SHOW MORE
var btnStart = document.querySelector('.start');
//a FROM UL LIST
var clickList = document.querySelectorAll('header .header ul li a');


//To show and hide navbar - RESPONSIVE
function navbar(){
    forOpen.classList.toggle('close');
    forClose.classList.toggle('close');
    headerList.classList.toggle('openList');
    btnSupport.classList.toggle('openSupport');
    btnStart.classList.toggle('ux1');
};

//LINK FOR LOGO
var linkLogo;
document.querySelector(".logo").style.cursor = "pointer";
document.querySelector(".logo").onclick = () => {
  window.location.href = linkLogo;
};


//To hide the menu after click "a" - RESPONSIVE
function hideUl(){
    headerList.classList.toggle('openList');
    forOpen.classList.toggle('close');
    forClose.classList.toggle('close');
    btnSupport.classList.toggle('openSupport');
    btnStart.classList.toggle('ux1');
};

//HEADER LINK
var lnkHome, lnkServc, lnkAbout;
let linksHeader = document.querySelectorAll(".headerList a")
linksHeader[0].href = lnkHome;
linksHeader[1].href = lnkServc;
linksHeader[2].href = lnkAbout;

let lnkHdr = linksHeader.forEach((ele) => {
  if (ele.href.indexOf("none") > 1){
      ele.style.pointerEvents = "none";
  };
});



//a-support
var lnkSupport;
btnSupport.href = lnkSupport;
if (btnSupport.href.indexOf("none") > 1){
  btnSupport.style.pointerEvents = "none";
};

// FOOTER LINK
var linkFtrPrgrm, linkFtrsinfo, linkFtrUxui, linkFtrAdobe, lnkPolicies, lnkContact, facebook;
var linksFooter = document.querySelectorAll(".footer li a");
linksFooter[0].href = linkFtrPrgrm;
linksFooter[1].href = linkFtrsinfo;
linksFooter[2].href = linkFtrUxui;
linksFooter[3].href = linkFtrAdobe;
linksFooter[4].href = lnkAbout;
linksFooter[5].href = lnkPolicies;
linksFooter[6].href = lnkSupport;
linksFooter[7].href = lnkContact;
linksFooter[8].href = facebook;

let linkFtr = linksFooter.forEach((ele) => {
  if (ele.href.indexOf("none") > 1){
      ele.style.pointerEvents = "none";
    };
});
;