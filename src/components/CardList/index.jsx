import './cardlist.css'
import { albums } from '../../data/albums.json';
// import Card from "react-bootstrap/Card";
import Cards from "../CardItem/CardItem";

function CardList() {
  return(
    <>
    <div className="card-container"  >
    {albums.map((albums, index) => {
            return(
        <Cards key={index} albums={albums}  videoUrl="https://25.media.tumblr.com/tumblr_lmyndvNKYt1qhjikro1_500.gif"  />
      )
    })}
    </div>
    </>
  )

}

export default CardList