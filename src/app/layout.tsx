import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Somos Locales | El Corazón del Fútbol',
  description: 'Plataforma para los amantes del fútbol',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        {/* Fallback Tailwind CSS from CDN */}
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}