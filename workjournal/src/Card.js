import React from "react";
import Img from "./Img"
import data from "./data"

export default function Card(props){
   return (
       <div className="travel-entry">
    <div className="card-image">
    <Img />
 </div>
 <div className="card-text">
 <h3 className="location-country"> {props.location} </h3>
 <h4 className="map-link" src={props.googleMapsUrl}>View on Google Maps</h4>
 <h1 className="location"> {props.title}</h1>
 <h2 className="date">{props.startDate}-{props.endDate}</h2>
 <p>{props.description}</p>
 </div>
 </div>
  )
}