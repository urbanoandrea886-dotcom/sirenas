import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "mitologia-marina.firebaseapp.com",
    projectId: "mitologia-marina",
    storageBucket: "mitologia-marina.firebasestorage.app",
    messagingSenderId: "11763136382",
    appId: "1:11763136382:web:0f7d1464363d9c16d5652f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function cargarMitos() {

    const contenedor = document.getElementById("mitos-container");

    if (!contenedor) return;

    const querySnapshot = await getDocs(collection(db, "mitos"));

    contenedor.innerHTML = "";

    querySnapshot.forEach((doc) => {

        const mito = doc.data();

        contenedor.innerHTML += `
            <div class="card-mito">
                <h3>${mito.Titulo}</h3>
                <p>${mito.cuerpo_texto}</p>
                class="imagen-mito"
            </div>
        `;
    });
}

cargarMitos();
