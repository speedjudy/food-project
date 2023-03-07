import React from "react";
import { useRouter } from "next/router";
import community from "../../public/assets/community.json";

const OurCommunity = () => {
  const { locale, locales, asPath } = useRouter();
  const communities = community.data.filter((p) => p.locale === locale);

  return (
    <>
      <h2 className="text-center font-sans font-black tracking-widest text-orange-500 max-sm:text-2xl">
        {communities[0].title}
      </h2>
      <p className="mt-3 text-center font-mono text-xl font-black tracking-widest text-dark max-sm:text-base">
        {communities[0].semititle}
      </p>
      <div className="mt-12 flex place-content-center max-sm:block">
        <div className="mr-36 max-sm:mr-0">
          <div className="max-sm:mb-6 max-sm:flex max-sm:place-content-center">
            <img className="h-48 w-48" src="/images/community.png" alt="" />
          </div>
          <div className="max-sm:text-center">
            <h4 className="mt-3 text-center font-black lining-nums text-dark">
              300000+
            </h4>
            <p className="text-center font-black text-dark">
              {communities[0].meals}
            </p>
          </div>
        </div>
        <div className="mr-36 ml-12 max-sm:mr-0 max-sm:ml-0">
          <div className="max-sm:mb-6 max-sm:mt-12 max-sm:flex max-sm:place-content-center">
            <img className="h-48 w-48" src="/images/community2.png" alt="" />
          </div>
          <div className="max-sm:text-center">
            <h4 className="mt-3 text-center font-black lining-nums text-dark">
              2500+
            </h4>
            <p className="text-center font-black text-dark">
              {communities[0].trained}
            </p>
          </div>
        </div>
        <div className="ml-6 max-sm:ml-0">
          <div className="max-sm:mb-6 max-sm:mt-12 max-sm:flex max-sm:place-content-center">
            <img className="h-48 w-48" src="/images/home.png" alt="" />
          </div>
          <div>
            <h4 className="mt-3 text-center font-black lining-nums text-dark">
              1000+
            </h4>
            <p className="text-center font-black text-dark">
              {communities[0].households}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCommunity;
