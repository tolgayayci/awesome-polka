import React, { useState, useEffect } from "react";
import { useProjectStore } from "../../../../../data/store/projectStore";

// ** Form Imports */
import { useFormik } from "formik";
import { validateTokenSymbol } from "../../../../../utils/validation/coingeckoTokenValidation";
import { readProjectAttribute } from "../../../../../data/queries/readProjectAttribute";
import { updateProjectAttribute } from "../../../../../data/mutations/updateProjectAttribute";

//** Style Imports */
import {
  LightBulbIcon,
  CheckIcon,
  FireIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";
import Loader from "../../../Loader/Loader";

export default function Activity() {
  const [isLoading, setIsLoading] = useState(true);
  const project = useProjectStore((state) => state.project);

  async function check() {
    try {
      if (!project) {
        //TODO: Change parameter to project slug
        await readProjectAttribute("lens-protocol");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      tokenUrl: "",
    },
    validationSchema: validateTokenSymbol,
    onSubmit: async (values, actions) => {
      await updateProjectAttribute(
        project?.slug as string,
        "tokenSymbol",
        values.tokenUrl
      );
      actions.setSubmitting(false);
    },
  });

  useEffect(() => {
    check();
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <section className="container max-w-8xl mx-auto mt-7">
        <div className="flex space-x-8">
          <div className="w-2/3">
            <div className="border-[3px] border-indigo-900 rounded-lg px-12 py-16 bg-white">
              <form onSubmit={formik.handleSubmit}>
                <div className="space-y-8 divide-y divide-gray-200">
                  <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div className="space-y-6 sm:space-y-5">
                      <div>
                        <h3 className="text-2xl mb-3 font-semibold leading-6 text-indigo-700">
                          Token Stats
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500 mb-6">
                          This information will be displayed publicly so be
                          careful what you share.
                        </p>
                        {project?.tokenSymbol ? (
                          <div className="rounded-md bg-green-50 p-4 border-2 border-emerald-800 mb-6">
                            <div className="flex">
                              <div className="flex-shrink-0">
                                <CheckCircleIcon
                                  className="h-7 w-7 text-green-400"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="ml-3">
                                <h3 className="text-sm font-medium text-green-800">
                                  Your token analytics are shown on your project
                                  page
                                </h3>
                                <div className="mt-2 text-sm text-green-700">
                                  <a target="blank" className="hover:underline">
                                    {project?.tokenSymbol}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="rounded-md bg-yellow-50 p-4 border-2 border-yellow-400 mb-6">
                            <div className="flex">
                              <div className="flex-shrink-0">
                                <ExclamationTriangleIcon
                                  className="h-5 w-5 text-yellow-400"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="ml-3">
                                <h3 className="text-sm font-medium text-yellow-800">
                                  Token Analytics are not shown
                                </h3>
                                <div className="mt-2 text-sm text-yellow-700">
                                  <p>
                                    You can add a token analytics module to your
                                    page by adding a CoinGecko token page url.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="space-y-6 sm:space-y-5">
                        <div>
                          <label
                            htmlFor="tokenUrl"
                            className="block text-sm font-medium leading-6 text-gray-900 mb-3"
                          >
                            CoinGecko URL
                          </label>
                          <div className="relative mt-2 rounded-md shadow-sm">
                            <input
                              type="url"
                              name="tokenUrl"
                              id="tokenUrl"
                              className="block w-full rounded-md border-0 py-2 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              placeholder={
                                project?.tokenSymbol ||
                                "https://www.coingecko.com/en/coins/your-coin"
                              }
                              onChange={formik.handleChange}
                              value={formik.values.tokenUrl}
                            />
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                              {formik.errors.tokenUrl ? (
                                <XCircleIcon
                                  className="h-5 w-5 text-red-400"
                                  aria-hidden="true"
                                />
                              ) : (
                                <CheckCircleIcon
                                  className="h-5 w-5 text-green-400"
                                  aria-hidden="true"
                                />
                              )}
                            </div>
                          </div>
                          {formik.errors.tokenUrl && (
                            <p className="mt-2 text-sm text-red-600">
                              {formik.errors.tokenUrl}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5">
                    <div className="flex justify-end gap-x-3">
                      <button
                        type="button"
                        className="rounded-md bg-white py-2 px-3 text-sm font-semibold border border-red-500 text-red-500 shadow-sm hover:bg-gray-50"
                      >
                        Remove The Token
                      </button>
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-1/3">
            <div className="border-[3px] border-indigo-900 rounded-lg px-12 py-16 bg-white">
              <ul className="space-y-4">
                <li>
                  <h2 className="text-lg font-semibold mb-2 text-indigo-600 flex items-center">
                    <LightBulbIcon className="h-6 w-6 mr-2" />
                    Start with a hook
                  </h2>
                  <p className="text-gray-700 text-[14px]">
                    Your project page description should start with a hook that
                    grabs the reader attention and gives them a reason to keep
                    reading.
                  </p>
                </li>
                <li>
                  <h2 className="text-lg font-semibold mb-2 mt-8 text-indigo-600 flex items-center">
                    <CheckIcon className="h-6 w-6 mr-2" />
                    Highlight key features
                  </h2>
                  <p className="text-gray-700 text-[14px]">
                    Focus on the most important features or benefits of your
                    project that make it unique or valuable. This could include
                    a description of the problem your project solves or the
                    benefits it provides to users.
                  </p>
                </li>
                <li>
                  <h2 className="text-lg font-semibold mb-2 mt-8 text-indigo-600 flex items-center">
                    <FireIcon className="h-6 w-6 mr-2" />
                    Be concise and easy to read
                  </h2>
                  <p className="text-gray-700 text-[14px]">
                    Keep your description concise and easy to read by using
                    short paragraphs, bullet points, and headings to break up
                    the text. Avoid using jargon or technical terms that may
                    confuse readers who are not familiar with your project
                    domain.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
