import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICOS } from '@/lib/data/servicos'
import { CIDADES } from '@/lib/data/cidades'
import { JsonLd } from '@/components/seo/JsonLd'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'
import { breadcrumbSchema } from '@/lib/seo/structured-data'
import { SITE_URL, ADVOGADO } from '@/lib/seo/metadata'

export const dynamic = 'force-static'

const WA_LINK = 'https://wa.me/5579999787700?text=Olá%20Dr.%20Paulo%20Cesar%2C%20preciso%20de%20ajuda%20com%20inventário'

export const metadata: Metadata = {
  title: 'Serviços — Inventário e Partilha de Bens em Sergipe',
  description:
    'Inventário judicial, inventário extrajudicial, partilha de bens e regularização de imóveis. Atendimento em Aracaju, Nossa Senhora do Socorro, Lagarto, Itabaiana e São Cristóvão.',
  alternates: { canonical: `${SITE_URL}/servicos` },
}

export default function ServicosPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Início', url: SITE_URL },
          { name: 'Serviços', url: `${SITE_URL}/servicos` },
        ])}
      />

      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-slate-400 text-sm font-medium mb-4 tracking-wide uppercase">
            {ADVOGADO}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Serviços</h1>
          <p className="text-slate-300 text-xl max-w-2xl">
            Especializado em direito das sucessões — do inventário à regularização do imóvel que ficou para a família.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <BreadcrumbNav
          items={[
            { label: 'Início', href: '/' },
            { label: 'Serviços', href: '/servicos' },
          ]}
          siteUrl={SITE_URL}
        />
      </div>

      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto space-y-24">
          {SERVICOS.map((servico, index) => (
            <div key={servico.slug} id={servico.slug}>
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-start mb-12`}>
                <div className="flex-1">
                  <div className="text-5xl mb-5">{servico.icone}</div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{servico.nome}</h2>
                  <p className="text-slate-600 text-base mb-6 leading-relaxed">{servico.descricaoLonga}</p>
                  <ul className="space-y-3 mb-8">
                    {servico.beneficios.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-slate-700 text-sm">
                        <span className="text-amber-500 font-bold mt-0.5">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-slate-900 text-white font-semibold px-8 py-3 rounded-xl hover:bg-slate-700 transition-colors text-sm"
                  >
                    Consultar sobre {servico.nome}
                  </a>
                </div>
                <div className="flex-1 bg-slate-50 rounded-2xl p-8 border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-700 mb-4 uppercase tracking-wide">
                    Atendimento por cidade
                  </h3>
                  <div className="flex flex-col gap-2">
                    {CIDADES.map((cidade) => (
                      <Link
                        key={cidade.slug}
                        href={`/${servico.slug}-${cidade.slug}`}
                        className="text-sm text-slate-600 hover:text-amber-700 hover:underline py-1 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                        {servico.nome} em {cidade.nome}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQ por serviço */}
              {servico.faq.length > 0 && (
                <div className="border-t border-slate-100 pt-10">
                  <h3 className="text-lg font-bold text-slate-900 mb-6">Dúvidas sobre {servico.nome}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {servico.faq.map((item) => (
                      <div key={item.pergunta} className="bg-white border border-slate-200 rounded-xl p-5">
                        <p className="font-semibold text-slate-900 text-sm mb-2">{item.pergunta}</p>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.resposta}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
