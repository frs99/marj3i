/* HOME */
//To show and hide navbar - RESPONSIVE
navbarIcon.onclick = navbar;

//To hide the menu after click "a" - RESPONSIVE
for (i = 0; i < clickList.length; i++){
    clickList[i].onclick =  hideUl;
};
btnSupport.onclick = hideUl;

