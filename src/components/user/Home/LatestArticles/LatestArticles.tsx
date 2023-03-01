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
            Latest news and announcements on Awesome Aave.
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 mb-8 md:p-0">
            <div className="flex flex-wrap bg-indigo-200/40 rounded-xl mx-0 md:mx-4 justify-center py-4">
              <div className="w-auto p-4">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="https://mirror-media.imgix.net/publication-images/Z0335fDqaIU539Cv2_4XA.png?height=2500&width=5000&h=2500&w=5000&auto=compress"
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
                          Aave
                        </span>
                        <span className="inline-flex h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-orange-200 uppercase shadow-sm">
                          Education
                        </span>
                      </div>
                      <Link
                        href={
                          "https://aave.mirror.xyz/2TnHYHQRnNhSG56Y4CcssulFArSVqrFbmAdYfU7Kxp0"
                        }
                        target="blank"
                        className="inline-block hover:text-gray-800 hover:underline"
                      >
                        <h3 className="text-xl font-semibold leading-normal max-w-[300px]">
                          Aave V3: Live on mainnet across 6 networks!
                        </h3>
                      </Link>
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
          <div className="w-full md:w-1/4 mb-8 md:p-0">
            <div className="flex flex-wrap bg-indigo-200/40 rounded-xl mx-0 md:mx-4 justify-center py-4">
              <div className="w-auto p-4">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="https://mirror-media.imgix.net/nft/j8MTuKWimKw6mNA5UplN8.png?h=null&w=null&auto=compress"
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
                          Aave
                        </span>
                        <span className="inline-flex h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-orange-200 uppercase shadow-sm">
                          Education
                        </span>
                      </div>
                      <Link
                        href={"#"}
                        target="blank"
                        className="inline-block hover:text-gray-800 hover:underline"
                      >
                        <h3 className="text-xl font-semibold leading-normal max-w-[300px]">
                          Aave V3 is Live on Public Testnets
                        </h3>
                      </Link>
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
          <div className="w-full md:w-1/4 mb-8 md:p-0">
            <div className="flex flex-wrap bg-indigo-200/40 rounded-xl mx-0 md:mx-4 justify-center py-4">
              <div className="w-auto p-4">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="https://mirror-media.imgix.net/publication-images/1rEwlv10AbJiqrdFhPjSm.png?height=2025&width=4050&h=2025&w=4050&auto=compress"
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
                          Aave
                        </span>
                        <span className="inline-flex h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-orange-200 uppercase shadow-sm">
                          Education
                        </span>
                      </div>
                      <Link
                        href={
                          "https://aave.mirror.xyz/K9gQPsv-hAH-gO4oH2i0Oen8uQEHYL5q8x9xjN9XnmA"
                        }
                        target="blank"
                        className="inline-block hover:text-gray-800 hover:underline"
                      >
                        <h3 className="text-xl font-semibold leading-normal max-w-[300px]">
                          Aave V3 Ethereum Mainnet Launch
                        </h3>
                      </Link>
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
          <div className="w-full md:w-1/4 md:p-0">
            <div className="flex flex-wrap bg-indigo-200/40 rounded-xl mx-0 md:mx-4 justify-center py-4">
              <div className="w-auto p-4">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="https://mirror-media.imgix.net/nft/5atGgs8SAcE4LjwksbO0Z.jpg?h=null&w=null&auto=compress"
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
                          Aave
                        </span>
                        <span className="inline-flex h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-orange-200 uppercase shadow-sm">
                          Education
                        </span>
                      </div>
                      <Link
                        href={
                          "https://aave.mirror.xyz/CZbP_R8x7h2YyJE7R91OdEVaGmwy8xjbUsL0RwuPXyI"
                        }
                        target="blank"
                        className="inline-block hover:text-gray-800 hover:underline"
                      >
                        <h3 className="text-xl font-semibold leading-normal max-w-[300px]">
                          Welcome To the Aave Mirror Blog
                        </h3>
                      </Link>
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
    </section>
  );
}
