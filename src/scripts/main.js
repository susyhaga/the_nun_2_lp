const linksContainer = document.querySelector('.menu__box');


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

$(document).ready(function(){
    $(".btn2").click(function(){
        $(".up_down__hide").slideUp();
    });
    $(".btn1").click(function(){
        $(".up_down__hide").slideDown();
    });
});

