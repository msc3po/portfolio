import Box from '../components/box'

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

  const sentences = text.flatMap((paragraph) =>
    paragraph.split('.').filter((sentence) => sentence.trim() !== ''),
  )

  const urlImage = 'https://picsum.photos/200/300'

  return (
    <div className="bg-gradient-to-r from-slate-50 to-slate-100 min-h-screen flex items-center justify-center">
      <div className="h-max-full text-center w-3/4 mx-auto">
        <h1 className="p-10 py-4 text-6xl">About me</h1>
        <h2 className="text-lg"> In a few words</h2>{' '}
        <div className="flex justify-center mt-2 w-full">
          <Box
            title={''}
            content={'CV THUMBNAIL DOWNLOAD'}
            image={''}
            shape="rectangle"
            size="w-full md:w-2/3"
          />
        </div>
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-start-1 col-span-3">
            <Box title={``} content={''} image={urlImage} shape="circle" />
          </div>
          <div className="col-start-4 col-span-9">
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
  )
}
