import Footer from "@partials/Footer";
import Header from "@partials/Header";
import Head from "next/head";

const Base = ({
  children,
}) => {
  return (
    <>
      <Head>
        {/* title */}
        <title>
          Obaki.com 
        </title>
      </Head>
      <Header />
      {/* main site */}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Base;
