
import React from 'react'
import News from '../components/News';
async function getNews() {
    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=news`, { cache: 'no-store' });

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}
const page = async () => {
    const news = await getNews();
    // console.log(news);

    return (
        <div>
            
        <News news={news}/>
        </div>
    )
}

export default page