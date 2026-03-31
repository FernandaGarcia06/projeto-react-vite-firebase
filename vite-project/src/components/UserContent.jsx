import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

function UserContent({ user }) {
  function handleLogout() {
    signOut(auth).catch((error) => {
      console.log("Erro ao sair:", error);
    });
  }

  return (
    <div>
      <h2>Bem-vindo 🎉</h2>

      <p>Você está logado como:</p>
      <p><strong>{user.email}</strong></p>

      <button className="logout" onClick={handleLogout}>
  Sair da conta
</button>
    </div>
  );
}

export default UserContent;