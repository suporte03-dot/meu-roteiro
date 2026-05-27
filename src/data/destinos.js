export const PESSOAS_PADRAO = 2

export const ESTILO_MULTIPLIER = {
  Econômica: 0.85,
  Família: 1.0,
  Casal: 1.05,
  Aventura: 1.1,
  Luxo: 1.5,
}

export const CATEGORIA_SPLITS = {
  Hospedagem: 0.42,
  Transporte: 0.18,
  Alimentação: 0.24,
  Passeios: 0.16,
}

/** @typedef {{ periodo: string, titulo: string, descricao: string, tempo: string, custo: number, mapQuery?: string }} Periodo */
/** @typedef {{ titulo: string, periodos: Periodo[] }} DiaRoteiro */

export function getImagemHero(destino) {
  return destino.imagemHero ?? destino.imagemCapa ?? destino.imagem
}

export function getPrecoBase(destino) {
  return destino.precoBase ?? destino.custoBasePorDia ?? 250
}

export function getDuracaoIdeal(destino) {
  return destino.duracaoIdeal ?? destino.tempo ?? '3–4 dias'
}

export const DESTINOS = [
  {
    id: 'gramado',
    nome: 'Gramado',
    descricao: 'Charme europeu, chocolate artesanal e paisagens de serra gaúcha.',
    tags: ['Romântico', 'Família'],
    precoBase: 290,
    orcamentoBase: 290,
    duracaoIdeal: '3–4 dias',
    diasMax: 4,
    imagem: '/images/destinos/gramado.jpg',
    imagemHero: '/images/destinos/gramado-hero.jpg',
    imagemAlt: 'Centro charmoso de Gramado com arquitetura europeia e clima de serra gaúcha',
    roteiro: [
      {
        titulo: 'Chegada e charme do centro',
        periodos: [
          { periodo: 'Manhã', titulo: 'Check-in e café colonial', descricao: 'Acomodação no centro e café da manhã típico da serra.', tempo: '2h', custo: 85, mapQuery: 'Centro, Gramado, RS' },
          { periodo: 'Tarde', titulo: 'Rua Coberta e Mini Mundo', descricao: 'Passeio pela Rua Coberta, Palácio dos Festivais e Mini Mundo.', tempo: '4h', custo: 130, mapQuery: 'Rua Coberta, Gramado, RS' },
          { periodo: 'Noite', titulo: 'Lago Negro iluminado', descricao: 'Jantar romântico e caminhada à beira do Lago Negro.', tempo: '3h', custo: 195, mapQuery: 'Lago Negro, Gramado, RS' },
        ],
      },
      {
        titulo: 'Neve, chocolate e Canela',
        periodos: [
          { periodo: 'Manhã', titulo: 'Snowland ou Le Jardin', descricao: 'Diversão na neve artificial ou jardim gramado com vista.', tempo: '3h', custo: 160, mapQuery: 'Snowland, Gramado, RS' },
          { periodo: 'Tarde', titulo: 'Fábrica de chocolate em Canela', descricao: 'Degustação artesanal e almoço na cidade vizinha.', tempo: '4h', custo: 155, mapQuery: 'Centro, Canela, RS' },
          { periodo: 'Noite', titulo: 'Fondue na serra', descricao: 'Experiência gastronômica típica com queijos e vinhos.', tempo: '2h', custo: 210, mapQuery: 'Centro, Gramado, RS' },
        ],
      },
      {
        titulo: 'Natureza e despedida',
        periodos: [
          { periodo: 'Manhã', titulo: 'Catedral de Pedra', descricao: 'Visita à igreja de Canela e mirantes da região.', tempo: '3h', custo: 45, mapQuery: 'Catedral de Pedra, Canela, RS' },
          { periodo: 'Tarde', titulo: 'Compras e souvenirs', descricao: 'Lojas de chocolate, artesanato e últimas compras.', tempo: '3h', custo: 90, mapQuery: 'Rua Coberta, Gramado, RS' },
          { periodo: 'Noite', titulo: 'Retorno', descricao: 'Deslocamento de volta com memórias da serra.', tempo: '—', custo: 320, mapQuery: 'Gramado, RS' },
        ],
      },
      {
        titulo: 'Bônus: Caracol e vinícolas',
        periodos: [
          { periodo: 'Manhã', titulo: 'Cascata do Caracol', descricao: 'Bondinho panorâmico até uma das quedas d\'água mais famosas.', tempo: '3h', custo: 95, mapQuery: 'Cascata do Caracol, Canela, RS' },
          { periodo: 'Tarde', titulo: 'Vinícola ou Haras', descricao: 'Tour enogastronômico ou visita a haras da região.', tempo: '4h', custo: 175, mapQuery: 'Vinícola Miolo, Bento Gonçalves, RS' },
          { periodo: 'Noite', titulo: 'Jantar de despedida', descricao: 'Última noite especial antes da viagem.', tempo: '2h', custo: 185, mapQuery: 'Centro, Gramado, RS' },
        ],
      },
    ],
  },
  {
    id: 'florianopolis',
    nome: 'Florianópolis',
    descricao: 'Praias paradisíacas, trilhas costeiras e gastronomia do mar.',
    tags: ['Praia', 'Aventura'],
    precoBase: 245,
    orcamentoBase: 245,
    duracaoIdeal: '4–5 dias',
    diasMax: 5,
    imagem: '/images/destinos/florianopolis.jpg',
    imagemHero: '/images/destinos/florianopolis-hero.jpg',
    imagemAlt: 'Praia ensolarada de Florianópolis com mar azul e costa verde',
    roteiro: [
      {
        titulo: 'Chegada e Lagoa da Conceição',
        periodos: [
          { periodo: 'Manhã', titulo: 'Chegada e Beira-Mar Norte', descricao: 'Check-in e primeiro contato com a orla da capital.', tempo: '2h', custo: 60, mapQuery: 'Beira-Mar Norte, Florianópolis, SC' },
          { periodo: 'Tarde', titulo: 'Lagoa da Conceição', descricao: 'Passeio pelo coração boêmio da ilha, artesanato e cafés.', tempo: '4h', custo: 70, mapQuery: 'Lagoa da Conceição, Florianópolis, SC' },
          { periodo: 'Noite', titulo: 'Frutos do mar', descricao: 'Jantar com sequência de frutos do mar frescos.', tempo: '2h', custo: 165, mapQuery: 'Lagoa da Conceição, Florianópolis, SC' },
        ],
      },
      {
        titulo: 'Praias e dunas',
        periodos: [
          { periodo: 'Manhã', titulo: 'Praia da Joaquina', descricao: 'Dunas, mar agitado e surf — um clássico da ilha.', tempo: '3h', custo: 40, mapQuery: 'Praia da Joaquina, Florianópolis, SC' },
          { periodo: 'Tarde', titulo: 'Trilha ou passeio de barco', descricao: 'Lagoinha do Leste ou passeio pelas ilhas.', tempo: '4h', custo: 120, mapQuery: 'Lagoinha do Leste, Florianópolis, SC' },
          { periodo: 'Noite', titulo: 'Santo Antônio de Lisboa', descricao: 'Pôr do sol e jantar no bairro histórico.', tempo: '3h', custo: 140, mapQuery: 'Santo Antônio de Lisboa, Florianópolis, SC' },
        ],
      },
      {
        titulo: 'Campeche e sul da ilha',
        periodos: [
          { periodo: 'Manhã', titulo: 'Praia do Campeche', descricao: 'Águas cristalinas e areia branca no sul.', tempo: '3h', custo: 35, mapQuery: 'Praia do Campeche, Florianópolis, SC' },
          { periodo: 'Tarde', titulo: 'Jurerê ou Ribeirão', descricao: 'Praia calma ou passeio pelo interior da ilha.', tempo: '4h', custo: 95, mapQuery: 'Jurerê Internacional, Florianópolis, SC' },
          { periodo: 'Noite', titulo: 'Centro histórico', descricao: 'Mercado Público e azulejos coloniais iluminados.', tempo: '2h', custo: 110, mapQuery: 'Mercado Público, Florianópolis, SC' },
        ],
      },
      {
        titulo: 'Cultura e mercados',
        periodos: [
          { periodo: 'Manhã', titulo: 'Mercado Público', descricao: 'Degustação de ostras, tainha e produtos locais.', tempo: '2h', custo: 80, mapQuery: 'Mercado Público, Florianópolis, SC' },
          { periodo: 'Tarde', titulo: 'Projeto TAMAR ou museus', descricao: 'Conservação de tartarugas ou arte contemporânea.', tempo: '3h', custo: 55, mapQuery: 'Projeto TAMAR Florianópolis, SC' },
          { periodo: 'Noite', titulo: 'Vida noturna na Lagoa', descricao: 'Bares e música ao vivo na região central.', tempo: '3h', custo: 100, mapQuery: 'Lagoa da Conceição, Florianópolis, SC' },
        ],
      },
      {
        titulo: 'Despedida na praia',
        periodos: [
          { periodo: 'Manhã', titulo: 'Último mergulho', descricao: 'Manhã livre na praia favorita da viagem.', tempo: '3h', custo: 30, mapQuery: 'Praia de Jurerê, Florianópolis, SC' },
          { periodo: 'Tarde', titulo: 'Almoço e retorno', descricao: 'Almoço costeiro e preparação para a partida.', tempo: '2h', custo: 90, mapQuery: 'Centro, Florianópolis, SC' },
          { periodo: 'Noite', titulo: 'Saída', descricao: 'Deslocamento ao aeroporto ou rodoviária.', tempo: '—', custo: 280, mapQuery: 'Aeroporto Hercílio Luz, Florianópolis, SC' },
        ],
      },
    ],
  },
  {
    id: 'bc',
    nome: 'Balneário Camboriú',
    descricao: 'Skyline à beira-mar, roda gigante e vida noturna vibrante.',
    tags: ['Praia', 'Cidade'],
    precoBase: 310,
    orcamentoBase: 310,
    duracaoIdeal: '3–5 dias',
    diasMax: 4,
    imagem: '/images/destinos/bc.jpg',
    imagemHero: '/images/destinos/bc-hero.jpg',
    imagemAlt: 'Skyline de Balneário Camboriú com prédios altos à beira-mar',
    roteiro: [
      {
        titulo: 'Orla e teleférico',
        periodos: [
          { periodo: 'Manhã', titulo: 'Praia Central e check-in', descricao: 'Primeiro contato com a orla mais famosa do litoral.', tempo: '2h', custo: 75, mapQuery: 'Praia Central, Balneário Camboriú, SC' },
          { periodo: 'Tarde', titulo: 'Teleférico Unipraias', descricao: 'Vista panorâmica, praias e estações de lazer.', tempo: '4h', custo: 195, mapQuery: 'Teleférico Unipraias, Balneário Camboriú, SC' },
          { periodo: 'Noite', titulo: 'Avenida Atlântica', descricao: 'Jantar com vista para os arranha-céus e mar.', tempo: '3h', custo: 185, mapQuery: 'Avenida Atlântica, Balneário Camboriú, SC' },
        ],
      },
      {
        titulo: 'Parques e aventura',
        periodos: [
          { periodo: 'Manhã', titulo: 'Parque Unipraias', descricao: 'Tirolesa, mirante e trilhas sobre o mar.', tempo: '3h', custo: 230, mapQuery: 'Parque Unipraias, Balneário Camboriú, SC' },
          { periodo: 'Tarde', titulo: 'Barra Sul e praias', descricao: 'Explorar praias menos movimentadas ao sul.', tempo: '4h', custo: 90, mapQuery: 'Barra Sul, Balneário Camboriú, SC' },
          { periodo: 'Noite', titulo: 'Roda Gigua e night', descricao: 'Passeio na roda gigante e vida noturna.', tempo: '4h', custo: 160, mapQuery: 'Roda Gigante Skywheel, Balneário Camboriú, SC' },
        ],
      },
      {
        titulo: 'Relax e compras',
        periodos: [
          { periodo: 'Manhã', titulo: 'Praia Brava ou Estaleirinho', descricao: 'Manhã de sol em praias alternativas.', tempo: '3h', custo: 45, mapQuery: 'Praia Brava, Balneário Camboriú, SC' },
          { periodo: 'Tarde', titulo: 'Shopping e café na orla', descricao: 'Compras e pausa em cafeterias com vista.', tempo: '3h', custo: 110, mapQuery: 'Avenida Atlântica, Balneário Camboriú, SC' },
          { periodo: 'Noite', titulo: 'Jantar especial', descricao: 'Restaurante com frutos do mar ou alta gastronomia.', tempo: '2h', custo: 200, mapQuery: 'Balneário Camboriú, SC' },
        ],
      },
      {
        titulo: 'Despedida',
        periodos: [
          { periodo: 'Manhã', titulo: 'Último passeio na Central', descricao: 'Caminhada final pela orla principal.', tempo: '2h', custo: 40, mapQuery: 'Praia Central, Balneário Camboriú, SC' },
          { periodo: 'Tarde', titulo: 'Almoço e preparação', descricao: 'Despedida do litoral catarinense.', tempo: '2h', custo: 85, mapQuery: 'Balneário Camboriú, SC' },
          { periodo: 'Noite', titulo: 'Retorno', descricao: 'Viagem de volta para casa.', tempo: '—', custo: 310, mapQuery: 'Balneário Camboriú, SC' },
        ],
      },
    ],
  },
  {
    id: 'foz',
    nome: 'Foz do Iguaçu',
    descricao: 'Cataratas majestosas, natureza exuberante e tríplice fronteira.',
    tags: ['Aventura', 'Família'],
    precoBase: 265,
    orcamentoBase: 265,
    duracaoIdeal: '3–4 dias',
    diasMax: 4,
    imagem: '/images/destinos/foz.jpg',
    imagemHero: '/images/destinos/foz-hero.jpg',
    imagemAlt: 'Cataratas do Iguaçu com quedas d\'água e passarelas na mata atlântica',
    roteiro: [
      {
        titulo: 'Cataratas — lado brasileiro',
        periodos: [
          { periodo: 'Manhã', titulo: 'Parque Nacional', descricao: 'Trilha das passarelas com vista das 275 quedas.', tempo: '4h', custo: 190, mapQuery: 'Cataratas do Iguaçu, Foz do Iguaçu, PR' },
          { periodo: 'Tarde', titulo: 'Macuco Safari', descricao: 'Passeio de barco até a base das cataratas.', tempo: '3h', custo: 260, mapQuery: 'Cataratas do Iguaçu, Foz do Iguaçu, PR' },
          { periodo: 'Noite', titulo: 'Show das Cataratas', descricao: 'Iluminação noturna e jantar temático.', tempo: '3h', custo: 210, mapQuery: 'Cataratas do Iguaçu, Foz do Iguaçu, PR' },
        ],
      },
      {
        titulo: 'Itaipu e Parque das Aves',
        periodos: [
          { periodo: 'Manhã', titulo: 'Usina de Itaipu', descricao: 'Tour panorâmico na maior hidrelétrica do mundo.', tempo: '3h', custo: 75, mapQuery: 'Usina de Itaipu, Foz do Iguaçu, PR' },
          { periodo: 'Tarde', titulo: 'Parque das Aves', descricao: 'Contato com tucanos, araras e fauna local.', tempo: '3h', custo: 95, mapQuery: 'Parque das Aves, Foz do Iguaçu, PR' },
          { periodo: 'Noite', titulo: 'Marco das Três Fronteiras', descricao: 'Espectáculo de luzes e jantar na fronteira.', tempo: '3h', custo: 140, mapQuery: 'Marco das Três Fronteiras, Foz do Iguaçu, PR' },
        ],
      },
      {
        titulo: 'Aventura e compras',
        periodos: [
          { periodo: 'Manhã', titulo: 'Helicóptero ou trilha', descricao: 'Voo panorâmico ou caminhada ecológica.', tempo: '3h', custo: 380, mapQuery: 'Cataratas do Iguaçu, Foz do Iguaçu, PR' },
          { periodo: 'Tarde', titulo: 'Compras na fronteira', descricao: 'Souvenirs e duty free na região.', tempo: '3h', custo: 80, mapQuery: 'Foz do Iguaçu, PR' },
          { periodo: 'Noite', titulo: 'Jantar internacional', descricao: 'Experiência gastronômica na tríplice fronteira.', tempo: '2h', custo: 165, mapQuery: 'Marco das Três Fronteiras, Foz do Iguaçu, PR' },
        ],
      },
      {
        titulo: 'Despedida',
        periodos: [
          { periodo: 'Manhã', titulo: 'Última vista das Cataratas', descricao: 'Retorno ao parque ou mirante alternativo.', tempo: '3h', custo: 120, mapQuery: 'Cataratas do Iguaçu, Foz do Iguaçu, PR' },
          { periodo: 'Tarde', titulo: 'Check-out e café', descricao: 'Organização das malas e último café regional.', tempo: '2h', custo: 50, mapQuery: 'Centro, Foz do Iguaçu, PR' },
          { periodo: 'Noite', titulo: 'Retorno ao aeroporto', descricao: 'Deslocamento para o voo ou rodoviária.', tempo: '—', custo: 350, mapQuery: 'Aeroporto de Foz do Iguaçu, PR' },
        ],
      },
    ],
  },
  {
    id: 'rio',
    nome: 'Rio de Janeiro',
    descricao: 'Ícones mundiais, praias icônicas e cultura carioca vibrante.',
    tags: ['Cidade', 'Praia'],
    precoBase: 320,
    orcamentoBase: 320,
    duracaoIdeal: '4–6 dias',
    diasMax: 5,
    imagem: '/images/destinos/rio.jpg',
    imagemHero: '/images/destinos/rio-hero.jpg',
    imagemAlt: 'Cristo Redentor e paisagem icônica do Rio de Janeiro',
    roteiro: [
      {
        titulo: 'Cartões-postais',
        periodos: [
          { periodo: 'Manhã', titulo: 'Cristo Redentor', descricao: 'Corcovado e vista 360° da cidade maravilhosa.', tempo: '3h', custo: 110, mapQuery: 'Cristo Redentor, Rio de Janeiro, RJ' },
          { periodo: 'Tarde', titulo: 'Pão de Açúcar', descricao: 'Bondinhos e pôr do sol inesquecível.', tempo: '4h', custo: 145, mapQuery: 'Pão de Açúcar, Rio de Janeiro, RJ' },
          { periodo: 'Noite', titulo: 'Lapa e samba', descricao: 'Arcos da Lapa e roda de samba autêntica.', tempo: '4h', custo: 95, mapQuery: 'Lapa, Rio de Janeiro, RJ' },
        ],
      },
      {
        titulo: 'Praias clássicas',
        periodos: [
          { periodo: 'Manhã', titulo: 'Copacabana e Ipanema', descricao: 'Orla, calçadão e cultura de praia carioca.', tempo: '3h', custo: 45, mapQuery: 'Praia de Copacabana, Rio de Janeiro, RJ' },
          { periodo: 'Tarde', titulo: 'Arpoador e Leblon', descricao: 'Pôr do sol no Arpoador e almoço à beira-mar.', tempo: '4h', custo: 130, mapQuery: 'Arpoador, Rio de Janeiro, RJ' },
          { periodo: 'Noite', titulo: 'Jantar em Ipanema', descricao: 'Gastronomia contemporânea na zona sul.', tempo: '2h', custo: 195, mapQuery: 'Ipanema, Rio de Janeiro, RJ' },
        ],
      },
      {
        titulo: 'Cultura e museus',
        periodos: [
          { periodo: 'Manhã', titulo: 'Museu do Amanhã', descricao: 'Arquitetura futurista no Porto Maravilha.', tempo: '3h', custo: 60, mapQuery: 'Museu do Amanhã, Rio de Janeiro, RJ' },
          { periodo: 'Tarde', titulo: 'Santa Teresa', descricao: 'Bondinho amarelo, arte de rua e ateliês.', tempo: '4h', custo: 85, mapQuery: 'Santa Teresa, Rio de Janeiro, RJ' },
          { periodo: 'Noite', titulo: 'Feira de São Cristóvão', descricao: 'Forró, comidas nordestinas e artesanato.', tempo: '3h', custo: 75, mapQuery: 'Feira de São Cristóvão, Rio de Janeiro, RJ' },
        ],
      },
      {
        titulo: 'Natureza urbana',
        periodos: [
          { periodo: 'Manhã', titulo: 'Trilha Dois Irmãos', descricao: 'Vista privilegiada da Zona Sul a partir do mirante.', tempo: '4h', custo: 35, mapQuery: 'Morro Dois Irmãos, Rio de Janeiro, RJ' },
          { periodo: 'Tarde', titulo: 'Jardim Botânico', descricao: 'Palmeiras imperiais e natureza no coração da cidade.', tempo: '3h', custo: 40, mapQuery: 'Jardim Botânico, Rio de Janeiro, RJ' },
          { periodo: 'Noite', titulo: 'Botafogo ou Urca', descricao: 'Bares com vista para a Baía de Guanabara.', tempo: '3h', custo: 120, mapQuery: 'Botafogo, Rio de Janeiro, RJ' },
        ],
      },
      {
        titulo: 'Despedida carioca',
        periodos: [
          { periodo: 'Manhã', titulo: 'Último banho de mar', descricao: 'Manhã livre na praia preferida.', tempo: '3h', custo: 30, mapQuery: 'Praia de Copacabana, Rio de Janeiro, RJ' },
          { periodo: 'Tarde', titulo: 'Souvenirs e açaí', descricao: 'Compras finais e lanche típico.', tempo: '2h', custo: 55, mapQuery: 'Copacabana, Rio de Janeiro, RJ' },
          { periodo: 'Noite', titulo: 'Retorno', descricao: 'Deslocamento ao aeroporto ou rodoviária.', tempo: '—', custo: 380, mapQuery: 'Aeroporto Santos Dumont, Rio de Janeiro, RJ' },
        ],
      },
    ],
  },
  {
    id: 'sp',
    nome: 'São Paulo',
    descricao: 'Capital cultural, gastronomia de classe mundial e arte urbana.',
    tags: ['Cidade', 'Cultura'],
    precoBase: 285,
    orcamentoBase: 285,
    duracaoIdeal: '3–5 dias',
    diasMax: 5,
    imagem: '/images/destinos/sp.jpg',
    imagemHero: '/images/destinos/sp-hero.jpg',
    imagemAlt: 'Avenida Paulista e skyline urbano de São Paulo',
    roteiro: [
      {
        titulo: 'Paulista e MASP',
        periodos: [
          { periodo: 'Manhã', titulo: 'Avenida Paulista', descricao: 'Cartão-postal paulistano e centro financeiro.', tempo: '2h', custo: 40, mapQuery: 'Avenida Paulista, São Paulo, SP' },
          { periodo: 'Tarde', titulo: 'MASP e exposições', descricao: 'Acervo de arte clássica e contemporânea.', tempo: '3h', custo: 65, mapQuery: 'MASP, São Paulo, SP' },
          { periodo: 'Noite', titulo: 'Gastronomia na Paulista', descricao: 'Jantar em restaurante renomado da região.', tempo: '2h', custo: 185, mapQuery: 'Avenida Paulista, São Paulo, SP' },
        ],
      },
      {
        titulo: 'Bairros autênticos',
        periodos: [
          { periodo: 'Manhã', titulo: 'Vila Madalena', descricao: 'Beco do Batman, galerias e cafés descolados.', tempo: '3h', custo: 45, mapQuery: 'Vila Madalena, São Paulo, SP' },
          { periodo: 'Tarde', titulo: 'Mercado Municipal', descricao: 'Mortadela gigante, frutas tropicais e especiarias.', tempo: '2h', custo: 90, mapQuery: 'Mercado Municipal de São Paulo, SP' },
          { periodo: 'Noite', titulo: 'Pinheiros', descricao: 'Bares premiados e vida noturna sofisticada.', tempo: '4h', custo: 130, mapQuery: 'Pinheiros, São Paulo, SP' },
        ],
      },
      {
        titulo: 'Parques e Liberdade',
        periodos: [
          { periodo: 'Manhã', titulo: 'Parque Ibirapuera', descricao: 'Ciclismo, museus e natureza no centro expandido.', tempo: '3h', custo: 35, mapQuery: 'Parque Ibirapuera, São Paulo, SP' },
          { periodo: 'Tarde', titulo: 'Bairro da Liberdade', descricao: 'Cultura japonesa, lojas e gastronomia oriental.', tempo: '3h', custo: 95, mapQuery: 'Liberdade, São Paulo, SP' },
          { periodo: 'Noite', titulo: 'Restaurante premiado', descricao: 'Experiência gastronômica de alta qualidade.', tempo: '3h', custo: 250, mapQuery: 'Jardins, São Paulo, SP' },
        ],
      },
      {
        titulo: 'Arte e história',
        periodos: [
          { periodo: 'Manhã', titulo: 'Centro histórico', descricao: 'Pátio do Colégio, Sé e Theatro Municipal.', tempo: '3h', custo: 50, mapQuery: 'Pátio do Colégio, São Paulo, SP' },
          { periodo: 'Tarde', titulo: 'Pinacoteca ou MIS', descricao: 'Museus de arte e imagem do Brasil.', tempo: '3h', custo: 45, mapQuery: 'Pinacoteca de São Paulo, SP' },
          { periodo: 'Noite', titulo: 'Show ou teatro', descricao: 'Programação cultural da maior metrópole.', tempo: '3h', custo: 160, mapQuery: 'Theatro Municipal de São Paulo, SP' },
        ],
      },
      {
        titulo: 'Despedida paulistana',
        periodos: [
          { periodo: 'Manhã', titulo: 'Café especial e compras', descricao: 'Torrefação artesanal e souvenirs urbanos.', tempo: '2h', custo: 70, mapQuery: 'Vila Madalena, São Paulo, SP' },
          { periodo: 'Tarde', titulo: 'Almoço de despedida', descricao: 'Última refeição antes da partida.', tempo: '2h', custo: 110, mapQuery: 'Avenida Paulista, São Paulo, SP' },
          { periodo: 'Noite', titulo: 'Retorno', descricao: 'Deslocamento ao aeroporto de Guarulhos ou Congonhas.', tempo: '—', custo: 290, mapQuery: 'Aeroporto de Guarulhos, SP' },
        ],
      },
    ],
  },
]

