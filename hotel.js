var tl = gsap.timeline();
var tl = gsap.timeline();
tl 
.from("#line1 , #line2" ,{
  height:0,
  ease:Expo.easeInOut,
  duration:1.5

})
.from("#center img" ,{
opacity:0,
ease:Expo.easeInOut
} , "-=1")
.to("#louder",{
 y:-1000,
 duration:1,
ease:Expo.easeInOut
})

.from("#nav",{
    y:200,
    opacity:0,
    duration:1
})

.from("#text1 h1",{
    opacity:0,
    y:20,
    duration:1
    
})
.from("p",{
    opacity:0,
    y:20,
    duration:1
})
.from("button",{
    opacity:0,
    y:20,
    color:"yellow",
    duration:1
    
})
.from("#lb>img",{
    y:200,
    opacity:0,
    duration:1
})
.from("#rl>img",{
    x:200,
    opacity:0,
    duration:1
})
.from("#rr>h5",{
    x:200,
    opacity:0,
    duration:1
})