// ** Form & Validation */
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikHelpers,
  FieldInputProps,
} from "formik";
import { validateGithubRepo } from "../../../../utils/validation/githubRepoValidation";
import type { GithubActivityProps } from "../../../../types/types";

//** Data */
import { useCheckProject } from "../../../../hooks/useCheckProject";
import { updateProjectAttribute } from "../../../../data/mutations/updateProjectAttribute";

//** Custom */
import Loader from "../../Loader/Loader";
import classNames from "classnames";

import {
  XCircleIcon,
  CheckCircleIcon,
  PlusCircleIcon,
  PhotoIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";

export default function Profile() {
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
        <div className="border-[3px] border-indigo-700 shadow-2xl rounded-lg px-20 py-16 bg-white">
          <div>
            <h3 className="text-xl mb-2 font-semibold leading-6 text-indigo-700">
              Your Profile
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-gray-600">
              This information will be displayed publicly so be careful what you
              share!
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
                    <div className="border-b border-gray-900/10 pb-12">
                      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                          <label
                            htmlFor="username"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Username
                          </label>
                          <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                              <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                                workcation.com/
                              </span>
                              <input
                                type="text"
                                name="username"
                                id="username"
                                autoComplete="username"
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="janesmith"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-span-full">
                          <label
                            htmlFor="about"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            About
                          </label>
                          <div className="mt-2">
                            <textarea
                              id="about"
                              name="about"
                              rows={3}
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              defaultValue={""}
                            />
                          </div>
                          <p className="mt-3 text-sm leading-6 text-gray-600">
                            Write a few sentences about yourself.
                          </p>
                        </div>

                        <div className="col-span-full">
                          <label
                            htmlFor="photo"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Photo
                          </label>
                          <div className="mt-2 flex items-center gap-x-3">
                            <UserCircleIcon
                              className="h-12 w-12 text-gray-300"
                              aria-hidden="true"
                            />
                            <button
                              type="button"
                              className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                              Change
                            </button>
                          </div>
                        </div>

                        <div className="col-span-full">
                          <label
                            htmlFor="cover-photo"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Cover photo
                          </label>
                          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">
                              <PhotoIcon
                                className="mx-auto h-12 w-12 text-gray-300"
                                aria-hidden="true"
                              />
                              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                <label
                                  htmlFor="file-upload"
                                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                >
                                  <span>Upload a file</span>
                                  <input
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    className="sr-only"
                                  />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                              </div>
                              <p className="text-xs leading-5 text-gray-600">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                            <CheckCircleIcon width={25} className="ml-2" />
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
                        disabled={isSubmitting || !dirty}
                        className={classNames(
                          "inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                          { "opacity-90": !dirty }
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
      </section>
    </>
  );
}
