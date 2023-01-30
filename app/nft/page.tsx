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
  Center,
  Box,
  Image,
  Spinner,
  useToast,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  FormLabel,
} from '@chakra-ui/react';
import { TokenABI, TokenAddress } from '../../constants/nft';
import { NFTContract,  Web3Button, useAddress, useNFT, useStorageUpload } from '@thirdweb-dev/react';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';

const Token = () => {
  const [tokenBalance, setTokenBalance] = useState<string>()
  const [file, setFile] = useState<string | HTMLInputElement>()
  const [name, setName] = useState<string>('')
  const [nftContract, setNFTContract] = useState<NFTContract>()
  const toast = useToast()
  const sdk = new ThirdwebSDK('goerli')
  const address = useAddress()

  const { mutateAsync: upload } = useStorageUpload();


  const { data: nfts, isLoading } = useNFT(nftContract, 0);

  useEffect(() => {
    async function read() {
      const contract = sdk?.getContractFromAbi(
        TokenAddress,
        TokenABI
      );
      setNFTContract(await contract)


      if (address && await contract) {
        let balance = (await contract).erc721.balanceOf(address)
        setTokenBalance((await balance).toString())
      }

    }
    read();
  }, [nftContract, address])


  return (
    <>

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
            Please Upload Your File <br />
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
            Your Nft Balance is:  {tokenBalance ? tokenBalance : "please connect your wallet"}
          </Text>

          <FormControl id="form" isRequired={true}>
          <FormLabel>Please Enter Your Name</FormLabel>
            <Input
              placeholder='Your Name'
              _placeholder={{ color: 'gray.500' }}
              type="name"
              onChange={(e) => setName(e.target.value)}
            />
            <FormLabel>Upload an Image</FormLabel>
            <Input
              _placeholder={{ color: 'gray.500' }}
              type="file"
              onChange={(e) => setFile(e.target!.files[0]!)}
            />
          </FormControl>
          <Stack spacing={6}>

            <Web3Button
              contractAddress={TokenAddress}
              contractAbi={TokenABI}
              action={async (contract) => {
                toast({
                  title: 'Image is being uploaded on IPFS',
                  description: "We can also upload Image ONCHAIN",
                  status: 'info',
                  duration: 2000,
                  isClosable: true,
                })
                  
                 const addedImage = await upload({ data: [file], options: { uploadWithGatewayUrl: true, uploadWithoutDirectory: false } });
                  const metaDataObj = {
                    name: name,
                    image: `${addedImage}`,
                  };
                  toast({
                    title: 'Metadata is being Uploaded on IPFS',
                    description: "We can also upload metadata ONCHAIN",
                    status: 'info',
                    duration: 2000,
                    isClosable: true,
                  })
                  const addedMetaData = await upload({ data: [metaDataObj], options: { uploadWithGatewayUrl: true, uploadWithoutDirectory: false } });
                
                toast({
                  title: 'Please Confirm the transaction in metamask to Mint NFT on smart Contract',
                  description: "If you reject transaction your NFT will not mint",
                  status: 'warning',
                  duration: 9000,
                  isClosable: true,
                })
                let txt = await contract.call("safeMint", address, addedMetaData[0]).then(() => contract.events.addTransactionListener((event) => {
                  // console.log(event.data.from, event.data.to, formatEther(event.data.value as BigNumber), event.data.value);
                  // alert(event.data.from, formatEther(event.data.value as BigNumber), event.data.value, event.data.to)
                 console.log(event.transactionHash);
                 
                  return (<Alert
                    status='success'
                    variant='subtle'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    textAlign='center'
                    height='200px'
                  >
                    <AlertIcon boxSize='40px' mr={0} />
                    <AlertTitle mt={4} mb={1} fontSize='lg'>
                      {event.name}
                    </AlertTitle>
                    <AlertDescription maxWidth='sm'>
                      A Token has been minted on address {event.data.from}
                      <br />
                      <a href={`https://goerli.etherscan.io/tx/${event.transactionHash}`}
                        target="_blank" rel="noopener noreferrer"> Check Your Transaction here</a>
                        <br />
                      <a href={`https://testnet.rarible.com/collection/${TokenAddress}/items`}
                        target="_blank" rel="noopener noreferrer">& Your Your Token here</a>
                    </AlertDescription>
                  </Alert>)
                }))
                // await txt.wait();
                toast({
                  title: 'Your Token has been minted',
                  description: "Please Check your NFT on Rarible Testnet",
                  status: 'success',
                  duration: 9000,
                  isClosable: true,
                })
                setFile('')
                setName('')
                // console.log(await txt.transactionHash);
              }


              }
              onError={() => toast({
                title: 'ERROR',
                description: "An error occurred / user rejected the transaction",
                status: 'error',
                duration: 3000,
                isClosable: true,
              })}

              onSuccess={() => toast({
                title: 'Your Token has been minted',
                description: "Transaction has been successfull",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })}
            >
              Mint Your NFT
            </Web3Button>
          </Stack>
        </Stack>

      </Flex>
      <div>
        <a
          href={`https://testnet.rarible.com/collection/${TokenAddress}/items`}
          target="_blank" rel="noopener noreferrer">
          {!isLoading && nfts ? (
            <Center py={12}>
              <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>
                <Box
                  rounded={'lg'}
                  mt={-12}
                  pos={'relative'}
                  height={'230px'}
                  _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${nfts.metadata.image})`,
                    filter: 'blur(15px)',
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: 'blur(20px)',
                    },
                  }}>
                  <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={nfts.metadata.image}
                  />
                </Box>
                <Stack pt={10} align={'center'}>

                  <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                    NFT Name: {nfts.metadata.name}
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'xl'}>
                      ID: {nfts.metadata.id}
                    </Text>
                    {/* <Text fontWeight={10} fontSize={'xl'}>
                    OWNED BY: {nfts.owner}
                  </Text> */}
                  </Stack>
                </Stack>
              </Box>
            </Center>

          ) : (
            <Center><Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl'
            /></Center>
          )}
        </a></div>
    </>
  )
}

export default Token