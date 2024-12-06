import styles from "./Edital.module.css";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

function Edital() {
  return (
    <>
      <Header />
      <div className={styles.planos}>
        <Menu />
        <article className={styles.article}>
          <div className={styles.nome}>
            <h1>Edital</h1>
          </div>
        </article>
      </div>
    </>
  );
}

export default Edital;
