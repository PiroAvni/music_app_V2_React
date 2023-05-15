import image from "../../public/images/mj.jpg"

function Banner() {
  return (
    <div className='banner'>
        <img className="banner-img"  src={image} alt="Michael Jackson"></img>    
        </div>
  )
}

export default Banner