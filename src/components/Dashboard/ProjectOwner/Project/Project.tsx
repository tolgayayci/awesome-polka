import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <>
      <section className="container max-w-8xl mx-auto mt-7">
        <section className="mb-16 md:mb-24 container max-w-8xl mx-auto px-6 lg:px-0">
          <div className="container">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
              <Link href="/dashboard/project/description">
                <div className="flex cursor-pointer gap-6 rounded-lg bg-indigo-200/40 py-10 pl-10 pr-7 text-gray-700 hover:bg-indigo-300/50 border-[3px] border-indigo-700">
                  <div className="flex min-w-0 grow flex-col items-start justify-start">
                    <div className="mb-3 text-primary-gray-100">
                      <Image
                        src="/home-sports.svg"
                        alt="home-sports-icon"
                        width={70}
                        height={70}
                        className="rounded-full"
                      />
                    </div>
                    <div className="mb-3 truncate	text-ellipsis whitespace-nowrap font-display text-3xl font-bold text-indigo-700">
                      Description
                    </div>
                    <div className="text-start font-semibold text-primary-gray-100 py-2">
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
                    <div className="mb-3 text-primary-gray-100">
                      <Image
                        src="/home-collectibles.svg"
                        alt="home-collectibles-icon"
                        width={70}
                        height={70}
                        className="rounded-full"
                      />
                    </div>
                    <div className="mb-3 truncate	text-ellipsis whitespace-nowrap font-display text-3xl font-bold text-indigo-700">
                      Token Stats
                    </div>
                    <div className="text-start font-semibold text-primary-gray-100 py-2">
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
                    <div className="mb-3 text-primary-gray-100">
                      <Image
                        src="/home-marketplaces.svg"
                        alt="home-marketplaces-icon"
                        width={70}
                        height={70}
                        className="rounded-full"
                      />
                    </div>
                    <div className="mb-3 truncate	text-ellipsis whitespace-nowrap font-display text-3xl font-bold text-indigo-700">
                      GitHub Activity
                    </div>
                    <div className="text-start font-semibold text-primary-gray-100 py-2">
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
                    <div className="mb-3 text-primary-gray-100">
                      <Image
                        src="/home-games.svg"
                        alt="home-games-icon"
                        width={70}
                        height={70}
                        className="rounded-full"
                      />
                    </div>
                    <div className="mb-3 truncate	text-ellipsis whitespace-nowrap font-display text-3xl font-bold text-indigo-700">
                      Team
                    </div>
                    <div className="text-start font-semibold text-primary-gray-100 py-2">
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
                    <div className="mb-3 text-primary-gray-100">
                      <Image
                        src="/home-tools.svg"
                        alt="home-tools-icon"
                        width={70}
                        height={70}
                        className="rounded-full"
                      />
                    </div>
                    <div className="mb-3 truncate	text-ellipsis whitespace-nowrap font-display text-3xl font-bold text-indigo-700">
                      FAQ
                    </div>
                    <div className="text-start font-semibold text-primary-gray-100 py-2">
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
                    <div className="mb-3 text-primary-gray-100">
                      <Image
                        src="/home-wallets.svg"
                        alt="home-wallets-icon"
                        width={70}
                        height={70}
                        className="rounded-full"
                      />
                    </div>
                    <div className="mb-3 truncate	text-ellipsis whitespace-nowrap font-display text-3xl font-bold text-indigo-700">
                      Jobs
                    </div>
                    <div className="text-start font-semibold text-primary-gray-100 py-2">
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
