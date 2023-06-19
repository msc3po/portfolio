import Box from '../components/box'

export default function About() {
  const text =
    'Lorem ipLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus neque a est varius, mattis imperdiet massa imperdiet. Cras interdum sit amet dui nec pretium. Curabitur ante dolor, efficitur eget posuere vitae, tincidunt sed ante. Praesent quis sagittis est. Vestibulum accumsan ipsum at laoreet sodales. Integer gravida nulla eu ligula euismod euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus fringilla leo a tortor suscipit porttitor quis sit amet arcu. Nullam egestas tempor dui. Cras quis nisl eget sem laoreet consequat. Quisque auctor vitae augue in ultricies. Fusce in mattis quam. Cras in viverra nisi. Nam tincidunt id elit non interdum. Mauris lacinia magna non tempor porta.sum bla bla bla'
  const urlImage = 'https://picsum.photos/200/300'

  return (
    <div>
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 min-h-screen flex items-center justify-center">
        <div className="h-max-full text-center w-3/4 mx-auto">
          <h1 className="p-10 py-4 text-6xl">About me</h1>
          <h2 className="text-lg"> Some smart sentence here</h2>{' '}
          <div className="grid grid-cols-7 gap-4 items-center">
            <div className="col-span-2">
              <Box title={``} content={''} image={urlImage} shape="circle" />
            </div>
            <div className="col-span-5 text-sm">
              <Box title={``} content={text} image={''} shape="rectangle" /> {/* Changed the shape to "rectangle" */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}