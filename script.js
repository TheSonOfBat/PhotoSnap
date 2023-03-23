//Hamburger Menu
let hamburgerMenu = document.getElementById("hamburgerMenu");
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let mobileNav = document.getElementById("mobileNav");
hamburgerMenu.addEventListener(("click"),()=>{
    hamburgerMenu.classList.toggle("hamburgerMenuActive");
    mobileNav.classList.toggle("mobileNavActive")
    span1.classList.toggle("span1Active");
    span2.classList.toggle("span2Active");
});

//