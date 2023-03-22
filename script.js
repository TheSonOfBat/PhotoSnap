//Hamburger Menu
let hamburgerMenu = document.getElementById("hamburgerMenu");
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
hamburgerMenu.addEventListener(("click"),()=>{
    hamburgerMenu.classList.toggle("hamburgerMenuActive")
    span1.classList.toggle("span1Active");
    span2.classList.toggle("span2Active");
});

//