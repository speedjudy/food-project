import React from "react";
import CardHero from "../ChefDashboard/CardHero";
import ManageProperty from "../ChefDashboard/ManageProperty";
import SideCards from "../ChefDashboard/SideCards";
import TableInfo from "../ChefDashboard/TableInfo";

const HeroComponent = () => {
    const arr = [
        {
            heading: "TOTAL BOOKING",
            semiHeading: "150",
        },
        {
            heading: "WEEK BALANCE",
            semiHeading: "$45,000",
        },
        {
            heading: "INCOMING ORDERS",
            semiHeading: "15",
        },
        {
            heading: "INBOX MESSAGE",
            semiHeading: "10",
        },
        {
            heading: "NOTIFICATION",
            semiHeading: "10",
        },
    ];

    const arr2 = [
        {
            heading: "ORDER HISTORY",
            semiHeading: "",
        },
        {
            heading: "FINANCIAL TRANSACTION",
            semiHeading: "",
        },
        {
            heading: "ORDER INGREDIENT",
            semiHeading: "(Food Onlines)",
        },
    ];
    return (
        <>
            <div className="ml-12 flex max-sm:block max-sm:ml-0">
                {arr.map((e) => {
                    return (
                        <div key={e.heading}>
                            <CardHero heading={e.heading} semiHeading={e.semiHeading} />
                        </div>
                    );
                })}
            </div>
            <div className="mt-12 flex max-sm:block">
                <div>
                    {arr2.map((e) => {
                        return (
                            <div key={e.heading} className="ml-12 mt-6 max-sm:ml-0">
                                <SideCards heading={e.heading} semiHeading={e.semiHeading} />
                            </div>
                        );
                    })}
                </div>
                <div className="mt-6 ml-5 rounded-xl bg-gray-100 max-sm:ml-0">
                    <div className="ml-24 mb-4 flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="mt-6 h-9 w-9"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                            />
                        </svg>
                        <span className="mt-7 ml-5 w-56 text-xl font-black text-gray-700">
                            New Orders
                        </span>
                        <div className="flex w-full place-content-end mr-4">
                            <p className="mt-7 mr-2 ml-5 cursor-pointer text-sky-600 text-end text-sm font-black text-gray-500">
                                View all
                            </p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="mt-[30px] h-4 w-4 text-sky-600"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="ml-4 mr-3">
                        <TableInfo />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroComponent;
