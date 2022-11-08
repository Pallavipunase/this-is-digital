
var tl=gsap.timeline();
gsap.from("#img1",{
    delay:0.4,
opacity:0,
duration:1,
y:60
})
gsap.from("#img2",{
    delay:0.4,
opacity:0,
duration:1,
x:60
})

gsap.from("#img3",{
    delay:0.4,
opacity:0,
duration:1,
y:-60
})
gsap.from("#main h1",{
    delay:0.4,
opacity:0,
duration:1,

})
tl
.from("#page2 h2",{
    opacity:0,
    y:20,
    duration:1
})
.from("#page2 h1",{
    opacity:0,
    y:20,
    duration:1
})
.from("#about",{
    opacity:0,
    y:20,
    duration:1
})
.from("#page3 #image1-1",{
    opacity:0,
    y:20,
    duration:1
})
.from("#page3 #image1-2",{
    opacity:0,
    y:20,
    duration:1
})
.from("#page3 #image2-1",{
    opacity:0,
    y:20,
    duration:1
})
.from("#page3 #image2-2",{
    opacity:0,
    y:20,
    duration:1
})
.from("#page3 h1",{
    opacity:0,
    y:20,
    duration:1
})
.from("#page3 h4",{
    opacity:0,
    y:20,
    duration:1
})
.from("#page3-part2-text ",{
    opacity:0,
    y:20,
    duration:1
})
.from("#page4",{
    opacity:0,
    y:20,
    duration:1
})
.from("#page5",{
    opacity:0,
    y:20,
    duration:1
})
.from("#page6-black1",{
    opacity:0,
    y:20,
    duration:1
})
.from("#page6-black2",{
    opacity:0,
    y:20,
    duration:1
})
.from("#page6-black3",{
    opacity:0,
    y:20,
    duration:1
})
.from("#page6-black4",{
    opacity:0,
    y:20,
    duration:1
})
.from("#page6-black5",{
    opacity:0,
    y:20,
    duration:1
})
var swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var appendNumber = 4;
  var prependNumber = 1;
  document
    .querySelector('.prepend-2-slides')
    .addEventListener('click', function (e) {
      e.preventDefault();
      swiper.prependSlide([
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      ]);
    });
  document
    .querySelector('.prepend-slide')
    .addEventListener('click', function (e) {
      e.preventDefault();
      swiper.prependSlide(
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
      );
    });
  document
    .querySelector('.append-slide')
    .addEventListener('click', function (e) {
      e.preventDefault();
      swiper.appendSlide(
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
      );
    });
  document
    .querySelector('.append-2-slides')
    .addEventListener('click', function (e) {
      e.preventDefault();
      swiper.appendSlide([
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      ]);
    });