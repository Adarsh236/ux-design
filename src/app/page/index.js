import React from "react";
import Carousel from "react-multi-carousel";
import CarouselCard from "../components/carousel-card";
import AccordionCard from "../components/accordion-card";
import "react-multi-carousel/lib/styles.css";
import "./index.css";

const items = [
  { id: 1, ribbonType: "EXCLUSIVE" },
  { id: 2, ribbonType: "BEST BONUS" },
  { id: 3, ribbonType: "NEW CASINO" },
  { id: 4, ribbonType: "EXCLUSIVE" },
  { id: 5, ribbonType: "BEST BONUS" },
];

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 992 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 991, min: 0 },
    items: 1,
  },
};

const Page = () => {
  const [middleSlideIndex, setMiddleSlideIndex] = React.useState(1);

  return (
    <section>
      <Carousel
        afterChange={(previousSlide, { currentSlide }) => {
          setMiddleSlideIndex(currentSlide + 1);
        }}
        responsive={responsive}
        arrows={false}
        showDots={true}
        swipeable={true}
        draggable={true}
        itemClass="carousel-item-padding-40-px"
      >
        {items.map((item, index) => (
          <CarouselCard
            item={item}
            middleSlideIndex={middleSlideIndex}
            index={index}
            key={item.id.toString()}
          />
        ))}
      </Carousel>

      <div className="page-container">
        <AccordionCard item={items[0]} />
      </div>
    </section>
  );
};

export default Page;
