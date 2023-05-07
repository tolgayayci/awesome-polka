import Link from "next/link";

import Loader from "../../../Dashboard/Loader/Loader";
import { useCheckUser } from "../../../../hooks/useCheckUser";
import { useCheckProject } from "../../../../hooks/useCheckProject";

import Table from "./Table/Table";
import { ModelArticleConnection } from "../../../../API";

export default function Articles() {
  const { user, isLoading } = useCheckUser();
  const { project } = useCheckProject(user?.project?.items[0]?.slug || "");

  if (isLoading && !project) {
    return <Loader />;
  }

  return (
    <>
      <section className="container max-w-8xl mx-auto mt-10">
        <div className="flex justify-center gap-10">
          <div className="w-1/3 border-[3px] border-indigo-800 rounded-lg">
            <div className="relative bg-white px-4 py-10 sm:rounded-3xl sm:px-10">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-indigo-500">
                  Try New Editor
                </h3>
                <Link
                  className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 bg-indigo-900 text-white hover:bg-indigo-700"
                  href="/dashboard/articles/editor"
                >
                  <span>
                    Create New Article <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </div>
              <h4 className="sr-only">All-access features</h4>
              <ul className="mt-10 space-y-8 border-t border-indigo-900/10 pt-10 text-[15px] leading-6 text-slate-700">
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 32 32"
                    className="h-8 w-8 flex-none"
                  >
                    <path fill="#fff" d="M0 0h32v32H0z"></path>
                    <path
                      fill="#E0F2FE"
                      d="M23 22l7-4v7l-7 4v-7zM9 22l7-4v7l-7 4v-7zM16 11l7-4v7l-7 4v-7zM2 18l7 4v7l-7-4v-7zM9 7l7 4v7l-7-4V7zM16 18l7 4v7l-7-4v-7z"
                    ></path>
                    <path
                      fill="#0EA5E9"
                      d="M16 3l.372-.651a.75.75 0 00-.744 0L16 3zm7 4h.75a.75.75 0 00-.378-.651L23 7zM9 7l-.372-.651A.75.75 0 008.25 7H9zM2 18l-.372-.651A.75.75 0 001.25 18H2zm28 0h.75a.75.75 0 00-.378-.651L30 18zm0 7l.372.651A.75.75 0 0030.75 25H30zm-7 4l-.372.651a.75.75 0 00.744 0L23 29zM9 29l-.372.651a.75.75 0 00.744 0L9 29zm-7-4h-.75c0 .27.144.518.378.651L2 25zM15.628 3.651l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm-.744 7l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm20.256-4l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm13.256 5.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zM30.75 25v-7h-1.5v7h1.5zm-15.122-.651l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zM2.75 25v-7h-1.5v7h1.5zm14 0v-7h-1.5v7h1.5zM8.25 7v7h1.5V7h-1.5zm14 0v7h1.5V7h-1.5zm-7 4v7h1.5v-7h-1.5zm-7 11v7h1.5v-7h-1.5zm14 0v7h1.5v-7h-1.5z"
                    ></path>
                  </svg>
                  <p className="ml-5">
                    <strong className="font-semibold text-indigo-700">
                      Built-in Editor Support
                    </strong>{" "}
                    — everything you need to build beautiful application UIs,
                    marketing sites, ecommerce stores, and more.
                  </p>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 32 32"
                    className="h-8 w-8 flex-none"
                  >
                    <path fill="#fff" d="M0 0h32v32H0z"></path>
                    <rect
                      width="23"
                      height="22"
                      x="3"
                      y="5"
                      stroke="#0EA5E9"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      rx="2"
                    ></rect>
                    <rect
                      width="10"
                      height="18"
                      x="19"
                      y="9"
                      fill="#E0F2FE"
                      stroke="#0EA5E9"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      rx="2"
                    ></rect>
                    <circle cx="6" cy="8" r="1" fill="#0EA5E9"></circle>
                    <circle cx="9" cy="8" r="1" fill="#0EA5E9"></circle>
                    <path
                      stroke="#0EA5E9"
                      stroke-width="1.5"
                      d="M3 11h16"
                    ></path>
                  </svg>
                  <p className="ml-5">
                    <strong className="font-semibold text-indigo-700">
                      External Article Sharing
                    </strong>{" "}
                    — beautifully designed, expertly crafted website templates
                    built with modern technologies like React and Next.js.
                  </p>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 32 32"
                    className="h-8 w-8 flex-none"
                  >
                    <path fill="#fff" d="M0 0h32v32H0z"></path>
                    <path
                      fill="#E0F2FE"
                      d="M13.168 18.828a4 4 0 110-5.656L15.997 16l1.5-1.5 1.328-1.328a4 4 0 110 5.656L15.996 16l-1.499 1.5-1.329 1.328z"
                    ></path>
                    <path
                      stroke="#0EA5E9"
                      stroke-linecap="round"
                      stroke-width="1.5"
                      d="M14.497 17.5l-1.329 1.328a4 4 0 110-5.656l5.657 5.656a4 4 0 100-5.656L17.496 14.5"
                    ></path>
                    <circle
                      cx="16"
                      cy="16"
                      r="14"
                      stroke="#0EA5E9"
                      stroke-width="1.5"
                    ></circle>
                  </svg>
                  <p className="ml-5">
                    <strong className="font-semibold text-indigo-700">
                      A Dozen of Share Buttons
                    </strong>{" "}
                    — get instant access to everything we have today, plus any
                    new components and templates we add in the future.
                  </p>
                </li>
              </ul>
              <div className="relative mt-10 flex rounded-xl border border-indigo-600/10 bg-indigo-50 p-6">
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 flex-none"
                  stroke="#94A3B8"
                  stroke-width="1.5"
                >
                  <circle
                    cx="11"
                    cy="16"
                    r="3.25"
                    fill="#94A3B8"
                    fill-opacity=".2"
                  ></circle>
                  <circle
                    cx="21"
                    cy="13"
                    r="3.25"
                    fill="#94A3B8"
                    fill-opacity=".2"
                  ></circle>
                  <path
                    d="M28.909 19c.223-.964.341-1.968.341-3 0-7.318-5.932-13.25-13.25-13.25S2.75 8.682 2.75 16c0 1.032.118 2.036.341 3"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="m18.031 29.016-2.187.109s-1.475-.118-1.827-.29c-1.049-.51-.579-2.915 0-3.95 1.157-2.064 3.752-5.135 7.125-5.135h.024c2.5 0 4.404 1.687 5.692 3.401-1.963 2.975-5.161 5.276-8.827 5.865Z"
                    fill="#94A3B8"
                    fill-opacity=".2"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="m14.001 24.913.016-.027c.26-.465.593-.98.991-1.5-1.042-.918-2.374-1.636-3.988-1.636H11c-2.094 0-3.847 1.208-5.055 2.492a12.987 12.987 0 0 0 7.987 4.595l.057-.016c-1.004-.534-.555-2.868.012-3.908Z"
                    fill="#94A3B8"
                    fill-opacity=".2"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <p className="ml-5 text-sm leading-6 text-indigo-700">
                  <strong className="font-semibold text-indigo-900">
                    Available for teams
                  </strong>{" "}
                  — get access to all of our components and templates plus any
                  future updates for your entire team.
                </p>
              </div>
            </div>
          </div>
          <div className="w-2/3">
            {(project?.articles?.items.length as number) > 0 ? (
              <div className="border-[3px] border-indigo-800 rounded-lg px-16 pt-16 h-full">
                <h2 className="text-2xl font-bold mb-6 text-indigo-700 border-b-[3px] border-indigo-700 pb-4 max-w-xs">
                  Published Articles
                </h2>
                <Table articles={project?.articles as ModelArticleConnection} />
              </div>
            ) : (
              <Link href="/dashboard/articles/editor">
                <button
                  type="button"
                  className="relative block w-full rounded-lg border-2 border-dashed border-indigo-300 p-36 text-center hover:border-indigo-700 h-full"
                >
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
                    />
                  </svg>
                  <span className="mt-2 block text-sm font-semibold text-indigo-700">
                    You have no articles yet. Create one now!
                  </span>
                </button>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
