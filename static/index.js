// console.log("hi  guys");


const navtog = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")
const an = document.querySelectorAll("a");



navtog.addEventListener("click", () => {    
    console.log(' nice try');


    console.log(links);

    links.classList.toggle("show-links");

    for (let i = 0; i < an.length; i++) {
        // const element = array[index];
        // an.classList.toggle("new_a")
        an[i].style.color = "white"
        
    }


})