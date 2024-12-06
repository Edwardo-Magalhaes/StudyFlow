import styles from "./Cronograma.module.css";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

function Cronograma() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.planos}>
        <Menu />
        <article className={styles.article}>
          <div className={styles.nome}>
            <h1>Cronograma</h1>
          </div>
          <div className={styles.conteudo}>
            <div className={styles.card}>
              <h2>Semana 1</h2>
              <p>Introdução aos temas principais.</p>
            </div>
            <div className={styles.card}>
              <h2>Semana 2</h2>
              <p>Estudo aprofundado de tópicos-chave.</p>
            </div>
            <div className={styles.card}>
              <h2>Semana 3</h2>
              <p>Revisão e prática com exercícios.</p>
            </div>
            <div className={styles.card}>
              <h2>Semana 4</h2>
              <p>Simulados e ajustes finais.</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Cronograma;
