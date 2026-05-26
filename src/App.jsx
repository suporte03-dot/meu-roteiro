import './App.css'

const DESTINOS = [
  { nome: 'Gramado', regiao: 'Serra Gaúcha, RS', emoji: '🏔️', tag: 'Romântico' },
  { nome: 'Florianópolis', regiao: 'Santa Catarina', emoji: '🏖️', tag: 'Praia' },
  { nome: 'Balneário Camboriú', regiao: 'Santa Catarina', emoji: '🌊', tag: 'Verão' },
  { nome: 'Foz do Iguaçu', regiao: 'Paraná', emoji: '💧', tag: 'Natureza' },
  { nome: 'Rio de Janeiro', regiao: 'Rio de Janeiro', emoji: '🗽', tag: 'Urbano' },
  { nome: 'São Paulo', regiao: 'São Paulo', emoji: '🏙️', tag: 'Cultura' },
]

const PASSOS = [
  {
    numero: '01',
    titulo: 'Escolha seu destino',
    descricao: 'Explore destinos populares ou busque o lugar dos seus sonhos com filtros de estilo e orçamento.',
  },
  {
    numero: '02',
    titulo: 'Monte seu roteiro',
    descricao: 'Organize atividades dia a dia e receba sugestões personalizadas para aproveitar cada momento.',
  },
  {
    numero: '03',
    titulo: 'Estime os custos',
    descricao: 'Visualize hospedagem, transporte, refeições e passeios em um orçamento claro e editável.',
  },
]

const ROTEIRO_GRAMADO = [
  {
    dia: 'Dia 1',
    titulo: 'Chegada e centro',
    atividades: ['Check-in e passeio pela Rua Coberta', 'Almoço em restaurante local', 'Mini Mundo e Lago Negro'],
  },
  {
    dia: 'Dia 2',
    titulo: 'Natureza e chocolate',
    atividades: ['Carros de alegria até o Caracol', 'Almoço na serra', 'Fábrica de chocolate e jantar romântico'],
  },
  {
    dia: 'Dia 3',
    titulo: 'Despedida',
    atividades: ['Café da manhã colonial', 'Compras de souvenirs', 'Retorno com memórias incríveis'],
  },
]

