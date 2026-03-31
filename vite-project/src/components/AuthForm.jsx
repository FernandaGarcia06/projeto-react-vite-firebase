import { useState } from "react";
import { auth } from "../firebase/config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (isLogin) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setMessage("Acessou com sucesso!");
          setIsError(false);
          setEmail("");
          setPassword("");
        })
        .catch(() => {
          setMessage("Erro ao acessar!");
          setIsError(true);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          setMessage(`Você está cadastrado como: ${email}`);
          setIsError(false);
          setEmail("");
          setPassword("");
        })
        .catch(() => {
          setMessage("Erro ao cadastrar!");
          setIsError(true);
        });
    }
  }

  return (
    <div>
      <h2>{isLogin ? "Login" : "Cadastro"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">
          {isLogin ? "Acessar" : "Cadastrar"}
        </button>
      </form>

      {/* Botão de alternar */}
      <p
  className="toggle-text"
  onClick={() => {
    setIsLogin(!isLogin);
    setMessage("");
  }}
>
  {isLogin
    ? "Não tem conta? Cadastre-se"
    : "Já tem conta? Entrar"}
</p>

      {/* Mensagem */}
      {message && (
        <p className={`message ${isError ? "error" : "success"}`}>
          {message}
        </p>
      )}
    </div>
  );
}

export default AuthForm;