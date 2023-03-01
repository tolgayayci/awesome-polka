// ** Style Imports
import styles from "./Description.module.css";

// ** Icon Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

interface IDescriptionProps {
  open: boolean;
}

export default function Description(props: IDescriptionProps) {
  return (
    <>
      {props.open && (
        <section
          id="description"
          className="shadow-xl hover:shadow-2xl mb-8 scroll-mt-[60px] rounded-2xl border-4 border-indigo-900"
        >
          <div className="bg-white rounded-2xl py-8 px-8 md:px-16 md:py-16">
            <div className="container">
              <div className="flex flex-wrap">
                <div className="w-full p-2">
                  <div>
                    <h3 className="mb-2 text-[40px] font-bold">About Aave</h3>
                    <h5 className="mb-7 text-[20px] text-gray-700 font-semibold">
                      AAVE LIQUIDITY PROTOCOL
                    </h5>
                    <p className="mt-7 text-md md:text-[17px] text-gray-900 leading-[1.6rem] md:leading-7">
                      Aave is a decentralized cryptocurrency platform that
                      allows users to borrow and lend crypto. Aave uses smart
                      contracts to automate the process, with preset rules on
                      how funds are distributed, how collateral is handled, and
                      how fees are assessed.
                    </p>
                    <p className="mt-7 mb-4 md:mb-0 text-md md:text-[17px] text-gray-900 leading-[1.6rem] md:leading-7">
                      Aave specializes in overcollateralized loans, meaning that
                      users will need to deposit crypto worth more than the
                      amount that they wish to borrow. This protects lenders
                      from losing money due to loan defaults and allows the Aave
                      protocol to liquidate the collateral if it drops too much
                      in value.
                    </p>
                    <div className="space-x-6 mt-12 flex">
                      <div className="w-full md:w-1/3 h-24 rounded-2xl border-[3px] border-indigo-900">
                        <div className="flex h-24 items-center">
                          <div className="w-full md:w-1/3">
                            {/* CENTER THIS ICON */}
                            <FontAwesomeIcon
                              icon={faCalendar}
                              className="text-3xl ml-11"
                            />
                          </div>
                          <div className="w-full md:w-2/3">
                            <div className="text-left -mt-2">
                              <p className="pb-2 text-indigo-600 font-semibold leading-normal">
                                Launch Date
                              </p>
                              <h2 className="text-lg font-bold font-heading tracking-px-n leading-none">
                                January 2017
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-1/3 h-24 rounded-2xl border-[3px] border-indigo-900">
                        <div className="flex h-24 items-center">
                          <div className="w-full md:w-1/3">
                            {/* CENTER THIS ICON */}
                            <FontAwesomeIcon
                              icon={faCalendar}
                              className="text-3xl ml-11"
                            />
                          </div>
                          <div className="w-full md:w-2/3">
                            <div className="text-left -mt-2">
                              <p className="pb-2 text-indigo-600 font-semibold leading-normal">
                                Launch Date
                              </p>
                              <h2 className="text-lg font-bold font-heading tracking-px-n leading-none">
                                January 2017
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-1/3 h-24 rounded-2xl border-[3px] border-indigo-900">
                        <div className="flex h-24 items-center">
                          <div className="w-full md:w-1/3">
                            {/* CENTER THIS ICON */}
                            <FontAwesomeIcon
                              icon={faCalendar}
                              className="text-3xl ml-11"
                            />
                          </div>
                          <div className="w-full md:w-2/3">
                            <div className="text-left -mt-2">
                              <p className="pb-2 text-indigo-600 font-semibold leading-normal">
                                Launch Date
                              </p>
                              <h2 className="text-lg font-bold font-heading tracking-px-n leading-none">
                                January 2017
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-x-6 mt-8 mb-4 hidden">
                      <div className="w-full md:w-1/3 h-24 rounded-2xl border-[3px] border-indigo-900">
                        <div className="flex h-24 items-center">
                          <div className="w-full md:w-1/3">
                            {/* CENTER THIS ICON */}
                            <FontAwesomeIcon
                              icon={faCalendar}
                              className="text-3xl ml-11"
                            />
                          </div>
                          <div className="w-full md:w-2/3">
                            <div className="text-left -mt-2">
                              <p className="pb-2 text-indigo-600 font-semibold leading-normal">
                                Launch Date
                              </p>
                              <h2 className="text-lg font-bold font-heading tracking-px-n leading-none">
                                September 2020
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-1/3 h-24 rounded-2xl border-[3px] border-indigo-900">
                        <div className="flex h-24 items-center">
                          <div className="w-full md:w-1/3">
                            {/* CENTER THIS ICON */}
                            <FontAwesomeIcon
                              icon={faCalendar}
                              className="text-3xl ml-11"
                            />
                          </div>
                          <div className="w-full md:w-2/3">
                            <div className="text-left -mt-2">
                              <p className="pb-2 text-indigo-600 font-semibold leading-normal">
                                Launch Date
                              </p>
                              <h2 className="text-lg font-bold font-heading tracking-px-n leading-none">
                                September 2020
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-1/3 h-24 rounded-2xl border-[3px] border-indigo-900">
                        <div className="flex h-24 items-center">
                          <div className="w-full md:w-1/3">
                            {/* CENTER THIS ICON */}
                            <FontAwesomeIcon
                              icon={faCalendar}
                              className="text-3xl ml-11"
                            />
                          </div>
                          <div className="w-full md:w-2/3">
                            <div className="text-left -mt-2">
                              <p className="pb-2 text-indigo-600 font-semibold leading-normal">
                                Launch Date
                              </p>
                              <h2 className="text-lg font-bold font-heading tracking-px-n leading-none">
                                September 2020
                              </h2>
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
