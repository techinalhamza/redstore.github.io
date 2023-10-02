let menu = document.querySelector("#menu");
let nav = document.querySelector("nav");

let scr = 0;
menu.addEventListener("click", function () {
    if (scr == 0) {
        nav.style.right = "0%"
        scr = 1;
    }
    else {
        nav.style.right = "-110%"
        scr = 0;
    }
})



// <!-- -------------------------- code for account form--------------------------- -->
let regForm = document.getElementById('reg-form')
let loginForm = document.getElementById('login-form')
let indicator = document.querySelector('.indicator')

function register() {
    regForm.style.transform = 'translateX(-25rem)'
    loginForm.style.transform = 'translateX(-25rem)'
    indicator.style.transform = 'translateX(200px)'
}
function login() {
    loginForm.style.transform = 'translateX(0)'
    regForm.style.transform = 'translateX(0)'
    indicator.style.transform = 'translateX(110px)'
}

// code for product gallery

let productImg = document.getElementById('product-img');
let smallImg = document.querySelectorAll('.small-img');



smallImg[0].onclick = () =>{
    productImg.src = smallImg[0].src;
}
smallImg[1].onclick = () =>{
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = () =>{
    productImg.src = smallImg[2].src;
}
smallImg[3].onclick = () =>{
    productImg.src = smallImg[3].src;
}

