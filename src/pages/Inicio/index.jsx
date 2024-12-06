import styles from "./Inicio.module.css";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

function Inicio() {
  return (
    <>
      <Header />
      <div className={styles.planos}>
        <Menu />
        <article className={styles.article}>
          <div className={styles.nome}>
            <h1>Inicio</h1>
          </div>
        </article>
      </div>
    </>
  );
}

export default Inicio;
