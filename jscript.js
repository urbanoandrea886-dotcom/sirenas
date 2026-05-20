// 🌊 Juego del océano: tesoro y kraken

let puntos = 0;

// actualizar puntos en pantalla
function actualizar(){
    document.getElementById("puntos").innerHTML = puntos;
}

// 💎 ganar puntos (tesoro)
function ganar(){
    puntos++;
    actualizar();
    moverTesoro();
}

// 🐙 perder puntos (kraken)
function perder(){
    puntos--;
    actualizar();
    moverKraken();
}

// mover tesoro aleatoriamente
function moverTesoro(){
    let boton = document.getElementById("tesoro");

    let x = Math.random() * 300;
    let y = Math.random() * 200;

    boton.style.position = "relative";
    boton.style.left = x + "px";
    boton.style.top = y + "px";
}

// mover kraken aleatoriamente
function moverKraken(){
    let kraken = document.getElementById("kraken");

    let x = Math.random() * 300;
    let y = Math.random() * 200;

    kraken.style.position = "relative";
    kraken.style.left = x + "px";
    kraken.style.top = y + "px";
}

// 🐙 kraken se mueve solo cada 1.5 segundos
setInterval(() => {
    moverKraken();
}, 1500);