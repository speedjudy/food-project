import React from "react";
import Link from "next/link";
import Faq from "react-faq-component";
import WhyBecomaChef from "./WhyBecomaChef";
import SignUpDetails from "./SignUpDetails";
import { Router, useRouter } from "next/router";
import bechefs from "../../../public/assets/bechef.json";

const HowWork = () => {
  const { locale, locales, asPath } = useRouter();
  const bechef = bechefs.data.filter((p) => p.locale === locale);

  const router = useRouter();
  const data = {
    title: <p className="mb-6 font-black max-sm:text-2xl">{bechef[0].faqtitle}</p>,
    rows: [
      {
        title: <p className="font-bold max-sm:text-base">{bechef[0].faqques1}</p>,
        content: <p className="max-sm:text-sm">{bechef[0].faqans1}</p>,
      },
      {
        title: <p className="font-bold max-sm:text-base">{bechef[0].faqques2}</p>,
        content: <p className="max-sm:text-sm">{bechef[0].faqans2}</p>,
      },
      {
        title: <p className="font-bold max-sm:text-base">{bechef[0].faqques3}</p>,
        content: <p className="max-sm:text-sm">{bechef[0].faqans3}</p>,
      },
      {
        title: <p className="font-bold max-sm:text-base">{bechef[0].faqques4}</p>,
        content: <p className="max-sm:text-sm">{bechef[0].faqans4}</p>,
      },
      {
        title: <p className="font-bold max-sm:text-base">{bechef[0].faqques5}</p>,
        content: <p className="max-sm:text-sm">{bechef[0].faqans5}</p>,
      },
      {
        title: <p className="font-bold max-sm:text-base">{bechef[0].faqques6}</p>,
        content: <p className="max-sm:text-sm">{bechef[0].faqans6}</p>,
      },
    ],
  };
  const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentColor: "grey",
    // arrowColor: "red",
  };

  const config = {
    tabFocus: true,
  };
  return (
    <>
      <div className="flex">
        <div className="w-[500px]">
          <p className="mb-6 mt-6 text-4xl font-bold text-orange-500 max-sm:text-xl max-sm:text-center">
            {bechef[0].semititle}
          </p>
          <p className="mb-6 text-dark max-sm:text-sm max-sm:text-center">{bechef[0].desc}</p>
          <Link href={{
            pathname:"registerchef",
            query: {token: router.query.token}
            }}>
            <div className="max-sm:flex max-sm:place-content-center">
              <button className="rounded-lg bg-orange-500 px-4 py-2 text-lg text-sm font-bold text-white hover:bg-orange-600">
                {bechef[0].reg}
              </button>
            </div>
          </Link>
        </div>
        <div className="ml-12 mt-6 mb-12 max-sm:hidden">
          <img
            className="rounded-lg"
            src="https://eagleowl.in/w/wp-content/uploads/2022/01/Screenshot_26.jpg"
            width="550px"
            alt=""
          />
        </div>
      </div>

      <WhyBecomaChef />
      <SignUpDetails />
      <div className="mt-36 mb-24">
        <Faq data={data} styles={styles} config={config} />
      </div>
    </>
  );
};

export default HowWork;
