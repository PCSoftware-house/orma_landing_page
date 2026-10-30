import { useState } from 'react'
import {
  BarChart3,
  Calendar,
  CreditCard,
  LayoutGrid,
  Receipt,
  Search,
  UtensilsCrossed,
} from 'lucide-react'
import datasetJson from '../../data/mock_dataset.json'
import WindowHeader from '../ui/WindowHeader'
import AnalyticsScreen from '../screens/AnalyticsScreen'
import Comande from '../screens/Comande'
import MenuScreen from '../screens/MenuScreen'
import Planimetria from '../screens/Planimetria'
import Prenotazioni from '../screens/Prenotazioni'
import Registratore from '../screens/Registratore'

const TABS = [
  { id: 'registratore', label: 'Registratore', icon: CreditCard },
  { id: 'comande', label: 'Comande', icon: Receipt },
  { id: 'planimetria', label: 'Planimetria', icon: LayoutGrid },
  { id: 'prenotazioni', label: 'Prenotazioni', icon: Calendar },
  { id: 'menu', label: 'Menu', icon: UtensilsCrossed },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
]

function CommandBar() {
  return (
    <button
      type="button"
      className="flex h-7 w-full items-center gap-2 rounded-md border border-line bg-canvas/80 px-2.5 text-[12px] text-faint transition hover:border-white/15 hover:text-muted"
    >
      <Search size={13} strokeWidth={1.5} />
      <span className="flex-1 truncate text-left">Cerca o esegui un comando…</span>
      <kbd className="hidden rounded border border-line bg-elevate px-1.5 py-0.5 text-[10px] text-muted sm:inline">
        ⌘K
      </kbd>
    </button>
  )
}

function WindowSidebar({ activeTab, onTab, tenant }) {
  return (
    <aside className="flex w-[200px] shrink-0 flex-col border-r border-os-line bg-os-low">
      <div className="border-b border-os-line px-3 py-3">
        <p className="text-[14px] font-bold leading-none text-os-text">Orma</p>
        <p className="mt-1 text-[12px] text-os-secondary">{tenant}</p>
      </div>
      <nav className="flex flex-1 flex-col gap-1 p-2" aria-label="Orma">
        {TABS.map((tab) => {
          const Icon = tab.icon
          const active = activeTab === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              aria-current={active ? 'page' : undefined}
              onClick={() => onTab(tab.id)}
              className={`flex h-10 items-center gap-2.5 rounded-lg px-2.5 text-[13px] transition-colors duration-150 ${
                active
                  ? 'bg-os-high font-bold text-os-accent'
                  : 'font-medium text-os-secondary hover:bg-os-surface'
              }`}
            >
              <Icon
                size={16}
                strokeWidth={1.75}
                className={active ? 'text-os-accent' : 'text-os-secondary'}
              />
              <span className="truncate">{tab.label}</span>
            </button>
          )
        })}
      </nav>
      <div className="border-t border-os-line px-3 py-3">
        <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-os-muted">Operatore</p>
        <p className="mt-1 truncate text-[13px] font-bold text-os-text">Giulia (Cassa)</p>
      </div>
    </aside>
  )
}

export default function MainAppWindow() {
  const [data] = useState(datasetJson)
  const [activeTab, setActiveTab] = useState('analytics')

  return (
    <div className="relative overflow-hidden rounded-xl border border-line bg-os-bg shadow-window">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <WindowHeader center={<CommandBar />} />
      <div className="h-[640px] overflow-auto">
        <div className="flex h-full min-h-[640px] min-w-[960px]">
          <WindowSidebar activeTab={activeTab} onTab={setActiveTab} tenant={data.tenant_name} />
          <div className="min-w-0 flex-1">
            <div key={activeTab} className="h-full">
              {activeTab === 'registratore' ? <Registratore data={data} /> : null}
              {activeTab === 'comande' ? <Comande data={data} /> : null}
              {activeTab === 'planimetria' ? <Planimetria data={data} /> : null}
              {activeTab === 'prenotazioni' ? <Prenotazioni data={data} /> : null}
              {activeTab === 'menu' ? <MenuScreen data={data} /> : null}
              {activeTab === 'analytics' ? <AnalyticsScreen data={data} /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
