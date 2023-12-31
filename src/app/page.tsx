import Link from 'next/link'
import Head from './Head'

export default function Home() {
  return (
    <>
      <div className="flex justify-center py-4">
        <Head />
      </div>
      <main className="flex min-h-screen flex-col items-center gap-8 p-24">
        <h2 className="font-bold text-3xl">
          Bem vindo ao Boilerplate NEXT 13 - PWA
        </h2>

        <Link
          href="/busca-cep"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Busca CIDADES{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Pesquise por cidades com UF ou o nome da cidade.
          </p>
        </Link>
      </main>
    </>
  )
}
