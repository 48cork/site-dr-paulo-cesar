import { Servico } from '@/lib/data/servicos'
import { Cidade } from '@/lib/data/cidades'
import { SITE_URL, SITE_NAME, ADVOGADO } from './metadata'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      'Escritório de advocacia especializado em inventário judicial, inventário extrajudicial, partilha de bens e regularização de imóveis em Aracaju, SE.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Aracaju',
      addressRegion: 'SE',
      addressCountry: 'BR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-79-99999-9999',
      contactType: 'customer service',
      areaServed: 'SE',
      availableLanguage: 'Portuguese',
    },
    founder: {
      '@type': 'Person',
      name: ADVOGADO,
      jobTitle: 'Advogado',
      knowsAbout: ['Inventário', 'Partilha de Bens', 'Direito Sucessório', 'Regularização de Imóveis'],
    },
    sameAs: [
      'https://www.instagram.com/paulorolemberg.adv',
    ],
  }
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  }
}

export function localBusinessSchema(servico: Servico, cidade: Cidade) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: `${servico.nome} em ${cidade.nome} — ${SITE_NAME}`,
    description: servico.descricaoLonga,
    url: `${SITE_URL}/${servico.slug}-${cidade.slug}`,
    areaServed: {
      '@type': 'City',
      name: cidade.nome,
      containedInPlace: {
        '@type': 'State',
        name: cidade.estado,
        containedInPlace: {
          '@type': 'Country',
          name: 'Brasil',
        },
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: servico.nome,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: servico.nome,
            description: servico.descricao,
          },
        },
      ],
    },
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function faqSchema(items: { pergunta: string; resposta: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.pergunta,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.resposta,
      },
    })),
  }
}

export function articleSchema(params: {
  title: string
  description: string
  slug: string
  publishedAt: string
  author: string
  readingTime?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.title,
    description: params.description,
    url: `${SITE_URL}/blog/${params.slug}`,
    datePublished: params.publishedAt,
    author: {
      '@type': 'Person',
      name: params.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    timeRequired: params.readingTime,
  }
}
