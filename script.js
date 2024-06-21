let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.header .navbar');


let loginForm = document.querySelector('.login-form'); 

document.querySelector('#header-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active')
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}













menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 600,
    reset: true
})

sr.reveal('.text', {delay:200,origin: 'top'})
sr.reveal('.form-container form', {delay:800,origin: 'left'})
sr.reveal('.heading', {delay:800,origin: 'top'})
sr.reveal('.services-container .box', {delay:600,origin: 'top'})
sr.reveal('.about-container', {delay:600,origin: 'top'})
sr.reveal('.reviews-container', {delay:600,origin: 'top'})
sr.reveal('.newsletter .box', {delay:400,origin: 'botom'})
sr.reveal('.tracks .box', {delay:400,origin: 'botom'})
sr.reveal('.tracks2 .box', {delay:400,origin: 'botom'})

