import Base from "@layouts/Baseof";
import React from "react";
import EntertainerForm from "@components/BecomeEntertiner/EntertainerForm"

const Entertainer = () => {
  return (
    <>
      <Base>
        <section className="section">
          <div className="container">
            <EntertainerForm />
        </div>
        </section>
      </Base>
    </>
  );
};

export default Entertainer;
