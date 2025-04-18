import React, { useEffect, useState } from "react";

export default function News(){
const [news,setNews] = useState(null);
//useEffect(()=>{
//    fetch('https://api.worldnewsapi.com/front-pages?source-country=au&date=2025-04-18&api-key=a3df60ae71eb479db67c47ad24b5c8d0')
 //   .then((data) => data.json())
 //   .then((data) => setNews(data))
 //   .catch((error) => console.log(error))
// },[]);
return (
    <div className="text-lg bg-purple-600 text-white p-3 ">News</div>
)
}