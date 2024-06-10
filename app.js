let tl=gsap.timeline();
tl.from("span",{
    y:-30,
    duration:1,
    delay:0.5,
    opacity:0
})
tl.from("li",{
    y:-40,
    stagger:1,
    
})
tl.from("h1",{
   scale:0,
   rotate:900,
    opacity:1,
    duration:1
})