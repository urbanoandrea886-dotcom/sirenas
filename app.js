import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
    getFirestore,
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Configuración Firebase
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

        const querySnapshot = await getDocs(
            collection(db, "mitos")
        );

        contenedor.innerHTML = "";

        querySnapshot.forEach((doc) => {

            const mito = doc.data();

            contenedor.innerHTML += `
                <div class="card-mito">

                    <h3>${mito.Titulo || "Sin título"}</h3>

                     <img 
                     src="${mito.imagen_url || ''}" 
                     alt="${mito.Titulo || ''}" 
                     class="imagen-mito"
                    >

                    <p>${mito.cuerpo_texto || ""}</p>

                    <div class="info-mito">
                        <p><strong>Categoría:</strong> ${mito.tema_nombre || "General"}</p>
                        <p><strong>Autor:</strong> ${mito.usuario_nombre || "Anónimo"}</p>
                    </div>

                </div>
            `;
        });

    } catch (error) {

        console.error("Error Firebase:", error);

        contenedor.innerHTML =
            "<p>Error al cargar los mitos.</p>";
    }
}

// Ejecutar
cargarMitos();
