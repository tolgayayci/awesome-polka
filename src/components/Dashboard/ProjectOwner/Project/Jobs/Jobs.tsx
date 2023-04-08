//** Style Imports */
import React, { useState, useEffect } from "react";
import { useProjectStore } from "../../../../../data/store/projectStore";

// ** Form Imports */
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import { FieldInputProps } from "formik";
import { readProjectAttribute } from "../../../../../data/queries/readProjectAttribute";
import { updateProjectAttribute } from "../../../../../data/mutations/updateProjectAttribute";
import { validateJobs } from "../../../../../utils/validation/jobsValidation";

import {
  LightBulbIcon,
  CheckIcon,
  FireIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import classNames from "classnames";
import Loader from "../../../Loader/Loader";

import { JobProps } from "../../../../../types/types";

export default function Jobs() {
  const project = useProjectStore((state) => state.project);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    check();
  });

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <section className="container max-w-8xl mx-auto mt-10">
        <div className="flex space-x-8">
          <div className="w-2/3">
            <div className="border-[3px] border-indigo-900 rounded-lg px-20 py-16 bg-white">
              <div>
                <div className="space-y-8 divide-y divide-gray-200">
                  <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div className="space-y-6 sm:space-y-5">
                      <div>
                        <h3 className="text-xl mb-2 font-semibold leading-6 text-indigo-700">
                          Job Advertisements
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500 mb-8">
                          This information will be displayed publicly so be
                          careful what you share.
                        </p>
                        <Formik
                          initialValues={{
                            jobs: (project?.openJobs &&
                              JSON.parse(project.openJobs.join(""))) || [
                              {
                                category: "",
                                title: "",
                                type: "",
                                remote: "",
                                location: "",
                                link: "",
                              } as JobProps,
                            ],
                          }}
                          validationSchema={validateJobs}
                          onSubmit={async (values, actions) => {
                            await updateProjectAttribute(
                              project?.slug as string,
                              "openJobs",
                              JSON.stringify(values.jobs)
                            );
                            actions.setSubmitting(false);
                          }}
                        >
                          {({ values, errors, touched }) => (
                            <Form>
                              <FieldArray
                                name="jobs"
                                render={(arrayHelpers) => (
                                  <div>
                                    {values.jobs && values.jobs.length > 0 ? (
                                      values.jobs.map(
                                        (jobs: JobProps, index: number) => (
                                          <div
                                            key={index}
                                            className="space-y-6 sm:space-y-5 shadow-2xl rounded-xl border-2 border-indigo-500 mb-8 p-12"
                                          >
                                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4sm:pt-8 pb-2">
                                              <div className="col-span-full border-l-4 border-indigo-400 bg-indigo-50 p-4 mb-2">
                                                <div className="flex">
                                                  <div className="ml-3">
                                                    <p className="text-sm text-indigo-700 font-semibold">
                                                      Advertisement {index + 1}
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-span-full">
                                                <label
                                                  htmlFor="title"
                                                  className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                  Title
                                                </label>
                                                <div className="mt-2">
                                                  <Field
                                                    name={`jobs.${index}.title`}
                                                  >
                                                    {({
                                                      field,
                                                    }: {
                                                      field: FieldInputProps<string>;
                                                    }) => (
                                                      <input
                                                        {...field}
                                                        type="text"
                                                        placeholder="Senior Frontend Engineer"
                                                        className={classNames(
                                                          "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2",
                                                          {
                                                            "ring-2 ring-red-500":
                                                              errors.jobs &&
                                                              touched.jobs,
                                                          }
                                                        )}
                                                      />
                                                    )}
                                                  </Field>
                                                  <ErrorMessage
                                                    name={`jobs.${index}.title`}
                                                    render={(msg) => (
                                                      <div className="text-red-500 text-sm mt-1">
                                                        {msg}
                                                      </div>
                                                    )}
                                                  />
                                                </div>
                                              </div>
                                              <div className="col-span-2">
                                                <label
                                                  htmlFor="category"
                                                  className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                  Category
                                                </label>
                                                <div className="mt-2">
                                                  <Field
                                                    name={`jobs.${index}.category`}
                                                  >
                                                    {({
                                                      field,
                                                    }: {
                                                      field: FieldInputProps<string>;
                                                    }) => (
                                                      <input
                                                        {...field}
                                                        type="text"
                                                        placeholder="Engineering"
                                                        className={classNames(
                                                          "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2",
                                                          {
                                                            "ring-2 ring-red-500":
                                                              errors.jobs &&
                                                              touched.jobs,
                                                          }
                                                        )}
                                                      />
                                                    )}
                                                  </Field>
                                                  <ErrorMessage
                                                    name={`jobs.${index}.category`}
                                                    render={(msg) => (
                                                      <div className="text-red-500 text-sm mt-1">
                                                        {msg}
                                                      </div>
                                                    )}
                                                  />
                                                </div>
                                              </div>
                                              <div className="col-span-1">
                                                <label
                                                  htmlFor="country"
                                                  className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                  Type
                                                </label>
                                                <div className="mt-2">
                                                  <Field
                                                    component="select"
                                                    name={`jobs.${index}.type`}
                                                    className={classNames(
                                                      "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6",
                                                      {
                                                        "ring-2 ring-red-500":
                                                          errors.jobs &&
                                                          touched.jobs,
                                                      }
                                                    )}
                                                  >
                                                    <option selected value="">
                                                      Select a type
                                                    </option>
                                                    <option value="Full Time">
                                                      Full Time
                                                    </option>
                                                    <option value="Part Time">
                                                      Part Time
                                                    </option>
                                                    <option value="Contract">
                                                      Contract
                                                    </option>
                                                  </Field>
                                                </div>
                                              </div>
                                              <div className="col-span-full">
                                                <label
                                                  htmlFor="title"
                                                  className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                  Job Advertisement URL
                                                </label>
                                                <div className="mt-2">
                                                  <Field
                                                    name={`jobs.${index}.link`}
                                                  >
                                                    {({
                                                      field,
                                                    }: {
                                                      field: FieldInputProps<string>;
                                                    }) => (
                                                      <input
                                                        {...field}
                                                        type="url"
                                                        placeholder="https://www.example.com"
                                                        className={classNames(
                                                          "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2",
                                                          {
                                                            "ring-2 ring-red-500":
                                                              errors.jobs &&
                                                              touched.jobs,
                                                          }
                                                        )}
                                                      />
                                                    )}
                                                  </Field>
                                                  <ErrorMessage
                                                    name={`jobs.${index}.link`}
                                                    render={(msg) => (
                                                      <div className="text-red-500 text-sm mt-1">
                                                        {msg}
                                                      </div>
                                                    )}
                                                  />
                                                </div>
                                              </div>
                                              <div className="col-span-2">
                                                <label
                                                  htmlFor="category"
                                                  className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                  Location
                                                </label>
                                                <div className="mt-2">
                                                  <Field
                                                    name={`jobs.${index}.location`}
                                                  >
                                                    {({
                                                      field,
                                                    }: {
                                                      field: FieldInputProps<string>;
                                                    }) => (
                                                      <input
                                                        {...field}
                                                        type="text"
                                                        placeholder="New York, NY"
                                                        className={classNames(
                                                          "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2",
                                                          {
                                                            "ring-2 ring-red-500":
                                                              errors.jobs &&
                                                              touched.jobs,
                                                          }
                                                        )}
                                                      />
                                                    )}
                                                  </Field>
                                                  <ErrorMessage
                                                    name={`jobs.${index}.location`}
                                                    render={(msg) => (
                                                      <div className="text-red-500 text-sm mt-1">
                                                        {msg}
                                                      </div>
                                                    )}
                                                  />
                                                </div>
                                              </div>
                                              <div className="col-span-1">
                                                <label
                                                  htmlFor="country"
                                                  className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                  Remote
                                                </label>
                                                <div className="mt-2">
                                                  <Field
                                                    as="select"
                                                    name={`jobs.${index}.remote`}
                                                    className={classNames(
                                                      "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6",
                                                      {
                                                        "ring-2 ring-red-500":
                                                          errors.jobs &&
                                                          touched.jobs,
                                                      }
                                                    )}
                                                  >
                                                    <option selected value="">
                                                      Select an option
                                                    </option>
                                                    <option value="Full Time">
                                                      Remote
                                                    </option>
                                                    <option value="On Site">
                                                      On Site
                                                    </option>
                                                    <option value="Hybrid">
                                                      Hybrid
                                                    </option>
                                                  </Field>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="flex justify-end">
                                              <button
                                                className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-1.5 px-4 rounded-l-xl border-indigo-900 border-2"
                                                type="button"
                                                onClick={() =>
                                                  arrayHelpers.remove(index)
                                                }
                                              >
                                                <MinusIcon className="h-5 w-5" />
                                              </button>
                                              <button
                                                className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-1.5 px-4 rounded-r-xl border-indigo-900 border-2 border-l-0"
                                                type="button"
                                                onClick={() =>
                                                  arrayHelpers.insert(index, "")
                                                }
                                              >
                                                <PlusIcon className="h-5 w-5" />
                                              </button>
                                            </div>
                                          </div>
                                        )
                                      )
                                    ) : (
                                      <button
                                        type="button"
                                        onClick={() => arrayHelpers.push("")}
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 mb-6 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                                      >
                                        Add Job Advertisement
                                      </button>
                                    )}

                                    <div className="flex pt-5 justify-end gap-x-3 border-t-2 border-indigo-600">
                                      <button
                                        type="button"
                                        className="rounded-md bg-white py-2 px-3 text-sm font-semibold border border-red-500 text-red-500 shadow-sm hover:bg-gray-50"
                                      >
                                        Remove The Job Advertisements
                                      </button>
                                      <button
                                        type="submit"
                                        className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                      >
                                        Update
                                      </button>
                                    </div>
                                  </div>
                                )}
                              />
                            </Form>
                          )}
                        </Formik>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
