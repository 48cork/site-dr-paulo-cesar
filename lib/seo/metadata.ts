import type { Metadata } from 'next'
import { Servico } from '@/lib/data/servicos'
import { Cidade } from '@/lib/data/cidades'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rolemberg.adv.br'
const SITE_NAME = 'Dr. Paulo Rolemberg — Advogado'
const ADVOGADO = 'Dr. Paulo Cesar Rolemberg Farias'
const SITE_DESCRIPTION =
  'Escritório de advocacia especializado em inventário judicial, inventário extrajudicial, partilha de bens e regularização de imóveis em Aracaju e Sergipe.'

export function buildBaseMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${ADVOGADO} — Inventário e Partilha de Bens em Aracaju, SE`,
      template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    openGraph: {
      siteName: SITE_NAME,
      locale: 'pt_BR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
    },
    alternates: {
      canonical: SITE_URL,
    },
  }
}

export function buildServicoCidadeMetadata(servico: Servico, cidade: Cidade): Metadata {
  const title = `${servico.nome} em ${cidade.nome}, ${cidade.siglaEstado} — ${SITE_NAME}`
  const description = `${servico.descricao} Atendimento em ${cidade.nome} e região. Fale com o Dr. Paulo Rolemberg.`
  const url = `${SITE_URL}/${servico.slug}-${cidade.slug}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      locale: 'pt_BR',
    },
    alternates: {
      canonical: url,
    },
  }
}

export function buildBlogPostMetadata(params: {
  title: string
  description: string
  slug: string
  publishedAt: string
  author?: string
}): Metadata {
  const url = `${SITE_URL}/blog/${params.slug}`

  return {
    title: params.title,
    description: params.description,
    openGraph: {
      title: params.title,
      description: params.description,
      url,
      type: 'article',
      locale: 'pt_BR',
      publishedTime: params.publishedAt,
      authors: params.author ? [params.author] : undefined,
    },
    alternates: {
      canonical: url,
    },
  }
}

export { SITE_URL, SITE_NAME, ADVOGADO }
