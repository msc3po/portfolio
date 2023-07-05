import { getAllPosts } from '@/lib/cms'
import Link from 'next/link'
import Box from '../components/box'

export default async function Blog() {
  const posts = await getAllPosts()

  return (
    <div className="bg-gradient-to-r from-slate-50 to-slate-100 min-h-screen items-center justify-center grid grid-cols-3 gap-4">
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
  )
}
