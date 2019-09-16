TweenMax.from(".logo a", 3, {opacity: 0, scale: 1.2, ease: SlowMo.easeOut});
TweenMax.from(".menu a", 3, {opacity: 0, scale: 1.2, ease: SlowMo.easeOut});
TweenMax.from(".landing h1", 2, {opacity: 0, scale: 2, ease: SlowMo.easeOut});

var t = new TimelineMax({repeat: 1000, ease: Power4.easeOut});
t.to(".arrow",.7, {y: 20});
t.to(".arrow", .7, {y: 0, ease: SlowMo.easeIn});
$(window).scroll(function(){
    var scroll = $(this).scrollTop();
    if(scroll > 10){
        $("nav").addClass("navBar");
        $(".menu a").addClass("sgin");
    }
    else{
        $("nav").removeClass("navBar");
        $(".menu a").removeClass("sgin");
    }
    if(scroll > 400){
        TweenMax.to(".clip1", 3, {y: -100, ease: Elastic.easeOut});
        TweenMax.to(".clip2", 3, {y: -60, ease: Elastic.easeOut, delay: .3});
    }
    if(scroll > 600){
        TweenMax.to(".text", 3, {opacity: 1,scale: 1.2, ease: Elastic.easeOut});
    }
});
var index = 0;
slideShow();
function slideShow(){
    var slides = document.querySelectorAll(".exp img");
    for(var i = 0; i < slides.length;  i++)
    {
        slides[i].style.display = "none";
    }
    index++;
    if(index > slides.length){
        index = 1;
    }
    slides[index - 1].style.display = "block";
    setTimeout(slideShow, 6000);
}

