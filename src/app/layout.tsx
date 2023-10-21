import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from './Head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center py-4">
          <Head />
        </div>
        <div className="px-4">{children}</div>
      </body>
    </html>
  )
}