const ORCAMENTO = [
  { item: 'Hospedagem (2 noites)', valor: 'R$ 900' },
  { item: 'Transporte', valor: 'R$ 350' },
  { item: 'Refeições', valor: 'R$ 480' },
  { item: 'Passeios e ingressos', valor: 'R$ 320' },
]

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header__inner">
          <a href="#" className="logo">
            <span className="logo__icon">✈</span>
            <span className="logo__text">MeuRoteiro</span>
          </a>
          <nav className="nav">
            <a href="#destinos">Destinos</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#roteiro">Roteiros</a>
          </nav>
          <button type="button" className="btn btn--primary btn--sm">
            Começar agora
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero__content">
            <span className="hero__badge">Sua próxima aventura começa aqui</span>
            <h1 className="hero__title">Planeje sua viagem em um só lugar</h1>
            <p className="hero__subtitle">
              Descubra destinos incríveis, monte roteiros personalizados e estime
              custos com clareza — tudo para viajar com tranquilidade.
            </p>

            <form className="search" onSubmit={(e) => e.preventDefault()}>
              <div className="search__field">
                <label htmlFor="destino">Destino</label>
                <select id="destino" defaultValue="">
                  <option value="" disabled>
                    Para onde você quer ir?
                  </option>
                  {DESTINOS.map((d) => (
                    <option key={d.nome} value={d.nome}>
                      {d.nome}
                    </option>
                  ))}
                </select>
              </div>
              <div className="search__field">
                <label htmlFor="dias">Dias</label>
                <input id="dias" type="number" min="1" max="30" defaultValue="3" />
              </div>
              <div className="search__field">
                <label htmlFor="estilo">Estilo</label>
                <select id="estilo" defaultValue="romantico">
                  <option value="romantico">Romântico</option>
                  <option value="aventura">Aventura</option>
                  <option value="familia">Família</option>
                  <option value="cultural">Cultural</option>
                  <option value="praia">Praia</option>
                </select>
              </div>
              <div className="search__field">
                <label htmlFor="orcamento">Orçamento</label>
                <select id="orcamento" defaultValue="medio">
                  <option value="economico">Até R$ 1.500</option>
                  <option value="medio">R$ 1.500 – R$ 3.000</option>
                  <option value="conforto">R$ 3.000 – R$ 6.000</option>
                  <option value="premium">Acima de R$ 6.000</option>
                </select>
              </div>
              <button type="submit" className="btn btn--primary btn--search">
                Planejar viagem
              </button>
            </form>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__card hero__card--1">
              <span>🏔️ Gramado</span>
              <small>3 dias · Romântico</small>
            </div>
            <div className="hero__card hero__card--2">
              <span>🏖️ Floripa</span>
              <small>5 dias · Praia</small>
            </div>
            <div className="hero__card hero__card--3">
              <span>💰 Orçamento</span>
              <small>R$ 2.050 estimado</small>
            </div>
          </div>
        </section>

        <section id="destinos" className="section">
          <div className="section__header">
            <h2>Destinos populares</h2>
            <p>Os lugares mais buscados pelos viajantes brasileiros</p>
          </div>
          <div className="destinos-grid">
            {DESTINOS.map((destino) => (
              <article key={destino.nome} className="destino-card">
                <div className="destino-card__emoji">{destino.emoji}</div>
                <span className="destino-card__tag">{destino.tag}</span>
                <h3>{destino.nome}</h3>
                <p>{destino.regiao}</p>
                <button type="button" className="destino-card__btn">
                  Ver roteiro
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="como-funciona" className="section section--alt">
          <div className="section__header">
            <h2>Como funciona</h2>
            <p>Três passos simples para planejar a viagem perfeita</p>
          </div>
          <div className="passos">
            {PASSOS.map((passo) => (
              <article key={passo.numero} className="passo">
                <span className="passo__numero">{passo.numero}</span>
                <h3>{passo.titulo}</h3>
                <p>{passo.descricao}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="roteiro" className="section">
          <div className="exemplos">
            <div className="exemplo-rota">
              <div className="section__header section__header--left">
                <span className="section__label">Exemplo de roteiro</span>
                <h2>Gramado · 3 dias</h2>
                <p>Um roteiro romântico pela Serra Gaúcha</p>
              </div>
              <div className="timeline">
                {ROTEIRO_GRAMADO.map((item) => (
                  <article key={item.dia} className="timeline__item">
                    <div className="timeline__marker" />
                    <div className="timeline__content">
                      <span className="timeline__dia">{item.dia}</span>
                      <h3>{item.titulo}</h3>
                      <ul>
                        {item.atividades.map((atividade) => (
                          <li key={atividade}>{atividade}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="exemplo-orcamento">
              <div className="section__header section__header--left">
                <span className="section__label">Orçamento estimado</span>
                <h2>Resumo de custos</h2>
                <p>Valores aproximados para 2 pessoas, 3 dias</p>
              </div>
              <div className="orcamento-card">
                <ul className="orcamento-lista">
                  {ORCAMENTO.map((linha) => (
                    <li key={linha.item}>
                      <span>{linha.item}</span>
                      <strong>{linha.valor}</strong>
                    </li>
                  ))}
                </ul>
                <div className="orcamento-total">
                  <span>Total estimado</span>
                  <strong>R$ 2.050</strong>
                </div>
                <p className="orcamento-nota">
                  * Valores ilustrativos. Ajuste conforme sua preferência de conforto.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>MeuRoteiro — Viaje melhor, planeje com facilidade.</p>
      </footer>
    </div>
  )
}

export default App
