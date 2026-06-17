import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
    getFirestore,
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Configuración Firebase (Mantenida según solicitaste)
const firebaseConfig = {
    apiKey: "AIzaSyBsGZM5R-xKeqrr6ELRhQAVJ2cdmAn3UdA",
    authDomain: "mitologia-marina.firebaseapp.com",
    projectId: "mitologia-marina",
    storageBucket: "mitologia-marina.firebasestorage.app",
    messagingSenderId: "11763136382",
    appId: "1:11763136382:web:0f7d1464363d9c16d5652f"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Cargar mitos
async function cargarMitos() {
    const contenedor = document.getElementById("mitos-container");
    if (!contenedor) return;

    try {
        contenedor.innerHTML = "<p>Cargando mitos...</p>";

        const querySnapshot = await getDocs(collection(db, "mitos"));
        contenedor.innerHTML = "";

        querySnapshot.forEach((doc) => {
            const mito = doc.data();

            // Creamos la tarjeta
            const div = document.createElement("div");
            div.className = "card-mito";

            // Si la URL existe, la usamos, si no, dejamos el src vacío o manejamos el error
            const imgHtml = mito.imagen_url 
                ? `<img src="${mito.imagen_url}" alt="${mito.Titulo || 'Mito'}" class="imagen-mito" onerror="this.style.display='none'">` 
                : `<p><em>Sin imagen</em></p>`;

            div.innerHTML = `
                <h3>${mito.Titulo || "Sin título"}</h3>
                ${imgHtml}
                <p>${mito.cuerpo_texto || ""}</p>
                <div class="info-mito">
                    <p><strong>Categoría:</strong> ${mito.tema_nombre || "General"}</p>
                    <p><strong>Autor:</strong> ${mito.usuario_nombre || "Anónimo"}</p>
                </div>
            `;
            
            contenedor.appendChild(div);
        });

    } catch (error) {
        console.error("Error Firebase:", error);
        contenedor.innerHTML = "<p>Error al cargar los mitos.</p>";
    }
}

// Ejecutar
cargarMitos();
