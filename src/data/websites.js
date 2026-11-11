import { CalendarCheck, ChefHat, Globe, RefreshCw, Sparkles, UtensilsCrossed } from 'lucide-react'

export const HERO = {
  eyebrow: 'Siti web per locali',
  titleLines: ['Il sito del tuo locale,', 'costruito per riempire i tavoli.'],
  body: 'Progettiamo siti su misura per ristoranti, bar e locali: identità curata, prenotazioni ed eventi integrati, menu digitale sempre aggiornato perché collegato a Orma.',
  note: 'Design su misura · Prenotazioni ed eventi · Menu sincronizzato con Orma',
}

export const PILLARS_INTRO = {
  eyebrow: 'Cosa realizziamo',
  title: 'Un sito che lavora per il tuo locale.',
  body: 'Ogni progetto parte da quattro elementi, costruiti su misura e collegati tra loro.',
}

export const PILLARS = [
  {
    icon: Sparkles,
    title: 'Un brand che si fa ricordare',
    body: 'Design su misura che racconta il tuo locale, veloce su ogni smartphone e pensato per trasformare le visite in prenotazioni.',
  },
  {
    icon: CalendarCheck,
    title: 'Prenotazioni ed eventi integrati',
    body: 'Il cliente prenota un tavolo o un evento direttamente dal sito: la richiesta arriva sul gestionale, senza telefonate né intermediari.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Menu digitale dinamico',
    body: 'Piatti, prezzi e allergeni sempre aggiornati. Un piatto esaurito sparisce dal sito nello stesso momento in cui lo disattivi.',
  },
  {
    icon: RefreshCw,
    title: 'Sync nativo con Orma',
    body: 'Sito e gestionale condividono gli stessi dati: nessun connettore esterno, nessuna doppia digitazione.',
  },
]

export const SYNC = {
  eyebrow: 'Integrazione nativa',
  title: 'Un solo dato, ovunque.',
  body: 'Il sito non è una vetrina scollegata: legge e scrive sugli stessi dati del gestionale.',
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
    body: 'Partiamo dal tuo locale: pubblico, servizi, obiettivi e cosa deve fare il sito.',
  },
  {
    title: 'Design',
    body: "Progettiamo struttura e grafica sull'identità del locale, pensando prima allo smartphone.",
  },
  {
    title: 'Sviluppo',
    body: 'Realizziamo il sito su misura, con prenotazioni, eventi e menu già collegati.',
  },
  {
    title: 'Lancio e collegamento a Orma',
    body: 'Pubblichiamo il sito e lo colleghiamo al gestionale, pronto per il primo servizio.',
  },
]

export const FAQ = {
  title: 'Domande sui siti web',
  items: [
    {
      q: 'Devo già usare Orma per avere il sito?',
      a: 'No. Possiamo realizzare il sito anche per locali che non usano ancora Orma. Collegandolo al gestionale, prenotazioni e menu si sincronizzano in automatico.',
    },
    {
      q: 'Posso aggiornare menu ed eventi da solo?',
      a: 'Sì. Con Orma, menu e prezzi sono collegati al sito: ogni modifica che fai dal gestionale, anche dal telefono, compare subito online. Per gli altri contenuti definiamo insieme come gestirli.',
    },
    {
      q: 'Il sito funziona con il mio dominio?',
      a: 'Sì. Pubblichiamo il sito sul dominio del tuo locale; se non ne hai ancora uno, ti aiutiamo a sceglierlo e registrarlo.',
    },
  ],
}

export const CONTACT = {
  title: 'Parliamo del sito del tuo locale',
  body: 'Raccontaci il locale e cosa vuoi ottenere: ti proponiamo struttura, tempi e costi.',
}
