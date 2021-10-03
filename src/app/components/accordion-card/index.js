import React from "react";
import Ribbon from "../ribbon";
import Rating from "../rating";
import CustomButton from "../custom-button";
import CustomAccordion from "../custom-accordion";
import "./index.css";

const CarouselCard = ({ item }) => {
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
  const accordionBody = (
    <>
      <div className="accordion-text">Payment Methods</div>
      <div className="payment-methods">
        <div className="skrill-img"></div>
        <div className="paypal-img"></div>
        <div className="skrill-img"></div>
        <div className="paypal-img"></div>
        <div className="skrill-img"></div>
        <div className="paypal-img"></div>
        <div className="skrill-img"></div>
        <div className="see-more">See More</div>
      </div>
    </>
  );

  return (
    <div className={`accordion-container ${backgroundType}`}>
      <div className="accordion-bag">{item.id}</div>
      <Ribbon type={ribbonType} title={item.ribbonType} />

      <section className="accordion-child-container">
        <div className="accordion-profile center">
          <div className="accordion-profile-img"></div>
          <div className="accordion-profile-name">Leo Vegas</div>
          <div className="accordion-profile-star">
            <Rating />
          </div>
          <div className="accordion-profile-review">Read Review</div>
        </div>
        <ul>
          <li>Over 1500 slot</li>
          <li>An award-winning sports book</li>
          <li>Very good experience in the mobile</li>
        </ul>

        <div className="accordion-offer-text">
          100 SEK free games or 100 free spins
        </div>
        <CustomButton onClick={onClick} />
      </section>

      <div className="accordion-bottom-text">
        +18 - Play responsibly - Read terms and conditions
        <span className="bottom-highlight">&nbsp; here</span>
      </div>

      <CustomAccordion
        title="Payment Methods"
        content={accordionBody}
      ></CustomAccordion>
    </div>
  );
};

export default CarouselCard;
