import React, { useState, useEffect } from "react";
import EntertainerCard from "../Entertainer/EntertainerCard";
import Link from "next/link";

const EntertainerAll = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const result = await fetch("/api/entertainer");
    const response = await result.json();
    setData(response.result);
  };
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="mb-12 mt-12">
      <div className="mb-8 flex rounded-md border border-gray-300">
        <div className="mt-1 mr-3 ml-2">
          <img src="/images/postal.png" alt="" className="w-9" />
        </div>
        <div className="">
          <select className="w-48 rounded-md border-transparent border-transparent bg-transparent p-2.5 pl-2 text-dark text-dark outline-none focus:border focus:border-transparent focus:border-dark focus:ring-0 active:outline-none max-sm:w-24 max-sm:text-base">
            <option value="Select Country" hidden className="bg-transparent">
              Filters
            </option>
            <option value="Pakistan" className="bg-transparent text-dark">
              Rating
            </option>
            <option value="England" className="bg-transparent text-dark">
              Price{" "}
            </option>
            <option value="French" className="bg-transparent text-dark">
              Location
            </option>
          </select>
          <span className="border-r-2 border-dark"></span>
        </div>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mt-3 ml-2 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            className="w-96 border-transparent pl-2 text-dark focus:border-transparent focus:ring-0 max-sm:w-32"
            type="text"
            id=""
            placeholder="Search Here"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 max-sm:ml-8 max-sm:grid-cols-1 max-sm:gap-0">
        {data == undefined
          ? setData([])
          : data.map((e) => {
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
      </div>
    </div>
  );
};

export default EntertainerAll;
