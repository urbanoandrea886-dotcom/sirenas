let puntos = 0;

function actualizar(){
    document.getElementById("puntos").innerHTML = puntos;
}

function ganar(){
    puntos++;
    actualizar();
    moverTesoro();
}

function perder(){
    puntos--;
    actualizar();
    moverKraken();
}

function moverTesoro(){
    let boton = document.getElementById("tesoro");

    let x = Math.random() * 300;
    let y = Math.random() * 200;

    boton.style.position = "relative";
    boton.style.left = x + "px";
    boton.style.top = y + "px";
}

function moverKraken(){
    let kraken = document.getElementById("kraken");

    let x = Math.random() * 300;
    let y = Math.random() * 200;

    kraken.style.position = "relative";
    kraken.style.left = x + "px";
    kraken.style.top = y + "px";
}

setInterval(() => {
    moverKraken();
}, 1500);
