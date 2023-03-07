import React from "react";
import Base from "@layouts/BaseofChef";
import ManageFood from "@layouts/components/ChefDashboard/ManageFood/ManageFood";

const managefood = () => {
  return (
    <>
      <Base>
        <section className="section pb-[50px]">
          <div className="container">
            <ManageFood />
          </div>
        </section>
      </Base>
    </>
  );
}

export default managefood