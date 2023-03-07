import Footer from "../layouts/partials/Footer";
import Header from "../layouts/partialsentertainer/Header";
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