import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Manel Soler Portfolio',
  description: 'Manel Soler Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const links = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT' },
    { href: '/portfolio', label: 'PORTFOLIO' },
    { href: '/blog', label: 'BLOG' },
    { href: '/contact', label: 'CONTACT' },
  ]

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="text-center"></div>
        <nav className="flex justify-between max-w-screen-lg mx-auto p-10 ">
          {links.map(({ href, label }) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div>{children}</div>
      </body>
    </html>
  )
}
