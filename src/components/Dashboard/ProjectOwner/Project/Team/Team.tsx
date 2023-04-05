//** Style Imports */
import React, { useState, useEffect } from "react";
import { useProjectStore } from "../../../../../data/store/projectStore";

// ** Form Imports */
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import { FieldInputProps } from "formik";
import { readProjectAttribute } from "../../../../../data/queries/readProjectAttribute";
import { updateProjectAttribute } from "../../../../../data/mutations/updateProjectAttribute";
import { validateTeam } from "../../../../../utils/validation/teamValidation";

import {
  LightBulbIcon,
  CheckIcon,
  FireIcon,
  MinusIcon,
  PlusIcon,
  PhotoIcon,
} from "@heroicons/react/20/solid";
import classNames from "classnames";
import Loader from "../../../Loader/Loader";
import FileUpload from "../../../FileUpload/FileUpload";

import { TeamProps } from "../../../../../types/types";
//** Style Imports */

export default function Team() {
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
                          Your Awesome Team
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500 mb-6">
                          This information will be displayed publicly so be
                          careful what you share.
                        </p>
                        <Formik
                          initialValues={{
                            team: ((project?.team &&
                              JSON.parse(
                                project.team.join("")
                              )) as TeamProps[]) || [
                              {
                                name: "",
                                surname: "",
                                role: "",
                                image: "",
                                linkedIn: "",
                              } as TeamProps,
                            ],
                          }}
                          validationSchema={validateTeam}
                          onSubmit={async (values, actions) => {
                            await updateProjectAttribute(
                              project?.slug as string,
                              "team",
                              JSON.stringify(values.team)
                            );
                            actions.setSubmitting(false);
                          }}
                        >
                          {({ values, errors, touched }) => (
                            <Form>
                              <FieldArray
                                name="team"
                                render={(arrayHelpers) => (
                                  <div>
                                    {values.team && values.team.length > 0 ? (
                                      values.team.map(
                                        (team: TeamProps, index: number) => (
                                          <div
                                            key={index}
                                            className="space-y-6 sm:space-y-5"
                                          >
                                            <div className="mt-10 grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-6 border-t-2 border-indigo-500 pt-10">
                                              <div className="col-span-full border-l-4 border-indigo-400 bg-indigo-50 p-4">
                                                <div className="flex">
                                                  <div className="ml-3">
                                                    <p className="text-sm text-indigo-700 font-semibold">
                                                      Team Member {index + 1}
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="sm:col-span-full">
                                                <div className="col-span-full">
                                                  <label
                                                    htmlFor="cover-photo"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                  >
                                                    Profile photo
                                                  </label>
                                                  <Field
                                                    name={`team.${index}.image`}
                                                  >
                                                    {({
                                                      field,
                                                    }: {
                                                      field: FieldInputProps<string>;
                                                    }) => (
                                                      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                                        <FileUpload
                                                          setPath={(path) =>
                                                            arrayHelpers.replace(
                                                              index,
                                                              {
                                                                ...team,
                                                                image: path,
                                                              }
                                                            )
                                                          }
                                                        />
                                                      </div>
                                                    )}
                                                  </Field>
                                                  <ErrorMessage
                                                    name={`team.${index}.image`}
                                                    render={(msg) => (
                                                      <div className="text-red-500 text-sm mt-1">
                                                        {msg}
                                                      </div>
                                                    )}
                                                  />
                                                </div>
                                              </div>
                                              <div className="sm:col-span-3">
                                                <label
                                                  htmlFor="name"
                                                  className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                  First name
                                                </label>
                                                <div className="mt-2">
                                                  <Field
                                                    name={`team.${index}.name`}
                                                  >
                                                    {({
                                                      field,
                                                    }: {
                                                      field: FieldInputProps<string>;
                                                    }) => (
                                                      <input
                                                        {...field}
                                                        type="text"
                                                        placeholder="Arif"
                                                        className={classNames(
                                                          "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                                          {
                                                            "ring-2 ring-red-500":
                                                              errors.team &&
                                                              errors.team[
                                                                index
                                                              ] &&
                                                              (
                                                                errors.team[
                                                                  index
                                                                ] as TeamProps
                                                              ).name,
                                                          }
                                                        )}
                                                      />
                                                    )}
                                                  </Field>
                                                  <ErrorMessage
                                                    name={`team.${index}.name`}
                                                    render={(msg) => (
                                                      <div className="text-red-500 text-sm mt-1">
                                                        {msg}
                                                      </div>
                                                    )}
                                                  />
                                                </div>
                                              </div>
                                              <div className="sm:col-span-3">
                                                <label
                                                  htmlFor="surname"
                                                  className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                  Last name
                                                </label>
                                                <div className="mt-2">
                                                  <Field
                                                    name={`team.${index}.surname`}
                                                  >
                                                    {({
                                                      field,
                                                    }: {
                                                      field: FieldInputProps<string>;
                                                    }) => (
                                                      <input
                                                        {...field}
                                                        type="text"
                                                        placeholder="Işık"
                                                        className={classNames(
                                                          "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                                          {
                                                            "ring-2 ring-red-500":
                                                              errors.team &&
                                                              errors.team[
                                                                index
                                                              ] &&
                                                              (
                                                                errors.team[
                                                                  index
                                                                ] as TeamProps
                                                              ).surname,
                                                          }
                                                        )}
                                                      />
                                                    )}
                                                  </Field>
                                                  <ErrorMessage
                                                    name={`team.${index}.surname`}
                                                    render={(msg) => (
                                                      <div className="text-red-500 text-sm mt-1">
                                                        {msg}
                                                      </div>
                                                    )}
                                                  />
                                                </div>
                                              </div>
                                              <div className="sm:col-span-full">
                                                <label
                                                  htmlFor="surname"
                                                  className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                  LinkedIn Profile
                                                </label>
                                                <div className="mt-2">
                                                  <Field
                                                    name={`team.${index}.linkedIn`}
                                                  >
                                                    {({
                                                      field,
                                                    }: {
                                                      field: FieldInputProps<string>;
                                                    }) => (
                                                      <input
                                                        {...field}
                                                        type="url"
                                                        placeholder="https://www.linkedin.com/in/arif-isik"
                                                        className={classNames(
                                                          "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                                          {
                                                            "ring-2 ring-red-500":
                                                              errors.team &&
                                                              errors.team[
                                                                index
                                                              ] &&
                                                              (
                                                                errors.team[
                                                                  index
                                                                ] as TeamProps
                                                              ).linkedIn,
                                                          }
                                                        )}
                                                      />
                                                    )}
                                                  </Field>
                                                  <ErrorMessage
                                                    name={`team.${index}.linkedIn`}
                                                    render={(msg) => (
                                                      <div className="text-red-500 text-sm mt-1">
                                                        {msg}
                                                      </div>
                                                    )}
                                                  />
                                                </div>
                                              </div>
                                              <div className="sm:col-span-full">
                                                <label
                                                  htmlFor="surname"
                                                  className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                  Role
                                                </label>
                                                <div className="mt-2">
                                                  <Field
                                                    name={`team.${index}.role`}
                                                  >
                                                    {({
                                                      field,
                                                    }: {
                                                      field: FieldInputProps<string>;
                                                    }) => (
                                                      <input
                                                        {...field}
                                                        type="text"
                                                        placeholder="Co Founder"
                                                        className={classNames(
                                                          "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                                          {
                                                            "ring-2 ring-red-500":
                                                              errors.team &&
                                                              errors.team[
                                                                index
                                                              ] &&
                                                              (
                                                                errors.team[
                                                                  index
                                                                ] as TeamProps
                                                              ).role,
                                                          }
                                                        )}
                                                      />
                                                    )}
                                                  </Field>
                                                  <ErrorMessage
                                                    name={`team.${index}.role`}
                                                    render={(msg) => (
                                                      <div className="text-red-500 text-sm mt-1">
                                                        {msg}
                                                      </div>
                                                    )}
                                                  />
                                                </div>
                                              </div>
                                            </div>

                                            <div className="flex justify-end pt-4 pb-8">
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
                                        Add Team Member
                                      </button>
                                    )}

                                    <div className="flex pt-5 justify-end gap-x-3 border-t-2 border-indigo-600">
                                      <button
                                        type="button"
                                        className="rounded-md bg-white py-2 px-3 text-sm font-semibold border border-red-500 text-red-500 shadow-sm hover:bg-gray-50"
                                      >
                                        Remove Team Section
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
