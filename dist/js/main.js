const linksContainer=document.querySelector(".menu__box"),copyText=document.getElementById("myLink"),element=document.querySelector(".copy"),active=document.querySelector(".checked"),buttonCopy=document.querySelector(".button_copy"),gif=document.querySelector("scroll-aparecer"),scream=document.querySelector("animated-word");function closeSideMenu(){document.querySelector("#menu__toggle").click("slow")}function myFunction(){element.classList.toggle("active"),active.classList.toggle("active"),copyText.select(),copyText.setSelectionRange(0,99999),navigator.clipboard.writeText(copyText.value)}linksContainer.addEventListener("click",e=>{e.target.matches(".menu__item")&&(e.preventDefault(),closeSideMenu("slow"),window.location.href=e.target.href)}),$(document).ready(function(){$(".btn2").click(function(){$(".up_down__hide").slideUp()}),$(".btn1").click(function(){$(".up_down__hide").slideDown()})}),buttonCopy.addEventListener("click",e=>{e.preventDefault(),myFunction()});var root=document.documentElement;function boxTop(e){return $(e).offset().top}root.className+=" js",$(document).ready(function(){var o=$(".anime_text"),e=$(window).height(),t=e-e/4;function n(){var e=$(document).scrollTop();o.each(function(){e>boxTop(this)-t&&$(this).addClass("anime-init")})}n(),$(document).scroll(function(){setTimeout(function(){n()},350)})}),$(document).ready(function(){var o=$(".anime_video"),e=$(window).height(),t=e-e/4;function n(){var e=$(document).scrollTop();o.each(function(){e>boxTop(this)-t&&$(this).addClass("anime-init")})}n(),$(document).scroll(function(){setTimeout(function(){n()},350)})});var played=!1;const countdownSound=document.querySelector("audio");$(window).scroll(function(){$("#synopsis").offset().top+350-$(window).height()<$(this).scrollTop()&&0==played&&(countdownSound.preload="auto",countdownSound.play(),played=!0)});var gifShow=!1,removeClass=($(document).scroll(function(){var e=$("#synopsis").offset().top,o=$(window).height(),t=$(this).scrollTop();$(".scroll-aparecer").stop(),e+500-o<t&&0==gifShow?$(window).on("scroll",function(){$(".scroll-aparecer").animate({},1650)}):$(".scroll-aparecer").animate({height:"0"},1650),gifShow=!0}),!0),trailerShow=($(".menu__item").click(function(){$(".scroll-aparecer").toggleClass("open"),gifShow=!(removeClass=!1)}),!1),clickScream=($(".animated-word").click(function(){countdownSound.preload="auto",countdownSound.play(),played=!0}),document.querySelector(".animated-word"));const myTimeout=setTimeout(myScream,5e3);function myScream(){document.querySelector(".click_trailer").style.display="block"}function stopScream(){document.querySelector(".click_trailer").style.display="none"}clickScream.addEventListener("click",e=>{window.location.href=document.querySelector(".scream_trailer"),e.preventDefault(),myScream(),setTimeout(stopScream,2e3),e.preventDefault()});