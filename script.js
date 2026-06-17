const boton = document.getElementById("modoBtn");

boton.addEventListener("click", () => {

    document.body.classList.toggle("claro");

    if(document.body.classList.contains("claro")){
        boton.textContent = "🌙 Modo Oscuro";
    } else {
        boton.textContent = "☀️ Modo Claro";
    }

});
