// ** Next Imports
import Image from "next/image";

// ** Style Imports
import styles from "./Articles.module.css";
import { Project } from "../../../../../API";

interface IArticlesProps {
  open: boolean;
  project: Project;
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
                          src="https://mirror-media.imgix.net/publication-images/oE6r8eybCdEyZiIlpH_MI.png?height=1075&width=2150&h=1075&w=2150&auto=compress"
                          alt="Picture of the author"
                          width={300}
                          height={300}
                          className="w-full block object-cover h-24"
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
                                Announcement
                              </span>
                            </div>
                            <a
                              className="inline-block hover:text-gray-800 hover:underline"
                              href="https://mirror.xyz/lensprotocol.eth/L-VyE549sOOdi4nBgos6XNAUgf3H1oErfkAtndU6RHY"
                              target="blank"
                            >
                              <h3 className="text-xl font-semibold leading-normal">
                                Polkadot BigQuery Public Dataset is Live 🔍
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
                          src="https://mirror-media.imgix.net/publication-images/xDUV-nQZ5XrEZwisgrF86.png?height=1997&width=3994&h=1997&w=3994&auto=compress"
                          alt="Picture of the author"
                          width={200}
                          height={200}
                          className="w-full block object-cover h-24"
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
                                Blog
                              </span>
                            </div>
                            <a
                              className="inline-block hover:text-gray-800 hover:underline"
                              href="https://mirror.xyz/lensprotocol.eth/8Er1hg_hX_j3eC3f7cwDiBQcy3iN4wy0-X1tW0sw8_g"
                              target="blank"
                            >
                              <h3 className="text-xl font-semibold leading-normal">
                                What’s new in the Lensverse?
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
                          src="https://mirror-media.imgix.net/publication-images/jbY5-ZpayxsgdS6XvHQWY.png?height=4096&width=8192&h=4096&w=8192&auto=compress"
                          alt="Picture of the author"
                          width={300}
                          height={300}
                          className="w-full block object-cover h-24"
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
                                Announcement
                              </span>
                            </div>
                            <a
                              className="inline-block hover:text-gray-800 hover:underline"
                              href="https://mirror.xyz/lensprotocol.eth/6TgzB9YDTXk0vm8JVnQ3UY5Hp0LHgF_zthdBumSUSUQ"
                              target="blank"
                            >
                              <h3 className="text-xl font-semibold leading-normal">
                                Introducing direct messaging with Polkadot API
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
                          src="https://mirror-media.imgix.net/publication-images/gq0WMmhgb-w18JvfOMYZc.png?height=6250&width=12500&h=6250&w=12500&auto=compress"
                          alt="Picture of the author"
                          width={300}
                          height={300}
                          className="w-full block object-cover h-24"
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
                                Blog
                              </span>
                            </div>
                            <a
                              className="inline-block hover:text-gray-800 hover:underline"
                              href="https://mirror.xyz/lensprotocol.eth/Y7ZHmQXOIXF6fC91cKvs0n4D2ViEieJCAbDHo4wI5-g"
                            >
                              <h3 className="text-xl font-semibold leading-normal">
                                Exploring the Lensverse - One Month After
                                Mainnet 🌿💚
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
