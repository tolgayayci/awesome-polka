// ** Next Imports
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// ** React Imports
import { useState } from "react";

// ** Custom Components
import SearchBar from "./SearchBar/SearchBar";

// ** Style Imports
import classNames from "classnames";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function Header() {
  const router = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserClicked, setIsUserClicked] = useState(false);

  return (
    <>
      <section>
        <div className="container mx-auto max-w-8xl px-8 lg:px-0">
          {isMobileMenuOpen ? (
            <div className="navbar-menu relative z-50">
              <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-50"></div>
              <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-full  max-w-sm py-8 px-8 bg-white border-r overflow-y-auto">
                <div className="flex flex-row items-center mb-8">
                  <Link
                    className="mr-auto text-2xl font-bold leading-none"
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Image
                      src="/Awesome_Lens_Logo.svg"
                      alt="Awesome Lens Logo"
                      width={250}
                      height={100}
                    />
                  </Link>
                  <button
                    className="navbar-close"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg
                      className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="my-auto">
                  <ul className="py-10">
                    <li className="mb-5">
                      <Link
                        href="/projects"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={classNames(
                          "text-2xl mr-10 font-extrabold hover:text-indigo-800",
                          {
                            "border-b-[3px] border-indigo-900 pb-2":
                              router.pathname === "/projects",
                          }
                        )}
                      >
                        Projects
                      </Link>
                    </li>
                    <li className="mb-5">
                      <Link
                        href="/ranking"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={classNames(
                          "text-2xl mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800",
                          {
                            "border-b-[3px] border-indigo-900 pb-2":
                              router.pathname === "/ranking",
                          }
                        )}
                      >
                        Ranking
                      </Link>
                    </li>
                    <li className="mb-5">
                      <Link
                        href="/articles"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={classNames(
                          "text-2xl mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800",
                          {
                            "border-b-[3px] border-indigo-900 pb-2":
                              router.pathname === "/articles",
                          }
                        )}
                      >
                        Articles
                      </Link>
                    </li>
                    <li className="mb-5">
                      <Link
                        href="/learn"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={classNames(
                          "text-2xl mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800",
                          {
                            "border-b-[3px] border-indigo-900 pb-2":
                              router.pathname === "/learn",
                          }
                        )}
                      >
                        Learn
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <SearchBar open={isSearchOpen} setOpen={setIsSearchOpen} />
                  <button
                    type="button"
                    className="text-indigo-900 text-[15px] w-full bg-white hover:bg-gray-100 border-[3px] border-indigo-900 font-bold rounded-xl text-sm px-5 py-3.5 text-center inline-flex items-center mr-2 mb-2"
                    onClick={() => (
                      setIsMobileMenuOpen(false), setIsSearchOpen(true)
                    )}
                  >
                    <MagnifyingGlassIcon
                      className="h-5 w-5 text-gray-800 font-extrabold mr-2"
                      aria-hidden="true"
                    />
                    Search on Awesome Lens
                  </button>
                </div>
                <div></div>
              </nav>
            </div>
          ) : null}
          <nav className="flex justify-between items-center py-12 relative">
            <Link
              href="/"
              className="text-3xl mr-10 2xl:mr-16 font-extrabold text-indigo-800"
            >
              <Image
                src="/Awesome_Lens_Logo.svg"
                height={100}
                width={250}
                alt="awesome lens logo"
              />
            </Link>
            <div className="xl:hidden">
              <button
                className="navbar-burger focus:outline-none text-indigo-900 hover:text-indigo-800"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <svg
                  className="block h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
            <ul className="hidden xl:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <li>
                <Link
                  href="/projects"
                  className={classNames(
                    "text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800",
                    {
                      "border-b-[3px] border-indigo-900 pb-3":
                        router.pathname === "/projects",
                    }
                  )}
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  href="/ranking"
                  className={classNames(
                    "text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800",
                    {
                      "border-b-[3px] border-indigo-900 pb-3":
                        router.pathname === "/ranking",
                    }
                  )}
                >
                  Ranking
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className={classNames(
                    "text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800",
                    {
                      "border-b-[3px] border-indigo-900 pb-3":
                        router.pathname === "/articles",
                    }
                  )}
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/learn"
                  className={classNames(
                    "text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800",
                    {
                      "border-b-[3px] border-indigo-900 pb-3":
                        router.pathname === "/learn",
                    }
                  )}
                >
                  Learn
                </Link>
              </li>
            </ul>
            <div className="hidden xl:flex items-center justify-end w-full max-w-sm">
              <SearchBar open={isSearchOpen} setOpen={setIsSearchOpen} />
              <button
                type="button"
                className="text-indigo-900 text-[15px] w-full bg-white hover:bg-gray-100 border-[3px] border-indigo-900 font-bold rounded-xl text-sm px-5 py-3.5 text-center inline-flex items-center mr-2"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <MagnifyingGlassIcon
                  className="h-5 w-5 text-gray-800 font-extrabold mr-2"
                  aria-hidden="true"
                />
                Search on Awesome Lens
              </button>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}
