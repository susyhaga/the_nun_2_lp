const linksContainer = document.querySelector('.menu__box');
const copyText = document.getElementById("myLink");
const element = document.querySelector(".copy")
const active = document.querySelector(".checked")
const buttonCopy = document.querySelector(".button_copy")


linksContainer.addEventListener('click', (e) => {
    if (e.target.matches('.menu__item')) {
    // disable default behavior
    e.preventDefault();

    // close the side-bar menu
    closeSideMenu('slow');

    // change the location
    window.location.href = e.target.href;
    }
});

function closeSideMenu() {
    const sideMenuToggle = document.querySelector('#menu__toggle'); //input
    sideMenuToggle.click('slow');
}
//slideup slidedown
$(document).ready(function(){
    $(".btn2").click(function(){
        $(".up_down__hide").slideUp();
    });
    $(".btn1").click(function(){
        $(".up_down__hide").slideDown();
    });
});

//Copy

buttonCopy.addEventListener('click', (e) => {
    e.preventDefault();

    myFunction();
});

function myFunction() {
    element.classList.toggle('active');
    active.classList.toggle('active');


    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

}

