// pages/index.js
export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1>Rodrigo Silva</h1>
          <p>Bem-vindo ao meu espaço pessoal</p>
        </div>
      </header>

      <main className="main">
        <div className="container">
          {/* Aviso de construção */}
          <div className="construction-notice">
            <div className="badge">
              <svg className="sparkle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3l14 9-14 9V3z" />
              </svg>
              <span>Site em construção</span>
            </div>
            <h2>Algo especial está sendo preparado...</h2>
            <p>
              Este espaço está sendo criado com muito carinho para celebrar as
              pessoas mais importantes da minha vida e compartilhar momentos
              especiais.
            </p>
          </div>

          {/* Sessão de dedicação */}
          <section className="dedication">
            <div className="section-header">
              <svg className="heart-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <h3>Dedicado com amor</h3>
              <p>Às pessoas que fazem minha vida ter sentido</p>
            </div>

            <div className="cards-grid">
              <div className="card">
                <div className="card-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h4>Minha Família</h4>
                <div className="person"><span><strong>Pai:</strong> Gladimir</span></div>
                <div className="person"><span><strong>Mãe:</strong> Ana Alice</span></div>
                <div className="person"><span><strong>Irmã:</strong> Mariana</span></div>
                <p className="card-description">A base de tudo que sou</p>
              </div>

              <div className="card">
                <div className="card-icon">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <h4>Meu Amor</h4>
                <div className="person"><span><strong>Namorada:</strong> Juliana</span></div>
                <p className="card-description">Quem faz meu coração bater mais forte</p>
              </div>
            </div>
          </section>

          {/* Sessão "em breve" */}
          <section className="coming-soon">
            <h3>Em breve você encontrará aqui:</h3>
            <div className="features-grid">
              <div className="feature"><strong>Memórias</strong><p>Momentos especiais compartilhados</p></div>
              <div className="feature"><strong>Projetos</strong><p>Trabalhos e conquistas</p></div>
              <div className="feature"><strong>Contato</strong><p>Formas de me encontrar</p></div>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2025 Rodrigo Silva - Feito com ❤️ para as pessoas que amo</p>
        </div>
      </footer>
    </>
  );
}
