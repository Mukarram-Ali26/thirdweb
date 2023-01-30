"use client"

import React, { useEffect, useState } from 'react'
import {
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { TokenABI, TokenAddress } from '../../constants/token';
import { Web3Button, useAddress} from '@thirdweb-dev/react';
import { formatEther, parseUnits } from 'ethers/lib/utils';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { BigNumber } from 'ethers';

const Token = () => {
  const [tokenBalance, setTokenBalance] = useState<string>()
  const [ethAmount, setEthAmount] = useState<string>('0.01')
  // const sdk = useSDK()
  const sdk = new ThirdwebSDK('goerli')
  const address = useAddress()

  const contract = sdk?.getContractFromAbi(
    TokenAddress,
    // Pass in the "abi" field from the JSON file
    TokenABI
  );
  contract


  // console.log( contract);
  // const Buy = async (e: any) => {
  //   e.preventDefault();



  // };
  useEffect(() => {
    async function read() {

      if (address) {
        let balance = (await contract).erc20.balanceOf(address)
        setTokenBalance((await balance).displayValue)
      }
     (await contract).events.addEventListener("Transfer", (event) => {
        console.log(event.data.from, event.data.to, formatEther(event.data.value as BigNumber), event.data.value);
        // alert(event.data.from, event.data.to, formatEther(event.data.value as BigNumber), event.data.value)
        return event.data
      })
      
    }
    read();

  }, [contract, tokenBalance])



  return (
    <Flex
      // minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Please enter ETH Amount  <br />
            <Text
              as='a'
              href={`https://goerli.etherscan.io/address/${TokenAddress}#code`}
              target="_blank" rel="noopener noreferrer"
              fontSize={{ base: 'sm', sm: 'md' }}
              color={useColorModeValue('gray.800', 'gray.400')}>
              Check the smart contract on EtherScan
            </Text>
        </Heading>
        
        <Text
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}>
          Token Price is 0.01 ETH <b/> Your Token Balance is {tokenBalance ? tokenBalance : "please connect your wallet"}
        </Text>
        <FormControl id="email">
          <Input
            placeholder="0.1"
            id='amount'
            name='amount'
            _placeholder={{ color: 'gray.500' }}
            type="number"
            onChange={(e) => setEthAmount(e.target.value)}
          />
        </FormControl>
        <Stack spacing={6}>

            <Web3Button
          contractAddress={TokenAddress}
          contractAbi={TokenABI}
          action={(contract) => contract.call("buyToken", { value: parseUnits(ethAmount) }).then(() => contract.events.addTransactionListener( (event) => {
            console.log(event.data.from, event.data.to, formatEther(event.data.value as BigNumber), event.data.value);
            // alert(event.data.from, formatEther(event.data.value as BigNumber), event.data.value, event.data.to)
            return event.data
          })          )}
          onError={(error) => console.log("Error", error.message)}
          onSuccess={(result) => console.log("Success", result)}
        >
          BUY MTKN
        </Web3Button>
        </Stack>
      </Stack>
    </Flex>

  )
}

export default Token