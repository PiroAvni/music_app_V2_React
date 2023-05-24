
import './style.css';

const VideoContainer = ( ) => {
  return (

    <>
    <div className="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ILbLiRHm4tw " 
    title="YouTube video player" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
   >

     </iframe>
    
      <div className="video-background">
        <video autoPlay loop muted>
          <source src='https://www.youtube.com/embed/ILbLiRHm4tw 'type="video/mp4" />
        </video>
      </div>
    </div>
    </>
  );
};

export default VideoContainer;