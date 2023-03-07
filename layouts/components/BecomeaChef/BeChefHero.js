import React from "react";
import { useRouter } from "next/router";
import bechefs from "../../../public/assets/bechef.json";

const BeChefHero = () => {
  
  const { locale, locales, asPath } = useRouter();
  const bechef = bechefs.data.filter((p) => p.locale === locale);

  return (
    <>
      <br />
      <h2 className="text-dark-500 pt-48 text-center text-5xl font-bold tracking-widest max-sm:text-xl">
        {bechef[0].title}
      </h2>
      <div className="flex place-content-center">
        <button className="mt-12 mb-32 h-[60px] w-[260px] place-self-center rounded-md bg-orange-500 px-4 py-2 text-lg text-sm font-bold text-white hover:bg-orange-600 max-sm:w-44 max-sm:text-sm max-sm:h-12">
          {bechef[0].button}
        </button>
      </div>
    </>
  );
};

export default BeChefHero;

