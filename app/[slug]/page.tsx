import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICOS } from '@/lib/data/servicos'
import { CIDADES } from '@/lib/data/cidades'
import { JsonLd } from '@/components/seo/JsonLd'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'
import { localBusinessSchema, breadcrumbSchema, faqSchema } from '@/lib/seo/structured-data'
import { buildServicoCidadeMetadata } from '@/lib/seo/metadata'
import { SITE_URL, ADVOGADO } from '@/lib/seo/metadata'

export const dynamic = 'force-static'

type Params = { slug: string }

const WA_LINK = 'https://wa.me/5579999787700?text=Olá%20Dr.%20Paulo%20Cesar%2C%20preciso%20de%20ajuda%20com%20inventário'

function parseSlug(slug: string) {
  for (const servico of SERVICOS) {
    if (slug.startsWith(servico.slug + '-')) {
      const cidadeSlug = slug.slice(servico.slug.length + 1)
      const cidade = CIDADES.find((c) => c.slug === cidadeSlug)
      if (cidade) return { servico, cidade }
    }
  }
  return null
}

export async function generateStaticParams(): Promise<Params[]> {
  return SERVICOS.flatMap((s) =>
    CIDADES.map((c) => ({ slug: `${s.slug}-${c.slug}` }))
  )
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const parsed = parseSlug(slug)
  if (!parsed) return {}
  return buildServicoCidadeMetadata(parsed.servico, parsed.cidade)
}

export default async function ServicoCidadePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const parsed = parseSlug(slug)
  if (!parsed) notFound()

  const { servico, cidade } = parsed

  const outrasCidades = CIDADES.filter((c) => c.slug !== cidade.slug)
  const outrosServicos = SERVICOS.filter((s) => s.slug !== servico.slug)

  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(servico, cidade),
          faqSchema(servico.faq),
          breadcrumbSchema([
            { name: 'Início', url: SITE_URL },
            { name: 'Serviços', url: `${SITE_URL}/servicos` },
            { name: servico.nome, url: `${SITE_URL}/servicos#${servico.slug}` },
            { name: cidade.nome, url: `${SITE_URL}/${slug}` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-slate-400 text-sm font-medium mb-4 tracking-wide uppercase">
            {ADVOGADO} — {cidade.nome}, {cidade.siglaEstado}
          </p>
          <div className="text-4xl mb-5">{servico.icone}</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            {servico.nome} em {cidade.nome}
          </h1>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl leading-relaxed">
            {servico.descricao}
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-green-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar pelo WhatsApp
          </a>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <BreadcrumbNav
          items={[
            { label: 'Início', href: '/' },
            { label: 'Serviços', href: '/servicos' },
            { label: servico.nome, href: `/servicos#${servico.slug}` },
            { label: cidade.nome, href: `/${slug}` },
          ]}
          siteUrl={SITE_URL}
        />
      </div>

      {/* Conteúdo principal */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

            {/* Coluna principal */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {servico.nome} em {cidade.nome}, {cidade.siglaEstado}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {servico.descricaoLonga}
              </p>

              {/* Contexto local — o diferencial de cada página */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
                <p className="text-sm font-semibold text-amber-800 mb-2 uppercase tracking-wide">
                  Sobre {cidade.nome}
                </p>
                <p className="text-amber-900 text-sm leading-relaxed">
                  {cidade.contextoLocal}
                </p>
              </div>

              <ul className="space-y-3 mb-10">
                {servico.beneficios.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-slate-700 text-sm">
                    <span className="text-amber-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* FAQ */}
              {servico.faq.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">
                    Perguntas frequentes sobre {servico.nome}
                  </h3>
                  <div className="space-y-4">
                    {servico.faq.map((item) => (
                      <div key={item.pergunta} className="border border-slate-200 rounded-xl p-5">
                        <p className="font-semibold text-slate-900 text-sm mb-2">{item.pergunta}</p>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.resposta}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar CTA */}
            <div className="md:col-span-1">
              <div className="bg-slate-900 text-white rounded-2xl p-7 sticky top-24">
                <p className="font-bold text-lg mb-1">{ADVOGADO}</p>
                <p className="text-slate-400 text-sm mb-6">Atendimento em {cidade.nome} e região</p>
                <ul className="space-y-3 mb-7 text-sm text-slate-300">
                  {[
                    'Consulta inicial sem compromisso',
                    'Orientação clara sobre o processo',
                    'Atendimento presencial ou remoto',
                    'Acompanhamento em todas as etapas',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 text-white font-semibold py-3 rounded-xl hover:bg-green-600 transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Falar com Dr. Paulo
                </a>
              </div>
            </div>
          </div>

          {/* Links internos — outras cidades */}
          <div className="border-t border-slate-100 pt-12 mb-12">
            <h3 className="text-lg font-bold text-slate-900 mb-5">
              {servico.nome} em outras cidades de Sergipe
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {outrasCidades.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${servico.slug}-${c.slug}`}
                  className="text-sm text-slate-600 hover:text-amber-700 hover:underline py-1 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                  {servico.nome} em {c.nome}
                </Link>
              ))}
            </div>
          </div>

          {/* Links internos — outros serviços */}
          <div className="border-t border-slate-100 pt-12">
            <h3 className="text-lg font-bold text-slate-900 mb-5">
              Outros serviços em {cidade.nome}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {outrosServicos.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}-${cidade.slug}`}
                  className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-amber-50 border border-transparent hover:border-amber-200 transition-all group"
                >
                  <span className="text-2xl">{s.icone}</span>
                  <div>
                    <p className="font-semibold text-slate-900 group-hover:text-amber-800 transition-colors text-sm">
                      {s.nome}
                    </p>
                    <p className="text-xs text-slate-500">em {cidade.nome}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
