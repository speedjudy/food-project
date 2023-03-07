import React from "react";
import CustomersCard from "./CustomersCard";
import "react-multi-carousel/lib/styles.css";
import { useRouter } from "next/router";
import happy from "../../../public/assets/happycustomers.json";

const OurHappyCustomers = () => {

  const { locale, locales, asPath } = useRouter();
  const customer = happy.data.filter((p) => p.locale === locale);

  return (
    <>
      <h2 className="text-center font-sans font-black tracking-widest text-orange-500 max-sm:text-2xl">
        {customer[0].title}
      </h2>
      <p className="mt-3 text-center font-mono text-xl font-black tracking-widest text-dark max-sm:text-lg">
        {customer[0].semititle}
      </p>
      <div className="mt-12 pt-12 flex max-sm:block">
        <CustomersCard />
        <CustomersCard />
        <CustomersCard />
      </div>
    </>
  );
};
    
export default OurHappyCustomers;
