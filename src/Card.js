import React from "react";
import locationIcon from "./assets/location-icon.svg"
 
export default function Card(props) {
    return(
        <>
        <div className="card">
            <div className="card__img">
                <img src={props.cardImg} alt="card image" />
            </div>
            <div className="card__info">
                <div className="card__info-location">
                    <div className="card__info-location-name">
                        <img src={locationIcon} alt="location icon" />
                        <h4>{props.location}</h4>
                    </div>
                    <div className="card__info-location-link">
                        <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">View on Google Maps</a>
                    </div>
                </div>
                <h2>{props.title}</h2>
                <span className="dates">{props.startDate} - {props.endDate}</span>
                <p className="para">{props.description}</p>
            </div>
        </div>
        <hr />
        </>

    )
}