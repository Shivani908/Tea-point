

var ul = gsap.timeline()

ul.to(".iccon",{
    top : 0,
    duration : 0.7  
})
ul.pause()

const upper = document.querySelector(".menu");
const close = document.querySelector(".cross");

upper.addEventListener("click",function(){
    ul.play()
})

close.addEventListener("click",function(){
    ul.reverse()
})