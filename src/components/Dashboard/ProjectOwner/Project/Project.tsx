import Image from "next/image";
import Link from "next/link";

import { useCheckUser } from "../../../../hooks/useCheckUser";
import Loader from "../../../Dashboard/Loader/Loader";

export default function Project() {
  const { user, isLoading } = useCheckUser();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <section className="container max-w-8xl mx-auto mt-10">
        <section className="container max-w-8xl mx-auto px-6 lg:px-0">
          <div className="container">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
              <Link href="/dashboard/project/description">
                <div className="flex cursor-pointer gap-6 rounded-lg bg-indigo-200/40 py-10 pl-10 pr-7 text-gray-700 hover:bg-indigo-300/50 border-[3px] border-indigo-700">
                  <div className="flex min-w-0 grow flex-col items-start justify-start">
                    <div className="truncate	text-ellipsis whitespace-nowrap font-display text-3xl font-bold text-indigo-700">
                      Description
                    </div>
                    <div className="flex items-center py-4">
                      {user?.project?.items[0]?.description ? (
                        <>
                          <span className="bg-green-100 text-green-800 text-xs mr-2 px-2.5 py-1 rounded border-2 border-green-900 font-bold">
                            PUBLISHED
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="bg-red-100 text-red-800 text-xs mr-2 px-2.5 py-1 rounded border-2 border-red-900 font-bold">
                            NOT PUBLISHED
                          </span>
                        </>
                      )}
                    </div>
                    <div className="text-start font-semibold text-primary-gray-100">
                      This is the first thing people see when visiting your
                      awesome page
                    </div>
                    <div className="mt-5">
                      <button
                        type="button"
                        className="font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center focus:ring-gray-600 bg-[#00bf63] border-gray-700 text-white hover:bg-gray-700 mr-2 mb-2"
                      >
                        <Image
                          src="/arrow-right.svg"
                          alt="arrow-right"
                          width={16}
                          height={16}
                          className="mr-2 text-white"
                        />
                        Update Description
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/dashboard/project/token">
                <div className="flex cursor-pointer gap-6 rounded-lg bg-indigo-200/40 py-10 pl-10 pr-7 text-gray-700 hover:bg-indigo-300/50 border-[3px] border-indigo-700">
                  <div className="flex min-w-0 grow flex-col items-start justify-start">
                    <div className=" truncate	text-ellipsis whitespace-nowrap font-display text-3xl font-bold text-indigo-700">
                      Token Stats
                    </div>
                    <div className="flex items-center py-4">
                      {user?.project?.items[0]?.tokenSymbol ? (
                        <>
                          <span className="bg-green-100 text-green-800 text-xs mr-2 px-2.5 py-1 rounded border-2 border-green-900 font-bold">
                            PUBLISHED
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="bg-red-100 text-red-800 text-xs mr-2 px-2.5 py-1 rounded border-2 border-red-900 font-bold">
                            NOT PUBLISHED
                          </span>
                        </>
                      )}
                    </div>
                    <div className="text-start font-semibold text-primary-gray-100">
                      Shows a general overview of your token statistics with a
                      graphical interface
                    </div>
                    <div className="mt-5">
                      <button
                        type="button"
                        className="font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center focus:ring-gray-600 bg-[#5271ff] border-gray-700 text-white hover:bg-gray-700 mr-2 mb-2"
                      >
                        <Image
                          src="/arrow-right.svg"
                          alt="arrow-right"
                          width={16}
                          height={16}
                          className="mr-2 text-white"
                        />
                        Update Token Stats
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/dashboard/project/activity">
                <div className="flex cursor-pointer gap-6 rounded-lg bg-indigo-200/40 py-10 pl-10 pr-7 text-gray-700 hover:bg-indigo-300/50 border-[3px] border-indigo-700">
                  <div className="flex min-w-0 grow flex-col items-start justify-start">
                    <div className="truncate	text-ellipsis whitespace-nowrap font-display text-3xl font-bold text-indigo-700">
                      GitHub Activity
                    </div>
                    <div className="flex items-center py-4">
                      {user?.project?.items[0]?.githubRepoUrl ? (
                        <>
                          <span className="bg-green-100 text-green-800 text-xs mr-2 px-2.5 py-1 rounded border-2 border-green-900 font-bold">
                            PUBLISHED
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="bg-red-100 text-red-800 text-xs mr-2 px-2.5 py-1 rounded border-2 border-red-900 font-bold">
                            NOT PUBLISHED
                          </span>
                        </>
                      )}
                    </div>
                    <div className="text-start font-semibold text-primary-gray-100">
                      Shows a general overview of your repository with a
                      graphical interface
                    </div>
                    <div className="mt-5">
                      <button
                        type="button"
                        className="font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center focus:ring-gray-600 bg-[#ff914d] border-gray-700 text-white hover:bg-gray-700 mr-2 mb-2"
                      >
                        <Image
                          src="/arrow-right.svg"
                          alt="arrow-right"
                          width={16}
                          height={16}
                          className="mr-2 text-white"
                        />
                        Update GitHub Activity
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/dashboard/project/team">
                <div className="flex cursor-pointer gap-6 rounded-lg bg-indigo-200/40 py-10 pl-10 pr-7 text-gray-700 hover:bg-indigo-300/50 border-[3px] border-indigo-700">
                  <div className="flex min-w-0 grow flex-col items-start justify-start">
                    <div className="truncate	text-ellipsis whitespace-nowrap font-display text-3xl font-bold text-indigo-700">
                      Team
                    </div>
                    <div className="flex items-center py-4">
                      {user?.project?.items[0]?.team ? (
                        <>
                          <span className="bg-green-100 text-green-800 text-xs mr-2 px-2.5 py-1 rounded border-2 border-green-900 font-bold">
                            PUBLISHED
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="bg-red-100 text-red-800 text-xs mr-2 px-2.5 py-1 rounded border-2 border-red-900 font-bold">
                            NOT PUBLISHED
                          </span>
                        </>
                      )}
                    </div>
                    <div className="text-start font-semibold text-primary-gray-100">
                      Team members and their roles in the project are shown here
                    </div>
                    <div className="mt-5">
                      <button
                        type="button"
                        className="font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center focus:ring-gray-600 bg-[#5e17eb] border-gray-700 text-white hover:bg-gray-700 mr-2 mb-2"
                      >
                        <Image
                          src="/arrow-right.svg"
                          alt="arrow-right"
                          width={16}
                          height={16}
                          className="mr-2 text-white"
                        />
                        Update Team
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/dashboard/project/faq">
                <div className="flex cursor-pointer gap-6 rounded-lg bg-indigo-200/40 py-10 pl-10 pr-7 text-gray-700 hover:bg-indigo-300/50 border-[3px] border-indigo-700">
                  <div className="flex min-w-0 grow flex-col items-start justify-start">
                    <div className="truncate	text-ellipsis whitespace-nowrap font-display text-3xl font-bold text-indigo-700">
                      FAQ
                    </div>
                    <div className="flex items-center py-4">
                      {user?.project?.items[0]?.faq ? (
                        <>
                          <span className="bg-green-100 text-green-800 text-xs mr-2 px-2.5 py-1 rounded border-2 border-green-900 font-bold">
                            PUBLISHED
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="bg-red-100 text-red-800 text-xs mr-2 px-2.5 py-1 rounded border-2 border-red-900 font-bold">
                            NOT PUBLISHED
                          </span>
                        </>
                      )}
                    </div>
                    <div className="text-start font-semibold text-primary-gray-100">
                      Frequently asked questions and answers takes place in this
                      module
                    </div>
                    <div className="mt-5">
                      <button
                        type="button"
                        className="font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center focus:ring-gray-600 bg-[#ff5757] border-gray-700 text-white hover:bg-gray-700 mr-2 mb-2"
                      >
                        <Image
                          src="/arrow-right.svg"
                          alt="arrow-right"
                          width={16}
                          height={16}
                          className="mr-2 text-white"
                        />
                        Update FAQ
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/dashboard/project/jobs">
                <div className="flex cursor-pointer gap-6 rounded-lg bg-indigo-200/40 py-10 pl-10 pr-7 text-gray-700 hover:bg-indigo-300/50 border-[3px] border-indigo-700">
                  <div className="flex min-w-0 grow flex-col items-start justify-start">
                    <div className="truncate	text-ellipsis whitespace-nowrap font-display text-3xl font-bold text-indigo-700">
                      Jobs
                    </div>
                    <div className="flex items-center py-4">
                      {user?.project?.items[0]?.openJobs ? (
                        <>
                          <span className="bg-green-100 text-green-800 text-xs mr-2 px-2.5 py-1 rounded border-2 border-green-900 font-bold">
                            PUBLISHED
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="bg-red-100 text-red-800 text-xs mr-2 px-2.5 py-1 rounded border-2 border-red-900 font-bold">
                            NOT PUBLISHED
                          </span>
                        </>
                      )}
                    </div>
                    <div className="text-start font-semibold text-primary-gray-100">
                      Keep your community updated with the latest job offerings
                    </div>
                    <div className="mt-5">
                      <button
                        type="button"
                        className="font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center focus:ring-gray-600 bg-[#0097b2] border-gray-700 text-white hover:bg-gray-700 mr-2 mb-2"
                      >
                        <Image
                          src="/arrow-right.svg"
                          alt="arrow-right"
                          width={16}
                          height={16}
                          className="mr-2 text-white"
                        />
                        Update Jobs
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
