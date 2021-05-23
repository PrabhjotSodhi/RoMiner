window.onload = function() {
    window.addEventListener('scroll', function(e) {
        if (window.pageYOffset > 100) {
            document.querySelector("header").classList.add('is-scrolling');
        } else {
            document.querySelector("header").classList.remove('is-scrolling');
        }
    });

    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');
    const logo = document.querySelector('.logo');

    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
    mobile_menu.addEventListener('transitionstart', () => {
        if (Array.from(mobile_menu.classList.values()).indexOf('is-active') != -1) {
            setTimeout(() => logo.classList.add('is-active'), 0.15 * 1000);
        } else {
            setTimeout(() => logo.classList.remove('is-active'), 0.05 * 1000);
        }
    })
}