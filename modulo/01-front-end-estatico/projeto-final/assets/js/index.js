// variaveis
const btnMenu = document.querySelector('.btn-menu-hamburger');
const navgation = document.querySelector('.navigation');
const navHref = document.querySelectorAll('nav a[href^="#"]');
const form = document.querySelector('form')

// menu responsivo
const toggleMenu = function () {
    if (btnMenu.classList.contains('isClose')) {
        btnMenu.classList.remove('isClose');
        btnMenu.classList.add('isOpen');
        navgation.style.right = '0';
    } else {
        btnMenu.classList.remove('isOpen');
        btnMenu.classList.add('isClose');
        navgation.style.right = '-100%';
    }

}

// scroll do menu
navHref.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const element = e.target;
        const id = element.getAttribute('href');
        let section = document.querySelector(id).offsetTop;

        if (id === '#home') {
            section = 0
        } else if (id === '#menu') {
            section += -60
        } else if (id === '#restaurant') {
            section += -70
        }

        window.scroll({
            top: section,
            behavior: "smooth",
        });
        console.log(section)
    });
})

// eventos
// menu responsivo
btnMenu.addEventListener('click', toggleMenu);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Feedback enviado com sucesso!')
});
