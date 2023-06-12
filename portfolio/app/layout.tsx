import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <div className=' text-center'> SECTION BAR LAYOUT HERE?</div>
        <div className="flex justify-between">
          <div>BLOG</div>
          <div>ABOUT</div>
          <div>CONTACT</div>
          <div>PORTFOLIO</div>
        </div>
   
        <div>{children}</div>

      
      
      </body>
    </html>
  )
}
