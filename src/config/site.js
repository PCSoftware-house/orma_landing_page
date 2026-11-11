export const SITE = { origin: 'https://getorma.app', product: 'Orma', company: 'PC Software' }

export const NAV = [
  { to: '/#prodotto', label: 'Prodotto' },
  { to: '/#flussi', label: 'Flussi' },
]

export const CTA = {
  '/': { label: 'Prova ora', to: '/#contatti' },
  '/websites': { label: 'Richiedi un preventivo', to: '/websites#contatti' },
  '/about': { label: 'Parliamone', to: '/about#contatti' },
}

export const FOOTER_COLUMNS = [
  {
    title: 'Navigazione',
    links: [
      { label: 'Planimetria Live', to: '/#flussi' },
      { label: 'KDS Cucina', to: '/#prodotto' },
      { label: 'Gestione Menu', to: '/#flussi' },
      { label: 'Analytics & Margini', to: '/#flussi' },
    ],
  },
  {
    title: 'Prodotto',
    links: [
      { label: 'Contattaci', to: '/#contatti' },
      { label: 'Richiedi Demo', to: '/#contatti' },
      { label: 'FAQ', to: '/#faq' },
    ],
  },
]

export const CONTACTS = [
  {
    name: 'Valerio',
    phoneDisplay: '351 826 8907',
    phoneTel: '+393518268907',
    email: 'valerio@getorma.app',
  },
  {
    name: 'Damiano',
    phoneDisplay: '334 854 5132',
    phoneTel: '+393348545132',
    email: 'damiano@getorma.app',
  },
]

export const SEO = {
  '/': {
    title: 'Orma — Il gestionale per la ristorazione',
    description:
      "Orma è il gestionale per la ristorazione: sito, prenotazioni, sala e cucina in un'unica piattaforma.",
  },
  '/websites': {
    title: 'Siti web per ristoranti e locali — Orma',
    description:
      'Siti web su misura per ristoranti, bar e locali: prenotazioni ed eventi integrati, menu digitale sempre aggiornato e sincronizzazione nativa con il gestionale Orma.',
  },
  '/about': {
    title: "PC Software — Software house per l'hospitality",
    description:
      "Chi c'è dietro Orma: progettiamo gestionali, siti web e soluzioni su misura per ristorazione e locali.",
  },
}
