import React from "react";
import { useRouter } from "next/router";
import bechefs from "../../../public/assets/bechef.json";

const WhyBecomaChef = () => {
  const { locale, locales, asPath } = useRouter();
  const bechef = bechefs.data.filter((p) => p.locale === locale);

  return (
    <>
      <div className="mt-12">
        <p className="mt-24 text-center text-5xl font-bold text-orange-500 max-sm:text-2xl">
          {bechef[0].titile2}
        </p>
        <div className="mt-12 flex place-content-center max-sm:block">
          <div className="max-sm:mb-6">
            <div className="flex place-content-center">
              <img
                src="https://obakiapp.com/images/website_images/6161103442111654863770.png"
                alt=""
                className="mb-6 w-44 max-sm:w-36"
              />
            </div>
            <div>
              <p className="mb-2 text-center text-2xl font-bold text-dark max-sm:text-xl">
                {bechef[0].feature1title}
              </p>
              <p className="ml-12 mr-12 text-center max-sm:text-sm">
                {bechef[0].feature1}
              </p>
            </div>
          </div>
          <div clasName="mt-12 flex place-content-center max-sm:block">
            <div>
              <div className="flex place-content-center">
                <img
                  src="https://obakiapp.com/images/website_images/5422183623801654864279.png"
                  alt=""
                  className="mb-6 w-36 max-sm:w-36"
                />
              </div>
              <p className="mb-2 text-center text-2xl font-bold text-dark max-sm:text-xl">
                {bechef[0].feature2title}
              </p>
              <p className="ml-12 mr-12 text-center  max-sm:text-sm">
                <span className="font-bold text-dark  max-sm:text-sm">
                  {bechef[0].feature2semititle} -
                </span>{" "}
                {bechef[0].feature2}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex max-sm:block">
          <div>
            <div className="flex place-content-center">
              <img
                src="https://obakiapp.com/images/website_images/9516312230941654864206.png"
                alt=""
                className="mb-6 w-44 max-sm:w-36"
              />
            </div>
            <p className="mb-2 text-center text-2xl font-bold text-dark  max-sm:text-xl">
              {bechef[0].feature3title}
            </p>
            <p className="ml-12 mr-12 text-center  max-sm:text-sm">
              {bechef[0].feature3}
            </p>
          </div>
          <div className="max-sm:mt-6">
            <div className="flex place-content-center">
              <img
                src="https://obakiapp.com/images/website_images/9922503644691654864537.png"
                alt=""
                className="mb-4 w-36 max-sm:w-36"
              />
            </div>
            <div>
              <p className="mb-2 text-center text-2xl font-bold text-dark max-sm:text-xl">
                {bechef[0].feature4title}
              </p>
              <p className="ml-12 mr-12 text-center max-sm:text-sm">{bechef[0].feature4}</p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex max-sm:block">
          <div>
            <div className="flex place-content-center">
              <img
                src="https://obakiapp.com/images/website_images/7908944631991654864256.png"
                alt=""
                className="mb-4 w-36 max-sm:w-36"
              />
            </div>
            <div>
              <p className="mb-2 mt-6 text-center text-2xl font-bold text-dark max-sm:text-xl">
                {bechef[0].feature5title}
              </p>
              <p className="ml-12 mr-12 w-96 text-center max-sm:text-sm max-sm:w-auto">
                {bechef[0].feature5}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyBecomaChef;
