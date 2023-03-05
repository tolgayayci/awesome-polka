// ** Next Imports
import Image from "next/image";

// ** Style Imports
import styles from "./Articles.module.css";

interface IArticlesProps {
  open: boolean;
}

export default function Articles(props: IArticlesProps) {
  return (
    <>
      {props.open && (
        <section
          id="articles"
          className="rounded-2xl shadow-xl hover:shadow-2xl my-8 scroll-mt-[60px] border-4 border-indigo-900 pb-12 md:pb-0"
        >
          <div className="bg-white rounded-2xl px-8 py-6 md:px-16 md:py-20">
            <div className="container px-4 mx-auto">
              <div className="block">
                <h2 className="mb-4 mt-4 md:mt-0 text-4xl md:text-5xl font-bold font-heading tracking-px-n leading-tight">
                  Latest Articles
                </h2>
                <p className="mb-8 md:mb-12 text-gray-600 font-medium leading-relaxed">
                  Latest news and announcements from the Polkadot Team.
                </p>
              </div>
              <div className="flex flex-wrap -m-8">
                <div className="w-full md:w-1/2 p-8">
                  <div className="flex flex-wrap lg:items-center -m-4">
                    <div className="w-auto p-4">
                      <div className="overflow-hidden rounded-xl">
                        <Image
                          src="https://cms.polkadot.network/content/images/2023/02/Staking--1-.png"
                          alt="Picture of the author"
                          width={300}
                          height={300}
                          className="w-full block object-cover h-28"
                        />
                      </div>
                    </div>
                    <div className="flex-1 p-4">
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
                            <a
                              className="inline-block hover:text-gray-800 hover:underline"
                              href="https://polkadot.network/blog/polkadot-staking-review-impressive-stats-whats-new-whats-coming/"
                              target="blank"
                            >
                              <h3 className="text-xl font-semibold leading-normal">
                                Polkadot Staking Review
                              </h3>
                            </a>
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
                <div className="w-full md:w-1/2 p-8">
                  <div className="flex flex-wrap lg:items-center -m-4">
                    <div className="w-auto p-4">
                      <div className="overflow-hidden rounded-xl">
                        <Image
                          src="https://cms.polkadot.network/content/images/2023/02/A-Year-in-Parachains-2---no-logo.png"
                          alt="Picture of the author"
                          width={200}
                          height={200}
                          className="w-full block object-cover h-28"
                        />
                      </div>
                    </div>
                    <div className="flex-1 p-4">
                      <div className="md:max-w-xs">
                        <div className="flex flex-col justify-between h-full">
                          <div className="mb-2">
                            <div className="mb-2">
                              <span className="inline-flex mr-3 h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-green-200 uppercase shadow-sm">
                                Polkadot
                              </span>
                              <span className="inline-flex h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-orange-200 uppercase shadow-sm">
                                Parachain
                              </span>
                            </div>
                            <a
                              className="inline-block hover:text-gray-800 hover:underline"
                              href="https://polkadot.network/blog/a-year-in-parachains-part-2-system-chains-smart-contracts-social-media/"
                              target="blank"
                            >
                              <h3 className="text-xl font-semibold leading-normal">
                                A Year in Parachains, Part 2: System Chains
                              </h3>
                            </a>
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
                <div className="w-full md:w-1/2 p-8">
                  <div className="flex flex-wrap lg:items-center -m-4">
                    <div className="w-auto p-4">
                      <div className="overflow-hidden rounded-xl">
                        <Image
                          src="https://cms.polkadot.network/content/images/2023/03/Blog_PBAW.png"
                          alt="Picture of the author"
                          width={300}
                          height={300}
                          className="w-full block object-cover h-28"
                        />
                      </div>
                    </div>
                    <div className="flex-1 p-4">
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
                            <a
                              className="inline-block hover:text-gray-800 hover:underline"
                              href="https://polkadot.network/blog/introducing-the-polkadot-blockchain-academy-coming-to-california-summer-2023/"
                              target="blank"
                            >
                              <h3 className="text-xl font-semibold leading-normal">
                                Introducing the Blockchain Academy
                              </h3>
                            </a>
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
                <div className="w-full md:w-1/2 p-8">
                  <div className="flex flex-wrap lg:items-center -m-4">
                    <div className="w-auto p-4">
                      <div className="overflow-hidden rounded-xl">
                        <Image
                          src="https://cms.polkadot.network/content/images/2023/01/a_year_in_parachains.png"
                          alt="Picture of the author"
                          width={300}
                          height={300}
                          className="w-full block object-cover h-28"
                        />
                      </div>
                    </div>
                    <div className="flex-1 p-4">
                      <div className="md:max-w-xs">
                        <div className="flex flex-col justify-between h-full">
                          <div className="mb-2">
                            <div className="mb-2">
                              <span className="inline-flex mr-3 h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-green-200 uppercase shadow-sm">
                                Polkadot
                              </span>
                              <span className="inline-flex h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-orange-200 uppercase shadow-sm">
                                Parachain
                              </span>
                            </div>
                            <a
                              className="inline-block hover:text-gray-800 hover:underline"
                              href="https://polkadot.network/blog/a-year-in-parachains-part-1-defi/"
                            >
                              <h3 className="text-xl font-semibold leading-normal">
                                A Year in Parachains, Part 1: DeFi
                              </h3>
                            </a>
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
          </div>
        </section>
      )}
    </>
  );
}
