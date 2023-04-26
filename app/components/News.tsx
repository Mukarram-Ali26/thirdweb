"use client"
import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { chakra, Box, Badge, SimpleGrid, Container, Image, Center, Text, Spacer, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import useSWR from 'swr'
// const url = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=news`
// const fetcher = (url: string) => fetch(url).then(res => res.json())
const News = (props: any) => {
    const router = useRouter();
    // const { data, error, isLoading } = useSWR(url, fetcher)
    // console.log(process.env.NEXT_PUBLIC_CONTENTFUL_ID, process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN);
    // console.log(props?.news);

    return (
        <div>
            <Container maxWidth="1200px" mx="auto" my="auto" p={{ base: 5, md: 10 }}>
                <SimpleGrid columns={[1, 2, 3]} spacing="15px">


                    {props?.news?.items?.map((n: any, i: number) => (

                        <Box position="relative" key={i}>

                            {/* <a  onClick={() => router.push(`/news/${n?.sys?.id}`)} > */}
                             {/* href={`/news/${n?.sys?.id}`} */}
                            
                                <Box
                                    borderWidth="1px"
                                    shadow="md"
                                    rounded="lg"
                                    overflow="hidden"
                                    position="relative"
                                >
                                    <Center>
                                        <Image src={n?.fields?.image} alt={n?.fields?.title} objectFit={'fill'} />
                                    </Center>
                                    <Box p={{ base: 4, lg: 6 }}>
                                            <Center> 
                                            <Text
                                                fontWeight="bold"
                                                fontSize="2xl"
                                                letterSpacing="wide"
                                                textTransform="uppercase"
                                                // ml="2"
                                            >
                                                {n?.fields?.title}
                                            </Text>
                                              </Center> 
                                            <Center>

                                                <chakra.p
                                                    mt={2}
                                                    fontSize="xl"

                                                >
                                                     <button type="button" onClick={() => router.push(`/news/${n?.sys?.id}`)}>
      Read More...
    </button>
                                                    {/* {documentToReactComponents(n?.fields?.description)} */}
                                                </chakra.p>
                                            </Center>
                                        <Box>
                                            <Spacer/>
                                            <Box color="gray.600" fontSize="sm">
                                                <Badge rounded="full" px="2" colorScheme="teal">
                                                    BY: Mukarram Ali
                                                </Badge>
                                            </Box>
                                        </Box>
                                        {/* <Text
                      mt="1"
                      fontWeight="semibold"
                      noOfLines={3}
                      lineHeight="tight"
                      color="gray.600"
                      fontSize="sm"
                    >
                      content
                    </Text> */}
                                    </Box>
                                </Box>
                        {/* </a> */}
                            </Box >
                    ))}
                </SimpleGrid>


            </Container> </div>
    )
}

export default News