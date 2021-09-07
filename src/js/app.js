document.addEventListener('DOMContentLoaded', function() {
    scrollNav();
    homeButton();
});

function scrollNav () {
    const links = document.querySelectorAll('.nav-main a');
    links.forEach ( function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(e.target.attributes.href.value);
            section.scrollIntoView({
                behavior: 'smooth'
            });
        })
    });
}


function homeButton() {
    const button = document.createElement('P');
    const body = document.querySelector('body');
    button.textContent = '↑';
    button.classList.add('btn-home');
    button.onclick = function(e) {
        e.preventDefault();
        const header = document.querySelector('.header');
        header.scrollIntoView({
            behavior: 'smooth'
        });
        
    }
    body.appendChild(button);
}

// function fixedNav() {
//     const bar = document.querySelector('.header');
//     //Registrar el intersection Observer
//     const observer = new IntersectionObserver(function(entries) {
//         if(entries[0].isIntersecting) {
//             bar.classList.remove('fixed');
//         } else {
//             bar.classList.add('fixed');
//         }
//     })
//     //Elemento observar
//     observer.observe(document.querySelector('.info'));
// }