//create a box comoponent and export it to the page
type BoxProps = {
  title: string;
  content: string;
};

export default function Box({title, content}: BoxProps) {
  return (
    <div className="left-0 top-0 flex h-full w-full items-center justify-center py-10">
      <div className="glass rounded-2xl border-solid border-2 border-gray-200 p-4 w-64 h-64 flex items-center justify-center transition-all duration-200 ease-in-out hover:shadow-lg hover:bg-blue-100">
        <div>
          <h1 className="mb-4 text-3xl font-extrabold text-center">{title}</h1>
          <p className="text-center">{content}</p>
        </div>
      </div>
    </div>
  )
}