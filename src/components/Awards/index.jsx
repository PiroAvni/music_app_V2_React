import * as img from "../../../public/images/michael-jackson.webp";
import * as grammy from "../../../public/images//grammy.png";
import "./style.css";

const Awards = () => {
  return (
    <div className="awards-container">
      <div className="award-section">
        <div className="image-container">
          <div className="awards-image">
            <span>
              <img
                className="image"
                src={img.default}
                alt="Michael Jackson Singing"
              />
            </span>
          </div>
        </div>

        <div className="awards-details"><div className="award-desc-container">
          
          <div className="linear"></div>
        
        <h2 className="awards-title"> GRAMMY AWARDS</h2>
        <div className="underline"></div>
          <div className="awards-desc">
            <h3 className="sub-title"> Wins</h3>
            <img className="award-image" src={grammy.default} alt="" />
            <div className="underline"></div>
            <p className="award-desc-text">13</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
