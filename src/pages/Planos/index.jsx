import React, { useState } from "react";
import styles from "./Planos.module.css";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

function Planos() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCreatePlanVisible, setIsCreatePlanVisible] = useState(false);
  const [materia, setMateria] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [nomePlano, setNomePlano] = useState("");
  const [materiasConteudos, setMateriasConteudos] = useState([]);
  const [estudoFinalizado, setEstudoFinalizado] = useState(false);
  const [conteudos, setConteudos] = useState([]);
  const [todosPlanos, setTodosPlanos] = useState([]); // Estado para armazenar todos os planos

  const openModal = () => setIsModalVisible(true);

  const closeModal = () => {
    setIsModalVisible(false);
    setMateria("");
    setConteudo("");
    setNomePlano("");
    setEstudoFinalizado(false);
  };

  const salvarEstudo = () => {
    if (materia.trim() && conteudo.trim()) {
      const novoConteudo = {
        materia,
        conteudo,
        tempoEstudo: "",
        estudoFinalizado,
        data: new Date().toLocaleDateString(),
      };
      setConteudos((prevConteudos) => [...prevConteudos, novoConteudo]); // Adicionando estudo ao estado
      closeModal(); // Fecha o modal após salvar
    }
  };

  const adicionarMateria = () => {
    if (materia.trim() && conteudo.trim()) {
      setMateriasConteudos((prevMateriasConteudos) => [
        ...prevMateriasConteudos,
        { materia, conteudo },
      ]);
      setMateria(""); // Limpa o campo de matéria
      setConteudo(""); // Limpa o campo de conteúdo
    }
  };

  const salvarPlano = () => {
    if (nomePlano.trim() && materiasConteudos.length > 0) {
      const plano = {
        nomePlano,
        materiasConteudos,
      };
      setTodosPlanos((prevPlanos) => [...prevPlanos, plano]); // Adicionando plano ao estado
      setIsCreatePlanVisible(false); // Fecha a janela de plano após salvar
      setNomePlano(""); // Limpa o campo de nome do plano
      setMateriasConteudos([]); // Limpa as matérias e conteúdos
    }
  };

  return (
    <>
      <Header />
      <div className={styles.planos}>
        <Menu />
        <div className={styles.mainContent}>
          <h1>Planos de Estudo</h1>
          <div className={styles.buttonContainer}>
            <button
              className={styles.addButton}
              onClick={() => setIsCreatePlanVisible(true)} // Exibe modal de criar plano
            >
              + Criar Plano de Estudo
            </button>
            <button
              className={styles.addButton}
              onClick={openModal} // Exibe modal de adicionar estudo
            >
              + Adicionar Estudo
            </button>
          </div>

          <section className={styles.conteudo}>
            {/* Exibindo todos os planos salvos */}
            {todosPlanos.length > 0 ? (
              todosPlanos.map((plano, index) => (
                <div key={index} className={styles.planoBloco}>
                  <h2>{plano.nomePlano}</h2>
                  {plano.materiasConteudos.map((item, index) => (
                    <div key={index} className={styles.planoItem}>
                      <strong>{item.materia}:</strong> {item.conteudo}
                    </div>
                  ))}
                </div>
              ))
            ) : null}

            {/* Exibindo todos os estudos salvos */}
            {conteudos.length > 0 ? (
              conteudos.map((item, index) => (
                <div key={index} className={styles.card}>
                  <h2>{item.materia}</h2>
                  <p>
                    <strong>Conteúdo:</strong> {item.conteudo}
                  </p>
                  <p>
                    <strong>Tempo de Estudo:</strong> {item.tempoEstudo} horas
                  </p>
                  <p>
                    <strong>Data:</strong> {item.data}
                  </p>
                  <p>
                    <strong>Status:</strong>{" "}
                    {item.estudoFinalizado ? "Finalizado" : "Pendente"}
                  </p>
                </div>
              ))
            ) : null}

            {/* Mostrar mensagem se não houver estudos ou planos */}
            {(conteudos.length === 0 && todosPlanos.length === 0) && (
              <p>Nenhum estudo adicionado ainda.</p>
            )}
          </section>
        </div>

        {/* Modal para adicionar estudo */}
        {isModalVisible && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <h2>Adicionar Estudo</h2>
              <div className={styles.formGroup}>
                <label htmlFor="materia">Matéria:</label>
                <input
                  type="text"
                  id="materia"
                  value={materia}
                  onChange={(e) => setMateria(e.target.value)}
                  placeholder="Digite a matéria"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="conteudo">Conteúdo:</label>
                <textarea
                  id="conteudo"
                  value={conteudo}
                  onChange={(e) => setConteudo(e.target.value)}
                  placeholder="Descreva o conteúdo estudado"
                ></textarea>
              </div>
              <div className={styles.checkboxGroup}>
                <input
                  type="checkbox"
                  id="estudoFinalizado"
                  checked={estudoFinalizado}
                  onChange={() => setEstudoFinalizado(!estudoFinalizado)}
                />
                <label htmlFor="estudoFinalizado">Estudo Finalizado</label>
              </div>
              <div className={styles.modalActions}>
                <button onClick={closeModal} className={styles.closeButton}>
                  Cancelar
                </button>
                <button onClick={salvarEstudo} className={styles.saveButton}>
                  Salvar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal para criar plano de estudo */}
        {isCreatePlanVisible && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent} style={{ width: "600px" }}>
              <h2>Criar Plano de Estudo</h2>
              <div className={styles.formGroup}>
                <label htmlFor="nomePlano">Nome do Plano:</label>
                <input
                  type="text"
                  id="nomePlano"
                  value={nomePlano}
                  onChange={(e) => setNomePlano(e.target.value)}
                  placeholder="Digite o nome do plano"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="materia">Matéria:</label>
                <input
                  type="text"
                  id="materia"
                  value={materia}
                  onChange={(e) => setMateria(e.target.value)}
                  placeholder="Digite a matéria"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="conteudo">Conteúdo:</label>
                <textarea
                  id="conteudo"
                  value={conteudo}
                  onChange={(e) => setConteudo(e.target.value)}
                  placeholder="Digite o conteúdo"
                ></textarea>
              </div>

              <button className={styles.addButton} onClick={adicionarMateria}>
                Adicionar Matéria
              </button>

              <div>
                <h3>Matérias e Conteúdos Adicionados:</h3>
                {materiasConteudos.map((item, index) => (
                  <div key={index}>
                    <strong>{item.materia}</strong>: {item.conteudo}
                  </div>
                ))}
              </div>

              <div className={styles.modalActions}>
                <button onClick={closeModal} className={styles.closeButton}>
                  Fechar
                </button>
                <button onClick={salvarPlano} className={styles.saveButton}>
                  Salvar Plano
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Planos;
