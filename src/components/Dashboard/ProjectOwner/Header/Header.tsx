// ** Next Imports
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import LoginButton from "../../../Public/Login/Login";

// ** Style Imports
import classNames from "classnames";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function ProjectOwner() {
  const router = useRouter();
  const currentPage = router.pathname.split("/");

  // useEffect(() => {
  //   console.log(ethers.Wallet.createRandom().privateKey);
  // });

  return (
    <>
      <section className="container mx-auto max-w-8xl">
        <nav className="border-gray-200 py-7">
          <div className="flex flex-wrap justify-between items-center py-2.5">
            <Link href="/" className="flex">
              <Image
                src="/Awesome_Lens_Logo.svg"
                width={250}
                height={100}
                alt="Awesome Lens Logo"
              />
            </Link>
            <div className="flex items-center">
              <LoginButton />
            </div>
          </div>
        </nav>

        <nav className="border-b border-gray-200 dark:border-gray-700 bg-indigo-700 rounded-lg py-1">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 ">
            <li className="flex items-center mr-2 ml-2">
              <Link
                href="/dashboard"
                className={classNames(
                  "inline-flex p-4 border-b-2 border-transparent rounded-t-lg text-white ",
                  {
                    "inline-flex p-3 bg-indigo-200 text-indigo-700 rounded-lg active":
                      router.pathname === "/dashboard",
                  }
                )}
                aria-current="page"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-2 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                Dashboard
              </Link>
            </li>
            <li className="flex items-center mr-2">
              <Link
                href="/dashboard/project"
                className={classNames(
                  "inline-flex p-4 border-b-2 border-transparent rounded-t-lg text-white group",
                  {
                    "inline-flex p-3 bg-indigo-200 text-indigo-700 rounded-lg active":
                      router.pathname.startsWith("/dashboard/project"),
                  }
                )}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                </svg>
                Project Detail
              </Link>
            </li>
            <li className="flex items-center mr-2">
              <Link
                href="/dashboard/articles"
                className={classNames(
                  "inline-flex p-4 border-b-2 border-transparent rounded-t-lg text-white group",
                  {
                    "inline-flex p-3 bg-indigo-200 text-indigo-700 rounded-lg active":
                      router.pathname.startsWith("/dashboard/articles"),
                  }
                )}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Articles
              </Link>
            </li>
            <li className="flex items-center mr-2">
              <Link
                href="/dashboard/profile"
                className={classNames(
                  "inline-flex p-4 border-b-2 border-transparent rounded-t-lg text-white group",
                  {
                    "inline-flex p-3 bg-indigo-200 text-indigo-700 rounded-lg active":
                      router.pathname === "/dashboard/profile",
                  }
                )}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Profile
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="mt-6">
          <div className="border-[3px] border-indigo-900 mb-6 px-12 py-10 rounded-lg bg-indigo-200/40">
            <div>
              <nav className="hidden sm:flex" aria-label="Breadcrumb">
                <ol role="list" className="flex items-center space-x-4">
                  <li>
                    <div className="flex">
                      <Link
                        href="/dashboard"
                        className="text-sm font-medium text-black  hover:text-indigo-600"
                      >
                        Awesome Lens
                      </Link>
                    </div>
                  </li>
                  {currentPage.slice(1).map((page, index) => {
                    return (
                      <li key={index}>
                        <div className="flex items-center">
                          <ChevronRightIcon
                            className="h-5 w-5 flex-shrink-0 text-gray-500"
                            aria-hidden="true"
                          />
                          <Link
                            href={`/${currentPage
                              .slice(1, index + 2)
                              .join("/")}`}
                            className="ml-4 text-sm font-medium text-indigo-600 capitalize"
                          >
                            {page}
                          </Link>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </nav>
            </div>
            <div className="md:flex md:items-center md:justify-between">
              <div className="min-w-0 flex-1 mt-4">
                <h2 className="text-3xl font-bold leading-7 text-indigo-700 sm:truncate sm:text-4xl sm:tracking-tight capitalize">
                  {currentPage.pop()}
                </h2>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
