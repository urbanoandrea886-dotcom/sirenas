// Variable global para contar la profundidad (empieza en cero)
let metrosProfundidad = 0;

// MENSAJE DE BIENVENIDA (No se modificó nada)
window.onload = function(){

    alert("🌊 Bienvenido a Mitología Marina 🌊");

}

// CAMBIAR MODO OSCURO Y CLARO (Actualizado con el indicador de profundidad)
function cambiarTema(){

    document.body.classList.toggle("oscuro");
    
    // Aumenta la profundidad en 100 metros con cada clic
    metrosProfundidad += 100;
    
    // Busca el elemento en el HTML y actualiza los metros en pantalla
    const indicador = document.getElementById("contador-metros");
    if (indicador) {
        indicador.innerText = metrosProfundidad;
    }
}
