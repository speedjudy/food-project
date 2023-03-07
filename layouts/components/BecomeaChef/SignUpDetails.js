import React from "react";
import { useRouter } from "next/router";
import bechefs from "../../../public/assets/bechef.json";

const SignUpDetails = () => {
  const { locale, locales, asPath } = useRouter();
  const bechef = bechefs.data.filter((p) => p.locale === locale);

  return (
    <>
      <div className="mt-24">
        <p className="text-center text-3xl font-black text-orange-500 max-sm:text-2xl">
          {bechef[0].signtitle}
        </p>
        <p className="mt-12 text-xl font-bold text-dark">
          {bechef[0].signsemititle} -
        </p>
        <ul className="ml-6 mt-2 text-dark max-sm:text-sm">
          <li>-&nbsp;&nbsp;&nbsp; {bechef[0].signpoint1}</li>
          <li>-&nbsp;&nbsp;&nbsp; {bechef[0].signpoint2}</li>
          <li>-&nbsp;&nbsp;&nbsp; {bechef[0].signpoint3}</li>
          <li>-&nbsp;&nbsp;&nbsp; {bechef[0].signpoint4}</li>
          <li>-&nbsp;&nbsp;&nbsp; {bechef[0].signpoint5}</li>
        </ul>
        <p className="mt-12 text-xl font-bold text-dark">{bechef[0].how} -</p>
        <ul className="ml-6 mt-2 text-dark max-sm:text-sm">
          <li>-&nbsp;&nbsp;&nbsp; {bechef[0].howpint1}</li>
          <li>-&nbsp;&nbsp;&nbsp; {bechef[0].howpint2}</li>
          <li>-&nbsp;&nbsp;&nbsp; {bechef[0].howpint3}</li>
        </ul>
      </div>
    </>
  );
};

export default SignUpDetails;
