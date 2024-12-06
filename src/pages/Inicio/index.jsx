import styles from "./Inicio.module.css";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

function Inicio() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.planos}>
        <Menu />
        <article className={styles.article}>
          <div className={styles.nome}>
            <h1>Início</h1>
          </div>
          <div className={styles.conteudo}>
            <div className={styles.card}>
              <h2>Card 1</h2>
              <p>Descrição do primeiro card.</p>
            </div>
            <div className={styles.card}>
              <h2>Card 2</h2>
              <p>Descrição do segundo card.</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Inicio;
