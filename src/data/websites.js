import { ChefHat, Gauge, Globe, KeyRound, Layers, Sparkles } from 'lucide-react'
import madmuvLogo from '../assets/clients/madmuv-logo.png'

export const HERO = {
  eyebrow: 'Siti web su misura',
  titleLines: ['Architettura web su misura.', 'Per studi, brand e imprese.'],
  body: 'Progettiamo e sviluppiamo piattaforme digitali indipendenti, curate nella direzione artistica e ottimizzate nelle prestazioni.',
  note: "con predisposizione all'integrazione gestionale.",
}

export const STANDALONE = {
  badge: 'Anche senza Orma',
  title: 'Il sito può essere completamente indipendente dal gestionale.',
  body: "Realizziamo siti su misura per qualsiasi attività, anche per chi non usa Orma o non gestisce un locale. Il collegamento con il gestionale è un'opzione in più, non un requisito.",
}

export const CLIENTS_INTRO = {
  eyebrow: 'Chi ci ha scelto',
  title: 'Chi ha già il suo sito su misura.',
}

export const CLIENTS = [
  {
    name: 'Madmuv Studio',
    sector: 'Studio di registrazione',
    description:
      'Sviluppo web ad alto impatto per il settore musicale: estetica dark, layout dinamico e direzione artistica custom.',
    logo: madmuvLogo,
    url: 'https://madmuv-studio-landing.vercel.app',
  },
]

export const PILLARS_INTRO = {
  eyebrow: 'Cosa realizziamo',
  title: 'Un sito che lavora per la tua attività.',
  body: 'Studio, brand, azienda o locale: ogni progetto parte da tre principi, costruiti su misura.',
}

export const PILLARS = [
  {
    icon: Sparkles,
    title: 'Design & Brand unici',
    body: 'Nessun template: grafica e codice scritti su misura per raccontare la tua identità e distinguerti dalla concorrenza.',
  },
  {
    icon: Gauge,
    title: 'Performance & Mobile-First',
    body: 'Caricamenti rapidi e navigazione fluida su ogni dispositivo, progettati prima di tutto per lo smartphone.',
  },
  {
    icon: Layers,
    title: 'Piattaforme su misura',
    body: 'Creiamo soluzioni web attive che lavorano per la tua attività: dai sistemi di prenotazione senza commissioni alla gestione dinamica dei contenuti.',
  },
]

export const SYNC = {
  badge: 'Opzionale per i locali',
  eyebrow: 'Modulo opzionale · solo per i locali',
  title: 'Hai un locale? Collegalo a Orma.',
  body: 'Se gestisci un ristorante, bar o club, puoi attivare a richiesta la sincronizzazione automatica di menu, prenotazioni ed eventi.',
  nodes: [
    { id: 'web', icon: Globe, label: 'Sito web', detail: 'Menu, eventi, prenotazioni' },
    { id: 'orma', icon: null, label: 'Orma', detail: 'Gestionale' },
    { id: 'floor', icon: ChefHat, label: 'Sala e cucina', detail: 'Palmari, QR, KDS' },
  ],
  caption:
    'Cambi un prezzo o disattivi un piatto: sito, QR al tavolo e palmare si aggiornano insieme.',
}

export const PROCESS_INTRO = {
  eyebrow: 'Metodo',
  title: 'Dal primo incontro al sito online.',
}

export const PROCESS = [
  {
    title: 'Analisi',
    body: 'Partiamo dalla tua attività: pubblico, servizi, obiettivi e cosa deve fare il sito.',
  },
  {
    title: 'Design',
    body: "Progettiamo struttura e grafica sulla tua identità, pensando prima allo smartphone.",
  },
  {
    title: 'Sviluppo',
    body: 'Realizziamo il sito su misura, con le funzionalità di cui hai bisogno e nient’altro.',
  },
  {
    title: 'Lancio',
    body: 'Pubblichiamo il sito sul tuo dominio. Se hai un locale, lo colleghiamo anche a Orma.',
  },
]

export const FAQ = {
  title: 'Domande sui siti web',
  items: [
    {
      q: 'Devo per forza usare Orma?',
      a: "No, mai obbligatorio. Realizziamo siti web custom per qualsiasi attività. L'integrazione è un plus dedicato solo ai locali.",
    },
    {
      q: 'Il sito sarà di mia proprietà?',
      a: 'Sì, al 100% tuo.',
    },
  ],
}

export const CONTACT = {
  title: 'Parliamo del tuo sito',
  body: 'Raccontaci la tua attività e cosa vuoi ottenere: ti proponiamo struttura, tempi e costi.',
}
