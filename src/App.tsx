import { useState } from "react";
import "./App.css";

const services = [
  ["Sistemas web", "Aplicações para organizar operações e atender clientes."],
  // [
  //   "Aplicativos",
  //   "Experiências mobile conectadas ao dia a dia do seu negócio.",
  // ],
  ["Integrações", "Seus sistemas trocando dados sem tarefas duplicadas."],
  // ["Inteligência artificial", "Automação aplicada a processos reais, com propósito."],
  [
    "Evolução de produtos",
    "Novas funcionalidades, manutenção e melhoria contínua.",
  ],
];

const steps = [
  [
    "Entender",
    "Mapeamos o desafio, as pessoas envolvidas e o resultado esperado.",
  ],
  [
    "Desenhar",
    "Definimos escopo e experiência antes de avançar para o código.",
  ],
  ["Construir", "Entregamos em ciclos curtos, validando cada etapa com você."],
  ["Acompanhar", "Publicamos, medimos e seguimos evoluindo o produto."],
];

function App() {
  const [challenge, setChallenge] = useState("");
  const [solution, setSolution] = useState(
    "Uma ideia começa com uma boa conversa.",
  );

  function shapeIdea(value: string) {
    setChallenge(value);
    setSolution(
      value.trim()
        ? `Vamos transformar “${value.trim()}” em um produto digital útil.`
        : "Uma ideia começa com uma boa conversa.",
    );
  }

  return (
    <main>
      <header className="nav">
        <a className="wordmark" href="#inicio" aria-label="M4CODE, início">
          M4CODE<span>.</span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#servicos">Serviços</a>
          <a href="#processo">Processo</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-title" aria-label="Software sob medida">
          <span className="hero-line">Software</span>
          <span className="hero-line hero-line-last">sob medida</span>
        </div>
        <div className="hero-bottom">
          <p>
            Somos uma software house que transforma desafios de negócio em
            produtos digitais sob medida.
          </p>
          <a className="button" href="#contato">
            Vamos conversar
          </a>
        </div>
      </section>

      <section className="intro" aria-labelledby="intro-title">
        <h2 id="intro-title">Tecnologia com um motivo.</h2>
        <p>
          Do primeiro rascunho à evolução contínua, construímos software
          alinhado ao que sua empresa precisa fazer melhor.
        </p>
      </section>

      <section className="services section" id="servicos">
        <h2>O que fazemos</h2>
        <ul>
          {services.map(([name, description]) => (
            <li key={name}>
              <span>{name}</span>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="process section" id="processo">
        <div className="process-heading">
          <h2>Do desafio à entrega</h2>
          <p>
            Um caminho colaborativo, com decisões claras e espaço para aprender
            ao longo do projeto.
          </p>
        </div>
        <ol>
          {steps.map(([name, description]) => (
            <li key={name}>
              <h3>{name}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="live section" aria-labelledby="live-title">
        <div>
          <h2 id="live-title">Dê forma à sua ideia</h2>
          <p>
            Escreva um desafio. Veja como ele pode virar uma conversa de
            produto.
          </p>
        </div>
        <div className="idea-tool">
          <label htmlFor="challenge">O que sua empresa precisa resolver?</label>
          <input
            id="challenge"
            value={challenge}
            onChange={(event) => shapeIdea(event.target.value)}
            placeholder="Ex.: reduzir tarefas manuais"
          />
          <p className="idea-result" aria-live="polite">
            {solution}
          </p>
          <a
            href={`mailto:eduardo@m4code.com?subject=${encodeURIComponent("Vamos conversar sobre um projeto")}&body=${encodeURIComponent(`Meu desafio: ${challenge}`)}`}
          >
            Conversar sobre isso
          </a>
        </div>
      </section>

      <footer id="contato">
        <div className="footer-top">
          <h2>Vamos construir juntos?</h2>
          <a
            className="button"
            href="mailto:eduardo@m4code.com?subject=Vamos%20conversar%20sobre%20um%20projeto"
          >
            Fale com a M4CODE
          </a>
        </div>
        <a className="footer-mark" href="#inicio">
          M4CODE
        </a>
        <div className="footer-meta">
          <div className="contact-links">
            <a href="mailto:eduardo@m4code.com" aria-label="Enviar e-mail">
              <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>
            <a
              href="https://wa.me/5548991597601"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar pelo WhatsApp"
            >
              <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.2 11.7a8.2 8.2 0 0 1-12.1 7.2L4 20l1.1-4a8.2 8.2 0 1 1 15.1-4.3Z" />
                <path d="M9 8.3c.3-.5.5-.5.8-.5h.4c.2 0 .4.1.5.4l.7 1.7c.1.2 0 .4-.1.6l-.6.7c-.2.2-.2.4-.1.6.5.9 1.3 1.6 2.2 2.1.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.2.1.3.3.3.5 0 .4-.2 1.1-.6 1.4-.4.4-1.1.6-1.7.5-1-.1-2.4-.8-3.6-1.8-1.3-1.1-2.2-2.5-2.5-3.5-.3-1 .1-2.1.8-2.5Z" />
              </svg>
            </a>
          </div>
          <span>© {new Date().getFullYear()} M4CODE</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
