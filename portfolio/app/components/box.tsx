//create a box comoponent and export it to the page
type BoxProps = {
  title: string;
  content: string;
};

export default function Box({title, content}: BoxProps) {
  return (
    <div className= "grid-rows-{3} gap-4 ">
  <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
    <div className="w-full">
      <div className="m-8 my-20 max-w-[400px] mx-auto">
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-extrabold">{title}</h1>
          <p className="text-gray-600">{content}</p>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

