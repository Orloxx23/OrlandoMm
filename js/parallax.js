var layer = document.getElementById('layer');
var mainLayer = document.getElementById('main-layer');
document.addEventListener('mousemove', function (e) {
    var x = (e.pageX * -1 / 25);
    var y = (e.pageY * -1 / 25);
    var mx = (e.pageX  / 50);
    var my = (e.pageY / 50);

    this.querySelectorAll('#layer').forEach(layer => {
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })

    mainLayer.style.transform = `translateX(${mx}px) translateY(${my}px)`
});

window.addEventListener('deviceorientation',function(e){
    console.log("ok");
    const x = (e.gamma/4 *-1);
    const y = (e.beta/4 *-1);
    var mx = (e.gamma/3 *-1);
    var my = (e.beta/3 *-1);
    
    document.querySelectorAll('#layer').forEach(layer => {
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })

    mainLayer.style.transform = `translateX(${mx}px) translateY(${my}px)`

});