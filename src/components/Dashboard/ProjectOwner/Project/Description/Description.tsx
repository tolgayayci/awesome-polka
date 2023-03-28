import { useState, useEffect } from "react";

import { API } from "aws-amplify";
import { getProject } from "../../../../../graphql/queries";
import { updateProject } from "../../../../../graphql/mutations";

import { GraphQLResult } from "@aws-amplify/api-graphql";
import type { GetProjectQuery, UpdateProjectInput } from "../../../../../API";
import { LightBulbIcon, CheckIcon, FireIcon } from "@heroicons/react/20/solid";

//** Style Imports */

export default function ProjectDescription() {
  const [description, setDescription] = useState<string | null>();
  const [projectDescription, setProjectDescription] =
    useState<GetProjectQuery["getProject"]>();

  async function fetchProjectDescription() {
    try {
      const projectDescriptionResult = (await API.graphql({
        query: getProject,
        variables: { id: "ssf" },
      })) as GraphQLResult<GetProjectQuery>;

      setProjectDescription(projectDescriptionResult.data?.getProject);

      console.log(projectDescription);
    } catch (err) {
      console.log("error fetching project description", err);
    }
  }

  function handleDescriptionChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setDescription(event.target.value);
  }

  async function handleSubmit(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();

    if (!description) return;

    try {
      const obj = {
        id: projectDescription?.id,
        description: description,
      };

      const projectDescriptionResult = (await API.graphql({
        query: updateProject,
        variables: { input: obj },
      })) as GraphQLResult<UpdateProjectInput>;
    } catch (err) {
      console.log("error updating project description", err);
    }
  }

  useEffect(() => {
    fetchProjectDescription();
  }, []);

  return (
    <>
      <section className="container max-w-8xl mx-auto mt-7">
        <div className="flex space-x-8">
          <div className="w-2/3">
            <div className="border-[3px] border-indigo-900 rounded-lg px-20 py-16 bg-white">
              <form className="space-y-8 divide-y divide-gray-200">
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                  <div className="space-y-6 sm:space-y-5">
                    <div>
                      <h3 className="text-xl mb-2 font-semibold leading-6 text-indigo-700">
                        Profile
                      </h3>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        This information will be displayed publicly so be
                        careful what you share.
                      </p>
                    </div>

                    <div className="space-y-6 sm:space-y-5">
                      <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                        <label
                          htmlFor="bio"
                          className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                        >
                          Bio
                        </label>
                        <div className="mt-2 sm:col-span-2 sm:mt-0">
                          <input
                            type="text"
                            name="bio"
                            id="bio"
                            autoComplete="given-name"
                            className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                        >
                          Description
                        </label>
                        <div className="mt-2 sm:col-span-2 sm:mt-0">
                          <textarea
                            id="about"
                            name="about"
                            rows={12}
                            className="block w-full max-w-lg rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                            defaultValue={""}
                            onChange={handleDescriptionChange}
                          />
                          <p className="mt-2 text-sm text-gray-500">
                            Write a paragraph about your project.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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
                      onClick={(event) => handleSubmit(event)}
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
