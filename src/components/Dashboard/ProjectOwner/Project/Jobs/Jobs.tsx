//** React */
import React from "react";

// ** Form & Validation */
import {
  Formik,
  Form,
  Field,
  FieldArray,
  ErrorMessage,
  FormikHelpers,
  FieldInputProps,
} from "formik";
import { validateJobs } from "../../../../../utils/validation/jobsValidation";
import type { JobItem, JobProps } from "../../../../../types/types";

//** Data */
import { useCheckProject } from "../../../../../hooks/useCheckProject";
import { updateProjectAttribute } from "../../../../../data/mutations/updateProjectAttribute";

//** Custom */
import Loader from "../../../Loader/Loader";
import SideNav from "../../SideNav/SideNav";
import classNames from "classnames";
import {
  XCircleIcon,
  CheckCircleIcon,
  PlusCircleIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";

export default function Jobs() {
  const { project, isLoading } = useCheckProject("lens-protocol");

  // This is an async function that handles the form submission for updating a project's description.
  async function handleSubmit(
    values: JobProps,
    actions: FormikHelpers<JobProps> // The `actions` parameter is an object with utility functions for handling the form submission, such as `setSubmitting`
  ) {
    try {
      // Call the `updateProjectAttribute` function with an object containing the project slug and the `openJobs` fields from the `values` parameter.
      await updateProjectAttribute({
        slug: project?.slug as string,
        openJobs: values.jobs.map((job) => JSON.stringify(job)),
      });
      actions.setStatus({ success: true });
    } catch (error) {
      actions.setStatus({ success: false });
    } finally {
      actions.setSubmitting(false);
    }
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <section className="container max-w-8xl mx-auto mt-10">
        <div className="flex space-x-8">
          <div className="w-2/3">
            <div className="rounded-lg bg-white">
              <div>
                <div className="space-y-8 divide-y divide-gray-200">
                  <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div className="space-y-6 sm:space-y-5">
                      <div>
                        <div className="pl-5 py-2 border-l-[3px]  border-l-indigo-700">
                          <h3 className="text-xl mb-2 font-semibold leading-6 text-indigo-700">
                            Job Advertisements
                          </h3>
                          <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            This information will be displayed publicly so be
                            careful what you share.
                          </p>
                        </div>
                        <Formik
                          initialValues={{
                            jobs: project?.openJobs?.map(
                              (job) => JSON.parse(job as string) as JobItem
                            ) || [
                              {
                                category: "",
                                title: "",
                                type: "",
                                remote: "",
                                location: "",
                                link: "",
                              } as JobItem,
                            ],
                          }}
                          validationSchema={validateJobs}
                          onSubmit={async (values, actions) => {
                            await handleSubmit(values, actions);
                          }}
                        >
                          {({
                            values,
                            errors,
                            status,
                            dirty,
                            isSubmitting,
                            touched,
                            resetForm,
                          }) => (
                            <Form>
                              <FieldArray
                                name="jobs"
                                render={(arrayHelpers) => (
                                  <div>
                                    {values.jobs && values.jobs.length > 0 ? (
                                      values.jobs.map(
                                        (job: JobItem, index: number) => (
                                          <div
                                            key={index}
                                            className="space-y-6 sm:space-y-5"
                                          >
                                            <div className="border-[3px] border-indigo-700 shadow-2xl rounded-lg p-16 my-8">
                                              <div className="grid grid-cols-3 gap-y-4 gap-x-6">
                                                <div className="col-span-full border-l-4 border-indigo-400 bg-indigo-50 p-4 mb-2">
                                                  <div className="flex">
                                                    <div className="ml-3">
                                                      <p className="text-sm text-indigo-700 font-semibold">
                                                        Advertisement{" "}
                                                        {index + 1}
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-span-full">
                                                  <label
                                                    htmlFor={`jobs.${index}.title`}
                                                    className="block text-sm font-medium leading-6 text-indigo-700"
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
                                                            "w-full rounded-md border-2 border-indigo-500 py-1.5 text-gray-900 placeholder:text-gray-600 text-sm leading-6 pl-2 focus:ring-0",
                                                            {
                                                              "ring-2 ring-red-500 border-none focus:ring-2":
                                                                errors.jobs &&
                                                                errors.jobs[
                                                                  index
                                                                ] &&
                                                                (
                                                                  errors.jobs[
                                                                    index
                                                                  ] as JobItem
                                                                ).title,
                                                            }
                                                          )}
                                                        />
                                                      )}
                                                    </Field>
                                                    <ErrorMessage
                                                      name={`jobs.${index}.title`}
                                                      render={(msg) => (
                                                        <div className="text-red-500 text-sm mt-2">
                                                          {msg}
                                                        </div>
                                                      )}
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-span-2">
                                                  <label
                                                    htmlFor={`jobs.${index}.category`}
                                                    className="block text-sm font-medium leading-6 text-indigo-700"
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
                                                            "w-full rounded-md border-2 border-indigo-500 py-1.5 text-gray-900 placeholder:text-gray-600 text-sm leading-6 pl-2 focus:ring-0",
                                                            {
                                                              "ring-2 ring-red-500 border-none focus:ring-2":
                                                                errors.jobs &&
                                                                errors.jobs[
                                                                  index
                                                                ] &&
                                                                (
                                                                  errors.jobs[
                                                                    index
                                                                  ] as JobItem
                                                                ).category,
                                                            }
                                                          )}
                                                        />
                                                      )}
                                                    </Field>
                                                    <ErrorMessage
                                                      name={`jobs.${index}.category`}
                                                      render={(msg) => (
                                                        <div className="text-red-500 text-sm mt-2">
                                                          {msg}
                                                        </div>
                                                      )}
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-span-1">
                                                  <label
                                                    htmlFor={`jobs.${index}.type`}
                                                    className="block text-sm font-medium leading-6 text-indigo-700"
                                                  >
                                                    Type
                                                  </label>
                                                  <div className="mt-2">
                                                    <Field
                                                      component="select"
                                                      name={`jobs.${index}.type`}
                                                      className={classNames(
                                                        "w-full rounded-md border-2 border-indigo-500 py-1.5 text-gray-900 placeholder:text-gray-600 text-sm leading-6 pl-2 focus:ring-0",
                                                        {
                                                          "ring-2 ring-red-500 border-none focus:ring-2":
                                                            errors.jobs &&
                                                            errors.jobs[
                                                              index
                                                            ] &&
                                                            (
                                                              errors.jobs[
                                                                index
                                                              ] as JobItem
                                                            ).type,
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
                                                    <ErrorMessage
                                                      name={`jobs.${index}.type`}
                                                      render={(msg) => (
                                                        <div className="text-red-500 text-sm mt-2">
                                                          {msg}
                                                        </div>
                                                      )}
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-span-full">
                                                  <label
                                                    htmlFor={`jobs.${index}.link`}
                                                    className="block text-sm font-medium leading-6 text-indigo-700"
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
                                                            "w-full rounded-md border-2 border-indigo-500 py-1.5 text-gray-900 placeholder:text-gray-600 text-sm leading-6 pl-2 focus:ring-0",
                                                            {
                                                              "ring-2 ring-red-500 border-none focus:ring-2":
                                                                errors.jobs &&
                                                                errors.jobs[
                                                                  index
                                                                ] &&
                                                                (
                                                                  errors.jobs[
                                                                    index
                                                                  ] as JobItem
                                                                ).link,
                                                            }
                                                          )}
                                                        />
                                                      )}
                                                    </Field>
                                                    <ErrorMessage
                                                      name={`jobs.${index}.link`}
                                                      render={(msg) => (
                                                        <div className="text-red-500 text-sm mt-2">
                                                          {msg}
                                                        </div>
                                                      )}
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-span-2">
                                                  <label
                                                    htmlFor={`jobs.${index}.location`}
                                                    className="block text-sm font-medium leading-6 text-indigo-700"
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
                                                            "w-full rounded-md border-2 border-indigo-500 py-1.5 text-gray-900 placeholder:text-gray-600 text-sm leading-6 pl-2 focus:ring-0",
                                                            {
                                                              "ring-2 ring-red-500 border-none focus:ring-2":
                                                                errors.jobs &&
                                                                errors.jobs[
                                                                  index
                                                                ] &&
                                                                (
                                                                  errors.jobs[
                                                                    index
                                                                  ] as JobItem
                                                                ).location,
                                                            }
                                                          )}
                                                        />
                                                      )}
                                                    </Field>
                                                    <ErrorMessage
                                                      name={`jobs.${index}.location`}
                                                      render={(msg) => (
                                                        <div className="text-red-500 text-sm mt-2">
                                                          {msg}
                                                        </div>
                                                      )}
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-span-1">
                                                  <label
                                                    htmlFor={`jobs.${index}.remote`}
                                                    className="block text-sm font-medium leading-6 text-indigo-700"
                                                  >
                                                    Remote
                                                  </label>
                                                  <div className="mt-2">
                                                    <Field
                                                      as="select"
                                                      name={`jobs.${index}.remote`}
                                                      className={classNames(
                                                        "w-full rounded-md border-2 border-indigo-500 py-1.5 text-gray-900 placeholder:text-gray-600 text-sm leading-6 pl-2 focus:ring-0",
                                                        {
                                                          "ring-2 ring-red-500 border-none focus:ring-2":
                                                            errors.jobs &&
                                                            errors.jobs[
                                                              index
                                                            ] &&
                                                            (
                                                              errors.jobs[
                                                                index
                                                              ] as JobItem
                                                            ).remote,
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
                                                    <ErrorMessage
                                                      name={`jobs.${index}.remote`}
                                                      render={(msg) => (
                                                        <div className="text-red-500 text-sm mt-2">
                                                          {msg}
                                                        </div>
                                                      )}
                                                    />
                                                  </div>
                                                </div>
                                              </div>

                                              <div className="flex justify-end pt-10">
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
                                                    arrayHelpers.insert(
                                                      index + 1,
                                                      ""
                                                    )
                                                  }
                                                >
                                                  <PlusIcon className="h-5 w-5" />
                                                </button>
                                              </div>
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

                                    <div className="flex pt-5 justify-end gap-x-3">
                                      <button
                                        type="button"
                                        onClick={() => resetForm()}
                                        disabled={
                                          !dirty || isSubmitting || !touched
                                        }
                                        className={classNames(
                                          "rounded-md bg-white py-2 px-3 text-sm font-semibold border border-red-500 text-red-500 shadow-sm hover:bg-gray-50",
                                          { "opacity-50": !dirty }
                                        )}
                                      >
                                        Cancel Changes
                                      </button>

                                      {status !== undefined ? (
                                        <button
                                          type="submit"
                                          disabled={
                                            status?.success || isSubmitting
                                          }
                                          className={classNames(
                                            "inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                            {
                                              "opacity-90 bg-green-800":
                                                status?.success,
                                              "bg-red-600": !status?.success,
                                            }
                                          )}
                                        >
                                          {status?.success ? (
                                            <span className="flex justify-center items-center">
                                              Changes Saved
                                              <CheckCircleIcon
                                                width={25}
                                                className="ml-2"
                                              />
                                            </span>
                                          ) : (
                                            <span className="flex justify-center items-center">
                                              Failed, Try Again
                                              <XCircleIcon
                                                width={25}
                                                className="ml-2"
                                              />
                                            </span>
                                          )}
                                        </button>
                                      ) : (
                                        <button
                                          type="submit"
                                          disabled={isSubmitting || !dirty}
                                          className={classNames(
                                            "inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                            { "opacity-90": !dirty }
                                          )}
                                        >
                                          <span className="flex justify-center items-center">
                                            Save Changes
                                            <PlusCircleIcon
                                              width={25}
                                              className="ml-2"
                                            />
                                          </span>
                                        </button>
                                      )}
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
            <SideNav />
          </div>
        </div>
      </section>
    </>
  );
}
