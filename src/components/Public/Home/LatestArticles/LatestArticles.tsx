//** Next Imports
import Image from "next/image";
import Link from "next/link";

export default function LatestArticles() {
  return (
    <section className="mb-16 md:mb-24 container max-w-8xl mx-auto px-6 md:px-0">
      <div className="px-10 md:px-20 py-16 rounded-xl border-4 border-indigo-900">
        <div className="block">
          <h2 className="mb-4 text-4xl md:text-5xl font-bold font-heading tracking-px-n leading-tight">
            Latest Articles
          </h2>
          <p className="mb-12 text-gray-600 font-medium leading-relaxed">
            Latest news and announcements on Awesome Polka.
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 mb-8 md:p-0">
            <div className="flex flex-wrap bg-indigo-200/40 rounded-xl mx-0 md:mx-4 justify-center py-4">
              <div className="w-auto p-4">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="https://cms.polkadot.network/content/images/2023/02/Staking--1-.png"
                    alt="Picture of the author"
                    width={300}
                    height={300}
                    className="w-full block object-cover h-32"
                  />
                </div>
              </div>
              <div className="flex p-4 ml-2">
                <div className="md:max-w-xs">
                  <div className="flex flex-col justify-between h-full">
                    <div className="mb-2">
                      <div className="mb-2">
                        <span className="inline-flex mr-3 h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-green-200 uppercase shadow-sm">
                          Polkadot
                        </span>
                        <span className="inline-flex h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-orange-200 uppercase shadow-sm">
                          Kusama
                        </span>
                      </div>
                      <Link
                        href={
                          "https://polkadot.network/blog/polkadot-staking-review-impressive-stats-whats-new-whats-coming/"
                        }
                        target="blank"
                        className="inline-block hover:text-gray-800 hover:underline"
                      >
                        <h3 className="text-xl font-semibold leading-normal max-w-[300px]">
                          Polkadot Staking Review: Impressive Stats
                        </h3>
                      </Link>
                    </div>
                    <div className="flex flex-wrap items-center -m-1">
                      <div className="w-auto p-1">
                        <Image
                          src="/polkadot_logo.jpg"
                          alt=""
                          width={20}
                          height={20}
                          className="transform hover:scale-105 transition ease-in-out duration-1000 rounded-full"
                        />
                      </div>
                      <div className="w-auto p-1">
                        <p className="text-sm font-semibold leading-relaxed">
                          By Polkadot
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:p-0">
            <div className="flex flex-wrap bg-indigo-200/40 rounded-xl mx-0 md:mx-4 justify-center py-4">
              <div className="w-auto p-4">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="https://cms.polkadot.network/content/images/2023/02/A-Year-in-Parachains-2---no-logo.png"
                    alt="Picture of the author"
                    width={300}
                    height={300}
                    className="w-full block object-cover h-32"
                  />
                </div>
              </div>
              <div className="flex p-4 ml-2">
                <div className="md:max-w-xs">
                  <div className="flex flex-col justify-between h-full">
                    <div className="mb-2">
                      <div className="mb-2">
                        <span className="inline-flex mr-3 h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-green-200 uppercase shadow-sm">
                          Polkadot
                        </span>
                        <span className="inline-flex h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-orange-200 uppercase shadow-sm">
                          Parachains
                        </span>
                      </div>
                      <Link
                        href="https://polkadot.network/blog/a-year-in-parachains-part-2-system-chains-smart-contracts-social-media/"
                        target="blank"
                        className="inline-block hover:text-gray-800 hover:underline"
                      >
                        <h3 className="text-xl font-semibold leading-normal max-w-[300px]">
                          A Year in Parachains, Part 2: System Chains
                        </h3>
                      </Link>
                    </div>
                    <div className="flex flex-wrap items-center -m-1">
                      <div className="w-auto p-1">
                        <Image
                          src="/polkadot_logo.jpg"
                          alt=""
                          width={20}
                          height={20}
                          className="transform hover:scale-105 transition ease-in-out duration-1000 rounded-full"
                        />
                      </div>
                      <div className="w-auto p-1">
                        <p className="text-sm font-semibold leading-relaxed">
                          By Polkadot
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:p-0">
            <div className="flex flex-wrap bg-indigo-200/40 rounded-xl mx-0 md:mx-4 justify-center py-4">
              <div className="w-auto p-4">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="https://cms.polkadot.network/content/images/2023/03/Blog_PBAW.png"
                    alt="Picture of the author"
                    width={250}
                    height={300}
                    className="w-full block object-cover h-32"
                  />
                </div>
              </div>
              <div className="flex p-4 ml-2">
                <div className="md:max-w-xs">
                  <div className="flex flex-col justify-between h-full">
                    <div className="mb-2">
                      <div className="mb-2">
                        <span className="inline-flex mr-3 h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-green-200 uppercase shadow-sm">
                          Polkadot
                        </span>
                        <span className="inline-flex h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-orange-200 uppercase shadow-sm">
                          Community
                        </span>
                      </div>
                      <Link
                        href={
                          "https://polkadot.network/blog/introducing-the-polkadot-blockchain-academy-coming-to-california-summer-2023/"
                        }
                        target="blank"
                        className="inline-block hover:text-gray-800 hover:underline"
                      >
                        <h3 className="text-xl font-semibold leading-normal max-w-[300px]">
                          Introducing the Polkadot Blockchain Academy
                        </h3>
                      </Link>
                    </div>
                    <div className="flex flex-wrap items-center -m-1">
                      <div className="w-auto p-1">
                        <Image
                          src="/polkadot_logo.jpg"
                          alt=""
                          width={20}
                          height={20}
                          className="transform hover:scale-105 transition ease-in-out duration-1000 rounded-full"
                        />
                      </div>
                      <div className="w-auto p-1">
                        <p className="text-sm font-semibold leading-relaxed">
                          By Polkadot
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 md:p-0">
            <div className="flex flex-wrap bg-indigo-200/40 rounded-xl mx-0 md:mx-4 justify-center py-4">
              <div className="w-auto p-4">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="https://cms.polkadot.network/content/images/2023/01/a_year_in_parachains.png"
                    alt="Picture of the author"
                    width={300}
                    height={300}
                    className="w-full block object-cover h-32"
                  />
                </div>
              </div>
              <div className="flex p-4 ml-2">
                <div className="md:max-w-xs">
                  <div className="flex flex-col justify-between h-full">
                    <div className="mb-2">
                      <div className="mb-2">
                        <span className="inline-flex mr-3 h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-green-200 uppercase shadow-sm">
                          Polkadot
                        </span>
                        <span className="inline-flex h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-orange-200 uppercase shadow-sm">
                          Parachains
                        </span>
                      </div>
                      <Link
                        href={
                          "https://polkadot.network/blog/a-year-in-parachains-part-1-defi/"
                        }
                        target="blank"
                        className="inline-block hover:text-gray-800 hover:underline"
                      >
                        <h3 className="text-xl font-semibold leading-normal max-w-[300px]">
                          A Year in Parachains, Part 1: DeFi
                        </h3>
                      </Link>
                    </div>
                    <div className="flex flex-wrap items-center -m-1">
                      <div className="w-auto p-1">
                        <Image
                          src="/polkadot_logo.jpg"
                          alt=""
                          width={20}
                          height={20}
                          className="transform hover:scale-105 transition ease-in-out duration-1000 rounded-full"
                        />
                      </div>
                      <div className="w-auto p-1">
                        <p className="text-sm font-semibold leading-relaxed">
                          By Polkadot
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
