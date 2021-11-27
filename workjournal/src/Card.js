import React from "react";
import Img from "./Img"
import data from "./data"

export default function Card(props){

    let badgeText
    if (props.visits === 0){
    badgeText = "ON WISH LIST"
} else {
    badgeText = "DONE!"
    
    
}

   return (
       <div className="travel-entry">
           
    <div className="card-image">
    <div className="img--badge-to-do"> {badgeText} </div>
  
    <Img />
    
 </div>
 <div className="card-text-main">
 <div className="card-text-heading">
 <h3 className="location-country"> {props.location} </h3>
 <h4 className="map-link" src={props.googleMapsUrl}>View on Google Maps</h4>
 </div>

 <div className="card-text-body">
 <h1 className="location"> {props.title}</h1>
 <h2 className="date">{props.startDate}-{props.endDate}</h2>
 <p>{props.description}</p>
 </div>
 </div>
 </div>
 
  )
}