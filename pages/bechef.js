import React from "react";
import Base from "@layouts/Baseof";
import BeChefHero from "@layouts/components/BecomeaChef/BeChefHero";
import HowWork from "@layouts/components/BecomeaChef/HowWork";

const bechef = () => {
  return (
    <>
      <Base>
        <div className="bg-cover bg-no-repeat bg-[url('/images/chefbg.png')]">
          <div className="container">
            <BeChefHero />          
          </div>
        </div>

        <section className="section">
          <div className="container">
            <HowWork />
          </div>
        </section>
      </Base>
    </>
  );
};

export default bechef;
