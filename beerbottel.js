// const scroll = new LocomotiveScroll({
    // el: document.querySelector('body'),
    // smooth: true
// });
// var tl=gsap.timeline();


gsap.to("#image1 img",{

    rotate:"30deg",
    ScrollTigger:{
        trigger:"#image1>img",
        scroller:"body",
        start:"top 5%",
        // end:"top -428%",
        scrub:3,
        pin:true
    }

})