export function getDestino(idOrNome) {
  return DESTINOS.find((d) => d.id === idOrNome || d.nome === idOrNome) ?? DESTINOS[0]
}

export function getPrecoPorPessoa(destino, dias = 3, estilo = 'Casal') {
  const mult = ESTILO_MULTIPLIER[estilo] ?? 1
  const diasNum = Math.max(1, parseInt(dias, 10) || 3)
  return Math.round(getPrecoBase(destino) * diasNum * mult)
}

export function calcularOrcamento(destinoId, dias, estilo, pessoas = PESSOAS_PADRAO) {
  const destino = getDestino(destinoId)
  const diasNum = Math.max(1, Math.min(30, parseInt(dias, 10) || 3))
  const mult = ESTILO_MULTIPLIER[estilo] ?? 1
  const baseTotal = getPrecoBase(destino) * diasNum * mult * pessoas

  const hospedagem = Math.round(baseTotal * CATEGORIA_SPLITS.Hospedagem)
  const transporte = Math.round(baseTotal * CATEGORIA_SPLITS.Transporte)
  const alimentacao = Math.round(baseTotal * CATEGORIA_SPLITS.Alimentação)
  const passeios = Math.round(baseTotal * CATEGORIA_SPLITS.Passeios)
  const subtotal = hospedagem + transporte + alimentacao + passeios
  const reserva = Math.round(subtotal * 0.1)
  const total = subtotal + reserva

  const pct = (v) => (total > 0 ? Math.round((v / total) * 100) : 0)

  return {
    categorias: [
      { categoria: 'Hospedagem', valor: hospedagem, pct: pct(hospedagem) },
      { categoria: 'Transporte', valor: transporte, pct: pct(transporte) },
      { categoria: 'Alimentação', valor: alimentacao, pct: pct(alimentacao) },
      { categoria: 'Passeios', valor: passeios, pct: pct(passeios) },
    ],
    reserva,
    total,
    dias: diasNum,
    pessoas,
  }
}

