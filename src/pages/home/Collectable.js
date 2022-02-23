import { ReactComponent as GreenSplashArt } from '../../assets/icons/GreenSplashArt.svg'
const Collectable = () => {
  return (
    <section className='bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center relative '>
        <div className='bg-[#c4c4c4] py-40 px-20 text-xl font-semibold text-black -tracking-[.04em]  absolute top-[-6.75rem] '>
          <span>Put your own NFT here</span>
        </div>
        <span className='text-[#253216] text-6xl font-bold italic mt-96 mb-14 -tracking-[.04em] uppercase'>
          UNIQUE DIGITAL COLLECTABLES
        </span>
      </div>
      <div className= "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <GreenSplashArt className='absolute left-0 top-[-3.25rem]'/>
      </div>
      <div className='flex justify-center text-center items-center'>
        <div className='text-[#253216]  w-[500px] text-center text-xl font-medium -tracking-[.04em] leading-[22px]'>
          <span>
            Usually, crypto collectibles are represented as real-life objects
            such as pets or avatars. Some crypto collectibles are computer
            generated works of art. Each token has variations in specific
            attributes and there are limits to the number of tokens that can be
            generated.
          </span>
        </div>
      </div>
    </section>
  )
}
export default Collectable
