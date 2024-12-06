import styles from "./Cronograma.module.css";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

function Cronograma() {
  return (
    <>
      <Header />
      <div className={styles.planos}>
        <Menu />
        <article className={styles.article}>
          <div className={styles.nome}>
            <h1>Cronograma</h1>
          </div>
        </article>
      </div>
    </>
  );
}

export default Cronograma;
