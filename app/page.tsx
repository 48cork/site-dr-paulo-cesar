import Link from 'next/link'
import { SERVICOS } from '@/lib/data/servicos'
import { CIDADES } from '@/lib/data/cidades'
import { getAllPosts } from '@/lib/mdx'
import { JsonLd } from '@/components/seo/JsonLd'
import { organizationSchema, webSiteSchema } from '@/lib/seo/structured-data'
import { ADVOGADO } from '@/lib/seo/metadata'

export const dynamic = 'force-static'

const WA_LINK = 'https://wa.me/5579999787700?text=Olá%20Dr.%20Paulo%20Cesar%2C%20preciso%20de%20ajuda%20com%20inventário'

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <>
      <JsonLd data={[organizationSchema(), webSiteSchema()]} />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-slate-400 text-sm font-medium mb-4 tracking-wide uppercase">
            Advocacia Especializada em Sergipe
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight max-w-3xl">
            Inventário e Partilha de Bens<br />
            <span className="text-amber-400">em Aracaju e Sergipe</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
            Seu familiar faleceu e você não sabe por onde começar? O Dr. {ADVOGADO.split(' ')[1]} {ADVOGADO.split(' ')[2]} cuida de todo o processo — da documentação ao cartório ou tribunal — para que a família possa regularizar a herança sem dor de cabeça.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-500 text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-green-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar pelo WhatsApp
            </a>
            <Link
              href="/servicos"
              className="inline-flex items-center justify-center bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/20 transition-colors"
            >
              Ver os Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Aviso rápido de contexto */}
      <section className="bg-amber-50 border-y border-amber-100 py-6 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4 text-sm text-amber-900">
          <span className="text-2xl">📌</span>
          <p>
            <strong>O prazo para abrir o inventário é de 60 dias a partir do falecimento.</strong> Depois disso, há multa sobre o ITCMD (imposto de herança). Quanto antes você formalizar, menor o custo.
          </p>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Como posso ajudar sua família
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl">
              Cada caso é diferente. Veja os serviços disponíveis e entenda qual se aplica à sua situação.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICOS.map((servico) => (
              <div
                key={servico.slug}
                className="border border-slate-200 rounded-2xl p-8 hover:border-slate-400 hover:shadow-sm transition-all"
              >
                <div className="text-3xl mb-4">{servico.icone}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{servico.nome}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{servico.descricao}</p>
                <Link
                  href={`/servicos#${servico.slug}`}
                  className="text-slate-800 font-semibold text-sm hover:text-amber-600 transition-colors"
                >
                  Saiba mais →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre o advogado */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-amber-600 font-semibold text-sm mb-3 tracking-wide uppercase">Quem é o advogado</p>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{ADVOGADO}</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Advogado inscrito na OAB/SE, com atuação focada em direito das sucessões — a área do direito que cuida do que acontece com o patrimônio depois que alguém morre.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              A especialização em inventário não é por acaso: é uma área que exige tanto conhecimento técnico quanto sensibilidade para lidar com famílias em um momento delicado. O objetivo é desburocratizar o processo e deixar claro para cada cliente o que está acontecendo e o que vem a seguir.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Atendimento presencial em Aracaju e online para clientes de toda Sergipe.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-6 text-lg">Áreas de atuação</h3>
            <ul className="space-y-4">
              {[
                { icon: '⚖️', texto: 'Inventário Judicial' },
                { icon: '📋', texto: 'Inventário Extrajudicial (em cartório)' },
                { icon: '🏠', texto: 'Partilha de Bens entre Herdeiros' },
                { icon: '📜', texto: 'Regularização de Imóveis Herdados' },
              ].map((item) => (
                <li key={item.texto} className="flex items-center gap-3 text-slate-700">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium">{item.texto}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-slate-100">
              <p className="text-xs text-slate-400 mb-4">Cidades atendidas</p>
              <div className="flex flex-wrap gap-2">
                {CIDADES.map((c) => (
                  <span
                    key={c.slug}
                    className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full"
                  >
                    {c.nome}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ rápido */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Perguntas que chegam toda semana
          </h2>
          <div className="space-y-6">
            {[
              {
                p: 'Qual o prazo para abrir o inventário?',
                r: '60 dias a partir da data do falecimento. Quem passar desse prazo paga multa de 10% sobre o ITCMD, o imposto estadual de herança. Em Sergipe, a alíquota do ITCMD é de 4%.',
              },
              {
                p: 'Precisa de advogado para inventário em cartório?',
                r: 'Sim. Mesmo o inventário extrajudicial (feito em cartório) exige advogado. É ele quem prepara a documentação, calcula os impostos e assina a escritura junto com as partes.',
              },
              {
                p: 'O que preciso ter em mãos para começar?',
                r: 'Certidão de óbito, documentos pessoais do falecido e dos herdeiros, e documentação dos bens (escritura de imóveis, extrato de contas, documentos de veículos). Em uma primeira conversa, o Dr. Paulo avalia o que você tem e o que ainda precisa levantar.',
              },
              {
                p: 'Posso fazer o inventário mesmo morando fora de Sergipe?',
                r: 'Sim. O inventário extrajudicial pode ser feito em qualquer cartório do Brasil, e o atendimento pode ser feito remotamente. Para o inventário judicial, a ação é proposta no domicílio do falecido — em Sergipe.',
              },
            ].map((item) => (
              <div key={item.p} className="border border-slate-200 rounded-xl p-6">
                <p className="font-semibold text-slate-900 mb-2">{item.p}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{item.r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      {posts.length > 0 && (
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Artigos sobre Inventário</h2>
              <Link href="/blog" className="text-slate-600 font-semibold hover:text-slate-900 transition-colors text-sm">
                Ver todos →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <p className="text-amber-600 text-xs font-semibold uppercase tracking-wide mb-3">
                      {post.frontmatter.category ?? 'Inventário'}
                    </p>
                    <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors leading-snug">
                      {post.frontmatter.title}
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-2 mb-4">{post.frontmatter.description}</p>
                    <p className="text-xs text-slate-400">{post.readingTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA final */}
      <section id="contato" className="py-24 px-4 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos conversar sobre o seu caso?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Uma conversa de 15 minutos já é suficiente para entender qual é o caminho certo para a sua família. Sem compromisso.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 text-white font-bold px-10 py-4 rounded-xl text-lg hover:bg-green-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar com Dr. Paulo
          </a>
        </div>
      </section>
    </>
  )
}
