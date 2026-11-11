export const SITE = { origin: 'https://getorma.app', product: 'Orma', company: 'PC Software' }

export const NAV = [
  { to: '/', label: 'Orma', end: true },
  { to: '/websites', label: 'Siti web' },
  { to: '/about', label: 'Chi siamo' },
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
  {
    title: 'Azienda',
    links: [
      { label: 'Siti web su misura', to: '/websites' },
      { label: 'Chi siamo', to: '/about' },
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
    title: 'Siti web su misura per studi, brand e aziende — Orma',
    description:
      'Siti web custom, veloci e 100% indipendenti per qualsiasi settore. Per i locali, integrazione opzionale con il gestionale Orma.',
  },
  '/about': {
    title: "PC Software — Software house per l'hospitality",
    description:
      "Chi c'è dietro Orma: progettiamo gestionali, siti web e soluzioni su misura per ristorazione e locali.",
  },
}
