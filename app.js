gsap.from('.page1 .box',{
    delay:1,
    rotate:720,
    duration:2,
    scale:0
})
gsap.from('.page2 .box',{
    rotate:720,
    duration:2,
    scale:0,
    scrollTrigger:".page2 .box"
})