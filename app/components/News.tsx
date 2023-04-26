"use client"
import React from 'react'
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Box, Badge, SimpleGrid, Container, Image, Center } from '@chakra-ui/react';
import Link from 'next/link';
// import useSWR from 'swr'
// const url = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=news`
// const fetcher = (url: string) => fetch(url).then(res => res.json())
const News = (props:any) => {
    // const { data, error, isLoading } = useSWR(url, fetcher)
    // console.log(process.env.NEXT_PUBLIC_CONTENTFUL_ID, process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN);
    // console.log(props?.news);
    
  return (
    <div>
        <Container maxWidth="1200px" mx="auto" my="auto" p={{ base: 5, md: 10 }}>
      <SimpleGrid columns={[1, 2, 3]} spacing="15px">
            
      
        {props?.news?.items?.map((n: any, i: number) => (
            <span key={i}>
                
                <Box position="relative" key={i}>
              
              <Link href={`/news/${n?.sys?.id}`}>
                <Box
                  borderWidth="1px"
                  shadow="md"
                  rounded="lg"
                  overflow="hidden"
                  position="relative"
                >
                 <Center>
                    <Image src={n?.fields?.image} alt={n?.fields?.title} objectFit={'fill'}/>
                    </Center> 
                  <Box p={{ base: 4, lg: 6 }}>
                    <Box d="flex" alignItems="baseline">
                      <Box
                        fontWeight="semibold"
                        as="h2"
                        letterSpacing="wide"
                        textTransform="uppercase"
                        ml="2"
                      >
                        {n?.fields?.title}
                      </Box>
                    </Box>
                    <Box>
                      <Box color="gray.600" fontSize="sm">
                        <Badge rounded="full" px="2" colorScheme="teal">
                          Mukarram Ali
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
              </Link>
            </Box>
            </span>
        ))}
       </SimpleGrid>

   
    </Container> </div>
  )
}

export default News