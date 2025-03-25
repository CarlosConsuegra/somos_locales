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
      <body className="min-h-screen">{children}</body>
    </html>
  )
}