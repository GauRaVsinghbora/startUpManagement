const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const close = document.querySelector(".close");

// show menu.
menu.addEventListener("click",()=>{
    sidebar.style.transform = "translateX(0%)";
    sidebar.style.transition= "all 0.3s ease";
})
close.addEventListener("click",()=>{
    sidebar.style.transform = "translateX(100%)";
    sidebar.style.transition= "all 0.3s ease";
})

let t1 = gsap.timeline();
t1.from(".header",{
    y:"-100%",
    opacity:0,
    duration:1,
})
t1.from(".main_info h1",{
    scale:0,
    opacity:0,
    duration:1,
})