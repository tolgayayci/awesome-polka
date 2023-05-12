import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Combobox, Dialog, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

//** Algolia Imports */
import algoliasearch from "algoliasearch";
import {
  InstantSearch,
  Hits,
  Configure,
  Index,
  SearchBox,
} from "react-instantsearch-hooks-web";

//** Types */
import { ProjectProps } from "../../../../types/types";

interface SearchBarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SearchBar(props: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
    null
  );
  const [selectedArticle, setSelectedArticle] = useState<ProjectProps | null>(
    null
  );

  const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID as string,
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY as string
  );

  function HandleSelectedItem(hits: any, type: string) {
    if (type === "project") {
      setSelectedArticle(null);
      setSelectedProject(hits);
    } else if (type === "article") {
      setSelectedArticle(hits);
      setSelectedProject(null);
    } else {
      setSelectedArticle(null);
      setSelectedProject(null);
    }
  }

  function ProjectHit(hits: any) {
    return (
      <>
        <div className="-mx-2 text-sm text-gray-700">
          <Combobox.Option
            as="div"
            key={hits.id}
            value={hits.name}
            onClick={() => HandleSelectedItem(hits, "project")}
            className={() =>
              classNames(
                "flex cursor-default select-none items-center rounded-md p-2",
                selectedProject?.name === hits.name &&
                  "bg-gray-100 text-gray-900"
              )
            }
          >
            <Image
              src={hits.logo}
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 flex-none rounded-full"
            />
            <span className="ml-3 flex-auto truncate">{hits.name}</span>
            <ChevronRightIcon
              className="ml-3 h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Option>
        </div>
      </>
    );
  }

  function ArticleHit(hits: any) {
    return (
      <>
        <div className="-mx-2 text-sm text-gray-700">
          <Combobox.Option
            as="div"
            key={hits.id}
            value={hits.name}
            onClick={() => HandleSelectedItem(hits, "article")}
            className={({ active }) =>
              classNames(
                "flex cursor-default select-none items-center rounded-md p-2",
                selectedArticle?.title === hits.title &&
                  "bg-gray-100 text-gray-900"
              )
            }
          >
            <Image
              src={hits.image}
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 flex-none rounded-full"
            />
            <span className="ml-3 flex-auto truncate">{hits.title}</span>
            <ChevronRightIcon
              className="ml-3 h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Option>
        </div>
      </>
    );
  }

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={process.env.NEXT_PUBLIC_ALGOLIA_PROJECTS_INDEX_NAME as string}
    >
      <Configure analytics={true} hitsPerPage={3} />
      <Transition.Root
        show={props.open}
        as={Fragment}
        afterLeave={() => setQuery("")}
        appear
      >
        <Dialog as="div" className="relative z-10" onClose={props.setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-indigo-900 bg-opacity-80 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="mx-auto max-w-3xl transform divide-y divide-gray-200 overflow-hidden rounded-xl bg-white shadow-2xl transition-all mt-28 md:mt-60 border-indigo-600 border-[3px]">
                <Combobox
                  value={selectedProject}
                  onChange={() => console.log(selectedProject)}
                >
                  <>
                    <SearchBox
                      searchAsYouType={false}
                      placeholder="Search for Awesome Projects or Articles"
                      autoFocus={true}
                      onSubmit={() => HandleSelectedItem("", "none")}
                      classNames={{
                        root: "w-full bg-transparent text-gray-800 placeholder-gray-400 ssm:text-sm",
                        form: "w-full focus:rounded-none",
                        input:
                          "border-0 outline-none focus:border-none focus:ring-0",
                        submitIcon: "hidden",
                      }}
                      submitIconComponent={() => null}
                      resetIconComponent={() => null}
                    />

                    <Combobox.Options
                      as="div"
                      static
                      hold
                      className="flex divide-x divide-gray-100"
                    >
                      <div
                        className={classNames(
                          "max-h-92 min-w-0 flex-auto scroll-py-4 overflow-y-auto px-6 py-4",
                          selectedProject && "sm:h-92"
                        )}
                      >
                        <h2 className="mt-2 mb-4 text-xs font-semibold text-gray-500">
                          Projects
                        </h2>

                        <Hits hitComponent={(e) => ProjectHit(e.hit)} />

                        <h2 className="mt-4 mb-4 text-xs font-semibold text-gray-500">
                          Articles
                        </h2>

                        <Index
                          indexName={
                            process.env
                              .NEXT_PUBLIC_ALGOLIA_ARTICLES_INDEX_NAME as string
                          }
                        >
                          <Hits hitComponent={(e) => ArticleHit(e.hit)} />
                        </Index>
                      </div>

                      {selectedProject && (
                        <div className="hidden h-92 w-1/2 flex-none flex-col divide-y divide-gray-100 overflow-y-auto sm:flex">
                          <div className="flex-none p-6 text-center">
                            <Image
                              src={selectedProject.logo}
                              alt=""
                              width={24}
                              height={24}
                              className="mx-auto h-16 w-16 rounded-full"
                            />
                            <h2 className="mt-3 font-semibold text-gray-900">
                              {selectedProject.name}
                            </h2>
                            <span className="inline-flex ml-3 mt-3 h-6 items-center justify-center text-xs font-extrabold px-2 text-indigo-900 rounded border-2 border-indigo-900 bg-green-200 uppercase shadow-sm">
                              {selectedProject["categories.lvl0"][0]}
                            </span>
                          </div>
                          <div className="flex flex-auto flex-col justify-between p-6">
                            {/* <h1 className="text-md md:text-lg font-extrabold font-heading mt-4 mb-6 md:mb-8 leading-[2.5rem] md:leading-[2rem] max-w-xl">
                              Submit your project to be featured on
                              <span className="text-indigo-700">
                                {" "}
                                Awesome Polka!
                              </span>
                            </h1> */}
                            <p className="text-sm leading-6 text-center font-normal my-auto mb-8">
                              {selectedProject.description}
                            </p>
                            <Link href={`/projects/${selectedProject.slug}`}>
                              <button
                                type="button"
                                className="w-full rounded-md -mt-1 border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
                                onClick={() => {
                                  props.setOpen(false);
                                }}
                              >
                                Review Project
                              </button>
                            </Link>
                          </div>
                        </div>
                      )}

                      {selectedArticle && (
                        <div className="hidden h-92 w-1/2 flex-none flex-col divide-y divide-gray-100 overflow-y-auto sm:flex">
                          <div className="flex-none p-6 text-center">
                            <Image
                              src={selectedArticle.image}
                              alt=""
                              width={24}
                              height={24}
                              className="mx-auto h-16 w-16 rounded-full"
                            />
                            <h2 className="mt-3 font-semibold text-gray-900">
                              {selectedArticle.title}
                            </h2>
                            <span className="inline-flex ml-3 mt-3 h-6 items-center justify-center text-xs font-extrabold px-2 text-indigo-900 rounded border-2 border-indigo-900 bg-orange-200 uppercase shadow-sm">
                              {selectedArticle.category}
                            </span>
                          </div>
                          <div className="flex flex-auto flex-col justify-between p-6">
                            <p className="text-sm leading-6 text-center font-normal my-auto mb-8 line-clamp-4">
                              {selectedArticle.description}
                            </p>
                            <Link
                              href={selectedArticle.originalLink}
                              target="blank"
                            >
                              <button
                                type="button"
                                className="-mt-1 w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
                                onClick={() => props.setOpen(false)}
                              >
                                Read Post
                              </button>
                            </Link>
                          </div>
                        </div>
                      )}
                    </Combobox.Options>

                    {/* {query !== "" && filteredPeople.length === 0 && (
                      <div className="py-14 px-6 text-center text-sm sm:px-14">
                        <UsersIcon
                          className="mx-auto h-6 w-6 text-gray-400"
                          aria-hidden="true"
                        />
                        <p className="mt-4 font-semibold text-gray-900">
                          No people found
                        </p>
                        <p className="mt-2 text-gray-500">
                          We couldn’t find anything with that term. Please try
                          again.
                        </p>
                      </div>
                    )} */}
                  </>
                </Combobox>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </InstantSearch>
  );
}
