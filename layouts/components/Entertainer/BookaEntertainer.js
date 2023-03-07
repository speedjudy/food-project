import React, { useState, useEffect } from "react";
import EntertainerCard from "./EntertainerCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import { useRouter } from "next/router";
import entertainer from "../../../public/assets/bookentertainer.json";

const BookaEntertainer = () => {
  const { locale, locales, asPath } = useRouter();
  const enter = entertainer.data.filter((p) => p.locale === locale);

  const [data, setData] = useState([]);
  const fetchData = async () => {
    const result = await fetch("/api/entertainer");
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
      <h2 className="text-center font-sans font-black tracking-widest text-orange-500 max-sm:text-2xl">
        {enter[0].title}
      </h2>
      <Link href="/bookaentertainer">
        <p className="cursor-pointer text-center font-sans font-semibold text-dark hover:underline hover:underline-offset-4">
          {enter[0].semititle}
        </p>
      </Link>
      <div className="mt-2 ml-12 place-content-center">
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
                    <div>
                      <EntertainerCard
                        name={e.name}
                        country={e.country}
                        experience={e.experience}
                        entertainertype={e.typeofentertainer}
                        genre={e.genre}
                      />
                    </div>
                  </div>
                );
              })}
        </Carousel>
      </div>
    </>
  );
};

export default BookaEntertainer;
