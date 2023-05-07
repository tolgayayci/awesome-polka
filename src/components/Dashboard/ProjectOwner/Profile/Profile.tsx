// ** Form & Validation */
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikHelpers,
  FieldInputProps,
} from "formik";
import { validateProfile } from "../../../../utils/validation/profileValidation";
import type { ProjectProps } from "../../../../types/types";

//** Data */
import { useCheckUser } from "../../../../hooks/useCheckUser";
import { updateProjectAttribute } from "../../../../data/mutations/updateProjectAttribute";

//** Custom */
import Loader from "../../Loader/Loader";
import classNames from "classnames";

import {
  XCircleIcon,
  CheckCircleIcon,
  PlusCircleIcon,
  PhotoIcon,
} from "@heroicons/react/20/solid";
import SideNav from "../SideNav/SideNav";

export default function Profile() {
  const { user, isLoading } = useCheckUser();

  // This is an async function that handles the form submission for updating a project's description.
  async function handleSubmit(
    values: ProjectProps,
    actions: FormikHelpers<ProjectProps> // The `actions` parameter is an object with utility functions for handling the form submission, such as `setSubmitting`
  ) {
    try {
      // Call the `updateProjectAttribute` function with an object containing the project slug and the `githubRepoUrl` fields from the `values` parameter.
      await updateProjectAttribute({
        slug: user?.project?.items[0]?.slug as string,
        name: values.name,
        bio: values.bio,
        image: values.photo,
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
            <div className="border-[3px] border-indigo-700 shadow-2xl rounded-lg px-20 py-16 bg-white">
              <div>
                <h3 className="text-xl mb-2 font-semibold leading-6 text-indigo-700">
                  Project Profile
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-gray-600">
                  This information will be displayed publicly so be careful what
                  you share!
                </p>
                <Formik
                  initialValues={
                    {
                      slug: user?.project?.items[0]?.slug as string,
                      name: user?.project?.items[0]?.name as string,
                      bio: user?.project?.items[0]?.bio as string,
                      photo: user?.project?.items[0]?.image as string,
                    } as ProjectProps
                  }
                  validationSchema={validateProfile}
                  validateOnChange={true}
                  onSubmit={async (values, actions) => {
                    await handleSubmit(values, actions);
                  }}
                >
                  {({ touched, isSubmitting, status, dirty, resetForm }) => (
                    <Form>
                      <div className="mt-6 pt-6 grid grid-cols-1 gap-x-6 gap-y-6 border-t-2 border-indigo-700">
                        <div className="border-b border-gray-900/10 pb-12">
                          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                              <label
                                htmlFor="photo"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Cover photo
                              </label>
                              <Field name="photo">
                                {({
                                  field,
                                }: {
                                  field: FieldInputProps<string>;
                                }) => (
                                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                      <PhotoIcon
                                        className="mx-auto h-12 w-12 text-gray-300"
                                        aria-hidden="true"
                                      />
                                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                          htmlFor="photo"
                                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                          <span>Upload a file</span>
                                          <input
                                            id="photo"
                                            name="photo"
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
                                )}
                              </Field>
                              <ErrorMessage
                                name="photo"
                                render={(msg) => (
                                  <div className="text-red-500 text-sm mt-2">
                                    {msg}
                                  </div>
                                )}
                              />
                            </div>

                            <div className="col-span-full">
                              <label
                                htmlFor="slug"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Project Slug
                              </label>
                              <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                                    awesomepolka.org/
                                  </span>
                                  <input
                                    type="text"
                                    name="slug"
                                    id="slug"
                                    autoComplete="slug"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    value={user?.project?.items[0]?.slug}
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-span-full">
                              <label
                                htmlFor="bio"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Short Bio
                              </label>
                              <Field name="bio">
                                {({
                                  field,
                                }: {
                                  field: FieldInputProps<string>;
                                }) => (
                                  <div className="mt-2">
                                    <div>
                                      <textarea
                                        id="bio"
                                        name="bio"
                                        rows={2}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={
                                          user?.project?.items[0]?.bio
                                        }
                                      />
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">
                                      Write a few sentences about your project.
                                    </p>
                                  </div>
                                )}
                              </Field>
                              <ErrorMessage
                                name="bio"
                                render={(msg) => (
                                  <div className="text-red-500 text-sm mt-2">
                                    {msg}
                                  </div>
                                )}
                              />
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
          </div>
          <div className="w-1/3">
            <SideNav />
          </div>
        </div>
      </section>
    </>
  );
}
