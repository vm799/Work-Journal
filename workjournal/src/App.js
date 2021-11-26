
import React from "react"
import Card from "./Card"
import Img from "./Img"
import Navbar from "./Navbar"
import data from "./data"
export default function App(){

    const cards = data.map(card=>{
        return (
        <div>
            <Card 
            key={card.id}
                {...card}
            />
        </div>)
    })
    return (
        <div>
        <Navbar />
       {cards}
        </div>
    )
}


