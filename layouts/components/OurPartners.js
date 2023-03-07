import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRouter } from "next/router";
import partners from "../../public/assets/partners.json";

const OurPartners = () => {
  const { locale, locales, asPath } = useRouter();
  const partner = partners.data.filter((p) => p.locale === locale);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
      <h2 className="text-center font-sans font-black tracking-widest text-orange-500 max-sm:text-2xl">
        {partner[0].title}
      </h2>
      <Carousel
        className="mt-5 rounded-xl border border-orange-500"
        arrows={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        <div className="flex place-content-center">
          <img src="/images/partner1.png" alt="" />
        </div>
        <div className="flex place-content-center">
          <img src="/images/partner2.png" alt="" />
        </div>
        <div className="flex place-content-center">
          <img
            src="/images/sponsorlogo.png"
            alt=""
            className="mt-4 h-32 w-36"
          />
        </div>
        <div className="flex place-content-center">
          <img src="/images/partner1.png" alt="" />
        </div>
        <div className="flex place-content-center">
          <img src="/images/partner2.png" alt="" />
        </div>
        <div className="flex place-content-center">
          <img
            src="/images/sponsorlogo.png"
            alt=""
            className="mt-4 h-32 w-36"
          />
        </div>
      </Carousel>
    </>
  );
};

export default OurPartners;
