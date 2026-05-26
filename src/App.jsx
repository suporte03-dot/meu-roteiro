import { useState } from 'react'
import './App.css'

/* ── SVG Icons ── */
function IconMap({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
      <path d="M15 5.764v15" /><path d="M9 3.236v15" />
    </svg>
  )
}

function IconRoute({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="19" r="3" /><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" /><circle cx="18" cy="5" r="3" />
    </svg>
  )
}

function IconCalendar({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" />
    </svg>
  )
}

function IconWallet({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" /><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}

function IconCompass({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}

function IconHeart({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

function IconSpark({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  )
}

function IconMenu({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function IconClose({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

function IconCheck({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function IconClock({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
    </svg>
  )
}

/* ── Mock Data ── */
const NAV_LINKS = [
  { href: '#destinos', label: 'Destinos' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#roteiro', label: 'Roteiros' },
  { href: '#orcamento', label: 'Orçamento' },
  { href: '#favoritos', label: 'Favoritos' },
]

const METRICAS = [
  { valor: '+50', label: 'destinos sugeridos', icon: IconMap },
  { valor: 'Dia a dia', label: 'roteiros organizados', icon: IconCalendar },
  { valor: 'Real-time', label: 'estimativa de custos', icon: IconWallet },
  { valor: '< 5 min', label: 'planejamento rápido', icon: IconSpark },
]

const DESTINOS = [
  {
    id: 'gramado',
    nome: 'Gramado',
    descricao: 'Charme europeu, chocolate artesanal e paisagens de serra.',
    tags: ['Romântico', 'Família'],
    preco: 'R$ 1.800',
    tempo: '3–4 dias',
    gradient: 'grad-gramado',
  },
  {
    id: 'florianopolis',
    nome: 'Florianópolis',
    descricao: 'Praias paradisíacas, trilhas e gastronomia costeira.',
    tags: ['Praia', 'Aventura'],
    preco: 'R$ 2.200',
    tempo: '4–5 dias',
    gradient: 'grad-floripa',
  },
  {
    id: 'bc',
    nome: 'Balneário Camboriú',
    descricao: 'Arranha-céus à beira-mar e vida noturna vibrante.',
    tags: ['Praia', 'Cidade'],
    preco: 'R$ 2.500',
    tempo: '3–5 dias',
    gradient: 'grad-bc',
  },
  {
    id: 'foz',
    nome: 'Foz do Iguaçu',
    descricao: 'Cataratas majestosas e contato com a natureza.',
    tags: ['Aventura', 'Família'],
    preco: 'R$ 2.800',
    tempo: '3–4 dias',
    gradient: 'grad-foz',
  },
  {
    id: 'rio',
    nome: 'Rio de Janeiro',
    descricao: 'Ícones mundiais, samba e paisagens inesquecíveis.',
    tags: ['Cidade', 'Praia'],
    preco: 'R$ 2.400',
    tempo: '4–6 dias',
    gradient: 'grad-rio',
  },
  {
    id: 'sp',
    nome: 'São Paulo',
    descricao: 'Capital cultural com gastronomia e arte de classe mundial.',
    tags: ['Cidade', 'Econômico'],
    preco: 'R$ 1.600',
    tempo: '3–5 dias',
    gradient: 'grad-sp',
  },
]

const PASSOS = [
  { num: '01', titulo: 'Escolha o destino', desc: 'Explore mais de 50 destinos brasileiros com filtros por estilo, clima e orçamento.' },
  { num: '02', titulo: 'Personalize seu estilo', desc: 'Defina se prefere viagem econômica, em família, romântica, aventura ou luxo.' },
  { num: '03', titulo: 'Receba o roteiro', desc: 'Obtenha sugestões dia a dia com atividades, horários e tempo estimado.' },
  { num: '04', titulo: 'Ajuste o orçamento', desc: 'Visualize e ajuste custos de hospedagem, transporte, refeições e passeios.' },
]

const ROTEIRO_DIAS = [
  {
    id: 0,
    label: 'Dia 1',
    titulo: 'Chegada e centro',
    periodos: [
      { periodo: 'Manhã', atividade: 'Check-in e café colonial', tempo: '2h', custo: 'R$ 80' },
      { periodo: 'Tarde', atividade: 'Passeio pela Rua Coberta e Mini Mundo', tempo: '4h', custo: 'R$ 120' },
      { periodo: 'Noite', atividade: 'Jantar romântico e Lago Negro iluminado', tempo: '3h', custo: 'R$ 180' },
    ],
  },
  {
    id: 1,
    label: 'Dia 2',
    titulo: 'Natureza e chocolate',
    periodos: [
      { periodo: 'Manhã', atividade: 'Carros de alegria até a Cascata do Caracol', tempo: '3h', custo: 'R$ 95' },
      { periodo: 'Tarde', atividade: 'Almoço na serra e fábrica de chocolate', tempo: '4h', custo: 'R$ 150' },
      { periodo: 'Noite', atividade: 'Jantar especial e passeio noturno', tempo: '2h', custo: 'R$ 200' },
    ],
  },
  {
    id: 2,
    label: 'Dia 3',
    titulo: 'Despedida',
    periodos: [
      { periodo: 'Manhã', atividade: 'Café da manhã e compras de souvenirs', tempo: '2h', custo: 'R$ 90' },
      { periodo: 'Tarde', atividade: 'Último passeio pelo centro histórico', tempo: '3h', custo: 'R$ 60' },
      { periodo: 'Noite', atividade: 'Retorno com memórias incríveis', tempo: '—', custo: 'R$ 350' },
    ],
  },
]

const ORCAMENTO = [
  { categoria: 'Hospedagem', valor: 900, pct: 44 },
  { categoria: 'Transporte', valor: 350, pct: 17 },
  { categoria: 'Alimentação', valor: 480, pct: 23 },
  { categoria: 'Passeios', valor: 320, pct: 16 },
  { categoria: 'Reserva extra', valor: 0, pct: 0, reserva: true },
]

const TOTAL_ORCAMENTO = 2050

const DIFERENCIAIS = [
  { icon: IconRoute, titulo: 'Roteiros personalizados', desc: 'Sugestões adaptadas ao seu estilo, tempo e preferências de viagem.' },
  { icon: IconWallet, titulo: 'Custos organizados', desc: 'Orçamento detalhado por categoria com estimativas realistas.' },
  { icon: IconMap, titulo: 'Destinos em um só lugar', desc: 'Explore dezenas de destinos sem abrir dezenas de abas.' },
  { icon: IconSpark, titulo: 'Planejamento simples', desc: 'Interface intuitiva que transforma ideias em roteiros em minutos.' },
  { icon: IconHeart, titulo: 'Favoritos e ideias salvas', desc: 'Guarde destinos e atividades para planejar quando quiser.' },
  { icon: IconCompass, titulo: 'Comparação de estilos', desc: 'Veja como muda o roteiro entre econômico, família ou luxo.' },
]

const ESTILOS = ['Econômica', 'Família', 'Casal', 'Aventura', 'Luxo']

const ORCAMENTO_OPCOES = [
  { value: '1500', label: 'Até R$ 1.500' },
  { value: '3000', label: 'R$ 1.500 – R$ 3.000' },
  { value: '6000', label: 'R$ 3.000 – R$ 6.000' },
  { value: '6000+', label: 'Acima de R$ 6.000' },
]

/* ── Sub-components ── */
function Logo({ onClick }) {
  return (
    <a href="#" className="logo" onClick={onClick}>
      <span className="logo__mark">
        <IconRoute size={18} />
      </span>
      <span className="logo__name">MeuRoteiro</span>
    </a>
  )
}

function Header({ menuOpen, setMenuOpen }) {
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <Logo onClick={closeMenu} />
        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
          ))}
          <a href="#planejador" className="nav__cta-mobile btn btn--primary" onClick={closeMenu}>
            Criar roteiro
          </a>
        </nav>
        <button type="button" className="btn btn--primary btn--header" onClick={() => document.getElementById('planejador')?.scrollIntoView({ behavior: 'smooth' })}>
          Criar roteiro
        </button>
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>
    </header>
  )
}

function HeroPreviewCard() {
  const miniDias = ['Chegada', 'Natureza', 'Despedida']
  return (
    <div className="hero-preview glass">
      <div className="hero-preview__header">
        <div>
          <span className="hero-preview__destino">Gramado</span>
          <span className="hero-preview__meta">3 dias · Casal · R$ 2.050</span>
        </div>
        <span className="hero-preview__badge">Roteiro pronto</span>
      </div>
      <div className="hero-preview__timeline">
        {miniDias.map((dia, i) => (
          <div key={dia} className="hero-preview__step">
            <span className="hero-preview__dot">{i + 1}</span>
            <span>{dia}</span>
          </div>
        ))}
      </div>
      <div className="hero-preview__costs">
        <div className="hero-preview__cost-row">
          <span>Hospedagem</span><strong>R$ 900</strong>
        </div>
        <div className="hero-preview__cost-row">
          <span>Passeios + refeições</span><strong>R$ 800</strong>
        </div>
        <div className="hero-preview__cost-row hero-preview__cost-row--total">
          <span>Total estimado</span><strong>R$ 2.050</strong>
        </div>
      </div>
    </div>
  )
}

function PlannerForm({ form, setForm, onSubmit, sugestao }) {
  return (
    <section id="planejador" className="planner">
      <div className="container">
        <div className="planner__card glass">
          <div className="planner__header">
            <span className="eyebrow">Planejador inteligente</span>
            <h2>Monte sua viagem em segundos</h2>
            <p>Preencha os campos e receba uma sugestão personalizada de roteiro.</p>
          </div>
          <form className="planner__form" onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="destino">Destino</label>
              <select
                id="destino"
                value={form.destino}
                onChange={(e) => setForm({ ...form, destino: e.target.value })}
              >
                <option value="">Para onde você quer ir?</option>
                {DESTINOS.map((d) => (
                  <option key={d.id} value={d.nome}>{d.nome}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="dias">Quantidade de dias</label>
              <input
                id="dias"
                type="number"
                min="1"
                max="30"
                value={form.dias}
                onChange={(e) => setForm({ ...form, dias: e.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="estilo">Estilo da viagem</label>
              <select
                id="estilo"
                value={form.estilo}
                onChange={(e) => setForm({ ...form, estilo: e.target.value })}
              >
                {ESTILOS.map((e) => (
                  <option key={e} value={e}>{e}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="orcamento">Orçamento aproximado</label>
              <select
                id="orcamento"
                value={form.orcamento}
                onChange={(e) => setForm({ ...form, orcamento: e.target.value })}
              >
                {ORCAMENTO_OPCOES.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn--primary btn--lg planner__submit">
              Gerar roteiro
            </button>
          </form>
          {sugestao && (
            <div className="planner__result" role="status">
              <span className="planner__result-icon"><IconCheck size={18} /></span>
              <div>
                <strong>Roteiro sugerido para {sugestao.destino}</strong>
                <p>
                  {sugestao.dias} dias · Estilo {sugestao.estilo} · Orçamento {sugestao.orcamentoLabel}
                  {' '}— estimativa de <strong>{sugestao.precoEstimado}</strong> para 2 pessoas.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

/* ── Main App ── */
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [diaAtivo, setDiaAtivo] = useState(0)
  const [form, setForm] = useState({
    destino: '',
    dias: '3',
    estilo: 'Casal',
    orcamento: '3000',
  })
  const [sugestao, setSugestao] = useState(null)

  const handleGerarRoteiro = (e) => {
    e.preventDefault()
    const destinoData = DESTINOS.find((d) => d.nome === form.destino)
    const orcLabel = ORCAMENTO_OPCOES.find((o) => o.value === form.orcamento)?.label ?? ''
    setSugestao({
      destino: form.destino || 'Gramado',
      dias: form.dias,
      estilo: form.estilo,
      orcamentoLabel: orcLabel,
      precoEstimado: destinoData?.preco ?? 'R$ 2.050',
    })
  }

  const diaSelecionado = ROTEIRO_DIAS[diaAtivo]

  return (
    <div className="app">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero__bg" aria-hidden="true">
            <div className="hero__orb hero__orb--1" />
            <div className="hero__orb hero__orb--2" />
            <div className="hero__grid" />
          </div>
          <div className="container hero__grid-layout">
            <div className="hero__copy">
              <span className="eyebrow eyebrow--light">Plataforma de planejamento de viagens</span>
              <h1>Planeje viagens inesquecíveis em poucos cliques</h1>
              <p className="hero__subtitle">
                Descubra destinos, organize passeios, monte roteiros personalizados e estime
                os custos da sua próxima viagem em um só lugar.
              </p>
              <div className="hero__actions">
                <button type="button" className="btn btn--primary btn--lg" onClick={() => document.getElementById('planejador')?.scrollIntoView({ behavior: 'smooth' })}>
                  Criar meu roteiro
                </button>
                <a href="#destinos" className="btn btn--ghost btn--lg">Explorar destinos</a>
              </div>
              <div className="hero__trust">
                <span><IconCheck size={14} /> Sem cadastro necessário</span>
                <span><IconCheck size={14} /> Roteiros em minutos</span>
              </div>
            </div>
            <div className="hero__visual">
              <HeroPreviewCard />
              <div className="hero__float hero__float--1 glass">
                <IconMap size={16} />
                <span>12 atividades sugeridas</span>
              </div>
              <div className="hero__float hero__float--2 glass">
                <IconWallet size={16} />
                <span>Orçamento detalhado</span>
              </div>
            </div>
          </div>
        </section>

        <PlannerForm form={form} setForm={setForm} onSubmit={handleGerarRoteiro} sugestao={sugestao} />

        {/* Métricas */}
        <section className="metricas">
          <div className="container metricas__grid">
            {METRICAS.map((m) => (
              <article key={m.label} className="metrica">
                <span className="metrica__icon"><m.icon size={22} /></span>
                <strong>{m.valor}</strong>
                <span>{m.label}</span>
              </article>
            ))}
          </div>
        </section>

        {/* Destinos */}
        <section id="destinos" className="section">
          <div className="container">
            <div className="section__head">
              <span className="eyebrow">Destinos em destaque</span>
              <h2>Explore os lugares mais desejados do Brasil</h2>
              <p>Cards com estimativas reais de preço e tempo ideal para cada destino.</p>
            </div>
            <div className="destinos-grid">
              {DESTINOS.map((d) => (
                <article key={d.id} className="dest-card">
                  <div className={`dest-card__visual ${d.gradient}`}>
                    <div className="dest-card__overlay" />
                  </div>
                  <div className="dest-card__body">
                    <div className="dest-card__tags">
                      {d.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                    <h3>{d.nome}</h3>
                    <p>{d.descricao}</p>
                    <div className="dest-card__meta">
                      <span><IconWallet size={14} /> {d.preco} / pessoa</span>
                      <span><IconClock size={14} /> {d.tempo}</span>
                    </div>
                    <button type="button" className="btn btn--outline btn--sm">Ver roteiro</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="section section--muted">
          <div className="container">
            <div className="section__head">
              <span className="eyebrow">Como funciona</span>
              <h2>Sua viagem planejada em 4 passos</h2>
              <p>Um fluxo simples e visual para ir da ideia ao roteiro completo.</p>
            </div>
            <div className="jornada">
              {PASSOS.map((p, i) => (
                <article key={p.num} className="jornada__step">
                  <span className="jornada__num">{p.num}</span>
                  <h3>{p.titulo}</h3>
                  <p>{p.desc}</p>
                  {i < PASSOS.length - 1 && <span className="jornada__connector" aria-hidden="true" />}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Roteiro exemplo */}
        <section id="roteiro" className="section">
          <div className="container">
            <div className="section__head section__head--left">
              <span className="eyebrow">Exemplo premium</span>
              <h2>Roteiro de Gramado · 3 dias</h2>
              <p>Roteiro romântico pela Serra Gaúcha com atividades detalhadas por período.</p>
            </div>
            <div className="roteiro-premium glass">
              <div className="roteiro-premium__tabs" role="tablist">
                {ROTEIRO_DIAS.map((dia) => (
                  <button
                    key={dia.id}
                    type="button"
                    role="tab"
                    aria-selected={diaAtivo === dia.id}
                    className={`roteiro-premium__tab ${diaAtivo === dia.id ? 'roteiro-premium__tab--active' : ''}`}
                    onClick={() => setDiaAtivo(dia.id)}
                  >
                    <span>{dia.label}</span>
                    <small>{dia.titulo}</small>
                  </button>
                ))}
              </div>
              <div className="roteiro-premium__content" role="tabpanel">
                <h3>{diaSelecionado.titulo}</h3>
                <div className="periodos">
                  {diaSelecionado.periodos.map((p) => (
                    <article key={p.periodo} className="periodo">
                      <span className="periodo__label">{p.periodo}</span>
                      <div className="periodo__info">
                        <strong>{p.atividade}</strong>
                        <div className="periodo__meta">
                          <span><IconClock size={13} /> {p.tempo}</span>
                          <span><IconWallet size={13} /> {p.custo}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Orçamento */}
        <section id="orcamento" className="section section--muted">
          <div className="container">
            <div className="orcamento-layout">
              <div className="section__head section__head--left">
                <span className="eyebrow">Orçamento visual</span>
                <h2>Estimativa de custos</h2>
                <p>Valores aproximados para 2 pessoas, viagem de 3 dias a Gramado.</p>
              </div>
              <div className="orcamento-panel glass">
                <ul className="orcamento-bars">
                  {ORCAMENTO.filter((o) => !o.reserva).map((item) => (
                    <li key={item.categoria}>
                      <div className="orcamento-bars__head">
                        <span>{item.categoria}</span>
                        <strong>R$ {item.valor.toLocaleString('pt-BR')}</strong>
                      </div>
                      <div className="orcamento-bars__track">
                        <div className="orcamento-bars__fill" style={{ width: `${item.pct}%` }} />
                      </div>
                      <span className="orcamento-bars__pct">{item.pct}% do total</span>
                    </li>
                  ))}
                </ul>
                <div className="orcamento-reserva">
                  <span>Reserva extra recomendada</span>
                  <strong>+ R$ 200</strong>
                </div>
                <div className="orcamento-total">
                  <div>
                    <span>Total estimado</span>
                    <small>Para 2 pessoas · 3 dias</small>
                  </div>
                  <strong>R$ {TOTAL_ORCAMENTO.toLocaleString('pt-BR')}</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diferencial */}
        <section id="favoritos" className="section">
          <div className="container">
            <div className="section__head">
              <span className="eyebrow">Por que MeuRoteiro</span>
              <h2>Tudo que você precisa para viajar melhor</h2>
              <p>Uma plataforma completa que substitui planilhas, prints e dezenas de sites.</p>
            </div>
            <div className="diff-grid">
              {DIFERENCIAIS.map((d) => (
                <article key={d.titulo} className="diff-card">
                  <span className="diff-card__icon"><d.icon size={22} /></span>
                  <h3>{d.titulo}</h3>
                  <p>{d.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="cta-final">
          <div className="container">
            <div className="cta-final__card">
              <h2>Pronto para montar sua próxima viagem?</h2>
              <p>Comece escolhendo um destino e receba uma sugestão de roteiro em poucos segundos.</p>
              <button type="button" className="btn btn--white btn--lg" onClick={() => document.getElementById('planejador')?.scrollIntoView({ behavior: 'smooth' })}>
                Criar meu roteiro agora
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <Logo />
            <p>Viaje melhor, planeje com facilidade.</p>
          </div>
          <nav className="footer__nav">
            <a href="#destinos">Destinos</a>
            <a href="#roteiro">Roteiros</a>
            <a href="#orcamento">Orçamento</a>
            <a href="#contato">Contato</a>
          </nav>
          <p className="footer__copy">&copy; {new Date().getFullYear()} MeuRoteiro. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
