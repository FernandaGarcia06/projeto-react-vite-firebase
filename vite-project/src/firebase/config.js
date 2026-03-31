import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMEzFi2ciygm6245jAGR4OcVGWiLDhQPQ",
  authDomain: "bdprojetovitefer.firebaseapp.com",
  projectId: "bdprojetovitefer",
  storageBucket: "bdprojetovitefer.firebasestorage.app",
  messagingSenderId: "289734800434",
  appId: "1:289734800434:web:92105038a87afb43bb782b"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Ativa autenticação
export const auth = getAuth(app);