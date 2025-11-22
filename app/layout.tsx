import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ArtiCare - Complément Alimentaire pour les Articulations',
  description: 'Solution naturelle pour soulager les douleurs osseuses et articulaires',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
