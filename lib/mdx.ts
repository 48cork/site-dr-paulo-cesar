import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type PostFrontmatter = {
  title: string
  description: string
  publishedAt: string
  author: string
  tags: string[]
  coverImage?: string
  category?: string
  date?: string
}

export type Post = {
  slug: string
  frontmatter: PostFrontmatter
  content: string
  readingTime: string
}

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog')

function estimateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const wordCount = content.trim().split(/\s+/).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return `${minutes} min de leitura`
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return []

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.mdx'))

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '')
      const filePath = path.join(POSTS_DIR, filename)
      const raw = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(raw)

      return {
        slug,
        frontmatter: data as PostFrontmatter,
        content,
        readingTime: estimateReadingTime(content),
      }
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.publishedAt).getTime() -
        new Date(a.frontmatter.publishedAt).getTime()
    )
}

export function getPostBySlug(slug: string): Post | undefined {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return undefined

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    slug,
    frontmatter: data as PostFrontmatter,
    content,
    readingTime: estimateReadingTime(content),
  }
}
