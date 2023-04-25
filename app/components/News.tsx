"use client"
import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import Link from 'next/link';
// import useSWR from 'swr'
// const url = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=news`
// const fetcher = (url: string) => fetch(url).then(res => res.json())
const News = (props:any) => {
    // const { data, error, isLoading } = useSWR(url, fetcher)
    // console.log(process.env.CONTENTFUL_ID, process.env.CONTENTFUL_ACCESS_TOKEN);
    console.log(props?.news);
    
  return (
    <div>
        {props?.news?.items?.map((n: any, i: number) => (
            <span key={i}>
                {/* <img src={n?.fields?.image} alt=''/> */}
                {/* <image href={n?.fields?.image} /> */}
                {/* <Image src={n?.fields?.image} alt='' width={100} height={100}/> */}
                <p>{n?.fields?.image}</p>
                <p>{n?.fields?.title}</p>
                <p>{documentToReactComponents(n?.fields?.description)}</p>
                <Link href={`/news/${n?.sys?.id}`}>go to</Link>
            </span>
        ))}
    </div>
  )
}

export default News