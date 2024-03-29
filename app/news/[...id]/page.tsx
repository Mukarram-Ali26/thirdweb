import Post from '@/app/components/Post';
import React, { Suspense } from 'react'
async function getNews(id:string) {
    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_ID}/entries/${id}?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`, { cache: 'no-store' });

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}
const page = async ({ params }: { params: { id: string } }) => {
   
    const news = await getNews(params.id);
    // console.log(news);
    // console.log(params?.id);

    return (
        <div>
            <Suspense fallback={<>Loading...</>}>
                {params.id && <Post id={params?.id} news={news} />}
            </Suspense>
        </div>
    )
}

export default page