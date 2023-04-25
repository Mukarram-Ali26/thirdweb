"use client"
import React from 'react'


const Post = (props: any) => {
    console.log(props.id);
    console.log(process.env.NEXT_PUBLIC_CONTENTFUL_ID, process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN);
  return (
    <div>Post</div>
  )
}

export default Post