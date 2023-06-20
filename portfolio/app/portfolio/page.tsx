import Box from '../components/box'
import Image from 'next/image'
import Link from 'next/link'

export default function Portfolio() {
  const projects = [
    {
      title: 'title 1',
      Image: 'https://picsum.photos/200/300',
      href: '/portfolio/1',
    },
    {
      title: 'title 2',
      Image: 'https://picsum.photos/200/300',
      href: '/portfolio/2',
    },
    {
      title: 'title 3',
      Image: 'https://picsum.photos/200/300',
      href: '/portfolio/3',
    },
    {
      title: 'title 4',
      Image: 'https://picsum.photos/200/300',
      href: '/portfolio/4',
    },
  ]

  const titleUrlImage = 'https://picsum.photos/200/300'

  return (
    <div>
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 min-h-screen flex items-center justify-center">
        <div className="h-max-full text-center w-3/4 mx-auto">
          <h1 className="p-10 py-4 text-6xl">Projects</h1>
          <h2 className="text-lg"> Smart sentence here</h2>{' '}
          <div className="grid grid-cols-4 gap-4 items-center">
            {projects.map((box, index) => (
              <Link href={box.href}>
                <Box
                  key={index}
                  title={box.title}
                  image={box.Image}
                  textCentered={true}
                  content={''}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
