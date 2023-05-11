//Hamburger Menu
let hamburgerMenu = document.getElementById("hamburgerMenu");
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let mobileNav = document.getElementById("mobileNav");
hamburgerMenu.addEventListener(("click"),()=>{
    mobileNav.classList.toggle("mobileNavActive");
    hamburgerMenu.classList.toggle("hamburgerMenuActive");
    span1.classList.toggle("span1Active");
    span2.classList.toggle("span2Active");
});

//Toggle
let priceChangeObj = {
    yearlyPrices: [190, 390, 990],
    montlhyPrices: [19, 39, 99],
    isMonthly: false
}
document.getElementById("toggle").addEventListener("click",()=>{
    document.getElementById("toggle--ball").classList.toggle("ballToggle");
    document.getElementById("toggle").classList.toggle("toggleToggle");
    Array.from(document.getElementsByClassName("toggle--span")).forEach((i)=>{i.classList.toggle("spanToggle")});
    Array.from(document.getElementsByClassName("price")).forEach((item, index)=>{item.innerText = `$${(priceChangeObj.isMonthly)?(priceChangeObj.yearlyPrices[index]):(priceChangeObj.montlhyPrices[index])}.00`}, priceChangeObj.isMonthly = !priceChangeObj.isMonthly);
    Array.from(document.getElementsByClassName("pricing--period")).forEach((item)=>{item.innerText = (priceChangeObj.isMonthly?"per year":"per month");})
})