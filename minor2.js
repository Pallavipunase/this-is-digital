var tl = gsap.timeline();
tl
 .from("#page2-part1, #page2-part2",{
        height:0,
        ease:Expo.InOut
     })
.from("#photu1 img,#photu2 img",{
    height:0,
    duration:2,
    ease:Expo.InOut
})
.from("#text2 h2,h1" , {
    opacity:0,
    x:100,
    ease:Expo.InOut

})
.from("#page2-part1 h2,h6",{
    opacity:0,
    y:100,
    ease:Expo.InOut
})
.from("#box1",{
    opacity:0,
    y:50,
    ease:Expo.InOut
})
.to("#page2-part1",{
     y:1000,
   duration:2,
   ease:Expo.InOut
})
.to("#page2-part2",{
    delay:5,
    y:-1000,
    duration:2,
    ease:Expo.InOut
 },"-1")
 .from("#part1, #part2",{
    delay:1,
  height:0,
   duration:2,
   ease:Expo.InOut
})
.from("#photo1 img ,#photo2 img",{
    height:0,
    ease:Expo.InOut
})