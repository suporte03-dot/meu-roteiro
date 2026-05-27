/**
 * Mapeamento centralizado de imagens por destino.
 * Garante coerência entre cards, hero e roteiro — sem mistura entre cidades.
 */
export const DESTINATION_IMAGES = {
  gramado: {
    card: '/images/destinos/gramado.jpg',
    hero: '/images/destinos/gramado-hero.jpg',
    alt: {
      card: 'Rua Coberta e centro charmoso de Gramado, com arquitetura europeia e clima romântico de serra gaúcha',
      hero: 'Pórtico e entrada charmosa de Gramado na serra gaúcha',
    },
  },
  florianopolis: {
    card: '/images/destinos/florianopolis.jpg',
    hero: '/images/destinos/florianopolis-hero.jpg',
    alt: {
      card: 'Praia da Joaquina em Florianópolis, com mar azul, dunas e costa ensolarada da ilha',
      hero: 'Vista panorâmica da costa e praias de Florianópolis',
    },
  },
  bc: {
    card: '/images/destinos/bc.jpg',
    hero: '/images/destinos/bc-hero.jpg',
    alt: {
      card: 'Orla de Balneário Camboriú com prédios altos à beira-mar e skyline urbano',
      hero: 'Skyline de Balneário Camboriú com torres e praia urbana ao entardecer',
    },
  },
  foz: {
    card: '/images/destinos/foz.jpg',
    hero: '/images/destinos/foz-hero.jpg',
    alt: {
      card: 'Cataratas do Iguaçu com quedas d\'água majestosas e mata atlântica exuberante',
      hero: 'Panorama das Cataratas do Iguaçu com arco-íris, visto do lado brasileiro',
    },
  },
  rio: {
    card: '/images/destinos/rio.jpg',
    hero: '/images/destinos/rio-hero.jpg',
    alt: {
      card: 'Cristo Redentor no Corcovado, cartão-postal icônico do Rio de Janeiro',
      hero: 'Vista clássica do Rio de Janeiro com Pão de Açúcar e Baía de Guanabara',
    },
  },
  sp: {
    card: '/images/destinos/sp.jpg',
    hero: '/images/destinos/sp-hero.jpg',
    alt: {
      card: 'Avenida Paulista e MASP, cartão-postal urbano de São Paulo',
      hero: 'Skyline moderno de São Paulo com prédios altos e Avenida Paulista',
    },
  },
}

export function getDestinationImages(destinoId) {
  return DESTINATION_IMAGES[destinoId] ?? DESTINATION_IMAGES.gramado
}

export function getCardImage(destino) {
  const mapped = getDestinationImages(destino.id)
  return destino.cardImage ?? destino.imagem ?? mapped.card
}

export function getHeroImage(destino) {
  const mapped = getDestinationImages(destino.id)
  return destino.heroImage ?? destino.imagemHero ?? destino.imagemCapa ?? mapped.hero
}

export function getCardImageAlt(destino) {
  const mapped = getDestinationImages(destino.id)
  return destino.imagemAlt ?? mapped.alt.card ?? `Paisagem de ${destino.nome}`
}

export function getHeroImageAlt(destino) {
  const mapped = getDestinationImages(destino.id)
  return mapped.alt.hero ?? destino.imagemAlt ?? `Panorama de ${destino.nome}`
}
