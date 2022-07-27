import React, { useEffect, useState }   from "react";

import '../../src/helper/news.css'


export default function  News()
{
    //use of hooks to store the input string and data get from the api....
    const [data,setData] =useState([]);
    const [country,setCountry] = useState('');
    
//https://newsapi.org/v2/top-headlines?q=trump&apiKey=0ac95a24119645c29d0ec5478e888e7c
    const searchlocation = (event)=>{
        
        if(event.key==='Enter')
        {
            // event triggered when user pressed enter key
            setData([])
            const getdata = async () =>{
                fetch(`https://newsapi.org/v2/top-headlines?q=${country}&apiKey=0ac95a24119645c29d0ec5478e888e7c`)
        .then(response => response.json())
        .then(response => {
            // console.log(response)
            setData(response.articles);
        console.log(data)
            
        }
        )
        .catch(err => console.error(err));
        }
        getdata();
        

        }
    }

    


    return(
        <>
        <div className="flex-down">
            {/* use of hooks */}
            <h1>Top Rated News {country}</h1>
            <div className="search_news">
                <input value={country} placeholder="Enter any topic for news" type="text" onChange={(event)=>{setCountry(event.target.value)}} onKeyPress={searchlocation}></input>
            </div>
            <div className="flex-right wrap">

        {/* use of map function to render the data from array of objects */}
            {data && data.map((newss)=>{
                return(
                    <div className="small-packet">
                <p className="fontsizel padding5">{newss.title}</p>
                <p className="fontsizem padding5">{newss.description}</p>
                </div>)
            })}
            
            </div>
            </div>


        </>
    )
}