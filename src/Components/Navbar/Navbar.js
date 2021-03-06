import React from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { CartIcon, FavIcon } from "../../Assets/Navbar/Icons";
import { AppContext } from "../../utils/ContextWrapper";
import cx from "classnames";

const navigation = [
  { name: "Product", current: true },
  { name: "Categories", current: false },
  { name: "Orders", current: false },
  { name: "About Us", current: false },
];

export default function Navbar() {
  const context = React.useContext(AppContext);
  return (
    <>
      <div className="h-16 w-full"></div>
      <Disclosure
        as="nav"
        className={cx(
          context.name === "Async" ? `${context.bgColor}` : "bg-gaveit-fourth",
          "fixed w-full top-0 z-10"
        )}
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-6">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <div activeClassName={`${context.textSecondaryColor}`}>
                      <context.logo className="hidden lg:block text-black" />
                    </div>
                    {/*
                        Logo
                    className= */}
                  </div>
                  <div className="hidden lg:flex  sm:flex sm:ml-6">
                    <div className="flex space-x-4 items-center justify-center">
                      {navigation.map((item, idx) => (
                        <div
                          activeClassName={`${context.textSecondaryColor}`}
                          className={cx(
                            `${context.textPrimaryColor} text-xl px-2 py-3 no-underline relative font-medium hover:cursor-pointer 
                          navbar-link`,
                            context.name === "Async"
                              ? "after:bg-pink-600"
                              : "after:bg-yellow-600"
                          )}
                          key={idx}
                        >
                          <span key={item.name}>{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-3">
                  {/* Fav Icon */}
                  <div
                    activeClassName="text-pink-500"
                    className={cx(
                      `p-1 rounded-full text-gray-600 hover:cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2`,
                      context.name === "Async"
                        ? "hover:text-pink-500"
                        : "hover:text-white"
                    )}
                  >
                    <FavIcon />
                  </div>
                  <div
                    activeClassName="text-pink-500"
                    className={cx(
                      `p-1 rounded-full text-gray-600 hover:cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2`,
                      context.name === "Async"
                        ? "hover:text-pink-500"
                        : "hover:text-white"
                    )}
                  >
                    {/* Cart Icon */}
                    <CartIcon />
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item, idx) => (
                  <div activeClassName="text-pink-500" key={idx}>
                    <span
                      key={item.name}
                      className={cx(
                        "text-black font-medium bg-gray-200 hover:bg-pink-500 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                    >
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
