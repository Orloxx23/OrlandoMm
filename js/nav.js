const tabs = document.querySelectorAll('.tab');

tabs.forEach(clickedTab =>{
	clickedTab.addEventListener('click', () =>{
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

        if(entry.isIntersecting){
            document.querySelector('.nav a.active').classList.remove('active');
            menuLink.classList.add('active');
        }
    })
}, {rootMargin: "-30% 0px -70% 0px"})

const menuLinks = document.querySelectorAll('.nav a[href^="#"]');

menuLinks.forEach((menuLink) => {
    const hash = menuLink.getAttribute('href');
    const target = document.querySelector(hash);
    if(target){
        observer.observe(target);
    }
})

const button = document.querySelector('.nav-mobile-button');
const menu = document.querySelector('.nav-mobile');
const overlay = document.querySelector('.overlay');
const closenav = document.querySelector('.close-nav');

function showMenu(){
    menu.classList.add('nav-open');
    overlay.classList.remove('hidden');
}

function hideMenu(){
    menu.classList.remove('nav-open');
    overlay.classList.add('hidden');
}

const mobileTabs = document.querySelectorAll('.mobile-tab');

mobileTabs.forEach((tab) => {
    tab.addEventListener('click', hideMenu);
})

button.addEventListener('click', showMenu);
overlay.addEventListener('click', hideMenu);
closenav.addEventListener('click', hideMenu);