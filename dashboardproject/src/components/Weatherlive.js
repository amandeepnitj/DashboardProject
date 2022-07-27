import React, { useEffect, useState }   from "react";

import '../../src/helper/weatherlive.css'


export default function  Weatherlive()
{
    const [data,setData] =useState({});
    const [location,setLocation] = useState('');
    // const location = "london"
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd2a5a6c62fmsh8b88dda37dec6d7p1a0c89jsn0a4f0291c821',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    

    const searchlocation = (event)=>{
        if(event.key==='Enter')
        {
            const getdata = async () =>{
                fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`, options)
        .then(response => response.json())
        .then(response => {
            // console.log(response)
            setData(response);
        console.log(data)
            
        }
        )
        .catch(err => console.error(err));
        }
        getdata()
        setLocation('')

        }
    }


    return(
        <>
        <div className="app_1">
            <div className="search">
                <input value={location} placeholder="Enter Location" type="text" onChange={(event)=>{setLocation(event.target.value)}} onKeyPress={searchlocation}></input>
            </div>
        {data.current && <div className="container">
            <div className="top">
                <div className="location">
                    <p className="p">{data.location? data.location.name: null}</p>
                </div>
                <div className="temp">
                    <h1 className="h1">{data.current? data.current.temp_c:null} C</h1>
                </div>

            </div>
            <div className="bottom">
                <div className="feels">
                    <p className="p">{data.current? data.current.feelslike_c:null} C</p>
                    <p className="p">feels like</p>
                </div>
                <div className="humidity">
                    <p className="p">{data.current? data.current.humidity:null}</p>
                    <p className="p">Humidity</p>
                </div>
                <div className="wind">
                    <p className="p">{data.current? data.current.wind_kph:null} km/h</p>
                    <p className="p">Wind Speed</p>

                </div>
            </div>
            </div>
}

            </div>


        </>
    )
}