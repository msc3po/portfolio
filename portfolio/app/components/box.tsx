type BoxProps = {
  title: string
  content: string
  image: string
  size?: string
  shape?: 'circle' | 'square' | 'rectangle'
  textCentered?: boolean
}

export default function Box({
  title,
  content,
  image,
  shape = 'square',
  textCentered = false,
}: BoxProps) {
  return (
    <div className="flex justify-center py-10">
      <div
        className={`glass rounded-2xl border-solid border-2 border-gray-200 p-4 ${
          textCentered ? 'flex items-center justify-center' : ''
        } transition-all duration-200 ease-in-out hover:shadow-lg hover:bg-blue-100 ${
          shape === 'circle'
            ? 'rounded-full w-64 h-64'
            : shape === 'square'
            ? 'aspect-[1/1] w-64 h-64'
            : 'w-full h-full'
        }`}
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
      >
        <div>
          <h1 className="mb-4 text-3xl font-extrabold text-center">{title}</h1>
          <p className="text-center">{content}</p>
        </div>
      </div>
    </div>
  )
}