function createDiaLivre(index, nomeDestino, mult) {
  const centro = `Centro, ${nomeDestino}, Brasil`
  return {
    id: index,
    label: `Dia ${index + 1}`,
    titulo: 'Dia livre para explorar',
    periodos: [
      {
        periodo: 'Manhã',
        titulo: 'Explore no seu ritmo',
        descricao: `Tempo livre para descobrir ${nomeDestino} por conta própria.`,
        tempo: '3h',
        custo: formatCusto(60, mult),
        custoNum: Math.round(60 * mult),
        mapQuery: centro,
      },
      {
        periodo: 'Tarde',
        titulo: 'Passeio opcional',
        descricao: 'Escolha uma atração local ou relaxe.',
        tempo: '4h',
        custo: formatCusto(90, mult),
        custoNum: Math.round(90 * mult),
        mapQuery: centro,
      },
      {
        periodo: 'Noite',
        titulo: 'Jantar à escolha',
        descricao: 'Experiência gastronômica flexível.',
        tempo: '2h',
        custo: formatCusto(120, mult),
        custoNum: Math.round(120 * mult),
        mapQuery: centro,
      },
    ],
  }
}

function formatCusto(valor, mult) {
  return `R$ ${Math.round(valor * mult).toLocaleString('pt-BR')}`
}

export function getRoteiroDias(destinoId, dias, estilo) {
  const destino = getDestino(destinoId)
  const template = destino.roteiro
  const diasNum = Math.max(1, Math.min(30, parseInt(dias, 10) || 3))
  const mult = (ESTILO_MULTIPLIER[estilo] ?? 1) / ESTILO_MULTIPLIER.Casal

  const diasList = []
  for (let i = 0; i < diasNum; i++) {
    if (i < template.length) {
      const dia = template[i]
      diasList.push({
        id: i,
        label: `Dia ${i + 1}`,
        titulo: dia.titulo,
        periodos: dia.periodos.map((p) => ({
          ...p,
          custoNum: Math.round(p.custo * mult),
          custo: formatCusto(p.custo, mult),
        })),
      })
    } else {
      diasList.push(createDiaLivre(i, destino.nome, mult))
    }
  }
  return diasList
}

export function contarAtividades(roteiroDias) {
  return roteiroDias.reduce((acc, dia) => acc + dia.periodos.length, 0)
}
