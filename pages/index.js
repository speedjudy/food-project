import Base from "@layouts/Baseof";
import "swiper/swiper.min.css";
import { getListPage } from "../lib/contentParser";
import HomeComponent from "../layouts/components/HomeComponent";
import FoodSection from "@layouts/components/FoodSection";
import GetTheAppSection from "@layouts/components/GetTheAppSection";
import FeatureSection from "@layouts/components/FeatureSection";
import BecomeaChef from "@layouts/components/BecomeaChef";
import BookaChef from "@layouts/components/BookaChef/BookaChef";
import Food from "@layouts/components/Food/Food";
import BookaEntertainer from "@layouts/components/Entertainer/BookaEntertainer";
import BookaRoom from "@layouts/components/Room/BookaRoom";
import OurCommunity from "@layouts/components/OurCommunity";
import OurHappyCustomers from "@layouts/components/HappyCustomers/OurHappyCustomers";
import OurPartners from "@layouts/components/OurPartners";
import { useRouter } from "next/router";

const Home = () => {
  
  const router = useRouter();
  const token = router.query.token; 
  return (
    <>
      <Base>
        {/* Banner */}
        <section className="section pb-[50px]">
          <div className="flex place-content-center">
            <div >
              <HomeComponent token={token} />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section">
          <div className="container">
            <FoodSection token={token} />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <GetTheAppSection token={token} />
          </div>
        </section>

        {/* workflow */}
        <section className="section">
          <div className="container-feature container">
            <FeatureSection token={token} />
          </div>
        </section>

        <section className="section">
          <div className="container-feature container">
            <BecomeaChef token={token} />
          </div>
        </section>

        <section className="section">
          <div className="">
            <BookaChef token={token} />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Food token={token} />
          </div>
        </section>

        <section className="section">
          <div>
            <BookaEntertainer token={token} />
          </div>
        </section>

        <section className="section">
          <div>
            <BookaRoom token={token} />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <OurCommunity token={token} />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <OurHappyCustomers token={token} />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <OurPartners token={token} />
          </div>
        </section>

      </Base>
    </>
  );
};

export const getStaticProps = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  return {
    props: {
      frontmatter,
    },
  };
};

export default Home;

