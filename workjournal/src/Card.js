import React from "react";
import Img from "./Img"

export default function Card(){
   return (
       <div className="travel-entry">
    <div className="card-image">
    <Img />
 </div>
 <div className="card-text">
 <h3 className="location-country"> JAPAN </h3>
 <h4 className="map-link"> View on Google Maps</h4>
 <h1 className="location"> Mount Fuji</h1>
 <h2 className="date">12 Jan 2021</h2>
 <p>Mount fuji is the most amazing tall mountain in the world</p>
 </div>
 </div>
  )
}