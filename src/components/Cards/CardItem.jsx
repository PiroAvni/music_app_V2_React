import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import { useState } from "react";

// import "./card.css";

function Cards(albums, index) {
  const [favourite, setFavourite] = useState(false);

  const handleFavorite = (e) => {
    if (favourite === false) {
      setFavourite(prevState => prevState = true);
      e.target.innerText = "Dislike";
    } else {
      setFavourite(prevState => 
        prevState = false
        );
      e.target.innerText = "Favourite";
    }
  };
  console.log(albums);

  return (
    <>
        <Card  className="card"
          style={{
            width: "30rem",
          }}
          key={index}
        >
          <Card.Img className="card-img-top"   variant="top" src={albums.albums.cover} alt="Album Cover"/>
          <Card.Body className="card-body">
            <Card.Title className="card-title"> Album: {albums.albums.name} </Card.Title>
            <Card.Text className="card-text">Release Date: {albums.albums.date} </Card.Text>
            <Button onClick={handleFavorite} variant="primary">
              Favourite
            </Button>
          </Card.Body>
        </Card>


</>
  );
}
export default Cards;