const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if(navToggle) {
    navToggle.addEventListener('click', () =>  {
        navMenu.classList.remove('hidden-menu');
    })
}

if(navClose) {
    navClose.addEventListener('click', () =>  {
        navMenu.classList.add('hidden-menu');
    })
}

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.add('hidden-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction))
