const linksContainer = document.querySelector('.menu__box');
const copyText = document.getElementById("myLink");
const element = document.querySelector(".copy")
const active = document.querySelector(".checked")
const buttonCopy = document.querySelector(".button_copy")
const gif=document.querySelector('scroll-aparecer');


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

var root = document.documentElement;
root.className += ' js';

function boxTop(idBox) {
	var boxOffset = $(idBox).offset().top;
	return boxOffset;
}

$(document).ready(function() {
	var $target = $('.anime_text'),
			animationClass = 'anime-init',
			windowHeight = $(window).height(),
			offset = windowHeight - (windowHeight / 4);

	function animeScroll() {
		var documentTop = $(document).scrollTop();
		$target.each(function() {
			if (documentTop > boxTop(this) - offset) {
				$(this).addClass(animationClass);
			} 
		});
	}
	animeScroll();

	$(document).scroll(function() {
		setTimeout(function() {animeScroll()}, 350);
	});
});
$(document).ready(function() {
	var $target = $('.anime_video'),
			animationClass = 'anime-init',
			windowHeight = $(window).height(),
			offset = windowHeight - (windowHeight / 4);

	function animeScroll() {
		var documentTop = $(document).scrollTop();
		$target.each(function() {
			if (documentTop > boxTop(this) - offset) {
				$(this).addClass(animationClass);
			}
		});
	}
	animeScroll();

	$(document).scroll(function() {
		setTimeout(function() {animeScroll()}, 350);
	});
});

var played = false;

$(window).scroll(function() {
    var elemTop = $('#trailer').offset().top, 
    elemHeight = $('#trailer').outerHeight(), 
    windowHeight = $(window).height(),
    windowScroll = $(this).scrollTop();
    var countdownSound = new Audio('/dist/images/audio/scream-noise-142446.mp3');

    if( windowScroll > (elemTop + 500 - windowHeight) && played == false) {
    countdownSound.play();
    played=true;
    }
});

var gifShow = false;
$(document).scroll(function(){
        var elemTop = $('#trailer').offset().top, 
        elemHeight = $('#trailer').outerHeight(), 
        windowHeight = $(window).height(),
        windowScroll = $(this).scrollTop();


    $('.scroll-aparecer').stop();
    if(windowScroll > (elemTop + 500 - windowHeight) && gifShow  == false) {
        $(window).on('scroll', function() {
            $('.scroll-aparecer').animate({
          }, 1500); /*Defina aqui o tempo em milisegundos */
        });
        }else{
            $('.scroll-aparecer').animate({
            height:"0"
          },1550); /*Defina aqui o tempo em milisegundos */
        }
    gifShow=true;

});
