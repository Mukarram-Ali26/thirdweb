import { useState, useEffect } from "react";

const useFetchNews = () => {
    const url = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=news`
  const [data, setData] = useState(null);
async function getNews() {
    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=news`, { cache: 'no-store' });
    
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
  }
  useEffect(() => {
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setData(data));
    const res = getNews()
    setData(res)
  }, [url]);

  return [data];
};

export default useFetchNews;