gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);



/* Автобусы */
var bus = $('#bus'), 
heli_fly = $('.heli_fly'),
heli_land = $('.heli_land'),
heli_stopped = $('.heli_stopped'),
busTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#bus_trigger",
    markers: false,
    start: "top 50%"
   }
 });
busTimeline
.set(".bus_title", {display: "none"}, 0)
.set(heli_stopped, {display: "none"}, 0)
.set(heli_land, {display: "none"}, 0)
.from(bus, {opacity: 0, duration: 1, ease: "power2"}, 0)
.to(bus, {top: "42%", left: "76%", duration: 3, ease: "power2"}, 0)
.to(bus, {top: "48%", duration: 3, ease: "power2"})
.to(heli_fly, {display: "none"})
.to(heli_land, {display: "block"})
.set(".bus_title1", {display: "flex"})
.to(".bus_title1", {y: -50, opacity: 1, duration: 2, ease: "back"})
.to(".bus_title1", {y: 0, opacity: 0, duration: 1, ease: "power2"})
.set(".bus_title1", {display: "none"})
.to(heli_land, {display: "none"})
.to(heli_fly, {display: "block"})
.to(bus, {top: "42%", duration: 3, ease: "power2"})
.to(bus, {left: "-50%", top: "67%", duration: 3, ease: "power2"})
.to(bus, {opacity: 0, duration: 1,}, "-=2.5")

.set(bus, {opacity: 1})
.set(bus, {left: "100%", top: "30%"})
.to(bus, {top: "42%", left: "76%", duration: 3, ease: "power2"})
.to(bus, {top: "48%", duration: 3, ease: "power2"})
.to(heli_fly, {display: "none"})
.to(heli_land, {display: "block"})
.set(".bus_title2", {display: "flex"})
.to(".bus_title2", {y: -50, opacity: 1, duration: 2, ease: "back"})
.to(".bus_title2", {y: 0, opacity: 0, duration: 1, ease: "power2"})
.set(".bus_title2", {display: "none"})
.to(heli_land, {display: "none"})
.to(heli_fly, {display: "block"})
.to(bus, {top: "42%", duration: 3, ease: "power2"})
.to(bus, {left: "-50%", top: "40%", duration: 5, ease: "power2"})
.to(bus, {opacity: 0, duration: 1,}, "-=4")

.set(bus, {opacity: 1})
.set(bus, {left: "100%", top: "30%"})
.to(bus, {top: "42%", left: "76%", duration: 3, ease: "power2"})
.to(bus, {top: "48%", duration: 3, ease: "power2"})
.to(heli_fly, {display: "none"})
.to(heli_land, {display: "block"})
.set(".bus_title3", {display: "flex"})
.to(".bus_title3", {y: -50, opacity: 1, duration: 2, ease: "back"})
.to(".bus_title3", {y: 0, opacity: 0, duration: 1, ease: "power2"})
.set(".bus_title3", {display: "none"})
.to(heli_land, {display: "none"})
.to(heli_stopped, {display: "block"});
/* Автобусы */




var copter = $('#copter'),
    shad = $('#coptshadow'),
    mcopter = $('#mcopter'),
    mshad = $('#mcoptshadow'),
    copterTimeline = gsap.timeline();
    copterTimeline.to([copter,shad], {
    motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 0.5],
        autoRotate: false
    },
    transformOrigin: "50% 50%",
    duration: 40,
    yoyo: true,
    ease: "power1.inOut",
    repeat:-1
  }, 0);

  copter.hover(function (){
    copterTimeline.pause();
  },function(){
    copterTimeline.play();
});


/* Автобусы */
var bus2 = $('#bus2'),
bus3 = $('#bus3'),
busTimeline = gsap.timeline({
scrollTrigger: {
trigger: "#bus_trigger",
markers: false,
start: "top 50%"
}
});
busTimeline
.from(bus2, {opacity: 0, duration: 1, ease: "power2"}, 1)
.from(bus2, {x: -480, y: -250, duration: 8, ease: "sine"}, 0)
.from(sled2, {opacity: 0, duration: 1, ease: "power2"}, 1)
.from(sled2, {x: -480, y: -250, duration: 8, ease: "sine"}, 0)
.to(sled2, {opacity: 0, duration: 2, ease: "power2"}, 6)
.to(".bus_title2", {y: -14, opacity: 1, duration: 2, ease: "back"})
.to(".bus_title2", {y: 0, opacity: 0, duration: 1, ease: "power2"})
.from(bus3, {opacity: 0, duration: 1, ease: "power2"}, 9)
.from(bus3, {x: -480, y: -250, duration: 8, ease: "sine"}, 8)
.from(sled3, {opacity: 0, duration: 1, ease: "power2"}, 9)
.from(sled3, {x: -480, y: -250, duration: 8, ease: "sine"}, 8)
.to(sled3, {opacity: 0, duration: 2, ease: "power2"}, 14)
.to(".bus_title3", {y: -14, opacity: 1, duration: 2, ease: "back"})
.to(".bus_title3", {y: 0, opacity: 0, duration: 1, ease: "power2"});
/* Автобусы */


/* Такси */
var taxi01 = $('#taxi01'),
taxiTimeline = gsap.timeline({
scrollTrigger: {
trigger: "#taxi01",
markers: false,
start: "top 80%"
}
});
taxiTimeline.to(taxi01, {duration: 10, ease: "power1.inOut", y: -240, x: 400}, 0)
;
/* Такси */


/* Размер фона */
  $(function(){
    if ($(window).width() <= '2400'){
    $('.city').height(($('.city').width()*7)/6);
    }
    $(window).resize(function(){
      if ($(window).width() <= '2400'){
      $('.city').height(($('.city').width()*7)/6);
  }
    });
  });
/* Размер фона */


/* Всплывашки */
  $('.stand_trigger').each(function(){
    var bubbleAnimation = gsap.fromTo($(this).children('.tip'), {y: 0, opacity: 0, display: "none", duration: 3, ease: "back"}, {y: -120, opacity: 1, duration: 3, display: "flex", ease: "back"}, 0);
    bubbleAnimation.paused(true);
     $(this).hover(function(){ 
      bubbleAnimation.play();    
      }, function(){
      bubbleAnimation.reverse();
     });
  });
/* Всплывашки */


/* Достопримечательности */
$('.scene_dot').each(function(){
var signAnimation = gsap.fromTo($(this).children('.local-sign'), {y: 0, opacity: 0, display: "none", duration: 3, ease: "back"}, {y: -30, opacity: 1, duration: 3, display: "flex", ease: "back"}, 0);
signAnimation.paused(true);
$(this).hover(function(){ 
signAnimation.play();    
    }, function(){
    signAnimation.reverse();
   });
});
/* Достопримечательности */

