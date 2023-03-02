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
            Latest news and announcements on Awesome Lens.
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 mb-8 md:p-0">
            <div className="flex flex-wrap bg-indigo-200/40 rounded-xl mx-0 md:mx-4 justify-center py-4">
              <div className="w-auto p-4">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="https://mirror-media.imgix.net/publication-images/oE6r8eybCdEyZiIlpH_MI.png?height=1075&width=2150&h=1075&w=2150&auto=compress"
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
                          Lens
                        </span>
                        <span className="inline-flex h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-orange-200 uppercase shadow-sm">
                          Announcement
                        </span>
                      </div>
                      <Link
                        href={
                          "https://mirror.xyz/lensprotocol.eth/L-VyE549sOOdi4nBgos6XNAUgf3H1oErfkAtndU6RHY"
                        }
                        target="blank"
                        className="inline-block hover:text-gray-800 hover:underline"
                      >
                        <h3 className="text-xl font-semibold leading-normal max-w-[300px]">
                          Lens BigQuery Public Dataset is Live 🔍
                        </h3>
                      </Link>
                    </div>
                    <div className="flex flex-wrap items-center -m-1">
                      <div className="w-auto p-1">
                        <Image
                          src="/lens_logo.jpg"
                          alt=""
                          width={20}
                          height={20}
                          className="transform hover:scale-105 transition ease-in-out duration-1000 rounded-full"
                        />
                      </div>
                      <div className="w-auto p-1">
                        <p className="text-sm font-semibold leading-relaxed">
                          By Lens
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
                    src="https://mirror-media.imgix.net/publication-images/xDUV-nQZ5XrEZwisgrF86.png?height=1997&width=3994&h=1997&w=3994&auto=compress"
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
                          Lens
                        </span>
                        <span className="inline-flex h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-orange-200 uppercase shadow-sm">
                          Blog
                        </span>
                      </div>
                      <Link
                        href={
                          "https://mirror.xyz/lensprotocol.eth/8Er1hg_hX_j3eC3f7cwDiBQcy3iN4wy0-X1tW0sw8_g"
                        }
                        target="blank"
                        className="inline-block hover:text-gray-800 hover:underline"
                      >
                        <h3 className="text-xl font-semibold leading-normal max-w-[300px]">
                          What’s new in the Lensverse?
                        </h3>
                      </Link>
                    </div>
                    <div className="flex flex-wrap items-center -m-1">
                      <div className="w-auto p-1">
                        <Image
                          src="/lens_logo.jpg"
                          alt=""
                          width={20}
                          height={20}
                          className="transform hover:scale-105 transition ease-in-out duration-1000 rounded-full"
                        />
                      </div>
                      <div className="w-auto p-1">
                        <p className="text-sm font-semibold leading-relaxed">
                          By Lens
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
                    src="https://mirror-media.imgix.net/publication-images/jbY5-ZpayxsgdS6XvHQWY.png?height=4096&width=8192&h=4096&w=8192&auto=compress"
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
                          Lens
                        </span>
                        <span className="inline-flex h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-orange-200 uppercase shadow-sm">
                          Announcement
                        </span>
                      </div>
                      <Link
                        href={
                          "https://mirror.xyz/lensprotocol.eth/6TgzB9YDTXk0vm8JVnQ3UY5Hp0LHgF_zthdBumSUSUQ"
                        }
                        target="blank"
                        className="inline-block hover:text-gray-800 hover:underline"
                      >
                        <h3 className="text-xl font-semibold leading-normal max-w-[300px]">
                          Introducing direct messaging with Lens API
                        </h3>
                      </Link>
                    </div>
                    <div className="flex flex-wrap items-center -m-1">
                      <div className="w-auto p-1">
                        <Image
                          src="/lens_logo.jpg"
                          alt=""
                          width={20}
                          height={20}
                          className="transform hover:scale-105 transition ease-in-out duration-1000 rounded-full"
                        />
                      </div>
                      <div className="w-auto p-1">
                        <p className="text-sm font-semibold leading-relaxed">
                          By Lens
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
                    src="https://mirror-media.imgix.net/publication-images/gq0WMmhgb-w18JvfOMYZc.png?height=6250&width=12500&h=6250&w=12500&auto=compress"
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
                          Lens
                        </span>
                        <span className="inline-flex h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-orange-200 uppercase shadow-sm">
                          Blog
                        </span>
                      </div>
                      <Link
                        href={
                          "https://mirror.xyz/lensprotocol.eth/Y7ZHmQXOIXF6fC91cKvs0n4D2ViEieJCAbDHo4wI5-g"
                        }
                        target="blank"
                        className="inline-block hover:text-gray-800 hover:underline"
                      >
                        <h3 className="text-xl font-semibold leading-normal max-w-[300px]">
                          Exploring the Lensverse - One Month After 🌿💚
                        </h3>
                      </Link>
                    </div>
                    <div className="flex flex-wrap items-center -m-1">
                      <div className="w-auto p-1">
                        <Image
                          src="/lens_logo.jpg"
                          alt=""
                          width={20}
                          height={20}
                          className="transform hover:scale-105 transition ease-in-out duration-1000 rounded-full"
                        />
                      </div>
                      <div className="w-auto p-1">
                        <p className="text-sm font-semibold leading-relaxed">
                          By Lens
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
