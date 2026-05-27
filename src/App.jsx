import { useState, useEffect, useMemo, useCallback } from 'react'
import {
  DESTINOS,
  getDestino,
  getPrecoPorPessoa,
  calcularOrcamento,
  getRoteiroDias,
  contarAtividades,
  getImagemHero,
  getDuracaoIdeal,
} from './data/destinos.js'
import './App.css'

const HEADER_OFFSET = 80
const FAVORITOS_KEY = 'meuRoteiro_favoritos'

/* ── Scroll helper ── */
function scrollToSection(id, { focus } = {}) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
  window.scrollTo({ top, behavior: 'smooth' })
  if (focus) {
    setTimeout(() => document.getElementById(focus)?.focus(), 450)
  }
}

function formatBRL(value) {
  return `R$ ${Math.round(value).toLocaleString('pt-BR')}`
}

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

function LogoMark({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="logo-bg" x1="4" y1="2" x2="36" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0d9488" />
          <stop offset="1" stopColor="#0369a1" />
        </linearGradient>
        <linearGradient id="logo-pin" x1="14" y1="8" x2="28" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#ccfbf1" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#logo-bg)" />
      <path d="M8 28c0-6.5 5.5-12 12-12s12 5.5 12 12" stroke="#fff" strokeOpacity="0.25" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="26" r="2.5" fill="#fff" fillOpacity="0.9" />
      <circle cx="20" cy="22" r="2.5" fill="#fff" fillOpacity="0.75" />
      <circle cx="28" cy="26" r="2.5" fill="#fff" fillOpacity="0.9" />
      <path d="M12 26h8l8-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 10c-3.3 0-6 2.7-6 6 0 4.5 6 10 6 10s6-5.5 6-10c0-3.3-2.7-6-6-6Z" fill="url(#logo-pin)" />
      <circle cx="20" cy="16" r="2.2" fill="#0d9488" />
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

function IconHeart({ size = 20, filled = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

function IconAlert({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
    </svg>
  )
}

/* ── Mock Data ── */
const NAV_LINKS = [
  { id: 'destinos', label: 'Destinos' },
  { id: 'como-funciona', label: 'Como funciona' },
  { id: 'roteiros', label: 'Roteiros' },
  { id: 'orcamento', label: 'Orçamento' },
  { id: 'favoritos', label: 'Favoritos' },
]

const METRICAS = [
  { valor: '+50', label: 'destinos sugeridos', icon: IconMap },
  { valor: 'Dia a dia', label: 'roteiros organizados', icon: IconCalendar },
  { valor: 'Real-time', label: 'estimativa de custos', icon: IconWallet },
  { valor: '< 5 min', label: 'planejamento rápido', icon: IconSpark },
]

const ESTILOS = ['Econômica', 'Família', 'Casal', 'Aventura', 'Luxo']

const ORCAMENTO_OPCOES = [
  { value: '1500', label: 'Até R$ 1.500' },
  { value: '3000', label: 'R$ 1.500 – R$ 3.000' },
  { value: '6000', label: 'R$ 3.000 – R$ 6.000' },
  { value: '6000+', label: 'Acima de R$ 6.000' },
]

const PASSOS = [
  { num: '01', titulo: 'Escolha o destino', desc: 'Explore mais de 50 destinos brasileiros com filtros por estilo, clima e orçamento.' },
  { num: '02', titulo: 'Personalize seu estilo', desc: 'Defina se prefere viagem econômica, em família, romântica, aventura ou luxo.' },
  { num: '03', titulo: 'Receba o roteiro', desc: 'Obtenha sugestões dia a dia com atividades, horários e tempo estimado.' },
  { num: '04', titulo: 'Ajuste o orçamento', desc: 'Visualize e ajuste custos de hospedagem, transporte, refeições e passeios.' },
]

const DIFERENCIAIS = [
  { icon: IconRoute, titulo: 'Roteiros personalizados', desc: 'Sugestões adaptadas ao seu estilo, tempo e preferências de viagem.' },
  { icon: IconWallet, titulo: 'Custos organizados', desc: 'Orçamento detalhado por categoria com estimativas realistas.' },
  { icon: IconMap, titulo: 'Destinos em um só lugar', desc: 'Explore dezenas de destinos sem abrir dezenas de abas.' },
  { icon: IconSpark, titulo: 'Planejamento simples', desc: 'Interface intuitiva que transforma ideias em roteiros em minutos.' },
  { icon: IconHeart, titulo: 'Favoritos e ideias salvas', desc: 'Guarde destinos e atividades para planejar quando quiser.' },
  { icon: IconCompass, titulo: 'Comparação de estilos', desc: 'Veja como muda o roteiro entre econômico, família ou luxo.' },
]


/* ── Sub-components ── */
function Logo({ onClick }) {
  return (
    <button type="button" className="logo" onClick={onClick} aria-label="MeuRoteiro — ir para o início">
      <span className="logo__mark"><LogoMark size={40} /></span>
      <span className="logo__name">
        Meu<span className="logo__accent">Roteiro</span>
      </span>
    </button>
  )
}

function DestinoImagem({ destino, variant = 'card', className = 'dest-card__visual', children }) {
  const src = variant === 'hero' ? getImagemHero(destino) : destino.imagem
  return (
    <div className={className}>
      <img
        src={src}
        alt={destino.imagemAlt ?? `Paisagem de ${destino.nome}`}
        loading={variant === 'hero' ? 'eager' : 'lazy'}
        className="destino-img"
      />
      <div className="dest-card__overlay" aria-hidden="true" />
      {children}
    </div>
  )
}

function Header({ menuOpen, setMenuOpen, onNav, onCriarRoteiro }) {
  return (
    <header className="header">
      <div className="container header__inner">
        <Logo onClick={() => { setMenuOpen(false); onNav('inicio') }} />
        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Menu principal">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              className="nav__link"
              onClick={() => { setMenuOpen(false); onNav(link.id) }}
            >
              {link.label}
            </button>
          ))}
          <button type="button" className="nav__cta-mobile btn btn--primary" onClick={() => { setMenuOpen(false); onCriarRoteiro() }}>
            Criar roteiro
          </button>
        </nav>
        <button type="button" className="btn btn--primary btn--header" onClick={onCriarRoteiro}>
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

function HeroPreviewCard({ destinoId, dias, estilo, orcamento, roteiroDias }) {
  const dest = getDestino(destinoId)
  const atividades = contarAtividades(roteiroDias)
  const miniDias = roteiroDias.slice(0, 3)

  return (
    <div className="hero-preview glass">
      <div className="hero-preview__thumb">
        <img src={getImagemHero(dest)} alt="" aria-hidden="true" loading="eager" />
        <span className="hero-preview__badge">Roteiro pronto</span>
      </div>
      <div className="hero-preview__body">
        <div className="hero-preview__header">
          <div>
            <span className="hero-preview__destino">{dest.nome}</span>
            <span className="hero-preview__meta">
              {dias} dias · {estilo} · {formatBRL(orcamento.total)}
            </span>
          </div>
        </div>
        <div className="hero-preview__stats">
          <span className="hero-preview__stat">
            <IconMap size={14} />
            {atividades} atividades sugeridas
          </span>
        </div>
        <div className="hero-preview__timeline">
          {miniDias.map((dia, i) => (
            <div key={dia.label} className="hero-preview__step">
              <span className="hero-preview__dot">{i + 1}</span>
              <span className="hero-preview__step-title">{dia.titulo}</span>
            </div>
          ))}
        </div>
        <div className="hero-preview__costs">
          <div className="hero-preview__cost-row">
            <span>Hospedagem</span>
            <strong>{formatBRL(orcamento.categorias[0].valor)}</strong>
          </div>
          <div className="hero-preview__cost-row">
            <span>Passeios + refeições</span>
            <strong>{formatBRL(orcamento.categorias[2].valor + orcamento.categorias[3].valor)}</strong>
          </div>
          <div className="hero-preview__cost-row hero-preview__cost-row--total">
            <span>Total estimado</span>
            <strong>{formatBRL(orcamento.total)}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Main App ── */
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [diaAtivo, setDiaAtivo] = useState(0)
  const [formError, setFormError] = useState('')
  const [sugestaoVisivel, setSugestaoVisivel] = useState(false)
  const [favoritos, setFavoritos] = useState(() => {
    try {
      const saved = localStorage.getItem(FAVORITOS_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const [form, setForm] = useState({
    destino: '',
    dias: '3',
    estilo: 'Casal',
    orcamento: '3000',
  })

  const [viagem, setViagem] = useState({
    destinoId: 'gramado',
    dias: '3',
    estilo: 'Casal',
    gerado: false,
  })

  useEffect(() => {
    localStorage.setItem(FAVORITOS_KEY, JSON.stringify(favoritos))
  }, [favoritos])

  const destinoAtual = getDestino(viagem.destinoId)
  const orcamento = useMemo(
    () => calcularOrcamento(viagem.destinoId, viagem.dias, viagem.estilo),
    [viagem.destinoId, viagem.dias, viagem.estilo],
  )

  const roteiroDias = useMemo(
    () => getRoteiroDias(viagem.destinoId, viagem.dias, viagem.estilo),
    [viagem.destinoId, viagem.dias, viagem.estilo],
  )

  const totalAtividades = useMemo(() => contarAtividades(roteiroDias), [roteiroDias])

  const diaSelecionado = roteiroDias[diaAtivo] ?? roteiroDias[0]

  useEffect(() => {
    if (diaAtivo >= roteiroDias.length) setDiaAtivo(0)
  }, [roteiroDias.length, diaAtivo])

  const irPlanejador = useCallback(() => {
    scrollToSection('planejador', { focus: 'destino' })
  }, [])

  const aplicarDestino = useCallback((destinoId, opts = {}) => {
    const dest = getDestino(destinoId)
    setForm((f) => ({ ...f, destino: dest.nome }))
    setViagem((v) => ({
      destinoId: dest.id,
      dias: opts.dias ?? v.dias,
      estilo: opts.estilo ?? v.estilo,
      gerado: true,
    }))
    setDiaAtivo(0)
    setFormError('')
    if (opts.scroll !== false) {
      setTimeout(() => scrollToSection('roteiros'), 100)
    }
  }, [])

  const handleGerarRoteiro = (e) => {
    e.preventDefault()
    if (!form.destino) {
      setFormError('Selecione um destino para gerar seu roteiro personalizado.')
      scrollToSection('planejador')
      setTimeout(() => document.getElementById('destino')?.focus(), 450)
      return
    }
    const dest = getDestino(form.destino)
    setFormError('')
    setViagem({
      destinoId: dest.id,
      dias: form.dias,
      estilo: form.estilo,
      gerado: true,
    })
    setDiaAtivo(0)
    setSugestaoVisivel(true)
    setTimeout(() => scrollToSection('roteiros'), 150)
  }

  const handleVerRoteiro = (destinoId) => {
    aplicarDestino(destinoId, { dias: form.dias, estilo: form.estilo })
    setSugestaoVisivel(true)
  }

  const toggleFavorito = (destinoId, e) => {
    e?.stopPropagation()
    setFavoritos((prev) =>
      prev.includes(destinoId)
        ? prev.filter((id) => id !== destinoId)
        : [...prev, destinoId],
    )
  }

  const destinosFavoritos = DESTINOS.filter((d) => favoritos.includes(d.id))

  return (
    <div className="app">
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onNav={scrollToSection}
        onCriarRoteiro={irPlanejador}
      />

      <main>
        {/* Hero */}
        <section id="inicio" className="hero section-anchor">
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
                <button type="button" className="btn btn--primary btn--lg" onClick={irPlanejador}>
                  Criar meu roteiro
                </button>
                <button type="button" className="btn btn--ghost btn--lg" onClick={() => scrollToSection('destinos')}>
                  Explorar destinos
                </button>
              </div>
              <div className="hero__trust">
                <span><IconCheck size={14} /> Sem cadastro necessário</span>
                <span><IconCheck size={14} /> Roteiros em minutos</span>
              </div>
            </div>
            <div className="hero__visual">
              <HeroPreviewCard
                destinoId={viagem.destinoId}
                dias={viagem.dias}
                estilo={viagem.estilo}
                orcamento={orcamento}
                roteiroDias={roteiroDias}
              />
              <div className="hero__float hero__float--1 glass">
                <IconSpark size={16} />
                <span>{totalAtividades} atividades sugeridas</span>
              </div>
              <div className="hero__float hero__float--2 glass">
                <IconWallet size={16} />
                <span>{formatBRL(orcamento.total)} estimados</span>
              </div>
            </div>
          </div>
        </section>

        {/* Planejador */}
        <section id="planejador" className="planner section-anchor">
          <div className="container">
            <div className="planner__card glass">
              <div className="planner__header">
                <span className="eyebrow">Planejador inteligente</span>
                <h2>Monte sua viagem em segundos</h2>
                <p>Preencha os campos e receba uma sugestão personalizada de roteiro.</p>
              </div>
              <form className="planner__form" onSubmit={handleGerarRoteiro} noValidate>
                <div className={`field ${formError ? 'field--error' : ''}`}>
                  <label htmlFor="destino">Destino</label>
                  <select
                    id="destino"
                    value={form.destino}
                    aria-invalid={!!formError}
                    aria-describedby={formError ? 'destino-erro' : undefined}
                    onChange={(e) => { setForm({ ...form, destino: e.target.value }); setFormError('') }}
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
                    {ESTILOS.map((s) => (
                      <option key={s} value={s}>{s}</option>
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

              {formError && (
                <div className="planner__alert" id="destino-erro" role="alert">
                  <IconAlert size={18} />
                  <span>{formError}</span>
                </div>
              )}

              {sugestaoVisivel && viagem.gerado && !formError && (
                <div className="planner__result" role="status">
                  <span className="planner__result-icon"><IconCheck size={18} /></span>
                  <div>
                    <strong>Roteiro sugerido para {destinoAtual.nome}</strong>
                    <p>
                      {viagem.dias} dias · Estilo {viagem.estilo} ·{' '}
                      {ORCAMENTO_OPCOES.find((o) => o.value === form.orcamento)?.label} —{' '}
                      estimativa de <strong>{formatBRL(orcamento.total)}</strong> para 2 pessoas.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Métricas */}
        <section className="metricas" aria-label="Indicadores">
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
        <section id="destinos" className="section section-anchor">
          <div className="container">
            <div className="section__head">
              <span className="eyebrow">Destinos em destaque</span>
              <h2>Explore os lugares mais desejados do Brasil</h2>
              <p>Clique em &ldquo;Ver roteiro&rdquo; ou salve nos favoritos para planejar depois.</p>
            </div>
            <div className="destinos-grid">
              {DESTINOS.map((d) => {
                const isFav = favoritos.includes(d.id)
                return (
                  <article key={d.id} className="dest-card">
                    <DestinoImagem destino={d}>
                      <button
                        type="button"
                        className={`dest-card__fav ${isFav ? 'dest-card__fav--active' : ''}`}
                        aria-label={isFav ? `Remover ${d.nome} dos favoritos` : `Salvar ${d.nome} nos favoritos`}
                        aria-pressed={isFav}
                        onClick={(e) => toggleFavorito(d.id, e)}
                      >
                        <IconHeart size={18} filled={isFav} />
                      </button>
                    </DestinoImagem>
                    <div className="dest-card__body">
                      <div className="dest-card__tags">
                        {d.tags.map((t) => (
                          <span key={t} className="tag">{t}</span>
                        ))}
                      </div>
                      <h3>{d.nome}</h3>
                      <p>{d.descricao}</p>
                      <div className="dest-card__meta">
                        <span><IconWallet size={14} /> {formatBRL(getPrecoPorPessoa(d, 3, form.estilo))} / pessoa</span>
                        <span><IconClock size={14} /> {getDuracaoIdeal(d)}</span>
                      </div>
                      <button
                        type="button"
                        className="btn btn--outline btn--sm"
                        onClick={() => handleVerRoteiro(d.id)}
                      >
                        Ver roteiro
                      </button>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="section section--muted section-anchor">
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

        {/* Roteiro sugerido */}
        <section id="roteiros" className="section section-anchor">
          <div className="container">
            <div className="section__head section__head--left">
              <span className="eyebrow">{viagem.gerado ? 'Roteiro sugerido' : 'Exemplo premium'}</span>
              <h2>
                {destinoAtual.nome} · {viagem.dias} {parseInt(viagem.dias, 10) === 1 ? 'dia' : 'dias'}
              </h2>
              <p>
                Roteiro {viagem.estilo.toLowerCase()} com atividades detalhadas por período
                {viagem.gerado ? ' — gerado para você.' : ' — exemplo para inspiração.'}
              </p>
            </div>
            <div className="roteiro-premium glass">
              <div className="roteiro-premium__cover">
                <img
                  src={getImagemHero(destinoAtual)}
                  alt={`Capa do roteiro — ${destinoAtual.nome}`}
                  loading="lazy"
                />
                <div className="roteiro-premium__cover-overlay">
                  <span>{destinoAtual.nome}</span>
                  <small>{viagem.estilo} · {totalAtividades} atividades</small>
                </div>
              </div>
              <div className="roteiro-premium__tabs" role="tablist" aria-label="Dias do roteiro">
                {roteiroDias.map((dia) => (
                  <button
                    key={dia.id}
                    type="button"
                    role="tab"
                    id={`tab-dia-${dia.id}`}
                    aria-selected={diaAtivo === dia.id}
                    aria-controls={`panel-dia-${dia.id}`}
                    className={`roteiro-premium__tab ${diaAtivo === dia.id ? 'roteiro-premium__tab--active' : ''}`}
                    onClick={() => setDiaAtivo(dia.id)}
                  >
                    <span>{dia.label}</span>
                    <small>{dia.titulo}</small>
                  </button>
                ))}
              </div>
              <div
                className="roteiro-premium__content"
                role="tabpanel"
                id={`panel-dia-${diaSelecionado?.id}`}
                aria-labelledby={`tab-dia-${diaSelecionado?.id}`}
              >
                <h3>{diaSelecionado?.titulo}</h3>
                <div className="periodos">
                  {diaSelecionado?.periodos.map((p) => (
                    <article key={`${p.periodo}-${p.titulo}`} className="periodo">
                      <span className="periodo__label">{p.periodo}</span>
                      <div className="periodo__info">
                        <strong>{p.titulo}</strong>
                        {p.descricao && <p className="periodo__desc">{p.descricao}</p>}
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
        <section id="orcamento" className="section section--muted section-anchor">
          <div className="container">
            <div className="orcamento-layout">
              <div className="section__head section__head--left">
                <span className="eyebrow">Orçamento visual</span>
                <h2>Estimativa de custos</h2>
                <p>
                  Estimativa média para {orcamento.pessoas} pessoas e {orcamento.dias} dias em {destinoAtual.nome} · estilo {viagem.estilo}.
                </p>
              </div>
              <div className="orcamento-panel glass">
                <ul className="orcamento-bars">
                  {orcamento.categorias.map((item) => (
                    <li key={item.categoria}>
                      <div className="orcamento-bars__head">
                        <span>{item.categoria}</span>
                        <strong>{formatBRL(item.valor)}</strong>
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
                  <strong>+ {formatBRL(orcamento.reserva)}</strong>
                </div>
                <div className="orcamento-total">
                  <div>
                    <span>Total estimado</span>
                    <small>Para {orcamento.pessoas} pessoas · {orcamento.dias} dias · {destinoAtual.nome}</small>
                  </div>
                  <strong>{formatBRL(orcamento.total)}</strong>
                </div>
                <p className="orcamento-disclaimer">
                  Valores estimados e sujeitos a variação conforme temporada e perfil da viagem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Favoritos */}
        <section id="favoritos" className="section section-anchor">
          <div className="container">
            <div className="section__head">
              <span className="eyebrow">Seus favoritos</span>
              <h2>Destinos salvos</h2>
              <p>
                {favoritos.length > 0
                  ? `${favoritos.length} destino${favoritos.length > 1 ? 's' : ''} salvo${favoritos.length > 1 ? 's' : ''} para planejar depois.`
                  : 'Salve destinos clicando no coração dos cards acima.'}
              </p>
            </div>

            {destinosFavoritos.length === 0 ? (
              <div className="favoritos-empty glass">
                <span className="favoritos-empty__icon" aria-hidden="true"><IconHeart size={32} /></span>
                <p>
                  Você ainda não salvou nenhum destino. Clique no coração dos cards para salvar seus lugares preferidos.
                </p>
                <button type="button" className="btn btn--outline" onClick={() => scrollToSection('destinos')}>
                  Explorar destinos
                </button>
              </div>
            ) : (
              <div className="favoritos-grid">
                {destinosFavoritos.map((d) => (
                  <article key={d.id} className="fav-card">
                    <img src={d.imagem} alt={d.imagemAlt ?? d.nome} className="fav-card__visual" loading="lazy" />
                    <div className="fav-card__body">
                      <h3>{d.nome}</h3>
                      <div className="fav-card__meta">
                        <span><IconWallet size={13} /> {formatBRL(getPrecoPorPessoa(d, 3, form.estilo))}</span>
                        <span><IconClock size={13} /> {getDuracaoIdeal(d)}</span>
                      </div>
                      <p>{d.descricao}</p>
                      <div className="fav-card__actions">
                        <button
                          type="button"
                          className="btn btn--outline btn--sm"
                          onClick={() => handleVerRoteiro(d.id)}
                        >
                          Ver roteiro
                        </button>
                        <button
                          type="button"
                          className="fav-card__remove"
                          aria-label={`Remover ${d.nome} dos favoritos`}
                          onClick={() => toggleFavorito(d.id)}
                        >
                          <IconHeart size={16} filled />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Diferenciais */}
        <section className="section section--muted">
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
              <button type="button" className="btn btn--white btn--lg" onClick={irPlanejador}>
                Criar meu roteiro agora
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <Logo onClick={() => scrollToSection('inicio')} />
            <p>Viaje melhor, planeje com facilidade.</p>
          </div>
          <nav className="footer__nav" aria-label="Links do rodapé">
            <button type="button" className="footer__link" onClick={() => scrollToSection('destinos')}>Destinos</button>
            <button type="button" className="footer__link" onClick={() => scrollToSection('roteiros')}>Roteiros</button>
            <button type="button" className="footer__link" onClick={() => scrollToSection('orcamento')}>Orçamento</button>
            <button type="button" className="footer__link" onClick={() => scrollToSection('favoritos')}>Favoritos</button>
          </nav>
          <p className="footer__copy">&copy; {new Date().getFullYear()} MeuRoteiro. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
