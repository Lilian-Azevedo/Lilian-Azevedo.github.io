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

navLink.forEach(n => n.addEventListener('click', linkAction));

const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header');

skillsHeader.forEach(element => {
    element.addEventListener('click', () => {
        let itemClass = element.parentNode.className;
        for (let index = 0; index < skillsContent.length; index++) {
            const element = skillsContent[index];
            element.className = 'skills_content skills_close';
        }

        if(itemClass === 'skills_content skills_close') {
            element.parentNode.className = 'skills_content skills_open';
        }
    });
}); 