import React, { useState } from "react";
import placeholder from '../../images/placeholder.jpg';

const Card = ({ name, email, id }) => {

  const robotImageUrl = `https://robohash.org/${id}?size=200x200`;
  const [hasImageLoaded, setImageLoaded] = useState(false);

  return ( 
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={hasImageLoaded ? robotImageUrl : placeholder} alt="robots" onLoad={() => setImageLoaded(true)} rel="preload" fetchpriority="high" width={"200px"} height={"200px"} data-testid="card"/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}
export default Card;