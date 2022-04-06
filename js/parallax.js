var layer = document.getElementById('layer');
var mainLayer = document.getElementById('main-layer');
document.addEventListener('mousemove', function (e) {
    var x = (e.pageX * -1 / 30);
    var y = (e.pageY * -1 / 30);
    var mx = (e.pageX * -1 / 100);
    var my = (e.pageY * -1 / 100);

    this.querySelectorAll('#layer').forEach(layer => {
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })

    mainLayer.style.transform = `translateX(${mx}px) translateY(${my}px)`
});

window.addEventListener('deviceorientation',function(e){
    console.log("ok");
    const x = (e.gamma/4);
    const y = (e.beta/4);
    var mx = (e.gamma/2);
    var my = (e.beta/2);
    
    document.querySelectorAll('#layer').forEach(layer => {
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })

    mainLayer.style.transform = `translateX(${mx}px) translateY(${my}px)`

});