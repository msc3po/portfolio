import Image from 'next/image'
import Box from './components/box'


export default function Home() {
  return (
    
    <div className="bg-gradient-to-r from-slate-50 to-slate-100 h-screen">
      <div className="h-max-full text-center">

      <h1>Welcome to Manel Soler Portfolio</h1>
        <div className=" items-center grid grid-rows-{3} gap-4 ">
          <Box title='About' content='About me' />
          <Box title='Contact' content='Contact me' />
          <Box title='Portfolio' content='My Portfolio' />
          <Box title='Blog' content='My Blog' />
      
        </div>
        </div>

  </div>
  )
}
