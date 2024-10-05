let lastScrollPostion = 0;
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    let currScrollPosition = window.scrollY;
    if(currScrollPosition > 550){
        navbar.style.backgroundColor = "#D8D2C2";
        console.dir(navbar.style.backgroundColor)
    }
    if(currScrollPosition < 550){
        navbar.style.backgroundColor = "transparent";
        console.dir(navbar.style.backgroundColor)
    }
});