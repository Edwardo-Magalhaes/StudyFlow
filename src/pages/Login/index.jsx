import React, { useState } from "react";
import styles from "./Login.module.css";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        {isLogin ? (
          <>
            <h2>Entrar</h2>
            <form className={styles.authForm}>
              <input type="email" placeholder="E-mail" required />
              <input type="password" placeholder="Senha" required />
              <button className={styles.authButton} type="submit">Entrar</button>
              <div className={styles.authLinks}>
                <button type="button" onClick={() => alert("Recuperar senha")}>
                  Esqueci minha senha
                </button>
              </div>
              <div className={styles.authAlternatives}>
                <p>Ou entre com</p>
                <div className={styles.iconButtons}>
                  <FaGoogle size={30} className={styles.icon} />
                  <FaFacebook size={30} className={styles.icon} />
                  <FaGithub size={30} className={styles.icon} />
                </div>
              </div>
            </form>
            <p>
              Não tem conta?{" "}
              <button className={styles.toggleLink} onClick={toggleForm}>
                Registre-se
              </button>
            </p>
          </>
        ) : (
          <>
            <h2>Registro</h2>
            <form className={styles.authForm}>
              <input type="text" placeholder="Nome Completo" required />
              <input type="text" placeholder="Apelido" required />
              <input type="date" placeholder="Data de Nascimento" required />
              <input type="password" placeholder="Senha" required />
              <input type="password" placeholder="Repita a Senha" required />
              <button className={styles.authButton} type="submit">Registrar</button>
            </form>
            <p>
              Já tem conta?{" "}
              <button className={styles.toggleLink} onClick={toggleForm}>
                Entre
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
