import React from "react";
import Carousel from "react-multi-carousel";
import CardCarouselImage from "./CardCarouselImage";

const RoomCard = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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
      <div className="mb-2 mt-2 w-72 rounded-xl border border-gray-200 pt-6 shadow-lg">
        <img
          className="ml-4 h-48 w-64 rounded-xl object-cover"
          src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlZHJvb218ZW58MHx8MHx8&w=1000&q=80"
          alt="image"
        />
        <div className="p-4">
          <p className="text-center text-lg font-bold tracking-widest text-dark">
            {props.name}
          </p>
          <p className="mb-2 text-center font-semibold text-orange-500 tracking-tight">
            {" "}
            {props.type.map((e) => {
              return (
                <span key={e}>
                  {e}{" "}
                </span>
              );
            })}
          </p>
          <p className="mb-2 text-center tracking-tight text-gray-700">
            Minimum Guest: {props.stay}
          </p>
          <p className="mb-2 text-center font-semibold tracking-tight text-orange-300">
            {props.country}
          </p>
          <div className="mb-2 flex place-content-center">
            <img
              className="w-8"
              src="https://www.nicepng.com/png/detail/115-1150391_highly-suited-rating-star-single-png.png"
              alt="image"
            />
            <img
              className="w-8"
              src="https://www.nicepng.com/png/detail/115-1150391_highly-suited-rating-star-single-png.png"
              alt="image"
            />
            <img
              className="w-8"
              src="https://www.nicepng.com/png/detail/115-1150391_highly-suited-rating-star-single-png.png"
              alt="image"
            />
            <img
              className="w-8"
              src="https://www.nicepng.com/png/detail/115-1150391_highly-suited-rating-star-single-png.png"
              alt="image"
            />
            <img
              className="w-8"
              src="https://www.nicepng.com/png/detail/115-1150391_highly-suited-rating-star-single-png.png"
              alt="image"
            />
          </div>
          <div>
            <Carousel
              responsive={responsive}
              infinite={true}
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              <CardCarouselImage />
              <CardCarouselImage />
              <CardCarouselImage />
              <CardCarouselImage />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomCard;
