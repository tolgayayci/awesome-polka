import Link from "next/link";
import Image from "next/image";

import type { ReactElement } from "react";
import UserLayout from "../layouts/UserLayout";

export default function FourOhFour() {
  return (
    <section className="mb-16 container max-w-8xl mx-auto">
      <div className="py-26 md:py-48 min-h-screen md:min-h-0 border-4 border-indigo-900 bg-indigo-200 relative overflow-hidden rounded-2xl">
        <Image
          src="/banner-right.svg"
          alt="Bg"
          width={500}
          height={500}
          className="absolute top-0 md:h-full right-0 w-1/2 lg:w-1/3 opacity-60"
        />
        <Image
          src="/banner-left.svg"
          alt="Bg"
          width={500}
          height={500}
          className="absolute top-0 md:h-full left-0 w-1/2 lg:w-1/3 opacity-60"
        />
        <div className="container px-4 mx-auto relative">
          <div className="max-w-xl mx-auto">
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold font-heading text-indigo-900 mb-6">
              Error 404
            </h1>
            <h1 className="text-3xl sm:text-4xl xl:text-7xl font-extrabold font-heading mb-8">
              Page not found
            </h1>
            <p className="text-xl font-extrabold leading-7 mb-8">
              Something went wrong, please try again later.
            </p>
            <div className="flex flex-wrap items-center">
              <Link
                href="/"
                className="inline-block w-full md:w-auto py-4 px-6 mb-4 md:mb-0 md:mr-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-4 border-black shadow rounded transition duration-200"
              >
                Go back to Homepage
              </Link>

              <a
                className="inline-block w-full md:w-auto py-4 px-6 text-center leading-6 text-lg text-indigo-900 hover:text-white font-extrabold bg-white hover:bg-indigo-800 border-4 border-black shadow rounded transition duration-200"
                href="#"
              >
                Try Again
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FourOhFour.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
