import Base from "@layouts/Baseof";
import BeEntertainerForm from "@layouts/components/BecomeEntertiner/BeEntertainer";
import HowWork from "@layouts/components/BecomeEntertiner/HowWork";
import React from "react";

function beEntertainer() {
  return (
    <>
      <Base>
        <div className="bg-[url('/images/entertainer.png')]/500 bg-cover bg-no-repeat">
          <div className="container">
            <BeEntertainerForm />
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
}

export default beEntertainer;
