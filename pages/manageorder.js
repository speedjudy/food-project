import React from "react";
import Base from "@layouts/BaseofEntertainer";
import MangeOrder from "@layouts/components/EntertainerDashboard/ManageOrder/ManageOrder";

const manageorder = () => {
  return (
    <>
      <Base>
        <section className="section pb-[50px]">
          <div className="container">
            <MangeOrder />
          </div>
        </section>
      </Base>
    </>
  );
};

export default manageorder;
