import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="mb-16 md:mb-24 container max-w-8xl mx-auto px-6 lg:px-0">
      <div className="py-20 bg-indigo-200 border-4 border-indigo-900 shadow-md rounded-2xl relative overflow-hidden">
        <Image
          src="/banner-right.svg"
          alt="Bg"
          width={500}
          height={500}
          className="absolute top-0 md:h-full right-0 w-1/2 lg:w-1/3 opacity-60"
        />
        <Image
          src="/banner-left.svg"
          alt="Bg"
          width={500}
          height={500}
          className="absolute top-0 md:h-full left-0 w-1/2 lg:w-1/3 opacity-60"
        />
        <div className="container px-4 mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-2xl md:text-3xl font-extrabold text-indigo-500">
              Awesome Lens
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold font-heading mt-5 mb-8 leading-[40px] md:leading-[60px]">
              Check out Awesome Lens to see all the cool projects growing in the
              Lens Ecosystem!
            </h1>

            <Link
              href="/projects"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-bold text-indigo-900 rounded-3xl bg-indigo-400 border-2 border-white"
            >
              <span className="relative px-6 py-2.5 transition-all ease-in duration-75 bg-none dark:bg-white-900 rounded-3xl">
                Explore Projects
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
