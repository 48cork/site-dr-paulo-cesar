import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import { JsonLd } from '@/components/seo/JsonLd'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'
import { articleSchema, breadcrumbSchema } from '@/lib/seo/structured-data'
import { buildBlogPostMetadata } from '@/lib/seo/metadata'
import { SITE_URL } from '@/lib/seo/metadata'

export const dynamic = 'force-static'

type Params = { slug: string }

export async function generateStaticParams(): Promise<Params[]> {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return buildBlogPostMetadata({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    slug,
    publishedAt: post.frontmatter.publishedAt,
    author: post.frontmatter.author,
  })
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: post.frontmatter.title,
            description: post.frontmatter.description,
            slug,
            publishedAt: post.frontmatter.publishedAt,
            author: post.frontmatter.author,
            readingTime: post.readingTime,
          }),
          breadcrumbSchema([
            { name: 'Início', url: SITE_URL },
            { name: 'Blog', url: `${SITE_URL}/blog` },
            { name: post.frontmatter.title, url: `${SITE_URL}/blog/${slug}` },
          ]),
        ]}
      />

      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {post.frontmatter.tags?.map((tag) => (
              <span key={tag} className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
            {post.frontmatter.title}
          </h1>
          <p className="text-blue-100 text-lg mb-6">{post.frontmatter.description}</p>
          <div className="flex items-center gap-4 text-blue-200 text-sm">
            <span>Por {post.frontmatter.author}</span>
            <span>·</span>
            <span>
              {new Date(post.frontmatter.publishedAt).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <BreadcrumbNav
          items={[
            { label: 'Início', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: post.frontmatter.title, href: `/blog/${slug}` },
          ]}
          siteUrl={SITE_URL}
        />
      </div>

      <article className="max-w-3xl mx-auto px-4 pb-20">
        <div className="prose prose-lg prose-blue max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </>
  )
}
