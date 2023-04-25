"use client"
import React from 'react'

import useSWR from 'swr'
const Post = (props: any) => {
    const url = `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_ID}/entries/${props.id}?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
    const fetcher = (url: string) => fetch(url).then(res => res.json())
     const { data, error, isLoading } = useSWR(url, fetcher)
    console.log(props.id);
    console.log(data);
  return (
    <div>Post</div>
  )
}

export default Post