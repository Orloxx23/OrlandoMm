const tabs = document.querySelectorAll('.tab');

tabs.forEach(clickedTab => {
    clickedTab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        clickedTab.classList.add('active');
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const menuLink = document.querySelector(`.nav a[href="#${id}"]`);

        if (entry.isIntersecting) {
            document.querySelector('.nav a.active').classList.remove('active');
            menuLink.classList.add('active');
        }
    })
}, { rootMargin: "-30% 0px -70% 0px" })

const menuLinks = document.querySelectorAll('.nav a[href^="#"]');

menuLinks.forEach((menuLink) => {
    const hash = menuLink.getAttribute('href');
    const target = document.querySelector(hash);
    if (target) {
        observer.observe(target);
    }
})

const button = document.querySelector('.nav-mobile-button');
const menu = document.querySelector('.nav-mobile');
const overlay = document.querySelector('.overlay');
const closenav = document.querySelector('.close-nav');

function preventDefault(e) {
    e.preventDefault();
}

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false)
}

function showMenu() {
    menu.classList.add('nav-open');
    overlay.classList.remove('hidden');
    disableScroll();
}

function hideMenu() {
    menu.classList.remove('nav-open');
    overlay.classList.add('hidden');
    enableScroll();
}



const mobileTabs = document.querySelectorAll('.mobile-tab');

mobileTabs.forEach((tab) => {
    tab.addEventListener('click', hideMenu);
})

button.addEventListener('click', showMenu);
overlay.addEventListener('click', hideMenu);
closenav.addEventListener('click', hideMenu);