import { ethers } from 'ethers';
import { Contract } from '@ethersproject/contracts';
import {useContractFunction } from '@usedapp/core';
import NFTContractABI from '../abi/NFTContractABI.json';
import { NFTContractAddress } from '../contracts';

const NFTContraceInterface = new ethers.utils.Interface(NFTContractABI);
const NFTContract = new Contract(
  NFTContractAddress,
  NFTContraceInterface
);

export const useMint = () => {
  const { state, send, event } = useContractFunction(
    NFTContract,
    'mintNFT',
    {}
  );
  return { state, send, event };
};