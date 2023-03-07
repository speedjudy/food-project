import React, { useState } from "react";
import FoodCard from "./FoodCard";
import Carousel from "react-multi-carousel";

const FoodCardSlider = (props) => {
  try {
    const category = props.data.filter((e) => {
      return e.category == props.category;
    });
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };

    return (
      <>
        <Carousel
          arrows={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {category.length == 0
            ? props.data.map((e) => {
                return (
                  <div className="" key={e.id}>
                    <FoodCard title={e.title} />
                  </div>
                );
              })
            : category.map((e) => {
                return (
                  <div className="" key={e.id}>
                    <FoodCard title={e.title} />
                  </div>
                );
              })}
        </Carousel>
      </>
    );
  } catch (e) {}
};

export default FoodCardSlider;
