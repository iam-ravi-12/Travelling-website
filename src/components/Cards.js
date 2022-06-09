import React from "react"

export default function Cards(props){

    return(
        <section className="cards-section">
            <div className="cards-img">
                <img src={props.imageUrl} />
            </div>
            <div className="cards--details">
                <div className="cards--location">
                    <img src="./images/placeholder.png" />
                    <h5>{props.location}</h5>
                    <a href = {props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div>
                <h2 className="cards--details-card">{props.title}</h2>
                <h4 className="cards--details-card">{props.startDate}  -  {props.endDate}</h4>
                <p className="cards--details-card">{props.description}</p>
                </div>
                
            </div>
            
        </section>
    )
}