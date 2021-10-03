import React from "react";
import Ribbon from "../ribbon";
import Rating from "../rating";
import CustomButton from "../custom-button";
import "./index.css";

const CarouselCard = ({ item, middleSlideIndex, index }) => {
  let ribbonType;
  let backgroundType;
  switch (item.ribbonType) {
    case "EXCLUSIVE":
      ribbonType = "yellow-ribbon";
      backgroundType = "exclusive";
      break;
    case "BEST BONUS":
      backgroundType = "best";
      ribbonType = "green-ribbon";
      break;
    default:
      backgroundType = "new";
      ribbonType = "red-ribbon";
      break;
  }

  const onClick = () => console.log("Clicked!");

  return (
    <div
      className={
        `carousel-container ${backgroundType}` +
        `${index == middleSlideIndex ? " middle-carousel-container" : ""}` +
        `${index < middleSlideIndex ? " left-carousel-container" : ""}` +
        `${index > middleSlideIndex ? " right-carousel-container" : ""}`
      }
    >
      <div className="carousel-bag">{item.id}</div>
      <Ribbon type={ribbonType} title={item.ribbonType} />

      <section
        className={`carousel-profile ${
          index == middleSlideIndex ? " middle-carousel-profile" : ""
        }`}
      >
        <div className="carousel-profile-img"></div>
        <div className="carousel-profile-name">Leo Vegas</div>
        <div className="carousel-profile-star">
          <Rating />
        </div>
        <div className="carousel-profile-review">Read Review</div>
      </section>
      <ul>
        <li>Over 1500 slot</li>
        <li>An award-winning sports book</li>
        <li>Very good experience in the mobile</li>
      </ul>

      <div className="carousel-offer-text">
        100 SEK free games or 100 free spins
      </div>
      <CustomButton style="carousel-button" onClick={onClick} />
      <div className="carousel-bottom-text">
        +18 - Play responsibly - Read terms and conditions
        <span className="bottom-highlight">&nbsp; here</span>
      </div>
    </div>
  );
};

export default CarouselCard;
