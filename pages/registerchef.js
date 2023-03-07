import Base from "@layouts/Baseof";
import ChefStepOne from "@layouts/components/BecomeaChef/ChefStepOne";
import React from "react";

const registerchef = () => {
  return (
    <>
      <Base>
        <section className="section">
          <div className="container">
            <ChefStepOne />
          </div>
        </section>
      </Base>
    </>
  );
};

export default registerchef;
