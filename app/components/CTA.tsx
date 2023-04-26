import React from 'react'
import { chakra, Box, Stack, Flex, Link, Center } from "@chakra-ui/react";
import { FaWhatsapp } from 'react-icons/fa'
const CTA = () => {
    return (
        <div> <Flex
            bg="#edf3f8"
            _dark={{ bg: "#3e3e3e" }}
            p={50}
            w="full"
            alignItems="center"
            justifyContent="center"
        >
            <Flex justify="center" bg="white" _dark={{ bg: "gray.800" }} w="full">
                <Box
                    w={{ base: "full", md: "75%", lg: "50%" }}
                    px={4}
                    py={20}
                    textAlign={{ base: "left", md: "center" }}
                >
                    <chakra.span
                        fontSize={{ base: "3xl", sm: "4xl" }}
                        fontWeight="extrabold"
                        letterSpacing="tight"
                        lineHeight="shorter"
                        color="gray.900"
                        _dark={{ color: "gray.100" }}
                        mb={6}
                    >
                        <chakra.span display="block">LETS START YOUR</chakra.span>
                        <chakra.span
                            display="block"
                            color="blue.600"
                            _dark={{ color: "red.500" }}
                        >
                           Web, Crypto, NFT, Stacking, Launchpad, DEX, Dapp PROJECT

                        </chakra.span>
                    </chakra.span>
                    <Stack
                        justifyContent={{ base: "left", md: "center" }}
                        direction={{ base: "column", sm: "row" }}
                        spacing={2}
                        mt={2}
                    >
                        <Box display="" rounded="md" shadow="md">
                            <Center>

                           
                            <a href="https://api.whatsapp.com/send?phone=923059085079" target="_blank" rel="noopener noreferrer" aria-label='Lets Connect'>
                                <Link
                                    w="full"
                                    display="inline-flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    px={5}
                                    py={3}
                                    border="solid transparent"
                                    fontWeight="bold"
                                    rounded="md"
                                    _light={{
                                        color: "white",
                                    }}
                                    bg="green.500"

                                >
                                    <FaWhatsapp size='50px' />
                                    
                                </Link>
                            </a> </Center>
                        </Box>
                        {/* <Box ml={3} display="inline-flex" rounded="md" shadow="md">
            <Link
              w="full"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              rounded="md"
              color="brand.600"
              bg="white"
              _hover={{
                bg: "brand.50",
              }}
            >
              Learn more
            </Link>
          </Box> */}
                    </Stack>
                </Box>
            </Flex>
        </Flex></div>
    )
}

export default CTA