import React from "react";

export default function Card(props) {
    return(
        <div className="card">
            <div className="card__img">
                <img src={props.cardImg} alt="card image" />
            </div>
            <div className="card__info">
                <div className="card__info-location">
                    <div className="card__info-location-name">
                        <img src="/assets/location-icon.svg" alt="location icon" />
                        <h4>{props.location}</h4>
                    </div>
                    <div className="card_info-location-link">
                        <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">View on Google Maps</a>
                    </div>
                </div>
                <h2>{props.title}</h2>
                <span>{props.startDate} - {props.endDate}</span>
                <p>{props.description}</p>
            </div>
            <hr />
        </div>
    )
}