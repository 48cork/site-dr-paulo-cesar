import type { MetadataRoute } from 'next'
import { SERVICOS } from '@/lib/data/servicos'
import { CIDADES } from '@/lib/data/cidades'
import { getAllPosts } from '@/lib/mdx'
import { SITE_URL } from '@/lib/seo/metadata'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/servicos`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  const blogPosts: MetadataRoute.Sitemap = getAllPosts().map((post) => {
    const dateStr = post.frontmatter.publishedAt ?? post.frontmatter.date
    const lastModified = dateStr ? new Date(dateStr) : now
    return {
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: isNaN(lastModified.getTime()) ? now : lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }
  })

  const servicoCidadePages: MetadataRoute.Sitemap = SERVICOS.flatMap((servico) =>
    CIDADES.map((cidade) => ({
      url: `${SITE_URL}/${servico.slug}-${cidade.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  )

  return [...staticPages, ...blogPosts, ...servicoCidadePages]
}
