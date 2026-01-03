import './globals.css'

export const metadata = {
  title: 'Blockchain & AI Conference 2026 | Harvard',
  description: 'Exploring the intersection of artificial intelligence and decentralized technologies at Harvard University. April 17-18, 2026.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
