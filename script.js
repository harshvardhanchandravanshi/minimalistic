var tl= gsap.timeline({
    repeat:-1
});
tl.to(".imgcont",{
    ease:Expo.easeInOut,
    width:"100%",
    duration:1,
    stagger:2,
},'h')
.to(".text h2",{
    ease:Expo.easeInOUt,
    duration:1,
    stagger:2,
    top:0,
    opacity:1
},'h')
.to(".text h2",{
    delay:1,
    ease:Expo.easeInOUt,
    duration:1,
    stagger:2,
    top:-70,
    opacity:0
},'h')