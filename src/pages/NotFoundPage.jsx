import { Link } from 'react-router'
import { useNoIndex } from '../hooks/useSeo'

export default function NotFoundPage() {
  useNoIndex('Pagina non trovata — Orma')

  return (
    <section className="mx-auto max-w-6xl px-4 pb-28 pt-32 sm:px-6">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-faint">Errore 404</p>
        <h1 className="text-gradient mt-3 pb-2 text-4xl font-medium leading-[1.15] tracking-[-0.045em] sm:text-5xl">
          Pagina non trovata
        </h1>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
          L&apos;indirizzo che hai aperto non esiste o è stato spostato.
        </p>
        <Link to="/" className="btn-primary mt-8 !h-10 !px-4">
          Torna a Orma
        </Link>
      </div>
    </section>
  )
}
