import Post from '@/app/components/Post';
import React from 'react'

const page = async ({ params }: { params: { id: string } }) => {
    async function getNews() {
        const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_ID}/entries/${params?.id}?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`, { cache: 'no-store' });

        // Recommendation: handle errors
        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data');
        }

        return res.json();
    }
    const news = await getNews();
    // console.log(news);
    // console.log(params?.id);

    return (
        <div>
            <Post id={params?.id} news={news} />
        </div>
    )
}

export default page