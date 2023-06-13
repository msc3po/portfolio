import Box from '../components/box'

export default function Blog() {
  const text = 'Lorem ipsum bla bla bla'
  const urlImage = 'https://picsum.photos/200/300'
  return (
    <div>
      <div>My about stuff goes here</div>
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 min-h-screen">
        <div className="h-max-full text-center">
          <h1 className="p-10 py-20">About me</h1>
          <h2> Some smart sentence here</h2>{' '}
          <div className="grid grid-cols-2 gap-4 items-center justify-items-center">
            <div className="col-span-1 h-32">
              <Box title={``} content={''} image={urlImage} shape="circle" />
            </div>
            <div className="col-span-1 min-h-full">
              <Box title={``} content={''} image={''} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
