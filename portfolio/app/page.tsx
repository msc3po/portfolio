import Image from 'next/image'
import Box from './components/box'
import Link from 'next/link'

export default function Home() {
  const boxes = [
    { title: 'About', content: 'About me', href: '/about' },
    { title: 'Portfolio', content: 'My Portfolio', href: '/portfolio' },
    { title: 'Blog', content: 'My Blog', href: '/blog' },
    { title: 'Contact', content: 'Contact me', href: '/contact' },
  ]

  return (
    <div className="bg-gradient-to-r from-slate-50 to-slate-100 min-h-screen flex justify-center items-center">
      <div className="h-max-full text-center">
        <h1 className="p-10 py-20">Welcome to Manel Soler Portfolio</h1>
        <nav className="grid grid-cols-2 gap-4 w-full max-w-4xl mx-auto">
          {boxes.map((box, index) => (
            <Link key={index} href={box.href} passHref>
              <Box
                title={box.title}
                content={box.content}
                image={''}
                textCentered={true}
                className="cursor-pointer"
              />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
