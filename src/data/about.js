import { Database, Globe, MonitorSmartphone, MousePointerClick, Puzzle, Zap } from 'lucide-react'

export const HERO = {
  eyebrow: 'PC Software',
  title: "Software house per l'hospitality.",
  body: 'Progettiamo e sviluppiamo prodotti digitali per chi lavora nella ristorazione e nei locali. Orma è il nostro gestionale; siti web e soluzioni su misura nascono dallo stesso metodo.',
}

export const PRINCIPLES_INTRO = {
  eyebrow: 'Visione',
  title: 'Come costruiamo.',
  body: 'Quattro principi che guidano ogni prodotto, dal gestionale ai siti web.',
}

export const PRINCIPLES = [
  {
    icon: Zap,
    title: 'Tempo reale per impostazione predefinita',
    body: 'Ogni modifica arriva subito a sala, cucina e clienti: niente sincronizzazioni manuali né ritardi.',
  },
  {
    icon: Database,
    title: 'Un solo dato, ovunque',
    body: 'Menu, tavoli e prenotazioni vivono in un unico posto e alimentano gestionale, palmari, QR e sito.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Nessun hardware dedicato',
    body: 'I nostri prodotti funzionano su iPad, tablet Android, PC e smartphone che il locale già possiede.',
  },
  {
    icon: MousePointerClick,
    title: 'Interfacce che si imparano in cinque minuti',
    body: 'Progettiamo per chi lavora durante il servizio: poche azioni, chiare, senza corsi di formazione.',
  },
]

export const ECOSYSTEM_INTRO = {
  eyebrow: 'Ecosistema',
  title: 'Prodotti che parlano tra loro.',
  body: 'Ogni soluzione funziona da sola ed è pensata per collegarsi alle altre.',
}

export const ECOSYSTEM = [
  {
    id: 'orma',
    icon: null,
    title: 'Orma — Gestionale',
    body: "Cassa, sala, comande, prenotazioni e analytics in un'unica piattaforma.",
    to: '/',
    cta: 'Scopri Orma',
  },
  {
    id: 'websites',
    icon: Globe,
    title: 'Siti web su misura',
    body: 'Siti custom per studi, brand, aziende e locali, con integrazione Orma opzionale.',
    to: '/websites',
    cta: 'Scopri i siti web',
  },
  {
    id: 'custom',
    icon: Puzzle,
    title: 'Soluzioni custom',
    body: 'Integrazioni e strumenti su misura per esigenze che un prodotto standard non copre.',
    to: '/about#contatti',
    cta: 'Parliamone',
  },
]

export const TEAM_INTRO = {
  eyebrow: 'Team',
  title: 'Le persone dietro Orma.',
  body: 'Parli direttamente con chi progetta e sviluppa il software.',
}

export const CONTACT = {
  title: 'Hai un progetto su misura?',
  body: "Integrazioni, strumenti interni, prodotti digitali per l'hospitality: raccontaci cosa ti serve.",
}
