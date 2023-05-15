
import { albums } from '../../data/albums.json';
// import Card from "react-bootstrap/Card";
import Cards from "./CardItem";

function CardList() {
  return(
    <>
    <div className="card-container"  >
    {albums.map((albums, index) => {
            return(
        <Cards key={index} albums={albums}/>
      )
    })}
    </div>
    </>
  )

}

export default CardList