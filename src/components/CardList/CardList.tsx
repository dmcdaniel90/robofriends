import Card from "../Card/Card";
import { Robot } from "../../types/common";

type CardListProps = {
  robots: Array<Robot>
}

const CardList = ({ robots }: CardListProps) => {
  return (
    <div data-testid="card-list">
      {
        robots.map((user: Robot, i: number) => {
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