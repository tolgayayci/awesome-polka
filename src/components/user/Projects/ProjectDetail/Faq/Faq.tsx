// ** Style Imports
import styles from "./Faq.module.css";

// ** Icon Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

// ** Other Imports
import classNames from "classnames";
import { useState } from "react";

interface IFaqProps {
  open: boolean;
}

export default function Faq(props: IFaqProps) {
  const [index, setIndex] = useState<number | null>();

  const handleClick = (i: number) => {
    if (index === i) {
      setIndex(null);
      return;
    }
    setIndex(i);
  };

  return (
    <>
      {props.open && (
        <section
          id="faq"
          className="rounded-2xl shadow-xl hover:shadow-2xl my-8 scroll-mt-[60px] p-[6px] border-4 border-indigo-900"
        >
          <div className="bg-white rounded-2xl px-8 py-8 md:px-16 md:py-20">
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap -m-8">
                <div className="w-full p-8">
                  <div className="flex flex-col justify-between h-full">
                    <div className="block">
                      <h2 className="mb-4 mt-4 md:mt-0 text-4xl md:text-5xl font-bold font-heading tracking-px-n leading-tight">
                        Frequently Asked Questions
                      </h2>
                      <p className="mb-8 md:mb-12 text-gray-600 font-medium leading-relaxed">
                        Have a look at some of the frequently asked questions
                      </p>
                    </div>
                    <div className="block">
                      <div className="flex flex-wrap">
                        <div className="w-full mb-7">
                          <button
                            className="w-full"
                            onClick={() => handleClick(0)}
                          >
                            <div className="flex flex-wrap -m-1.5">
                              <div className="flex-1 p-1.5">
                                <div className="flex justify-between border-b border-indigo-400">
                                  <h3 className="pb-5 text-[18px] md:text-lg font-bold font-heading leading-normal text-left">
                                    How to get a Lens handle?
                                  </h3>
                                  <svg
                                    className={classNames(
                                      "w-6 h-6 shrink-0 rotate-180",
                                      {
                                        "rotate-0": index !== 0,
                                      }
                                    )}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </div>
                                <p
                                  className={classNames(
                                    "pt-5 text-md font-medium leading-7 text-gray-700 text-left",
                                    {
                                      hidden: index !== 0,
                                    }
                                  )}
                                >
                                  We have allocated some profiles to targeted
                                  communities over the last few months, and the
                                  response and feedback have been amazing so far
                                  will continue to work with partners to
                                  whitelist some communities. If you see an
                                  announcement explaining how to get access from
                                  one of these communities ✅ this will be your
                                  best option for now
                                  <br />
                                  <br />
                                  We also participate, support, and host various
                                  events around the globe 🌎
                                  <br />
                                  <br /> ⚒️ If you wish to build on Lens at
                                  these events our team can help get you a
                                  profile on the ground at the event
                                  <br />
                                  <br />
                                  🤝 If you are visiting our booth or talking
                                  with our team, there is usually a POAP close
                                  by which can get you access.
                                </p>
                              </div>
                            </div>
                          </button>
                        </div>
                        <div className="w-full mb-7">
                          <button
                            className="w-full"
                            onClick={() => handleClick(1)}
                          >
                            <div className="flex flex-wrap -m-1.5">
                              <div className="flex-1 p-1.5">
                                <div className="flex justify-between border-b border-indigo-400">
                                  <h3 className="pb-5 text-[18px] md:text-lg font-bold font-heading leading-normal  text-left">
                                    Wen Lens open for all?
                                  </h3>
                                  <svg
                                    className={classNames(
                                      "w-6 h-6 shrink-0 rotate-180",
                                      {
                                        "rotate-0": index !== 1,
                                      }
                                    )}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </div>
                                <p
                                  className={classNames(
                                    "pt-5 text-md font-medium leading-7 text-gray-700 text-left",
                                    {
                                      hidden: index !== 1,
                                    }
                                  )}
                                >
                                  We’re still in closed Beta, we are doing this
                                  to attain feedback and improve the experience
                                  for when we fully open to the masses <br />
                                  <br />
                                  We are excited to get you all enjoying Lens,
                                  but we want to do it at the right time to give
                                  you the best experience possible <br />
                                  <br />
                                  If you haven't been able to get access to Lens
                                  yet, but would like to learn more about the
                                  growing Lens ecosystem, here's an awesome
                                  article from our developer relations team{" "}
                                  <br />
                                  <br />
                                  Head to our Lensverse page to discover
                                  hundreds of applications built 🛠 on Lens
                                  Protocol
                                </p>
                              </div>
                            </div>
                          </button>
                        </div>
                        <div className="w-full mb-7">
                          <button
                            className="w-full"
                            onClick={() => handleClick(2)}
                          >
                            <div className="flex flex-wrap -m-1.5">
                              <div className="flex-1 p-1.5">
                                <div className="flex justify-between border-b border-indigo-400">
                                  <h3 className="pb-5 text-[18px] md:text-lg font-bold font-heading leading-normal text-left">
                                    How much time do I have to claim my profile
                                    once whitelisted?
                                  </h3>
                                  <svg
                                    className={classNames(
                                      "w-6 h-6 shrink-0 rotate-180",
                                      {
                                        "rotate-0": index !== 2,
                                      }
                                    )}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </div>
                                <p
                                  className={classNames(
                                    "pt-5 text-md font-medium leading-7 text-gray-700 text-left",
                                    {
                                      hidden: index !== 2,
                                    }
                                  )}
                                >
                                  In order to give everyone a fair opportunity,
                                  you will have 60 days to claim your profile
                                  once you have been whitelisted. After that
                                  period, you will lose your opportunity to
                                  claim your Lens profile.
                                </p>
                              </div>
                            </div>
                          </button>
                        </div>
                        <div className="w-full mb-7">
                          <button
                            className="w-full"
                            onClick={() => handleClick(3)}
                          >
                            <div className="flex flex-wrap -m-1.5">
                              <div className="flex-1 p-1.5">
                                <div className="flex justify-between border-b border-indigo-400">
                                  <h3 className="pb-5 text-[18px] md:text-lg font-bold font-heading leading-normal text-left">
                                    How can I transfer a Lens Profile?
                                  </h3>
                                  <svg
                                    className={classNames(
                                      "w-6 h-6 shrink-0 rotate-180",
                                      {
                                        "rotate-0": index !== 3,
                                      }
                                    )}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </div>
                                <p
                                  className={classNames(
                                    "pt-5 text-md font-medium leading-7 text-gray-700 text-left",
                                    {
                                      hidden: index !== 3,
                                    }
                                  )}
                                >
                                  Similarly as you would do with any NFT, by
                                  sending them into any other wallet or
                                  interface that supports Polygon NFTs.
                                </p>
                              </div>
                            </div>
                          </button>
                        </div>
                        <div className="w-full mb-7">
                          <button
                            className="w-full"
                            onClick={() => handleClick(4)}
                          >
                            <div className="flex flex-wrap -m-1.5">
                              <div className="flex-1 p-1.5">
                                <div className="flex justify-between border-b border-indigo-400">
                                  <h3 className="pb-5 text-[18px] md:text-lg font-bold font-heading leading-normal text-left">
                                    What are reserved handles? Why do I get an
                                    error saying the handle is reserved?
                                  </h3>
                                  <svg
                                    className={classNames(
                                      "w-6 h-6 shrink-0 rotate-180",
                                      {
                                        "rotate-0": index !== 4,
                                      }
                                    )}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </div>
                                <p
                                  className={classNames(
                                    "pt-5 text-md font-medium leading-7 text-gray-700 text-left",
                                    {
                                      hidden: index !== 4,
                                    }
                                  )}
                                >
                                  Certain handles have been reserved for
                                  multiple reasons, for example, certain famous
                                  brands are limited from claiming to avoid user
                                  confusion around the ownership of those
                                  handles.
                                  <br />
                                  <br />
                                  It is possible that certain reserved handles
                                  may be coincident with your desired lens
                                  profile. We are working on this as our plan is
                                  to reduce the amount of reserved Lens handles
                                  going forward.
                                </p>
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                      <p className="font-medium text-gray-600 mt-2 mb-6 md:mb-0">
                        <span>Still have any questions? </span>
                        <a
                          className="text-indigo-600 hover:text-indigo-700 font-semibold"
                          href="#"
                        >
                          Contact us
                        </a>
                      </p>
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
