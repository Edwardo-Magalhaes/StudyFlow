import React from "react";
import styles from "./Apresentacao.module.css";

const Apresentacao = () => {
  const navigateTo = (path) => {
    window.location.href = path;
  };

  return (
    <div className={styles.apresentacao}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <h1>StudyFlow</h1>
        </div>
        <div className={styles.navButtons}>
          <button onClick={() => navigateTo("/Login")}>Entrar</button>
          <button onClick={() => navigateTo("/Login")}>Registrar</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`${styles.hero} ${styles.animateHero}`}>
        <div className={styles.heroContent}>
          <h1>Transforme seus estudos. Alcance seus sonhos.</h1>
          <p>
            Com o StudyFlow, você pode planejar e controlar seu tempo de forma
            eficiente, alcançando seus objetivos de maneira mais rápida e com
            menos esforço. Comece a usar agora e experimente a verdadeira
            produtividade!
          </p>
          <div className={styles.heroButtons}>
            <button onClick={() => navigateTo("/auth")}>Comece Agora</button>
          </div>
        </div>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Planejamento eficiente"
          className={styles.heroImage}
        />
      </section>

      {/* Benefícios */}
      <section className={styles.benefits}>
        <h2>Por que escolher o StudyFlow?</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img
              src="https://via.placeholder.com/150"
              alt="Planejamento Personalizado"
            />
            <h3>Planejamento Personalizado</h3>
            <p>Adapte seu cronograma às suas metas e prioridades.</p>
          </div>
          <div className={styles.card}>
            <img src="https://via.placeholder.com/150" alt="Produtividade" />
            <h3>Produtividade Máxima</h3>
            <p>Organize seu tempo e alcance um novo nível de desempenho.</p>
          </div>
          <div className={styles.card}>
            <img
              src="https://via.placeholder.com/150"
              alt="Acompanhamento de Resultados"
            />
            <h3>Acompanhamento Detalhado</h3>
            <p>Visualize seu progresso com relatórios e gráficos.</p>
          </div>
        </div>
      </section>

      {/* Funcionalidades Extras */}
      <section className={styles.features}>
        <h2>Funcionalidades Incríveis</h2>
        <ul className={styles.featureList}>
          <li>✅ Integração com Google Calendar</li>
          <li>✅ Gráficos interativos de progresso</li>
          <li>✅ Dicas de estudos personalizadas</li>
          <li>✅ Alertas e notificações inteligentes</li>
        </ul>
      </section>

      {/* Testemunhos */}
      <section className={styles.testimonials}>
        <h2>O que nossos usuários dizem</h2>
        <div className={styles.testimonial}>
          <p>
            "Com este organizador, passei no vestibular dos meus sonhos! Nunca
            me senti tão no controle do meu tempo."
          </p>
          <h4>- João Silva</h4>
        </div>
        <div className={styles.testimonial}>
          <p>
            "Finalmente encontrei uma ferramenta que se adapta às minhas
            necessidades. Recomendo a todos!"
          </p>
          <h4>- Maria Oliveira</h4>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        <h2>Pronto para transformar sua rotina de estudos?</h2>
        <button onClick={() => navigateTo("/Login")}>Criar Conta</button>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2024 StudyFlow. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Apresentacao;
