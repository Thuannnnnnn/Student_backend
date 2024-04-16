import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-800 pt-4 pb-1 xl:pt-8">
        <div className="max-w-screen-lg px-4 mx-auto text-gray-400 xl:max-w-screen-xl sm:px-6 md:px-8 dark:text-gray-300">
          <ul className="flex flex-wrap justify-center pb-1 text-xs lg:text-lg font-light">
            <li className="w-1/2 md:w-1/3 lg:w-1/3">
              <div className="text-center">
                <h2 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                  Components
                </h2>
                <ul>
                  <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                    <a href="/">Elements</a>
                  </li>
                  <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                    <a href="/">Forms</a>
                  </li>
                  <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                    <a href="/">Commerces</a>
                  </li>
                  <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                    <a href="/">Navigation</a>
                  </li>
                </ul>
              </div>
            </li>
            <div>
              <li className="w-1/2 md:w-1/3 lg:w-1/3">
                <div className="text-center">
                  <h2 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                    Contacts
                  </h2>
                  <ul>
                    <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="/">Github</a>
                    </li>
                    <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="/">Facebook</a>
                    </li>
                    <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="/">Twitter</a>
                    </li>
                    <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="/">LinkedIn</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="w-1/2 md:w-1/3 lg:w-1/3"></li>
            </div>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
