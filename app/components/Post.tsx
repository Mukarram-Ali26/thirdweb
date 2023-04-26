"use client"
import React from 'react'
import { Box, Center, Flex, Image,  Text, chakra } from "@chakra-ui/react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export async function generateMetadata(props : any) {
    
    return { title: props?.news?.fields?.title,
        description: documentToReactComponents(props?.news?.fields?.description),
         openGraph: {
        images: [props?.news?.fields?.image],
      }, }
  }
const Post = (props: any) => {

    console.log(props.id, props.news);
    // console.log(data);
    return (
        <div>
            <Flex
                bg="#edf3f8"
                _dark={{ bg: "#3e3e3e" }}
                p={10}
                w="full"
                alignItems="center"
                justifyContent="center"
            >
                <Box
                    mx="auto"
                    rounded="lg"
                    shadow="md"
                    bg="white"
                    _dark={{ bg: "gray.800" }}
                    maxW="2xl"
                ><Text
                    display="block"
                    fontWeight="bold"
                    fontSize="4xl"
                    m={2}
                    align={'center'}
                >
                        {props?.news?.fields?.title}
                    </Text>
                    <Image
                        roundedTop="lg"
                        w="full"
                        h={64}
                        fit="contain"
                        src={props?.news?.fields?.image}
                        alt={props?.news?.fields?.title}
                    />

                    <Box p={6}>
                        <Box>

                            <Center>

                                <chakra.p
                                    mt={2}
                                    fontSize="2xl"

                                >
                                    {documentToReactComponents(props?.news?.fields?.description)}
                                </chakra.p>
                            </Center>
                        </Box>

                        <Box mt={4}>
                            <Center>

                                <Text
                                    mx={2}
                                    fontWeight="bold"
                                >
                                    BY:  Mukarram Ali
                                </Text>
                            </Center>
                            <chakra.span
                                mx={1}
                                fontSize="sm"
                                color="gray.600"
                                _dark={{ color: "gray.300" }}
                            >
                                {Date.apply(props?.news?.sys?.createdAt)}
                            </chakra.span>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </div>
    )
}

export default Post