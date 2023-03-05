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
                                    What is Polkadot?
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
                                  Polkadot is a platform that allows diverse
                                  blockchains to transfer messages, including
                                  value, in a trust-free fashion; sharing their
                                  unique features while pooling their security.
                                  In brief, Polkadot is a scalable,
                                  heterogeneous, multi-chain technology.
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
                                    Why do we need Polkadot?
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
                                  Polkadot makes blockchain experimentation
                                  possible in the same way Ethereum made
                                  decentralised application (DApp)
                                  experimentation possible. Polkadot is designed
                                  to facilitate faster innovation cycles,
                                  particularly when experimenting with new state
                                  transition functions. There are many
                                  trade-offs to consider when building a
                                  blockchain, and it’s clear from the number and
                                  diversity of the various Web3 projects that
                                  nobody has a framework that encompasses all
                                  chains. Polkadot is a vehicle that can get us
                                  to a general framework faster.
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
                                    How many chains can Polkadot Connect?
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
                                  There is no specific limit to the number of
                                  chains that can be connected to the Polkadot
                                  network, which is scalable by design. Initial
                                  predictions suggest the basic Polkadot design
                                  will be able to handle at least dozens and
                                  perhaps hundreds of parachains. There are also
                                  paths to more enhanced models. For example,
                                  there is no reason why Polkadot cannot be
                                  composed in a recursive fashion, making some
                                  of the chains that Polkadot connects be
                                  themselves mini Polkadots. Should this be
                                  introduced, it is difficult to imagine an
                                  upper limit on the number of chains it could
                                  connect and thus the number of transactions it
                                  could process.
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
                                    How do I geT testnet DOTs?
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
                                  The current Polkadot testnet is Westend. From
                                  Polkadot-JS , you can switch to the Westend
                                  network, then create an account. Once you have
                                  saved your password, you can obtain your
                                  address by clicking on the icon to copy your
                                  address to the clipboard. Then post -!drip
                                  ADDRESS- to the Westend Faucet Element channel
                                  .
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
