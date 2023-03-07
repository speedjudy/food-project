import React from "react";
import { useRouter } from "next/router";
import becomeachef from "../../public/assets/becomechef.json";

const BecomeaChef = () => {
  const { locale, locales, asPath } = useRouter();
  const chef = becomeachef.data.filter((p) => p.locale === locale);
  return (
    <div>
      <h2 className="text-center font-sans font-black tracking-widest text-orange-500 max-sm:text-xl">
        {chef[0].title}
      </h2>
      <p className="tarcking-widest mt-2 text-center font-mono text-2xl font-black text-dark max-sm:text-base">
        {chef[0].semititle}
      </p>
      <div className="mt-7 flex max-sm:block">
        <div>
          <div className="relative mr-5 mt-5 h-48 max-sm:flex max-sm:place-content-center">
            <img
              className="object-auto ml-8 w-48"
              src="/images/Framefeature1.png"
              alt="Flower and sky"
            />
          </div>
          <div className="ml-5 max-sm:flex max-sm:place-content-center max-sm:ml-0 max-sm:text-center">
            <p className="mt-3 tracking-widest text-dark">{chef[0].feature1}</p>
          </div>
        </div>
        <div>
          <div className="relative mr-5 mt-5 h-48 max-sm:flex max-sm:place-content-center max-sm:ml-[-20px]">
            <img
              className="object-auto ml-12 w-48"
              src="/images/Framefeature2.png"
              alt="Flower and sky"
            />
          </div>
          <div className="ml-5 max-sm:flex max-sm:place-content-center max-sm:ml-0 max-sm:text-center">
            <p className="mt-3 tracking-widest text-dark">{chef[0].feature2}</p>
          </div>
        </div>
        <div>
          <div className="relative mr-5 mt-[-10px] h-56 max-sm:flex max-sm:place-content-center">
            <img
              className="object-auto w-64 ml-2"
              src="/images/featureicon.png"
              alt="Flower and sky"
            />
          </div>
          <div className="ml-5 max-sm:flex max-sm:place-content-center max-sm:ml-0 max-sm:text-center">
            <p className="mt-3 tracking-widest text-dark">{chef[0].feature3}</p>
          </div>
        </div>
        <div>
          <div className="relative mr-5 mt-5 h-48 max-sm:flex max-sm:place-content-center max-sm:ml-[-20px]">
            <img
              className="object-auto w-48 overflow-hidden pl-9"
              src="/images/Framefeature4.png"
              alt="Flower and sky"
            />
          </div>
          <div className="ml-5 max-sm:flex max-sm:place-content-center max-sm:ml-0 max-sm:text-center">
            <p className="mt-3 tracking-widest text-dark">{chef[0].feature4}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeaChef;
