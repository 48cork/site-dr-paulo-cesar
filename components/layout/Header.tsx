import Link from 'next/link'
import { ADVOGADO } from '@/lib/seo/metadata'

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex flex-col leading-tight hover:opacity-80 transition-opacity">
            <span className="text-base font-bold text-slate-900">{ADVOGADO}</span>
            <span className="text-xs text-slate-500 font-medium">Inventário &amp; Partilha de Bens — Aracaju, SE</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-slate-600 hover:text-slate-900 font-medium transition-colors text-sm">
              Início
            </Link>
            <Link href="/servicos" className="text-slate-600 hover:text-slate-900 font-medium transition-colors text-sm">
              Serviços
            </Link>
            <Link href="/blog" className="text-slate-600 hover:text-slate-900 font-medium transition-colors text-sm">
              Blog
            </Link>
            <a
              href="https://wa.me/5579999787700?text=Olá%20Dr.%20Paulo%20Cesar%2C%20preciso%20de%20ajuda%20com%20inventário"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com Dr. Paulo Cesar pelo WhatsApp"
              className="bg-slate-900 text-white px-5 py-2 rounded-lg font-medium hover:bg-slate-700 transition-colors text-sm"
            >
              Fale pelo WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
