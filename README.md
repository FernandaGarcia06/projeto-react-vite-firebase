## 📌 Descrição
Este projeto é uma aplicação de autenticação de usuários utilizando Firebase.  
O usuário pode se cadastrar, fazer login e visualizar seus dados após autenticação.

## ▶️ Como rodar o projeto

Siga os passos abaixo para executar o projeto na sua máquina:

 1. Clonar o repositório
Abra o terminal e execute:
git clone https://github.com/FernandaGarcia06/projeto-react-vite-firebase
2. Acessar a pasta do projeto
cd vite-project
3. Instalar as dependências
npm install
4. Rodar o projeto
npm run dev
5. Abrir no navegador

Após rodar o comando acima, aparecerá um link no terminal, geralmente:

http://localhost:5173/

Abra esse link no navegador para visualizar a aplicação.

## 🚀 Tecnologias utilizadas
- React (Vite)
- Firebase Authentication
- JavaScript
- CSS

## 🔐 Funcionalidades
- Cadastro de usuário
- Login de usuário
- Logout
- Mensagens de erro e sucesso
- Interface moderna e responsiva

🔥 Configuração do Firebase
Acesse o site do Firebase: 👉 https://console.firebase.google.com/

Crie um projeto

Ative o método de autenticação:
Email/Senha

Copie sua configuração e adicione em:

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5nk9E2yF-s4QTOY8vXW-YbAC7xeif7Ls",
  authDomain: "bd1fernandatodolist.firebaseapp.com",
  projectId: "bd1fernandatodolist",
  storageBucket: "bd1fernandatodolist.firebasestorage.app",
  messagingSenderId: "314784493274",
  appId: "1:314784493274:web:d4819ec652b4e7e5ba7fe3",
  measurementId: "G-ZDQ394G4KR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

