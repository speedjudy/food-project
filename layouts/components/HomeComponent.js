import React from "react";
import social from "@config/social.json";
import Social from "@components/Social";
import home from "../../public/assets/homepage.json";
import { useRouter } from "next/router";
import Link from "next/link";

const HomeComponent = () => {
  const { locale, locales, asPath } = useRouter();

  const title = home.MainHeading.filter((p) => p.locale === locale);

  return (
    <>
      <div className="ml-12 flex flex-nowrap">
        <div className="mr-12 w-[650px] max-sm:w-full">
          <h1 className="mt-3 text-6xl font-black tracking-widest text-black max-sm:text-center max-sm:text-4xl">
            {title[0].title1}{" "}
            <span className="font-primary font-bold text-orange-500">
              {title[0].title2}{" "}
            </span>{" "}
            {title[0].title3}{" "}
            <span className="font-primary font-black text-orange-500">
              {title[0].title4}{" "}
            </span>
          </h1>
          <div className="mt-8 font-sans text-2xl font-semibold tracking-widest text-black max-sm:text-center max-sm:text-lg">
            {title[0].semiHeading}
          </div>
          <div className="max-sm:flex max-sm:place-content-center">
          <Link href={{
            pathname: "/bookachef",
            query: {token: "YaBklA987sdfghjytr99LxAsdf"}
          }}>
            <button className="btn mt-6 rounded-[10px] bg-orange-500 text-white hover:bg-orange-700 max-sm:mt-12">
              {title[0].button}
            </button>
          </Link>
          </div>
        </div>
        <div className="max-sm:hidden">
          <img className="ml-4 h-96" src="/images/heroimage.png" />
        </div>
      </div>
      <div className="ml-12 max-sm:ml-0 max-sm:flex max-sm:place-content-center max-sm:mt-5">
        <Social source={social} className="social-icons mb-8" />
      </div>
    </>
  );
};

export default HomeComponent;
