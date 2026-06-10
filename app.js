// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Configuración Firebase
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "mitologia-marina.firebaseapp.com",
  projectId: "mitologia-marina",
  storageBucket: "mitologia-marina.firebasestorage.app",
  messagingSenderId: "11763136382",
  appId: "1:11763136382:web:0f7d1464363d9c16d5652f"
};

// Inicializar
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Obtener mitos
async function cargarMitos() {

  const contenedor = document.getElementById("mitos");

  const querySnapshot = await getDocs(collection(db, "mitos"));

  querySnapshot.forEach((doc) => {

    const datos = doc.data();

    contenedor.innerHTML += `
      <div class="mito">
        <h2>${datos.Titulo}</h2>
        <p>${datos.cuerpo_texto}</p>
      </div>
    `;

  });
}

cargarMitos();
