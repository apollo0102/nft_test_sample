import { ReactComponent as GreenSplashArt } from '../../assets/icons/GreenSplashArt.svg'
const Collectable = () => {
  return (
    <section className='bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center relative '>
        <div className='bg-[#c4c4c4] py-28 md:py-40 px-8 md:px-20 text-xl rounded font-semibold text-black -tracking-[.04em]  absolute top-[-6.75rem] '>
          <span>Put your own NFT here</span>
        </div>
        <span className='text-[#253216] text-center text-4xl md:text-6xl font-bold italic mt-52 md:mt-96 mb-6 md:mb-14 -tracking-[.04em] uppercase'>
          UNIQUE DIGITAL COLLECTABLES
        </span>
      </div>
      <div className= "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <GreenSplashArt className='absolute left-0 top-[10.25rem] scale-75 lg:top-[-6.5rem] xl:scale-100 xl:top-[-3.25rem] '/>
      </div>
      <div className='flex justify-center text-center items-center px-4'>
        <div className='text-[#253216]  w-[500px] text-center text-[22px] md:text-xl font-medium -tracking-[.04em] leading-[22px]'>
          <span className=''>
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
