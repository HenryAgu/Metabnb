// Images
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";
import card4 from "../images/card4.png";
import card5 from "../images/card5.png";
import card6 from "../images/card6.png";
import card7 from "../images/card7.png";
import card8 from "../images/card8.png";
import stars from "../images/stars.png";
import "./Adventure.css";
const Adventure = () => {
  return (
    <div className="adventure">
      <div className="adventure-header">
        <h1>Inspiration for your next adventure</h1>
      </div>
      <div className="adventure-box">
        <div className="adventure-card">
          <img src={card1} alt="card1" />
          <div className="adventure-card-text">
            <div className="left-text">
              <p>Desert king</p>
              <p>2345km away</p>
            </div>
            <div className="right-text">
              <p className="duration">1MBT per night</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>
          <div className="rating">
            <img src={stars} alt="stars" />
          </div>
        </div>
        <div className="adventure-card">
          <img src={card2} alt="card2" />
          <div className="adventure-card-text">
            <div className="left-text">
              <p>Desert king</p>
              <p>2345km away</p>
            </div>
            <div className="right-text">
              <p className="duration">1MBT per night</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>
          <div className="rating">
            <img src={stars} alt="stars" />
          </div>
        </div>
        <div className="adventure-card">
          <img src={card3} alt="card3" />
          <div className="adventure-card-text">
            <div className="left-text">
              <p>Desert king</p>
              <p>2345km away</p>
            </div>
            <div className="right-text">
              <p className="duration">1MBT per night</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>
          <div className="rating">
            <img src={stars} alt="stars" />
          </div>
        </div>
        <div className="adventure-card">
          <img src={card4} alt="card4" />
          <div className="adventure-card-text">
            <div className="left-text">
              <p>Desert king</p>
              <p>2345km away</p>
            </div>
            <div className="right-text">
              <p className="duration">1MBT per night</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>
          <div className="rating">
            <img src={stars} alt="stars" />
          </div>
        </div>
        <div className="adventure-card">
          <img src={card5} alt="card5" />
          <div className="adventure-card-text">
            <div className="left-text">
              <p>Desert king</p>
              <p>2345km away</p>
            </div>
            <div className="right-text">
              <p className="duration">1MBT per night</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>
          <div className="rating">
            <img src={stars} alt="stars" />
          </div>
        </div>
        <div className="adventure-card">
          <img src={card6} alt="card6" />
          <div className="adventure-card-text">
            <div className="left-text">
              <p>Desert king</p>
              <p>2345km away</p>
            </div>
            <div className="right-text">
              <p className="duration">1MBT per night</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>
          <div className="rating">
            <img src={stars} alt="stars" />
          </div>
        </div>
        <div className="adventure-card">
          <img src={card7} alt="card7" />
          <div className="adventure-card-text">
            <div className="left-text">
              <p>Desert king</p>
              <p>2345km away</p>
            </div>
            <div className="right-text">
              <p className="duration">1MBT per night</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>
          <div className="rating">
            <img src={stars} alt="stars" />
          </div>
        </div>
        <div className="adventure-card">
          <img src={card8} alt="card8" />
          <div className="adventure-card-text">
            <div className="left-text">
              <p>Desert king</p>
              <p>2345km away</p>
            </div>
            <div className="right-text">
              <p className="duration">1MBT per night</p>
              <p>available for 2weeks stay</p>
            </div>
          </div>
          <div className="rating">
            <img src={stars} alt="stars" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adventure;
