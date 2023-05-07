// ** Style Imports
import styles from "./Description.module.css";

// ** Icon Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import { Project } from "../../../../../API";

interface IDescriptionProps {
  open: boolean;
  project: Project;
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
                    <h3 className="mb-2 text-[40px] font-bold">
                      About Polkadot
                    </h3>
                    <h5 className="mb-7 text-[20px] text-gray-700 font-semibold">
                      LENS PROTOCOL
                    </h5>
                    <p className="mt-7 text-md md:text-[17px] text-gray-900 leading-[1.6rem] md:leading-7">
                      {props.project.description}
                    </p>
                    <div className="space-x-6 mt-12 hidden md:flex">
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
                                May 2022
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
                                May 2022
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
                                May 2022
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
