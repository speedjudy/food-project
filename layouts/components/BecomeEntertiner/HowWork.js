import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import entertainers from "../../../public/assets/entertainer.json";

const HowWork = () => {
  const router = useRouter();
  const { locale, locales, asPath } = useRouter();

  const entertainer = entertainers.data.filter((p) => p.locale === locale);
  return (
    <>
      <h3 className="text-center font-sans font-black tracking-widest text-orange-500">
        {entertainer[0].semititle}
      </h3>
      <div className="mt-12 flex place-content-center max-sm:block">
        <div className="mr-36 ml-36 max-sm:mr-0 max-sm:ml-0">
          <div className="flex place-content-center">
            <img
              className="h-48 w-56 max-sm:w-auto"
              src="/images/mobile.png"
              alt=""
            />
          </div>
          <p className="mt-5 w-56 text-center text-sm text-dark max-sm:w-full">
            {entertainer[0].point1}
          </p>
        </div>
        <div className="mr-36 max-sm:mr-0 max-sm:mt-4">
          <div className="flex place-content-center">
            <img className="h-48 w-56" src="/images/people.png" alt="" />
          </div>
          <p className="mt-5 w-56 text-center text-sm text-dark max-sm:w-full">
            {entertainer[0].point2}
          </p>
        </div>
        <div className="mr-36 max-sm:mr-0">
        <div className="flex place-content-center max-sm:mt-4">
          <img className="h-48 w-56" src="/images/homeicon.png" alt="" />
        </div>
          <p className="mt-5 w-56 text-center text-sm text-dark max-sm:w-full">
            {entertainer[0].point3}
          </p>
        </div>
      </div>
      <div>
        <Link href={{
          pathname: "/registerenter",
          query: {token : router.query.token}
        }}>
          <div className="flex place-content-center">
            <button className="mt-24 mb-32 h-[60px] w-[360px] place-self-center rounded-md bg-orange-500 px-4 py-2 text-lg text-sm font-bold text-white hover:bg-orange-600">
              {entertainer[0].apply}
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default HowWork;
