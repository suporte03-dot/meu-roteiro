/**
 * Mapeamento centralizado de imagens por destino.
 * Garante coerência entre cards, hero e roteiro — sem mistura entre cidades.
 * Fontes: Wikimedia Commons (locais reais documentados).
 */
export const DESTINATION_IMAGES = {
  gramado: {
    card: '/images/destinos/gramado.jpg',
    hero: '/images/destinos/gramado-hero.jpg',
    alt: {
      card: 'Centro de Gramado iluminado à noite, com arquitetura charmosa e clima romântico de serra gaúcha',
      hero: 'Lago Negro em Gramado, cartão-postal da serra gaúcha',
    },
  },
  florianopolis: {
    card: '/images/destinos/florianopolis.jpg',
    hero: '/images/destinos/florianopolis-hero.jpg',
    alt: {
      card: 'Praia da Joaquina em Florianópolis, com mar azul e dunas da ilha',
      hero: 'Beira-Mar Norte de Florianópolis, orla costeira ensolarada',
    },
  },
  bc: {
    card: '/images/destinos/bc.jpg',
    hero: '/images/destinos/bc-hero.jpg',
    alt: {
      card: 'Orla da Praia Central em Balneário Camboriú, com prédios altos à beira-mar',
      hero: 'Skyline de Balneário Camboriú visto do mar, com torres e orla urbana',
    },
  },
  foz: {
    card: '/images/destinos/foz.jpg',
    hero: '/images/destinos/foz-hero.jpg',
    alt: {
      card: 'Cataratas do Iguaçu com quedas d\'água majestosas, visto do lado brasileiro',
      hero: 'Panorama das Cataratas do Iguaçu com arco-íris e natureza exuberante',
    },
  },
  rio: {
    card: '/images/destinos/rio.jpg',
    hero: '/images/destinos/rio-hero.jpg',
    alt: {
      card: 'Cristo Redentor no Corcovado, ícone do Rio de Janeiro',
      hero: 'Vista clássica da Cidade Maravilhosa, Rio de Janeiro',
    },
  },
  sp: {
    card: '/images/destinos/sp.jpg',
    hero: '/images/destinos/sp-hero.jpg',
    alt: {
      card: 'Ponte Estaiada e skyline moderno de São Paulo',
      hero: 'Vista aérea da Avenida Paulista, cartão-postal paulistano',
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
