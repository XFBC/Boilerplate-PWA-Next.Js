'use client'
import Link from 'next/link'
import { Icon } from '@iconify/react'

export default function Head() {
  return (
    <>
      <div className="flex flex-row justify-between border-b border-slate-200 space-x-6  whitespace-nowrap dark:border-slate-200/5 mb-px">
        <div className="flex flex-row gap-2">
          <Icon icon="solar:city-broken" className="text-3xl" />
          <h1 className="text-2xl font-black">FindCities</h1>
        </div>
        <Link
          href="/"
          className=" group flex flex-row gap-2 items-center px-2 py-1 border mb-2 border-slate-200 dark:border-slate-200/5 rounded-md"
        >
          <Icon
            icon="tabler:arrow-left"
            className="inline-block transition-transform group-hover:translate-x-[-4px] motion-reduce:transform-none"
          />
          <p>Voltar</p>
        </Link>
      </div>
    </>
  )
}
