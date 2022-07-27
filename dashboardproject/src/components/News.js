import React, { useEffect, useState }   from "react";

import '../../src/helper/news.css'


export default function  News()
{
    const [data,setData] =useState({});
    const [country,setCountry] = useState('');
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd2a5a6c62fmsh8b88dda37dec6d7p1a0c89jsn0a4f0291c821',
            'X-RapidAPI-Host': 'google-news1.p.rapidapi.com'
        }
    };

    const searchlocation = (event)=>{
        if(event.key==='Enter')
        {
            const getdata = async () =>{
                fetch(`https://google-news1.p.rapidapi.com/top-headlines?country=${country}&lang=en&limit=2`, options)
        .then(response => response.json())
        .then(response => {
            // console.log(response)
            setData(response);
        console.log(data.articles[0].title)
            
        }
        )
        .catch(err => console.error(err));
        }
        getdata();
        setCountry('')

        }
    }

    const data1={
        "articles":[
            {title: "I'm a news.....I'm a news.....I'm a news.....I'm a news.....I'm a news....."},
            {title:"I'm a news.....I'm a news.....I'm a news.....I'm a news.....I'm a news....."},
            {title:"I'm a news.....I'm a news.....I'm a news.....I'm a news.....I'm a news....."},
            {title:"I'm a news.....I'm a news.....I'm a news.....I'm a news.....I'm a news....."},
            {title:"I'm a news.....I'm a news.....I'm a news.....I'm a news.....I'm a news....."},
            {title:"I'm a news.....I'm a news.....I'm a news.....I'm a news.....I'm a news....."},
        ]
    }


    return(
        <>
        <div className="flex-down">
            <h1>Top Rated News</h1>
            <div className="search_news">
                <input value={country} placeholder="Enter Location for news" type="text" onChange={(event)=>{setCountry(event.target.value)}} onKeyPress={searchlocation}></input>
            </div>
            <div className="flex-right wrap">

        
            {data1 && data1.articles.map((newss)=>{
                return(
                    <div className="small-packet">
                <p>{newss.title}</p>
                </div>)
            })}
            
            </div>
            </div>


        </>
    )
}