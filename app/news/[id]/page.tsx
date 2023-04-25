import Post from '@/app/components/Post';
import React from 'react'

const page = ({ params }: {params: { id: string }}) => {
    console.log(params?.id);

    return (
        <div><Post id={params?.id}/></div>
    )
}

export default page