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
                  Latest news and announcements from the Aave Team.
                </p>
              </div>
              <div className="flex flex-wrap -m-8">
                <div className="w-full md:w-1/2 p-8">
                  <div className="flex flex-wrap lg:items-center -m-4">
                    <div className="w-auto p-4">
                      <div className="overflow-hidden rounded-xl">
                        <Image
                          src="https://mirror-media.imgix.net/nft/j8MTuKWimKw6mNA5UplN8.png?h=null&w=null&auto=compress"
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
                                Aave
                              </span>
                              <span className="inline-flex h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-orange-200 uppercase shadow-sm">
                                Education
                              </span>
                            </div>
                            <a
                              className="inline-block hover:text-gray-800 hover:underline"
                              href="https://aave.mirror.xyz/K9gQPsv-hAH-gO4oH2i0Oen8uQEHYL5q8x9xjN9XnmA"
                              target="blank"
                            >
                              <h3 className="text-xl font-semibold leading-normal">
                                Aave V3 Ethereum Mainnet Launch
                              </h3>
                            </a>
                          </div>
                          <div className="flex flex-wrap items-center -m-1">
                            <div className="w-auto p-1">
                              <Image
                                src="/aave_logo.jpg"
                                alt=""
                                width={20}
                                height={20}
                                className="transform hover:scale-105 transition ease-in-out duration-1000 rounded-full"
                              />
                            </div>
                            <div className="w-auto p-1">
                              <p className="text-sm font-semibold leading-relaxed">
                                By Aave
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
                          src="https://mirror-media.imgix.net/publication-images/Z0335fDqaIU539Cv2_4XA.png?height=2500&width=5000&h=2500&w=5000&auto=compress"
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
                                Aave
                              </span>
                              <span className="inline-flex h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-orange-200 uppercase shadow-sm">
                                Education
                              </span>
                            </div>
                            <a
                              className="inline-block hover:text-gray-800 hover:underline"
                              href="https://aave.mirror.xyz/2TnHYHQRnNhSG56Y4CcssulFArSVqrFbmAdYfU7Kxp0"
                              target="blank"
                            >
                              <h3 className="text-xl font-semibold leading-normal">
                                Aave V3: Live on mainnet!
                              </h3>
                            </a>
                          </div>
                          <div className="flex flex-wrap items-center -m-1">
                            <div className="w-auto p-1">
                              <Image
                                src="/aave_logo.jpg"
                                alt=""
                                width={20}
                                height={20}
                                className="transform hover:scale-105 transition ease-in-out duration-1000 rounded-full"
                              />
                            </div>
                            <div className="w-auto p-1">
                              <p className="text-sm font-semibold leading-relaxed">
                                By Aave
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
                          src="https://mirror-media.imgix.net/nft/5atGgs8SAcE4LjwksbO0Z.jpg?h=null&w=null&auto=compress"
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
                                Aave
                              </span>
                              <span className="inline-flex h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-orange-200 uppercase shadow-sm">
                                Education
                              </span>
                            </div>
                            <a
                              className="inline-block hover:text-gray-800 hover:underline"
                              href="https://aave.mirror.xyz/CZbP_R8x7h2YyJE7R91OdEVaGmwy8xjbUsL0RwuPXyI"
                              target="blank"
                            >
                              <h3 className="text-xl font-semibold leading-normal">
                                Welcome To the Aave Mirror Blog
                              </h3>
                            </a>
                          </div>
                          <div className="flex flex-wrap items-center -m-1">
                            <div className="w-auto p-1">
                              <Image
                                src="/aave_logo.jpg"
                                alt=""
                                width={20}
                                height={20}
                                className="transform hover:scale-105 transition ease-in-out duration-1000 rounded-full"
                              />
                            </div>
                            <div className="w-auto p-1">
                              <p className="text-sm font-semibold leading-relaxed">
                                By Aave
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
                          src="https://mirror-media.imgix.net/nft/j8MTuKWimKw6mNA5UplN8.png?h=null&w=null&auto=compress"
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
                                Aave
                              </span>
                              <span className="inline-flex h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-orange-200 uppercase shadow-sm">
                                Education
                              </span>
                            </div>
                            <a
                              className="inline-block hover:text-gray-800 hover:underline"
                              href="#"
                            >
                              <h3 className="text-xl font-semibold leading-normal">
                                Aave V3 is Live on Public Testnets
                              </h3>
                            </a>
                          </div>
                          <div className="flex flex-wrap items-center -m-1">
                            <div className="w-auto p-1">
                              <Image
                                src="/aave_logo.jpg"
                                alt=""
                                width={20}
                                height={20}
                                className="transform hover:scale-105 transition ease-in-out duration-1000 rounded-full"
                              />
                            </div>
                            <div className="w-auto p-1">
                              <p className="text-sm font-semibold leading-relaxed">
                                By Aave
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
