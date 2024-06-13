import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.webp";
import auth from "../firebase/firebase.config";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const handleSignOut = async () => {
    const success = await signOut();
    if (success) {
      alert("Signout Successfully");
    }
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div className="flex-shrink-0">
                <a href="/">
                  <img className="h-16 w-auto" src={logo} alt="Your Company" />
                </a>
              </div>
              <div className="flex h-16 items-center justify-end ">
                <div className="flex items-center  ">
                  <div className="flex justify-end">
                    {user?.email ? (
                      <div className="hidden sm:ml-6 sm:block">
                        <div className="flex items-center">
                          {/* Profile dropdown */}
                          <Menu as="div" className="relative ml-3">
                            <div>
                              <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">Open user menu</span>
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src={user?.photoURL}
                                  alt=""
                                />
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                  {({ active }) => (
                                    <NavLink
                                      to="/dashboard/all-courses"
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      Dashboard
                                    </NavLink>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      to="/dashboard/profile"
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      Your Profile
                                    </Link>
                                  )}
                                </Menu.Item>

                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      onClick={handleSignOut}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      Sign out
                                    </a>
                                  )}
                                </Menu.Item>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      </div>
                    ) : (
                      <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                          <NavLink
                            to="/"
                            className={({ isActive }) =>
                              isActive
                                ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                                : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            }
                          >
                            Home
                          </NavLink>
                          <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                              isActive
                                ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                                : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            }
                          >
                            Dashboard
                          </NavLink>

                          <NavLink
                            to="/features"
                            className={({ isActive }) =>
                              isActive
                                ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                                : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            }
                          >
                            Features
                          </NavLink>
                          <NavLink
                            to="/about-us"
                            className={({ isActive }) =>
                              isActive
                                ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                                : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            }
                          >
                            About Us
                          </NavLink>

                          <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                              isActive
                                ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                                : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            }
                          >
                            Contact
                          </NavLink>
                          <NavLink
                            to="/login"
                            className={({ isActive }) =>
                              isActive
                                ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                                : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            }
                          >
                            Login
                          </NavLink>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="-mr-2 flex sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-2 gap-2 px-2 pb-3 pt-2 flex justify-center items-center flex-col">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "inline-block rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                    : "inline-block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/dashboard/all-courses"
                className={({ isActive }) =>
                  isActive
                    ? "inline-block rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                    : "inline-block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                as="a"
                to="/features"
                className={({ isActive }) =>
                  isActive
                    ? "inline-block rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                    : "inline-block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                }
              >
                Features
              </NavLink>

              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive
                    ? "inline-block rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                    : "inline-block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "inline-block rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                    : "inline-block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                }
              >
                Contact
              </NavLink>

              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "inline-block rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                    : "inline-block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                }
              >
                Login
              </NavLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
