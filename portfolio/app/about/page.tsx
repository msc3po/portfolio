import Box from '../components/box'
import '../About.css' // import CSS file

export default function About() {
  const text = [
    'I am a software engineer who understands much more than code.',
    'As a full-stack developer and successful entrepreneur with a strong background in accounting and cost control, I build software solutions with a deep understanding of what matters most to business: the bottom-line.',
    'I earned my unique perspective at a tech startup.This business was acquired by a global conglomerate, where I handled our financial management and reporting.',
    'Most recently, I sold a company I founded. As the business owner, I led teams and was involved in all areas of the business, including marketing, sales, and operations.',
    'While I enjoyed the challenges of running a business, my heart is in creating technology that takes companies and their clients to the future.',
    'I have very strong people skills including empathy, collaboration, and the ability to build strong relationships with my colleagues and clients that result in fruitful collaboration.',
    'I’m also a proud father of three lovely girls. Outside of work, I love cooking and keeping my parenting skills up-to-date.',
  ]

  // Create a flat array of sentences
  const sentences = text.flatMap((paragraph) =>
    paragraph.split('.').filter((sentence) => sentence.trim() !== ''),
  )

  const urlImage = 'https://picsum.photos/200/300'

  return (
    <div>
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 min-h-screen flex items-center justify-center">
        <div className="h-max-full text-center w-3/4 mx-auto">
          <h1 className="p-10 py-4 text-6xl">About me</h1>
          <h2 className="text-lg"> Smart sentence here</h2>{' '}
          <div className="grid grid-cols-7 gap-4 items-center">
            <div className="col-span-2">
              <Box title={``} content={''} image={urlImage} shape="circle" />
            </div>
            <div className="col-span-5 text-sm">
              <Box
                title={``}
                content={sentences.map((sentence, index) => (
                  <p key={index} className="my-sentence">
                    {sentence}.
                  </p>
                ))}
                image={''}
                shape="rectangle"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
