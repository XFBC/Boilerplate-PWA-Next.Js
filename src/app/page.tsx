import Image from 'next/image'
import Head from './head'

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center gap-8 p-24">
        <h2 className="font-bold text-3xl">
          Bem vindo ao Boilerplate NEXT 13 - PWA
        </h2>
        <a
          href="/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Busca CEP{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Busca CEP por cidade ou cidade por CEP.
          </p>
        </a>
      </main>
    </>
  )
}
