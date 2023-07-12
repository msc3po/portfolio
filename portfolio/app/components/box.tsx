import { ReactNode } from 'react'

type BoxProps = {
  title: string
  content: ReactNode // Change this from string to ReactNode
  image: string
  children?: ReactNode
  size?: string
  shape?: 'circle' | 'square' | 'rectangle'
  textCentered?: boolean
  className?: string
}

export default function Box({
  title,
  content,
  image,
  shape = 'square',
  size = 'w-64',
  children,
  textCentered = false,
  className = '',
}: BoxProps) {
  return (
    <div className={`flex justify-center py-10 ${size} ${className}`}>
      <div
        className={`glass rounded-2xl border-solid border-2 border-gray-200 p-4 ${
          textCentered ? 'flex items-center justify-center' : ''
        } transition-all duration-200 ease-in-out hover:shadow-lg hover:bg-blue-100 ${
          shape === 'circle'
            ? 'rounded-full w-48 h-48'
            : shape === 'square'
            ? 'w-48 h-auto'
            : 'w-full'
        }`}
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
      >
        <div>
          <h1 className="mb-4 text-2xl font-extrabold text-center">{title}</h1>
          <p className="text-sm">{content}</p>
          {children}
        </div>
      </div>
    </div>
  )
}
