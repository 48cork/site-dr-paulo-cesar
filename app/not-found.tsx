import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-extrabold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Página não encontrada</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        A página que você está procurando não existe ou foi removida.
      </p>
      <Link
        href="/"
        className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors"
      >
        Voltar ao Início
      </Link>
    </section>
  )
}
