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
    console.log("Observer");
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        console.log(id);
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
    console.log("hash: " + hash);
    const target = document.querySelector(hash);
    if(target){
        observer.observe(target);
    }
})