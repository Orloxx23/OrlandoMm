gsap.registerPlugin(ScrollTrigger);

let paths = gsap.utils.toArray("#logo-scroll path, #logo-smoother path, #logo-mouse");
let byGreensock = document.querySelector("#by-greensock");

let distPaths = gsap.utils.distribute({
    base: -300,
    amount: 600,
});

let gridTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".grid-section",
        scrub: 1,
        start: "top center",
        end: "bottom+=10% bottom",
    },
    defaults: {
        ease: "power1.inOut"
    }
});

gridTl.add("start")
    .from(".grid-layout", {
        ease: "power1",
        scale: 3
    }, "start")
    .from(".column-1 .grid-image", {
        duration: 0.6,
        xPercent: i => -((i + 1) * 40 + i * 100),
        yPercent: i => (i + 1) * 40 + i * 100
    }, "start")
    .from(".column-3 .grid-image", {
        duration: 0.6,
        xPercent: i => (i + 1) * 40 + i * 100,
        yPercent: i => (i + 1) * 40 + i * 100
    }, "start");
