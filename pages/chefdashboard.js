import React from "react";
import Base from "@layouts/BaseofChef";
import HeroComponent from "@layouts/components/ChefDashboard/HeroComponent";

const chefdashboard = () => {
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

export default chefdashboard;
