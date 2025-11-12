import React, { useEffect, useState } from "react";
import BgWeather from "../assets/bg-weather.png";
import Cloudy from "../assets/Cloudy.png";
import Vector from "../assets/Vector.png";
import Vector1 from "../assets/Vector-1.png";
import Outline from "../assets/outline.png";
import Outline1 from "../assets/outline-1.png";
import Outline2 from "../assets/outline-2.png";

const Home = () => {
  
  const date = new Date().toLocaleDateString();

  const [loc,setLoc] = useState('Coimbatore')
  const [data,setData] = useState()

  const fetchData = async () => {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=7714ec20a32346a282d42328251011&q=${loc}&aqi=yes`)
      const apiData = await response.json()
      setData(apiData)
    } catch (error) {
      console.log('Error', error)
    }
  }

  useEffect(()=>{
    fetchData
  },[])
  

  return (
    <>
      <div
        className="page-container flex justify-start items-start gap-0"
        style={{
          backgroundImage: `url(${BgWeather})`,
          width: "100%",
          height: "100dvh",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-1/2 text-wite">
          <div className="left-all flex justify-start items-center gap-2 absolute bottom-8 left-10">
            <div>
              <h1 className="text-white text-7xl">{ data ? data.current.temp_f : 27} </h1>
            </div>
            <div className="text-white">
              <h2 className="text-6xl">{data ? data.location.name : 'Coimbatore'}</h2>
              <p>{data ? data.location.localtime : date}</p>
            </div>
            <div>
              <img src={Cloudy} alt="" />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="right-all h-dvh bg-black/80 py-20 px-10">
            <label htmlFor="search"></label>
            <input
              type="search"
              name="search"
              id=""
              placeholder="search location..."
              className="bg-white w-full border-none outline-0 py-2 px-3"
             onChange={(event)=>{
              setLoc(event.target.value)
             }}
              
            />
            {/* button onclick */}
            <button className="bg-red-400 py-2 px-10 mt-3 cursor-pointer" onClick={()=>{
              fetchData()
            }}>Check Weather</button>

           <div className="weather-details py-10">
              <h3 className="text-white">Weather details...</h3>
              <div className="get-details uppercase text-white text-2xl py-10">
                <h4>Condition is {data ? data.current.condition.text : 'Mist'}</h4>
              </div>
              <div>

                <div className="text-2xl text-white flex justify-between items-center gap-0 py-5">
                  <h5>wind_mph</h5>
                  <h6 className="flex justify-start items-center gap-5">
                    {data ? data.current.wind_mph : '17.7'} <img src={Vector} alt="" />
                  </h6>
                </div>
                <div className="text-2xl text-white flex justify-between items-center gap-0 py-5">
                  <h5>humidity</h5>
                  <h6 className="flex justify-start items-center gap-5">
                    {data ? data.current.humidity : '17.7'}<img src={Vector} alt="" />
                  </h6>
                </div>
                <div className="text-2xl text-white flex justify-between items-center gap-0 py-5">
                  <h5>cloud</h5>
                  <h6 className="flex justify-start items-center gap-5">
                    {data ? data.current.cloud : '17.7'} <img src={Vector} alt="" />
                  </h6>
                </div>
                <div className="text-2xl text-white flex justify-between items-center gap-0 py-5">
                  <h5>heatindex_f</h5>
                  <h6 className="flex justify-start items-center gap-5">
                    {data ? data.current.heatindex_f : '17.7'} <img src={Vector} alt="" />
                  </h6>
                </div>
                
              </div>
            </div>
     
            

           
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
