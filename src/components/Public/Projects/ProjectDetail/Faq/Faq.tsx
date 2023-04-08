// ** Style Imports
import styles from "./Faq.module.css";

// ** Icon Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

// ** Other Imports
import classNames from "classnames";
import { useEffect, useState } from "react";

import { Project } from "../../../../../API";

interface IFaqProps {
  open: boolean;
  project: Project;
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
                        {JSON.parse(props.project?.faq).map((faq, i) => (
                          <div className="w-full mb-7" key={i}>
                            <button
                              className="w-full"
                              onClick={() => handleClick(i)}
                            >
                              <div className="flex flex-wrap -m-1.5">
                                <div className="flex-1 p-1.5">
                                  <div className="flex justify-between border-b border-indigo-400">
                                    <h3 className="pb-5 text-[18px] md:text-lg font-bold font-heading leading-normal text-left">
                                      question
                                    </h3>
                                    <svg
                                      className={classNames(
                                        "w-6 h-6 shrink-0 rotate-180",
                                        {
                                          "rotate-0": index !== i,
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
                                        hidden: index !== i,
                                      }
                                    )}
                                  >
                                    answer
                                  </p>
                                </div>
                              </div>
                            </button>
                          </div>
                        ))}
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
