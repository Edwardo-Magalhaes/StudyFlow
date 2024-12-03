import styles from "./Planos.module.css"
import Header from "../../components/Header"
import Menu from "../../components/Menu"

function Planos() {
    return(
        <> 
            <Header /> 
            <div className={styles.planos}>
                <Menu />
                <article className={styles.article}>
                    <div className={styles.nome}>
                        <h1>Planos</h1>
                    </div>
                    <section className={styles.criaçao}>
                        <div className={styles.criar}>
                            <h1>Criar Planos pre-programados</h1>
                            <p>Crie seus planos pre-programado</p>
                        </div>
                        <div className={styles.criar}>
                            <h1>Criar Planos do zero</h1>
                            <p>Cire seus planos do zero</p>
                        </div>
                    </section>
                    <section className={styles.criados}>

                    </section>
                </article>
            </div>
        </>

    )
}

export default Planos