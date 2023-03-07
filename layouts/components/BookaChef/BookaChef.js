import React, { useState, useEffect } from "react";
import CookCard from "./CookCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import { useRouter } from "next/router";
import bookachef from "../../../public/assets/bookchef.json";

const BookaChef = () => {
  const { locale, locales, asPath } = useRouter();
  const chef = bookachef.data.filter((p) => p.locale === locale);

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const result = await fetch("/api/chefregister");
    const response = await result.json();
    setData(response.result);
  };
  useEffect(() => {
    fetchData();
  }, []);

  let filterData =
    data == undefined
      ? setData([])
      : data.filter((d) => {
          return d.language === locale;
        });

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
      breakpoint: { max: 1024, min: 390 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 390, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div>
        <h2 className="text-center font-sans font-black tracking-widest text-orange-500 max-sm:text-2xl">
          {chef[0].title}
        </h2>
        <Link href="/bookachef">
          <p className="cursor-pointer text-center font-sans font-semibold text-dark hover:underline hover:underline-offset-4">
            {chef[0].semititle}
          </p>
        </Link>
      </div>
      <div className="mt-12 ml-12 max-sm:mt-6 max-sm:ml-12">
        <Carousel
          arrows={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {filterData == undefined
            ? (filterData = [])
            : filterData.map((e) => {
                return (
                  <div key={e.id}>
                    <Link
                      href={{
                        pathname: "/chefmenuprofile",
                        query: {
                          id: e.id,
                        },
                      }}
                    >
                      <CookCard
                        name={e.name}
                        country={e.country}
                        experience={e.experience}
                        foodtype={e.foodtype}
                        price={e.price}
                      />
                    </Link>
                  </div>
                );
              })}
        </Carousel>
      </div>
    </>
  );
};

export default BookaChef;
