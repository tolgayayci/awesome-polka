import React from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// ** Form Imports */
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useCheckArticle } from "../../../../../../hooks/useCheckArticle";
import { validateArticle } from "../../../../../../utils/validation/articleValidation";
import FileUpload from "../../../../FileUpload/FileUpload";
import Loader from "../../../../Loader/Loader";

import type { FieldInputProps } from "formik";

import classNames from "classnames";
import "react-quill/dist/quill.snow.css";
import { Switch } from "@headlessui/react";

import { useRouter } from "next/router";
import { updateArticleAttribute } from "../../../../../../data/mutations/updateArticleAttribute";
import SideNav from "../../../SideNav/SideNav";

export default function EditArticle() {
  const router = useRouter();
  const { edit } = router.query;

  const { article, isLoading } = useCheckArticle(edit as string);

  if (isLoading) {
    return <Loader />;
  }

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
    ],
  };

  return (
    <div className="container max-w-8xl mx-auto">
      <div className="flex space-x-8">
        <div className="w-2/3">
          <div className="border-[3px] border-indigo-900 rounded-lg px-20 py-16 bg-white">
            <Formik
              initialValues={{
                id: article?.id || "",
                title: article?.title || "",
                description: article?.description || "",
                image: article?.image || "",
                isExternal: article?.isExternal || false,
                body: article?.body || "",
                externalUrl: article?.externalUrl || "",
              }}
              validationSchema={validateArticle}
              onSubmit={async (values, actions) => {
                await updateArticleAttribute(values);
                actions.setSubmitting(false);
              }}
            >
              {({ values, setFieldValue, errors, touched }) => (
                <Form>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-full border-b-2 border-indigo-900 mb-3">
                      <h3 className="text-xl mb-2 font-semibold leading-6 text-indigo-700">
                        Edit New Article
                      </h3>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500 mb-6">
                        This information will be displayed publicly so be
                        careful what you share.
                      </p>
                    </div>
                    <div className="col-span-full">
                      <label
                        htmlFor="bio"
                        className="block text-sm font-medium leading-6 text-indigo-700 mb-2"
                      >
                        Title
                      </label>
                      <Field name="title">
                        {({ field }: { field: FieldInputProps<string> }) => (
                          <input
                            {...field}
                            type="text"
                            placeholder="Your Awesome Title"
                            className={classNames(
                              "lock w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2",
                              {
                                "ring-2 ring-red-500":
                                  errors.title && touched.title,
                              }
                            )}
                          />
                        )}
                      </Field>
                      <ErrorMessage
                        name="title"
                        render={(msg) => (
                          <div className="text-red-500 text-sm mt-2">{msg}</div>
                        )}
                      />
                    </div>
                    <div className="col-span-full">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium leading-6 text-indigo-700 mb-2"
                      >
                        Description
                      </label>
                      <Field name="description">
                        {({ field }: { field: FieldInputProps<string> }) => (
                          <input
                            {...field}
                            type="text"
                            placeholder="Your Awesome Title"
                            className={classNames(
                              "lock w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2",
                              {
                                "ring-2 ring-red-500":
                                  errors.description && touched.description,
                              }
                            )}
                          />
                        )}
                      </Field>
                      <ErrorMessage
                        name="description"
                        render={(msg) => (
                          <div className="text-red-500 text-sm mt-2">{msg}</div>
                        )}
                      />
                    </div>
                    <div className="col-span-full">
                      <label
                        htmlFor="cover-photo"
                        className="block text-sm font-medium leading-6 text-indigo-700 mb-2"
                      >
                        Cover Photo
                      </label>
                      <Field name="image">
                        {({ field }: { field: FieldInputProps<string> }) => (
                          <div className="flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <FileUpload
                              setPath={(path) =>
                                setFieldValue("image", path as string)
                              }
                            />
                          </div>
                        )}
                      </Field>
                      <ErrorMessage
                        name="image"
                        render={(msg) => (
                          <div className="text-red-500 text-sm mt-1">{msg}</div>
                        )}
                      />
                    </div>
                    <div className="col-span-full">
                      <Field name="isExternal">
                        {({ field }: { field: FieldInputProps<boolean> }) => (
                          <Switch.Group
                            as="div"
                            className="flex items-center justify-between py-3"
                          >
                            <span className="flex flex-grow flex-col">
                              <Switch.Label
                                as="span"
                                className="text-sm font-medium leading-6 text-indigo-700 mb-1"
                                passive
                              >
                                Do you want to link to an external article?
                              </Switch.Label>
                              <Switch.Description
                                as="span"
                                className="text-sm text-gray-500"
                              >
                                If you want to link to an external article, you
                                cannot use the editor below.
                              </Switch.Description>
                            </span>
                            <Switch
                              checked={values.isExternal}
                              onChange={(value: boolean) =>
                                setFieldValue("isExternal", value)
                              }
                              className={classNames(
                                values.isExternal
                                  ? "bg-indigo-600"
                                  : "bg-gray-200",
                                "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                              )}
                            >
                              <span
                                aria-hidden="true"
                                className={classNames(
                                  values.isExternal
                                    ? "translate-x-5"
                                    : "translate-x-0",
                                  "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                                )}
                              />
                            </Switch>
                          </Switch.Group>
                        )}
                      </Field>
                    </div>
                    {!values.isExternal ? (
                      <div className="col-span-full h-[300px]">
                        <label
                          htmlFor="body"
                          className="block text-sm font-medium leading-6 text-indigo-700 mb-2"
                        >
                          Editor
                        </label>
                        <ReactQuill
                          theme="snow"
                          value={values.body || ""}
                          onChange={(value) => setFieldValue("body", value)}
                          modules={modules}
                          className="h-full pb-16"
                        />
                      </div>
                    ) : (
                      <div className="col-span-full">
                        <label
                          htmlFor="externalUrl"
                          className="block text-sm font-medium leading-6 text-indigo-700 mb-2"
                        >
                          External Url
                        </label>
                        <Field name="externalUrl">
                          {({ field }: { field: FieldInputProps<string> }) => (
                            <input
                              {...field}
                              type="text"
                              placeholder="External Url"
                              className={classNames(
                                "lock w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2",
                                {
                                  "ring-2 ring-red-500":
                                    errors.externalUrl && touched.externalUrl,
                                }
                              )}
                            />
                          )}
                        </Field>
                        <ErrorMessage
                          name="externalUrl"
                          render={(msg) => (
                            <div className="text-red-500 text-sm mt-2">
                              {msg}
                            </div>
                          )}
                        />
                      </div>
                    )}
                    <div className="col-span-full mt-6">
                      <div className="flex pt-5 justify-end gap-x-3 border-t-2 border-indigo-600">
                        <button
                          type="button"
                          className="rounded-md bg-white py-2 px-3 text-sm font-semibold border border-red-500 text-red-500 shadow-sm hover:bg-gray-50"
                        >
                          Delete Article
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
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="w-1/3">
          <SideNav />
        </div>
      </div>
    </div>
  );
}
