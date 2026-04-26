import Link from 'next/link'
import { JsonLd } from './JsonLd'
import { breadcrumbSchema } from '@/lib/seo/structured-data'

type BreadcrumbItem = {
  label: string
  href: string
}

type BreadcrumbNavProps = {
  items: BreadcrumbItem[]
  siteUrl: string
}

export function BreadcrumbNav({ items, siteUrl }: BreadcrumbNavProps) {
  const schemaItems = items.map((item) => ({
    name: item.label,
    url: `${siteUrl}${item.href}`,
  }))

  return (
    <>
      <JsonLd data={breadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {index === items.length - 1 ? (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-blue-600 transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
