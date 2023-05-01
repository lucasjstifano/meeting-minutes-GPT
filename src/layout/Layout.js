import React from "react";

const Layout = ({ children }) => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 mt-20 mb-20">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
        {/* <div
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <h1 className="text-orange-500">momGPT</h1>
        </div> */}
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
