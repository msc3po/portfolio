import { getAllPosts } from '@/lib/cms'
import Link from 'next/link'
import Box from '../components/box'

export default async function Blog() {
  const posts = await getAllPosts()

  return (
    <div className="bg-gradient-to-r from-slate-50 to-slate-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-center mb-8 text-6xl p-10 py-4">
        Let's share knowledge
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`}>
            <div>
              <Box
                title={`${post.title}`}
                content={''}
                image={''}
                textCentered={true}
              ></Box>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
