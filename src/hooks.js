import React from "react";
import { Contract } from "@ethersproject/contracts";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import {
  tokenAddress,
  stakingAddress,
  presaleAddress,
} from "./utils/environment";
import stakingAbi from "./utils/stakingAbi.json";
import tokenAbi from "./utils/tokenAbi.json";
import presaleAbi from "./utils/presaleAbi.json";

const web3 = new Web3(
  Web3.givenProvider || "https://bsc-dataseed.binance.org/"
);
function useContract(address, ABI) {
  const { active, error, library } = useWeb3React();
  return React.useMemo(() => {
    if (active && !error && library) {
      const signer = library.getSigner();
      return new Contract(address, ABI, signer);
    } else {
      return "";
    }
  }, [address, ABI, active, error, library]);
}

export function useStakingContract() {
  return useContract(stakingAddress, stakingAbi);
}
export function useTokenContract() {
  return useContract(tokenAddress, tokenAbi);
}
export function usePresaleContract() {
  return useContract(presaleAddress, presaleAbi);
}

export function usePresaleContract1() {
  const tokenContract = new web3.eth.Contract(presaleAbi, presaleAddress);
  return tokenContract;
}
export function useTokenContract1() {
  const tokenContract = new web3.eth.Contract(tokenAbi, tokenAddress);
  return tokenContract;
}
export function useStakingContract1() {
  try {
    const StakingContract = new web3.eth.Contract(stakingAbi, stakingAddress);
    return StakingContract;
  } catch (error) {}
}
