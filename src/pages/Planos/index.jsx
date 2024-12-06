import React, { useState } from "react";
import styles from "./Planos.module.css";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

function Planos() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [materia, setMateria] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [tempoEstudo, setTempoEstudo] = useState("");
  const [estudoFinalizado, setEstudoFinalizado] = useState(false);
  const [conteudos, setConteudos] = useState([]);

  // Abrir e fechar modal
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => {
    setIsModalVisible(false);
    setMateria("");
    setConteudo("");
    setTempoEstudo("");
    setEstudoFinalizado(false);
  };

  // Salvar estudo
  const salvarEstudo = () => {
    if (materia.trim() && conteudo.trim() && tempoEstudo.trim()) {
      const novoConteudo = {
        materia,
        conteudo,
        tempoEstudo,
        estudoFinalizado,
        data: new Date().toLocaleDateString(),
      };

      setConteudos((prevConteudos) => [...prevConteudos, novoConteudo]);
      closeModal();
    }
  };

  return (
    <>
      <Header />
      <div className={styles.planos}>
        <Menu />
        <div className={styles.mainContent}>
          <h1>Planos de Estudo</h1>
          <button className={styles.addButton} onClick={openModal}>
            + Criar Plano de Estudo
          </button>

          <section className={styles.conteudo}>
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
            ) : (
              <p>Nenhum plano criado ainda. Clique no botão acima para começar!</p>
            )}
          </section>
        </div>

        {isModalVisible && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <h2>Criar Plano de Estudo</h2>
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
              <div className={styles.formGroup}>
                <label htmlFor="tempoEstudo">Tempo de Estudo (horas):</label>
                <input
                  type="text"
                  id="tempoEstudo"
                  value={tempoEstudo}
                  onChange={(e) => setTempoEstudo(e.target.value)}
                  placeholder="Ex: 2.5"
                />
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
      </div>
    </>
  );
}

export default Planos;
