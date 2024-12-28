// (function($) {
//     "use strict";

//     //Check element in viewport
//     $.fn.isInViewport = function() {
//         var elementTop = $(this).offset().top;
//         var elementBottom = elementTop + $(this).outerHeight();

//         var viewportTop = $(window).scrollTop();
//         var viewportBottom = viewportTop + $(window).height();

//         return elementBottom > viewportTop && elementTop < viewportBottom;
//     };
//     $(document).ready(function() {
//         // var $menuIcon = $('.menu-humburgur-icon'),$header = $('#header');
//         // $menuIcon.on('click',function(e){
//         // 	$(this).toggleClass('open');
//         // 	var target = $(this).data('target');
//         // 	$header.toggleClass('header--open');
//         // 	$(target).slideToggle();
//         // })
//         var audio = document.getElementById('myAudio');
//         audio.load();
//         $('.icon-mute').on('click', function() {
//             if ($(this).hasClass('playing')) {
//                 $(".icon-mute").removeClass("playing").removeClass("stopped");
//                 $(".icon-mute").addClass("stopped");
//                 $(".icon-mute").attr('src', "images/audio-off.png");
//                 $("#myAudio").prop("muted", true);
//                 audio.pause();
//             } else {
//                 $(".icon-mute").removeClass("playing").removeClass("stopped");
//                 $(".icon-mute").addClass("playing");
//                 $(".icon-mute").attr('src', "images/audio-on.png");
//                 $("#myAudio").prop("muted", false);
//                 audio.play();
//             }
//         });

//         $('.gallery-slider').slick({
//             nextArrow: $(".core-values__arrow--right"),
//             prevArrow: $(".core-values__arrow--left"),
//             dots: false,
//             autoplay: false,
//         })

//         $(window).on('scroll', function() {
//             if ($('#site-main').isInViewport()) {
//                 $('#fixed-nav').fadeIn();
//             } else {
//                 $('#fixed-nav').fadeOut();
//             }
//         });

//         $("#btnVideo").click(() => {
//             dialogAction();
//         })

//         $("#btnCloseVideo").click(() => {
//             dialogAction();
//         })
//     });

//     function dialogAction() {
//         let cls = $(".dialog").attr("class");
//         if (cls == 'dialog') {
//             $(".dialog").addClass("dialog-open");
//             $(".dialog-video").append(`<iframe id="iframe" src="https://www.youtube.com/embed/0I75nLc0gms?autoplay=1" width="1280" height="720" frameborder="0" allow="autoplay" allowfullscreen="" style="max-width: 100%; box-sizing: border-box; height: 720px;" uk-responsive="" uk-video="false" class="uk-responsive-width"></iframe>`)
//             $("body").attr("style", "overflow: hidden;")
//         }
//         else {
//             $(".dialog").removeClass("dialog-open");
//             $("#iframe").remove();
//             $("body").attr("style", "")
//         }
//     }

//     var countDown = setInterval(() => {
//         countTime("19", "00", "29", "05", "2021")
//     }, 500);

//     function countTime(h,m,dd,mm,yy) {

//       var now = new Date().getTime();
//       var flash = new Date(`${yy}-${mm}-${dd} ${h}:${m}`).getTime();

//       var timeRest = flash - now;

//       var days = Math.floor(timeRest/(1000*60*60*24));

//       var hours = Math.floor(timeRest%(1000*60*60*24)/(1000*60*60));

//       var minutes = Math.floor(timeRest%(1000*60*60)/(1000*60));

//       var sec = Math.floor(timeRest%(1000*60)/(1000));

//       document.getElementById('days_count').innerHTML = days < 0 ? "00" : days < 10 ? "0" + days : days;
//       document.getElementById('hours_count').innerHTML = hours < 0 ? "00" : hours < 10 ? "0" + hours : hours;
//       document.getElementById('minutes_count').innerHTML = minutes < 0 ? "00" : minutes < 10 ? "0" + minutes : minutes;
//       document.getElementById('seconds_count').innerHTML = sec < 0 ? "00" : sec < 10 ? "0" + sec : sec;
//     }
// })(jQuery);
