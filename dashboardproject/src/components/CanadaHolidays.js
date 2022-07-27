import React, { useEffect, useState }   from "react";

import '../../src/helper/news.css'


export default function  CanadaHolidays()
{
    //use of hooks to store the data get from api...
    const [data,setData] =useState({});
    
    const options = {
        method: 'GET',
        
    };
    // use of hooks to fetch data from api .... first time user entered the component
    useEffect(()=>{
        const getdata = async () =>{
            fetch(`https://date.nager.at/api/v3/publicholidays/2022/CA`)
    .then(response => response.json())
    .then(response => {
        // console.log(response)
        setData(response);
    console.log(data)
        
    }
    )
    .catch(err => console.error(err));
    }
    getdata();
    

    },[])

    

    return(
        <>
        <div className="flex-down">
            <h1> Official Holidays of Canada</h1>
            <div className="flex-right wrap">

        
            {data[0] && data.map((event1)=>{
                return(
                    <div className="small-packet">
                <p>{event1.date}</p>
                <p>{event1.name}</p>
                </div>)
            })}
            
            </div>
            </div>


        </>
    )
}