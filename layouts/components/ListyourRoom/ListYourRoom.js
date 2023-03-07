import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import rooms from "../../../public/assets/room.json";

function BeEntertainer() {
  const { locale, locales, asPath } = useRouter();
  const room = rooms.data.filter((p) => p.locale === locale);

  return (
    <>
      <br />
      <h2 className="text-dark-500 pt-24 text-center text-3xl font-bold tracking-widest max-sm:text-xl">
        {room[0].title}
      </h2>
      <div className="flex place-content-center">
        <Link href="/listroom">
          <button className="mt-12 mb-32 h-[60px] w-[260px] place-self-center rounded-md bg-orange-500 px-4 py-2 text-lg text-sm font-bold text-white hover:bg-orange-600">
            {room[0].semititle}
          </button>
        </Link>
      </div>
    </>
  );
}

export default BeEntertainer;
