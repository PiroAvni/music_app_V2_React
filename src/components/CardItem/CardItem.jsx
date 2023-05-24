import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./carditem.css";
import { useState } from "react";

// import "./card.css";

function Cards(albums, index,  videoUrl, ) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [isHovered, SetIsHovered] = useState(false);

  const HandleMouseEnter = () => {
    SetIsHovered(true);
  };

  const HandleMouseLeave = () => {
    SetIsHovered(false);
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  console.log(albums);

  return (
    <>
      <Card
      key={index}
        className={`card ${isHovered ? "hovered" : ""}`}
        style={{
          width: "30rem",
        }}
        
        onMouseEnter={HandleMouseEnter}
        onMouseLeave={HandleMouseLeave}
      >
       {isHovered ? (
        <video className="video" autoPlay loop muted>
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : (
        <Card.Img className="image" src={albums.albums.cover} alt="Album Cover" />
      )}
        {/* <Card.Img
          className="card-img-top"
          variant="top"
          src={albums.albums.cover}
          alt="Album Cover"
        /> */}
        <Card.Body className="card-body">
          <Card.Title className="card-title">
            {" "}
            Album: {albums.albums.name}{" "}
          </Card.Title>
          <Card.Text className="card-text">
            Release Date: {albums.albums.date}{" "}
          </Card.Text>
          <Button className="btn-like" onClick={handleLike}>
            Like ({likes})
          </Button>
          <Button className="btn-dislike" onClick={handleDislike}>
            Dislike ({dislikes})
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
export default Cards;
