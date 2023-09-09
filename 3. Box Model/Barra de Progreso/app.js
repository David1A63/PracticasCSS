setInterval(function(){
    let bar = document.getElementsByClassName('progreso')[0];
    let fondo = document.getElementsByClassName('barra')[0];
    bar.style.width = bar.clientWidth + 1 + 'px';
    if(bar.clientWidth >= fondo.clientWidth){
        bar.style.width = 1 + 'px';
    }
}, 30);