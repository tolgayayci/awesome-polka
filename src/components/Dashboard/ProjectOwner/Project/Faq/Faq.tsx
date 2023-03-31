//** Style Imports */
import React, { useState, useEffect } from "react";
import { useProjectStore } from "../../../../../data/store/projectStore";

// ** Form Imports */
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import { FieldInputProps } from "formik";
import { readProjectAttribute } from "../../../../../data/queries/readProjectAttribute";
import { updateProjectAttribute } from "../../../../../data/mutations/updateProjectAttribute";
import { validateFaq } from "../../../../../utils/validation/faqValidation";

import {
  LightBulbIcon,
  CheckIcon,
  FireIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import classNames from "classnames";
import Loader from "../../../Loader/Loader";

import { FaqProps } from "../../../../../types/types";

export default function Faq() {
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
      <section className="container max-w-8xl mx-auto mt-7 mb-20">
        <div className="flex space-x-8">
          <div className="w-2/3">
            <div className="border-[3px] border-indigo-900 rounded-lg px-20 py-16 bg-white">
              <div>
                <div className="space-y-8 divide-y divide-gray-200">
                  <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div className="space-y-6 sm:space-y-5">
                      <div>
                        <h3 className="text-xl mb-2 font-semibold leading-6 text-indigo-700">
                          Frequently Asked Questions
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500 mb-6">
                          This information will be displayed publicly so be
                          careful what you share.
                        </p>
                        <Formik
                          initialValues={{
                            faqs: (project?.faq &&
                              JSON.parse(project.faq.join(""))) || [
                              { question: "", answer: "" },
                            ],
                          }}
                          validationSchema={validateFaq}
                          onSubmit={async (values, actions) => {
                            await updateProjectAttribute(
                              project?.slug as string,
                              "faq",
                              JSON.stringify(values.faqs)
                            );
                            actions.setSubmitting(false);
                          }}
                        >
                          {({ values, errors, touched }) => (
                            <Form>
                              <FieldArray
                                name="faqs"
                                render={(arrayHelpers) => (
                                  <div>
                                    {values.faqs && values.faqs.length > 0 ? (
                                      values.faqs.map(
                                        (faq: FaqProps, index: number) => (
                                          <div
                                            key={index}
                                            className="space-y-6 sm:space-y-5"
                                          >
                                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t-2 sm:border-indigo-500 sm:pt-8">
                                              <div className="col-span-full border-l-4 border-indigo-400 bg-indigo-50 p-4 mb-6">
                                                <div className="flex">
                                                  <div className="ml-3">
                                                    <p className="text-sm text-indigo-700 font-semibold">
                                                      Question {index + 1}
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                              <label
                                                htmlFor="bio"
                                                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                                              >
                                                Question
                                              </label>
                                              <div className="mt-2 sm:col-span-2 sm:mt-0">
                                                <Field
                                                  name={`faqs.${index}.question`}
                                                >
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
                                                        "block w-full max-w-xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2",
                                                        {
                                                          "ring-2 ring-red-500":
                                                            errors.faqs &&
                                                            touched.faqs,
                                                        }
                                                      )}
                                                    />
                                                  )}
                                                </Field>
                                                <ErrorMessage
                                                  name={`faqs.${index}.question`}
                                                  render={(msg) => (
                                                    <div className="text-red-500 text-sm mt-1">
                                                      {msg}
                                                    </div>
                                                  )}
                                                />
                                              </div>
                                            </div>

                                            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5 pb-5">
                                              <label
                                                htmlFor="about"
                                                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                                              >
                                                Answer
                                              </label>
                                              <div className="mt-2 sm:col-span-2 sm:mt-0">
                                                <Field
                                                  name={`faqs.${index}.answer`}
                                                >
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
                                                        "block w-full max-w-xl rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6 pl-2",
                                                        {
                                                          "ring-2 ring-red-500":
                                                            errors.faqs &&
                                                            touched.faqs,
                                                        }
                                                      )}
                                                    />
                                                  )}
                                                </Field>
                                                <ErrorMessage
                                                  name={`faqs.${index}.answer`}
                                                  render={(msg) => (
                                                    <div className="text-red-500 text-sm mt-1">
                                                      {msg}
                                                    </div>
                                                  )}
                                                />
                                                <p className="mt-2 text-sm text-gray-500">
                                                  Write a paragraph about your
                                                  project.
                                                </p>
                                              </div>
                                            </div>

                                            <div className="flex justify-end pb-8">
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
                                        Add Question
                                      </button>
                                    )}

                                    <div className="flex pt-5 justify-end gap-x-3 border-t-2 border-indigo-600">
                                      <button
                                        type="button"
                                        className="rounded-md bg-white py-2 px-3 text-sm font-semibold border border-red-500 text-red-500 shadow-sm hover:bg-gray-50"
                                      >
                                        Remove The FAQ
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
