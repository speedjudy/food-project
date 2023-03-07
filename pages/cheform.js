import Base from "@layouts/Baseof";
import ChefForm from "@layouts/components/BecomeaChef/ChefForm";
import React from "react";

const registerchef = () => {
  return (
    <>
      <Base>
        <section className="section">
          <div className="container">
            <ChefForm />
        </div>
        </section>
      </Base>
    </>
  );
};

export default registerchef;
