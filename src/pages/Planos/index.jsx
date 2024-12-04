import React, { useState } from 'react';
import styles from './Planos.module.css';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import axios from 'axios';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [materia, setMateria] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [tempoEstudo, setTempoEstudo] = useState('');

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  // Função para salvar os dados no backend
  const handleSave = () => {
    // Lógica para enviar os dados para o servidor
    const dados = {
      materia,
      conteudo,
      tempo_estudo: tempoEstudo,
    };

    // Enviar os dados para o backend usando axios
    axios
      .post('http://localhost:3001/planos', dados) // URL do seu backend
      .then((response) => {
        console.log('Dados salvos com sucesso:', response.data);
        // Fechar o modal após salvar (opcional)
        closeModal();
        // Limpar os campos após salvar (opcional)
        setMateria('');
        setConteudo('');
        setTempoEstudo('');
      })
      .catch((error) => {
        console.error('Erro ao salvar os dados:', error);
      });
  };

  return (
    <>
      <Header />
      <div className={styles.planos}>
        <Menu />
        <article className={styles.article}>
          <div className={styles.nome}>
            <h1>Planos</h1>
          </div>
          <section className={styles.criacao}>
            <div>
              <button className={styles.criar} onClick={openModal}>
                <h1>Criar Planos Pre-programados</h1>
                <p>Crie seus planos pre-programados</p>
              </button>
            </div>
            <div>
              <button className={styles.criar} onClick={openModal}>
                <h1>Criar Planos do Zero</h1>
                <p>Crie seus planos do zero</p>
              </button>
            </div>
          </section>
        </article>

        {/* Modal */}
        {isModalVisible && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <h2>Formulário de Criação de Plano</h2>

              <form>
                <div className={styles.formGroup}>
                  <label htmlFor="materia">Matéria</label>
                  <input
                    type="text"
                    id="materia"
                    value={materia}
                    onChange={(e) => setMateria(e.target.value)}
                    placeholder="Digite a matéria"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="conteudo">Conteúdo</label>
                  <textarea
                    id="conteudo"
                    value={conteudo}
                    onChange={(e) => setConteudo(e.target.value)}
                    placeholder="Descreva o conteúdo"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="tempoEstudo">Tempo de Estudo</label>
                  <input
                    type="text"
                    id="tempoEstudo"
                    value={tempoEstudo}
                    onChange={(e) => setTempoEstudo(e.target.value)}
                    placeholder="Defina o tempo de estudo"
                  />
                </div>

                <div className={styles.modalActions}>
                  <button type="button" className={styles.closeButton} onClick={closeModal}>
                    Fechar
                  </button>
                  <button type="button" className={styles.saveButton} onClick={handleSave}>
                    Salvar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
