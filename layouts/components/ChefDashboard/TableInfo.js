import React from "react";

const TableInfo = () => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Order Number
              </th>
              <th scope="col" className="px-6 py-3 w-48">
                Customer
              </th>
              <th scope="col" className="px-6 py-3">
                Total
              </th>
              <th scope="col" className="px-6 py-3">
                Paid
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                12/11/22
              </th>
              <td className="px-6 py-4">654321</td>
              <td className="px-6 py-4">Murphy, Kathryn</td>
              <td className="px-6 py-4">$500</td>
              <td className="px-6 py-4 text-right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </td>
              <td className="px-6 py-4">
                <span className="text-green-400">Accept</span>
              </td>
              <td className="px-6 py-4">
                <span className="font-bold text-center">. . .</span>
              </td>
              
            </tr>
            <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                12/11/22
              </th>
              <td className="px-6 py-4">654321</td>
              <td className="px-6 py-4">Murphy, Kathryn</td>
              <td className="px-6 py-4">$500</td>
              <td className="px-6 py-4 text-right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </td>
              <td className="px-6 py-4">
                <span className="text-green-400">Accept</span>
              </td>
              <td className="px-6 py-4">
                <span className="font-bold text-center">. . .</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableInfo;
