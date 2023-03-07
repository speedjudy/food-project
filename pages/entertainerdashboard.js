import React from "react";
import Base from "@layouts/BaseofEntertainer";
import HeroComponent from "@layouts/components/EntertainerDashboard/HeroComponent";

const entertainerdashboard = () => {
  return (
    <>
      <Base>
        <section className="section pb-[50px]">
          <div className="container">
            <HeroComponent />
          </div>
        </section>
      </Base>
    </>
  );
};

export default entertainerdashboard;
