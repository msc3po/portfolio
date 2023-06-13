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
    <div className="bg-gradient-to-r from-slate-50 to-slate-100 min-h-screen">
      <div className="h-max-full text-center">
        <h1 className="p-10 py-20">Welcome to Manel Soler Portfolio</h1>
        <nav className="items-center grid grid-cols-2 gap-4 mx-auto w-3/4 ">
          {boxes.map((box, index) => (
            <Link href={box.href}>
              <Box
                key={index}
                title={box.title}
                content={box.content}
                image={''}
                textCentered={true}
              />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
