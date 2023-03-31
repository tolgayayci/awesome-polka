//** Style Imports */
import React, { useState, useEffect } from "react";
import { useProjectStore } from "../../../../../data/store/projectStore";

// ** Form Imports */
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FieldInputProps } from "formik";
import { readProjectAttribute } from "../../../../../data/queries/readProjectAttribute";
import { updateProjectAttribute } from "../../../../../data/mutations/updateProjectAttribute";
import { validateDescription } from "../../../../../utils/validation/descriptionValidation";

import { LightBulbIcon, CheckIcon, FireIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import Loader from "../../../Loader/Loader";

import { DescriptionProps } from "../../../../../types/types";

//** Style Imports */

export default function ProjectDescription() {
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
      <section className="container max-w-8xl mx-auto mt-7">
        <div className="flex space-x-8">
          <div className="w-2/3">
            <div className="border-[3px] border-indigo-900 rounded-lg px-20 py-16 bg-white">
              <div>
                <div className="space-y-8 divide-y divide-gray-200">
                  <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div className="space-y-6 sm:space-y-5">
                      <div>
                        <h3 className="text-xl mb-2 font-semibold leading-6 text-indigo-700">
                          Description
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                          This information will be displayed publicly so be
                          careful what you share.
                        </p>
                        <Formik
                          initialValues={{
                            bio: project?.bio || "",
                            description: project?.description || "",
                          }}
                          validationSchema={validateDescription}
                          onSubmit={async (values, actions) => {
                            console.log(values);
                            await updateProjectAttribute(
                              project?.slug as string,
                              "bio",
                              values.bio
                            ).then(async (res) => {
                              if (res) {
                                await updateProjectAttribute(
                                  project?.slug as string,
                                  "description",
                                  values.description
                                );
                              }
                            });
                            actions.setSubmitting(false);
                          }}
                        >
                          {({ values, errors, touched }) => (
                            <Form>
                              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="col-span-full border-t-2 border-indigo-500 pt-8">
                                  <label
                                    htmlFor="bio"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Short Description
                                  </label>
                                  <div className="mt-2">
                                    <Field name="bio">
                                      {({
                                        field,
                                      }: {
                                        field: FieldInputProps<string>;
                                      }) => (
                                        <input
                                          {...field}
                                          type="text"
                                          placeholder="What is your question?"
                                          className={classNames(
                                            "lock w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2",
                                            {
                                              "ring-2 ring-red-500":
                                                errors.bio && touched.bio,
                                            }
                                          )}
                                        />
                                      )}
                                    </Field>
                                    <ErrorMessage
                                      name="bio"
                                      render={(msg) => (
                                        <div className="text-red-500 text-sm mt-1">
                                          {msg}
                                        </div>
                                      )}
                                    />
                                  </div>
                                </div>
                                <div className="col-span-full">
                                  <label
                                    htmlFor="description"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Long Description
                                  </label>
                                  <div className="mt-2">
                                    <Field name="description">
                                      {({
                                        field,
                                      }: {
                                        field: FieldInputProps<string>;
                                      }) => (
                                        <textarea
                                          {...field}
                                          placeholder="What is your question?"
                                          rows={6}
                                          className={classNames(
                                            "lock w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2",
                                            {
                                              "ring-2 ring-red-500":
                                                errors.description &&
                                                touched.description,
                                            }
                                          )}
                                        />
                                      )}
                                    </Field>
                                    <ErrorMessage
                                      name="description"
                                      render={(msg) => (
                                        <div className="text-red-500 text-sm mt-1">
                                          {msg}
                                        </div>
                                      )}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex pt-5 justify-end gap-x-3 border-t-2 border-indigo-600 mt-8">
                                <button
                                  type="button"
                                  className="rounded-md bg-white py-2 px-3 text-sm font-semibold border border-red-500 text-red-500 shadow-sm hover:bg-gray-50"
                                >
                                  Cancel
                                </button>
                                <button
                                  type="submit"
                                  className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                  Update Description
                                </button>
                              </div>
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
