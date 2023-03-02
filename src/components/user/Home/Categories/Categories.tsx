import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  return (
    <section className="mb-16 md:mb-24 container max-w-8xl mx-auto px-6 lg:px-0">
      <div className="container">
        <div className="text-h2 pb-16 md:pb-20 group flex flex-col md:flex-row md:items-center px-2 md:px-0">
          <span className="inline text-4xl font-semibold text-indigo-700 md:order-1">
            Start Discovering <br /> Awesome Lens
          </span>
          <p className="text-lg font-semibold md:px-10 pt-10 md:pt-0 max-w-[800px] md:order-2 md:ml-24">
            Get ready to discover some really cool projects on Awesome Lens! You
            will find them all neatly sorted into different categories, so it is
            easy to find what interests you most!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          <Link href="/projects?dev_projects%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Protocols">
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
                  Protocols
                </div>
                <div className="text-start font-semibold text-primary-gray-100 py-2">
                  Decentralized systems facilitating secure transactions and
                  interactions, empowering individuals and organizations to
                  connect, collaborate, and innovate.
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
                    Explore Protocols
                  </button>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/projects?dev_projects%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Social">
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
                  Social
                </div>
                <div className="text-start font-semibold text-primary-gray-100 py-2">
                  Experience the power of community: a collective of individuals
                  sharing common interests, goals, and values, driving positive
                  change, support, and collaboration towards a common vision
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
                    Explore Social
                  </button>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/projects?dev_projects%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Integrations">
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
                  Integrations
                </div>
                <div className="text-start font-semibold text-primary-gray-100 py-2">
                  Lens Protocol integrations combine different blockchain
                  systems or applications for a more efficient and secure
                  ecosystem to achieve a platforms goal.
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
                    Explore Integrations
                  </button>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/projects?dev_projects%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Analytics">
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
                  Analytics
                </div>
                <div className="text-start font-semibold text-primary-gray-100 py-2">
                  Unlock the power of analytics: utilizing data-driven insights
                  and tools to measure, interpret, and optimize performance,
                  driving informed decisions and innovation across industries
                  and sectors.
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
                    Explore Analytics
                  </button>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/projects?dev_projects%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Developers">
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
                  Tools
                </div>
                <div className="text-start font-semibold text-primary-gray-100 py-2">
                  Explore the world of blockchain tools, offering developers and
                  businesses enhanced security and ease in building, deploying,
                  and managing blockchain applications.
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
                    Explore Tools
                  </button>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/projects?dev_projects%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=DAO">
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
                  DAO
                </div>
                <div className="text-start font-semibold text-primary-gray-100 py-2">
                  Decentralized autonomous organizations leveraging blockchain
                  technology to create transparent, secure, and community-driven
                  decision-making processes, enabling collective ownership and
                  participation.
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
                    Explore DAOs
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
