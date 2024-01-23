import React from "react";
import Card from "../Card/Card";

const CardList = ({ robots }) => {
  return (
    <div data-testid="card-list">
      {
        robots.map((user, i) => {
          return (
            <Card
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              key={i}
            />
           
          );
        })
      }
    </div>
  )
}

export default CardList;