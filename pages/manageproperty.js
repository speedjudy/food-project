import React from "react";
import Base from "@layouts/BaseofChef";
import ManageProperty from "@layouts/components/ManageProperty/ManageProperty";

const manageproperty = () => {
  return (
    <>
      <Base>
        <section className="section pb-[50px]">
          <div className="container">
            <ManageProperty />
          </div>
        </section>
      </Base>
    </>
  );
};

export default manageproperty;
