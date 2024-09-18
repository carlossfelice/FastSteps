import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Si usas Firestore
import { getStorage } from "firebase/storage";     // Si usas Storage

// Configuración de Firebase (la obtienes desde tu consola de Firebase)
const firebaseConfig = {
    apiKey: "AIzaSyCM_wQGXUIqXWJ2HpZTlNM3tc5FV2w8My8",
    authDomain:"faststeps-22237.firebaseapp.com",
    projectId: "faststeps-22237",
    storageBucket:"faststeps-22237.appspot.com",
    messagingSenderId:"1090332911931",
    appId: "1:1090332911931:web:741cceb5c10a3015f26f1e",
    measurementId:"G-KQQJ8QM91P"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar los servicios que usarás en tu aplicación
export const auth = getAuth(app);           // Servicio de autenticación
export const db = getFirestore(app);        // Servicio de Firestore
export const storage = getStorage(app);     // Servicio de almacenamiento
