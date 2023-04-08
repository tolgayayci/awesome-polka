//** React */
import React from "react";

// ** Form & Validation */
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikHelpers,
  FieldInputProps,
} from "formik";
import { validateGithubRepo } from "../../../../../utils/validation/githubRepoValidation";
import type { GithubActivityProps } from "../../../../../types/types";

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
  ExclamationTriangleIcon,
} from "@heroicons/react/20/solid";

export default function Activity() {
  const { project, isLoading } = useCheckProject("lens-protocol");

  // This is an async function that handles the form submission for updating a project's description.
  async function handleSubmit(
    values: GithubActivityProps,
    actions: FormikHelpers<GithubActivityProps> // The `actions` parameter is an object with utility functions for handling the form submission, such as `setSubmitting`
  ) {
    try {
      // Call the `updateProjectAttribute` function with an object containing the project slug and the `githubRepoUrl` fields from the `values` parameter.
      await updateProjectAttribute({
        slug: project?.slug as string,
        githubRepoUrl: values.repoUrl,
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
            <div className="border-[3px] border-indigo-900 rounded-lg px-20 py-16 bg-white">
              <div className="space-y-8">
                <div className="space-y-6 sm:space-y-5">
                  <div>
                    <h3 className="text-xl mb-2 font-semibold leading-6 text-indigo-700">
                      GitHub Activity
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm text-gray-600">
                      This information will be displayed publicly so be careful
                      what you share!
                    </p>
                    <Formik
                      initialValues={{
                        repoUrl: project?.githubRepoUrl,
                      }}
                      validationSchema={validateGithubRepo}
                      validateOnChange={true}
                      onSubmit={async (values, actions) => {
                        await handleSubmit(values, actions);
                      }}
                    >
                      {({
                        errors,
                        touched,
                        isSubmitting,
                        status,
                        dirty,
                        resetForm,
                      }) => (
                        <Form>
                          <div className="mt-6 pt-6 grid grid-cols-1 gap-x-6 gap-y-6 border-t-2 border-indigo-700">
                            <div className="col-span-full">
                              {project?.githubRepoUrl ? (
                                <div className="rounded-md bg-green-50 p-4 border-2 border-emerald-800">
                                  <div className="flex">
                                    <div className="flex-shrink-0">
                                      <CheckCircleIcon
                                        className="h-7 w-7 text-green-400"
                                        aria-hidden="true"
                                      />
                                    </div>
                                    <div className="ml-3">
                                      <h3 className="text-sm font-medium text-green-800">
                                        GitHub repository is shown
                                      </h3>
                                      <div className="mt-2 text-sm text-green-700">
                                        <a
                                          href={project?.githubRepoUrl}
                                          target="blank"
                                          className="hover:underline"
                                        >
                                          {project?.githubRepoUrl}
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
                                        Your GitHub repository is not connected
                                      </h3>
                                      <div className="mt-2 text-sm text-yellow-700">
                                        <p>
                                          You can connect your GitHub repository
                                          to get a detailed activity report on
                                          your project.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                            <div className="col-span-full">
                              <label
                                htmlFor="repoUrl"
                                className="block text-sm font-medium leading-6 text-indigo-700"
                              >
                                GitHub Repo URL
                              </label>
                              <div className="mt-2">
                                <Field name="repoUrl">
                                  {({
                                    field,
                                  }: {
                                    field: FieldInputProps<string>;
                                  }) => (
                                    <input
                                      {...field}
                                      type="url"
                                      placeholder={
                                        "https://www.coingecko.com/en/coins/your-coin"
                                      }
                                      value={field.value}
                                      className={classNames(
                                        "w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2",
                                        {
                                          "ring-2 ring-red-500":
                                            errors.repoUrl && touched.repoUrl,
                                        }
                                      )}
                                    />
                                  )}
                                </Field>
                                <ErrorMessage
                                  name="repoUrl"
                                  render={(msg) => (
                                    <div className="text-red-500 text-sm mt-1">
                                      {msg}
                                    </div>
                                  )}
                                />
                              </div>
                            </div>
                          </div>
                          {/**TODO: Refactor**/}
                          <div className="flex pt-5 justify-end gap-x-3 mt-6">
                            <button
                              type="button"
                              onClick={() => resetForm()}
                              disabled={!dirty || isSubmitting || !touched}
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
                                disabled={status?.success || isSubmitting}
                                className={classNames(
                                  "inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                  {
                                    "opacity-90 bg-green-800": status?.success,
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
                                    <XCircleIcon width={25} className="ml-2" />
                                  </span>
                                )}
                              </button>
                            ) : (
                              <button
                                type="submit"
                                disabled={isSubmitting}
                                className={classNames(
                                  "inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                )}
                              >
                                <span className="flex justify-center items-center">
                                  Save Changes
                                  <PlusCircleIcon width={25} className="ml-2" />
                                </span>
                              </button>
                            )}
                          </div>
                        </Form>
                      )}
                    </Formik>
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
