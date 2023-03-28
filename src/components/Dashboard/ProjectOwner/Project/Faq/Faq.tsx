//** Style Imports */
import React, { useState, useEffect } from "react";
import { useProjectStore } from "../../../../../data/store/projectStore";

// ** Form Imports */
import { useFormik } from "formik";
import { readProjectAttribute } from "../../../../../data/queries/readProjectAttribute";
import { validateFaq } from "../../../../../utils/validation/faqValidation";

import { LightBulbIcon, CheckIcon, FireIcon } from "@heroicons/react/20/solid";
import Loader from "../../../Loader/Loader";
import { FaqItem } from "./Item/Item";

export default function Faq() {
  const project = useProjectStore((state) => state.project);
  const [isLoading, setIsLoading] = useState(true);
  const [components, setComponents] = useState([
    <FaqItem key={0} index={0} question="" answer="" />,
  ]);

  const addComponent = () => {
    if (components.length >= 5) {
      return;
    }

    const newComponents = [...components];
    newComponents.push(
      <FaqItem
        key={newComponents.length}
        index={newComponents.length + 1}
        question=""
        answer=""
      />
    );
    console.log(newComponents);
    setComponents(newComponents);
  };

  const removeComponent = (index: number) => {
    const newComponents = [...components];
    newComponents.splice(index, 1);
    setComponents(newComponents);
  };

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

  const formik = useFormik({
    initialValues: {
      faq: [
        {
          question: "",
          answer: "",
        },
      ],
    },
    validationSchema: validateFaq,
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
              <form
                className="space-y-8 divide-y divide-gray-200"
                onSubmit={formik.handleSubmit}
              >
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                  <div className="space-y-6 sm:space-y-5">
                    <div>
                      <h3 className="text-xl mb-2 font-semibold leading-6 text-indigo-700">
                        Frequently Asked Questions
                      </h3>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        This information will be displayed publicly so be
                        careful what you share.
                      </p>
                    </div>
                  </div>
                </div>
                <>
                  {components.map((component, index) => (
                    <div key={index}>
                      {component}
                      <div className="flex justify-end gap-x-3">
                        <button
                          type="button"
                          onClick={() => removeComponent(index)}
                          className="w-full inline-flex justify-center rounded-md bg-red-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Remove Question {index + 1}
                        </button>
                      </div>
                    </div>
                  ))}
                </>
                <div className="border-t-2 border-indigo-500 pt-7">
                  <button
                    type="button"
                    onClick={() => addComponent()}
                    disabled={components.length >= 5}
                    className="w-full inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Add Question
                  </button>
                </div>
                <div className="pt-5">
                  <div className="flex justify-end gap-x-3">
                    <button
                      type="button"
                      className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
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
