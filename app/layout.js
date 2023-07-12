import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mehmet EDE Front-End Web Developer',
  description: 'Mehmet EDE Front-End Web Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${inter.className}`}>
        {children}
        <Analytics />
        </body>
    </html>
  )
}
