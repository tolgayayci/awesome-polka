// ** Next Imports
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// ** Style Imports
import classNames from "classnames";
import { useCheckUser } from "../../../hooks/useCheckUser";
import { UserType } from "../../../API";

export default function Footer() {
  const router = useRouter();
  const { user } = useCheckUser();

  return (
    <section className="bg-indigo-200 pt-20">
      <div className="pb-20">
        <div className="container mx-auto px-6 md:px-0">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-12">
              <Link className="inline-block mx-auto mb-8" href="/">
                <Image
                  src="/Awesome_Polkadot_Logo.svg"
                  height={100}
                  width={250}
                  alt="awesome lens logo"
                />
              </Link>
              <p className="max-w-md text-lg font-extrabold leading-8">
                Discover the best projects and teams <br /> on the Polkadot
                ecosystem.
              </p>
            </div>

            <div className="w-full">
              <div className="flex flex-wrap items-center -mb-6">
                <Link
                  href="/projects"
                  className={classNames(
                    "text-lg mr-8 2xl:mr-16 font-extrabold hover:text-indigo-800 pb-3",
                    {
                      "border-b-[3px] border-indigo-900 pb-3 xs:mb-3":
                        router.pathname === "/projects",
                    }
                  )}
                >
                  Projects
                </Link>
                <Link
                  href="/ranking"
                  className={classNames(
                    "text-lg mr-8 2xl:mr-16 font-extrabold hover:text-indigo-800 pb-3",
                    {
                      "border-b-[3px] border-indigo-900 pb-3 xs:mb-3":
                        router.pathname === "/ranking",
                    }
                  )}
                >
                  Ranking
                </Link>
                <Link
                  href="/articles"
                  className={classNames(
                    "text-lg mr-8 2xl:mr-16 font-extrabold hover:text-indigo-800 pb-3",
                    {
                      "border-b-[3px] border-indigo-900 pb-3 xs:mb-3":
                        router.pathname === "/articles",
                    }
                  )}
                >
                  Articles
                </Link>
                <Link
                  href="/learn"
                  className={classNames(
                    "text-lg mr-8 2xl:mr-16 font-extrabold hover:text-indigo-800 pb-3",
                    {
                      "border-b-[3px] border-indigo-900 pb-3 xs:mb-3":
                        router.pathname === "/learn",
                    }
                  )}
                >
                  Learn
                </Link>
                <Link
                  href="https://github.com/tolgayayci/awesome-lens/tree/dev"
                  target="blank"
                  className={classNames(
                    "text-lg mr-8 2xl:mr-16 font-extrabold hover:text-indigo-800 pb-3"
                  )}
                >
                  <div className="flex justify-center">
                    <Image
                      src="/github_icon.svg"
                      width={30}
                      height={30}
                      alt="github logo"
                      className="mr-3"
                    />
                    GitHub
                  </div>
                </Link>
                {user?.walletAddress ? (
                  <Link
                    href={
                      user.type === UserType.ADMIN
                        ? "/admin"
                        : "/dashboard/project"
                    }
                    className={classNames(
                      "text-lg mr-8 2xl:mr-16 font-extrabold hover:text-indigo-800 pb-3 text-indigo-700",
                      {
                        "border-[3px] border-indigo-900 pb-3 xs:mb-3":
                          router.pathname.startsWith("/dashboard") ||
                          router.pathname.startsWith("/admin"),
                      }
                    )}
                  >
                    Dashboard
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
