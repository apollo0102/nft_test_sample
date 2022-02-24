import { useEffect } from 'react'
import Nav from './Nav'
import { useEthers } from '@usedapp/core';
import { useMint } from '../../hooks/NFTContract';
import { pinJSONToIPFS } from '../../utils/pinata'

const Land = () => {
  const {account} = useEthers();
  const {state: mintState, send: mintNFT} = useMint();

  useEffect(() => {
    mintState.status === 'Exception' && console.log('error');
    mintState.status === 'Success' && console.log('Success');
  }, [mintState])

  const tokenURI = async ()=>{
    //make metadata
    const metadata = {};
    metadata.name = "name__";
    metadata.image = "https://ipfs.io/ipfs/Qmdhq43NUrCqgs9hHa8MuKToCKPetXk5N9dqjHvdGyUuw4";
    metadata.description = "this is my sample image";

    //pinata pin request
    const pinataResponse = await pinJSONToIPFS(metadata);
    if (!pinataResponse.success) {
      
        return {
            success: false,
            status: "😢 Something went wrong while uploading your tokenURI.",
        }
    } 
    return pinataResponse.pinataUrl;  
  }
  

  const handleMint = () => {
    console.log("tokenURI------>"+  tokenURI);
    account && mintNFT(account, "https://ipfs.io/ipfs/Qmdhq43NUrCqgs9hHa8MuKToCKPetXk5N9dqjHvdGyUuw4");
  }
  return (
    <section className=' section-land'>
      <Nav />
      <div
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
    flex-col items-center  text-white pt-20 pb-60  md:px-3 md:text-left'
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
        <h5 className='leading-[10px] md:leading-[20px] py-14 font-semibold text-2xl md:text-lg'>
          This is a random message
        </h5>
        <button className='bg-[#577a30] border-[#577a30] border-2 rounded-lg text-2xl py-3 px-28 md:px-36 
        text-white font-extrabold italic hover:bg-black hover:text-[#577a30] ' onClick={handleMint}>
          Buy Now
        </button>
      </div>
    </section>
  )
}
export default Land
