import Nav from './Nav'

const Land = () => {
  return (
    <section className=' section-land'>
      <Nav />
      <div
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
    flex-col items-center justify-start text-white pt-20 pb-60 text-center md:text-left px-3'
      >
        <h2 className='leading-[95px] md:leading-[80px] text-[75px] md:text-[100px] italic font-extrabold -tracking-[.04em]'>
          Random
        </h2>
        <h2 className='leading-[95px] md:leading-[80px]  text-[75px] md:text-[100px] italic font-extrabold -tracking-[.04em]'>
          NFT
        </h2>
        <h2 className='leading-[95px] md:leading-[80px]  text-[75px] md:text-[100px] italic font-extrabold -tracking-[.04em]'>
          Name
        </h2>
        <h5 className='leading-[10px] py-14 font-semibold text-2xl md:text-lg'>
          This is a random message
        </h5>
        <button className='bg-[#577a30] border-[#577a30] border-2 rounded-lg text-2xl py-3 px-28 md:px-36 text-white font-extrabold italic hover:bg-black hover:text-[#577a30]'>
          Buy Now
        </button>
      </div>
    </section>
  )
}
export default Land
