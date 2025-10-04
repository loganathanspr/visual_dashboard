import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Visual Dashboard',
  description: 'Cool visualizations with dummy data',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
