import React from "react";
import { useRouter } from "next/router";
import entertainers from "../../../public/assets/entertainer.json";

function BeEntertainer() {
  const router = useRouter();
  const { locale, locales, asPath } = useRouter();

  const entertainer = entertainers.data.filter((p) => p.locale === locale);

  return (
    <>
      <h2 className="text-dark-500 pt-48 text-center text-5xl font-bold tracking-widest max-sm:text-2xl">
        {entertainer[0].title}
      </h2>
      <div className="flex place-content-center">
        <button className="mt-12 mb-32 h-[60px] w-[260px] place-self-center rounded-md bg-orange-500 px-4 py-2 text-lg text-sm font-bold text-white hover:bg-orange-600 max-sm:w-44 max-sm:text-sm max-sm:h-12">
          {entertainer[0].button}
        </button>
      </div>
    </>
  );
}

export default BeEntertainer;
