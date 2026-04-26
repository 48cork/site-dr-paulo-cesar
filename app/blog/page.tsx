import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'
import { JsonLd } from '@/components/seo/JsonLd'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'
import { breadcrumbSchema } from '@/lib/seo/structured-data'
import { SITE_URL } from '@/lib/seo/metadata'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Blog de Marketing Digital',
  description:
    'Artigos, dicas e estratégias de marketing digital para empresas brasileiras. SEO, tráfego pago, redes sociais e muito mais.',
  alternates: { canonical: `${SITE_URL}/blog` },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Início', url: SITE_URL },
          { name: 'Blog', url: `${SITE_URL}/blog` },
        ])}
      />

      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Blog de Marketing Digital</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Estratégias, tendências e dicas práticas para crescer no digital.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <BreadcrumbNav
          items={[
            { label: 'Início', href: '/' },
            { label: 'Blog', href: '/blog' },
          ]}
          siteUrl={SITE_URL}
        />
      </div>

      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Em breve, novos artigos!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-7">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.frontmatter.tags?.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                      {post.frontmatter.title}
                    </h2>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-5">{post.frontmatter.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>
                        {new Date(post.frontmatter.publishedAt).toLocaleDateString('pt-BR', {
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
