import React from "react";
import { useState, useEffect } from "react";
import RoomCard from "./RoomCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRouter } from "next/router";
import room from "../../../public/assets/bookroom.json";
import Link from "next/link";

const BookaRoom = () => {
  const { locale, locales, asPath } = useRouter();
  const roomData = room.data.filter((p) => p.locale === locale);

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const result = await fetch("/api/room");
    const response = await result.json();
    setData(response.result);
  };

  let filterData =
    data == undefined
      ? setData([])
      : data.filter((d) => {
          return d.language === locale;
        });

  useEffect(() => {
    fetchData();
  }, []);


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
      <h2 className="text-center font-sans font-black tracking-widest text-orange-500">
        {roomData[0].title}
      </h2>
      <Link href="/bookaroom">

      <p className="cursor-pointer text-center font-sans font-semibold text-dark hover:underline hover:underline-offset-4">
        {roomData[0].semititle}
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
                    <RoomCard
                      name={e.name}
                      type={e.typeofstay}
                      scenary={e.scenarytypes}
                      country={e.country}
                      stay={e.peoplestay}
                    />
                  </div>
                );
              })}
        </Carousel>
      </div>
    </>
  );
};

export default BookaRoom;
