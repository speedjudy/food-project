import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ChefDetails from "./ChefDetails";
import { useRouter } from "next/router";
import "react-slideshow-image/dist/styles.css";

const ChefProfileMain = () => {
  const router = useRouter();
  const slideImages = [
    {
      url: "https://media.cnn.com/api/v1/images/stellar/prod/181019132031-16-pakistan-food-kheer.jpg?q=w_3061,h_1722,x_0,y_0,c_fill/w_1280",
      caption: "Slide 1",
    },
    {
      url: "https://media.cnn.com/api/v1/images/stellar/prod/181019130336-04-pakistan-food-biryani-restricted.jpg?q=w_3960,h_2228,x_0,y_0,c_fill/w_1280",
      caption: "Slide 2",
    }
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 390 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 390, min: 0 },
      items: 1,
    },
  };
  
  const data = router.query;
  return (
    <>
      <div className="mb-8">
          <Carousel
            arrows={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
          >
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                <img src={slideImage.url} alt="" className="w-full h-96 rounded-lg shadow shadow-lg max-sm:h-48"/>
              </div>
            ))}
          </Carousel>
      </div>
      <ChefDetails id={data.id} />
    </>
  );
};

export default ChefProfileMain;
