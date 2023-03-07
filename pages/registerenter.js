import Base from "@layouts/Baseof";
import EntertainerFormOne from "@layouts/components/BecomeEntertiner/EntertainerFormOne";
import React from "react";

const registerchef = () => {
  return (
    <>
      <Base>
        <section className="section">
          <div className="container">
            <EntertainerFormOne />
          </div>
        </section>
      </Base>
    </>
  );
};

export default registerchef;
