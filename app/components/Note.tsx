"use client"

import React from "react";
import { Box, Flex,  chakra } from "@chakra-ui/react";
const Note = () => {

    return (

        <Flex
            // maxW="md"
            mx="auto"
            bg="white"
            _dark={{
                bg: "gray.800",
            }}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
        >
            {/* <Box
      w={1 / 3}
      bgSize="cover"
      style={{
        backgroundImage:
          "url('https://images.ctfassets.net/bpbqpx524mlk/1YwimNfxaQdRFHKIphRVPQ/72eaf6b3c88027244863ef12375fc36d/WhatsApp_Image_2022-12-16_at_11.23.27_PM.jpeg?h=250')",
      }}
    ></Box> */}

            <Box
                w={2 / 3}
                p={{
                    base: 4,
                    md: 4,
                }}
            >
                <chakra.h1
                    fontSize="2xl"
                    fontWeight="bold"
                    color="gray.800"
                    _dark={{
                        color: "white",
                    }}
                >
                    NOTE
                </chakra.h1>
                <chakra.p
                    mt={2}
                    fontSize="sm"
                    color="gray.600"
                    _dark={{
                        color: "gray.400",
                    }}
                >
                    This Dapp is on Goerli network to check these demos, Please get some Faucet Ether from <br />
                    <Box as="span" color="blue">
                        <a
                            href={`https://goerlifaucet.com/`}
                            text-decoration="underline"

                            target="_blank"
                            rel="noopener noreferrer">HERE</a>, 
                        <a
                            href={`https://faucet.softbinator.com/`}
                            target="_blank"
                            rel="noopener noreferrer">  HERE</a>, or 
                        <a
                            href={`https://faucet.paradigm.xyz/`}
                            target="_blank"
                            rel="noopener noreferrer">  HERE</a>
                            </Box>

                            {/* Here is the pool of this token on UNISWAP */}
                </chakra.p>

            </Box>
        </Flex>
    )
}

export default Note