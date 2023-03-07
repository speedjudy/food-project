import React from "react";
import { useRouter } from "next/router";
import features from "../../public/assets/features.json";

const FeatureSection = () => {
  const { locale, locales, asPath } = useRouter();
  const feature = features.data.filter((p) => p.locale === locale);
  return (
    <div>
      <h2 className="text-center font-sans font-black tracking-widest text-orange-500">
        {feature[0].title}
      </h2>
      <p className="tarcking-widest mt-2 text-center font-mono text-2xl font-black text-dark">
        {feature[0].semititle}
      </p>
      <div className="mt-7 flex place-content-center max-sm:block">
        <div className="">
          <div className="w-full relative mr-5 mt-10 h-40 max-sm:flex max-sm:place-content-center max-sm:mb-6">
            <img
              className="object-auto w-48 ml-8"
              src="/images/icon1.png"
              alt="Flower and sky"
            />
          </div>
          <div className="ml-5 max-sm:flex max-sm:place-content-center max-sm:ml-0">
            <p className="tracking-widest text-dark">
              {feature[0].feature1}
            </p>
          </div>
        </div>
        <div>
          <div className="w-full relative mt-12 pt-7 mr-5 mt-5 max-sm:flex max-sm:place-content-center">
            <img
              className="object-auto w-56 ml-8"
              src="/images/icon2.png"
              alt="Flower and sky"
            />
            <br />
          </div>
          <div className="ml-5 max-sm:flex max-sm:place-content-center max-sm:ml-0">
            <p className="mt-4 tracking-widest text-dark ">
              {feature[0].feature2}
            </p>
          </div>
        </div>
        <div>
          <div className="w-full relative mr-5 ml-8 mt-5 mb-6 h-40 max-sm:flex max-sm:place-content-center max-sm:ml-[-30px]">
            <img
              className="object-auto w-24 ml-12"
              src="/images/icon3.png"
              alt="Flower and sky"
            />
            <br />
          </div>
          <div className="ml-5 max-sm:flex max-sm:place-content-center max-sm:ml-0">
            <p className="mt-4 tracking-widest text-dark max-sm:text-center">
              {feature[0].feature3}
            </p>
          </div>
        </div>
        <div>
          <div className="w-full relative mr-5 ml-8 mt-5 mb-6 h-40 max-sm:flex max-sm:place-content-center max-sm:ml-[-30px]">
            <img
              className="object-auto w-24 ml-12"
              src="/images/icon4.png"
              alt="Flower and sky"
            />
            <br />
          </div>
          <div className="ml-5 max-sm:flex max-sm:place-content-center max-sm:ml-0">
            <p className="mt-4 tracking-widest text-dark max-sm:text-center">
              {feature[0].feature4}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
