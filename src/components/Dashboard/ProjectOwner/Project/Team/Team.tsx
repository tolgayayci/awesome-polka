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
import { validateTeam } from "../../../../../utils/validation/teamValidation";
import type { TeamMember, TeamProps } from "../../../../../types/types";

//** Data */
import { useCheckProject } from "../../../../../hooks/useCheckProject";
import { updateProjectAttribute } from "../../../../../data/mutations/updateProjectAttribute";

//** Custom */
import Loader from "../../../Loader/Loader";
import SideNav from "../../SideNav/SideNav";
import FileUpload from "../../../FileUpload/FileUpload";
import classNames from "classnames";
import {
  XCircleIcon,
  CheckCircleIcon,
  PlusCircleIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";

export default function Team() {
  const { project, isLoading } = useCheckProject("lens-protocol");

  // This is an async function that handles the form submission for updating a project's description.
  async function handleSubmit(
    values: TeamProps,
    actions: FormikHelpers<TeamProps> // The `actions` parameter is an object with utility functions for handling the form submission, such as `setSubmitting`
  ) {
    try {
      // Call the `updateProjectAttribute` function with an object containing the project slug and the `tokenSymbol` fields from the `values` parameter.
      await updateProjectAttribute({
        slug: project?.slug as string,
        team: values.team.map((member) => JSON.stringify(member)),
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
            <div className="border-[3dpx] border-indigo-900 rounded-lg bg-white">
              <div>
                <div className="space-y-8 divide-y divide-gray-200">
                  <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div className="space-y-6 sm:space-y-5">
                      <div>
                        <div className="pl-5 py-2 border-l-[3px]  border-l-indigo-700 ">
                          <h3 className="text-xl mb-2 font-semibold leading-6 text-indigo-700">
                            Your Awesome Team
                          </h3>
                          <p className="mt-2 max-w-2xl text-sm text-gray-600">
                            This information will be displayed publicly so be
                            careful what you share!
                          </p>
                        </div>
                        <Formik
                          initialValues={{
                            team: project?.team?.map(
                              (member) =>
                                JSON.parse(member as string) as TeamMember
                            ) || [
                              {
                                name: "",
                                surname: "",
                                role: "",
                                image: "",
                                linkedIn: "",
                              } as TeamMember,
                            ],
                          }}
                          validationSchema={validateTeam}
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
                                name="team"
                                render={(arrayHelpers) => (
                                  <div>
                                    {values.team && values.team.length > 0 ? (
                                      values.team.map(
                                        (team: TeamMember, index: number) => (
                                          <div
                                            key={index}
                                            className="space-y-6 sm:space-y-5 "
                                          >
                                            <div className="border-2 border-indigo-500 rounded-lg px-16 py-14 my-8">
                                              <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-6">
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
                                                                  ] as TeamMember
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
                                                                  ] as TeamMember
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
                                                                  ] as TeamMember
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
                                                                  ] as TeamMember
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
                                                      index,
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
                                        Add Team Member
                                      </button>
                                    )}

                                    {/**TODO: Refactor**/}
                                    <div className="flex justify-end gap-x-3">
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
                                          disabled={isSubmitting}
                                          className={classNames(
                                            "inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
