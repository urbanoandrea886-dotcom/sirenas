import { 
    getFirestore, 
    collection, 
    getDocs, 
    query, 
    where, 
    orderBy 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

async function cargarMitos() {
    const contenedor = document.getElementById("mitos-container");
    if (!contenedor) return;

    try {
        contenedor.innerHTML = "<p>Cargando mitos...</p>";

        // 1. Creamos la consulta:
        // Buscamos documentos donde fecha_publicacion sea menor o igual a AHORA
        const q = query(
            collection(db, "mitos"), 
            where("fecha_publicacion", "<=", new Date()), 
            orderBy("fecha_publicacion", "desc") // Los más nuevos primero
        );

        const querySnapshot = await getDocs(q);
        contenedor.innerHTML = "";

        querySnapshot.forEach((doc) => {
            const mito = doc.data();
            
            // Nota: Corregí el nombre de tu campo a "contenido" para que coincida con tu BD
            contenedor.innerHTML += `
                <div class="card-mito">
                    <h3>${mito.titulo || "Sin título"}</h3>
                    <img src="${mito.imagen_url || ''}" alt="${mito.titulo || ''}" class="imagen-mito">
                    <p>${mito.contenido || ""}</p>
                    <div class="info-mito">
                        <p><strong>Categoría:</strong> ${mito.tema_nombre || "General"}</p>
                        <p><strong>Autor:</strong> ${mito.usuario_nombre || "Anónimo"}</p>
                    </div>
                </div>
            `;
        });
    } catch (error) {
        console.error("Error Firebase:", error);
        contenedor.innerHTML = "<p>Error al cargar los mitos.</p>";
    }
}
