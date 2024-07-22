let scrollcontainer = document.querySelector(".gallery")
let backbtn = document.getElementById("back-btn");
let nextbtn = document.getElementById("next-btn");

scrollcontainer.addEventListener("wheel" , (e) => {

scrollcontainer.scrollLeft += e.deltaY;
scrollcontainer.style.scrollBehavior = "auto";
 
})

nextbtn.addEventListener("click" , ()=>{
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft += 900;
})


backbtn.addEventListener("click" , ()=>{
    scrollcontainer.style.scrollBehavior = "smooth"
    scrollcontainer.scrollLeft -= 900;
})