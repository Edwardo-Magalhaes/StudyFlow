import styles from "./Edital.module.css";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

function Edital() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.planos}>
        <Menu />
        <article className={styles.article}>
          <div className={styles.nome}>
            <h1>Edital</h1>
          </div>
          <div className={styles.conteudo}>
            <div className={styles.card}>
              <h2>Informações Gerais</h2>
              <p>Confira os detalhes do edital e os principais tópicos abordados.</p>
            </div>
            <div className={styles.card}>
              <h2>Requisitos</h2>
              <p>Veja os requisitos necessários para participar.</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Edital;
