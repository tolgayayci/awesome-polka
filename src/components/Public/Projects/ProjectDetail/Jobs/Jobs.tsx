// ** Style Imports
import styles from "./Jobs.module.css";

interface JobsProps {
  open: boolean;
}

export default function Jobs(props: JobsProps) {
  return (
    <>
      {props.open && (
        <section
          id="jobs"
          className="rounded-2xl shadow-xl hover:shadow-2xl my-8 mb-0 scroll-mt-[60px] p-[6px] border-4 border-indigo-900 pb-16 md:pb-0"
        >
          <div className="bg-white rounded-2xl px-8 py-8 md:px-16 md:py-20">
            <div className="container px-4">
              <div className="block">
                <h2 className="mb-4 mt-6 md:mt-0 text-4xl md:text-5xl font-bold font-heading tracking-px-n leading-tight">
                  Job Openings
                </h2>
                <p className="mb-8 md:mb-12 text-gray-600 font-medium leading-relaxed">
                  Search, find and apply to job opportunities at Aave companies.
                </p>
              </div>
              <div className=" mx-auto">
                <div className="flex flex-wrap -m-1.5">
                  <div className="w-full p-1.5">
                    <a
                      className="group"
                      href="https://jobs.eu.lever.co/aave/f5ba249a-3e0b-411b-8ab5-3e5198648048"
                      target="blank"
                    >
                      <div className="p-5 h-full bg-white border group-hover:border-gray-300 rounded-xl">
                        <div className="flex flex-wrap justify-between items-center -m-2">
                          <div className="w-auto p-2">
                            <p className="inline-block mb-3 px-2.5 py-1 text-xs text-indigo-600 font-medium bg-indigo-50 uppercase rounded-md">
                              Engineering
                            </p>
                            <h3 className="mb-2.5 text-xl font-bold font-heading leading-snug">
                              Senior Smart Contract Engineer
                            </h3>
                            <p className="text-sm text-gray-600 font-medium">
                              <span>Remote</span>
                              <span className="px-2">•</span>
                              <span>Full Time</span>
                            </p>
                          </div>
                          <div className="w-auto p-2">
                            <div className="flex items-center justify-center w-11 h-11 bg-indigo-600 group-hover:bg-indigo-700 rounded-full">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.33333 3.33337L14 8.00004M14 8.00004L9.33333 12.6667M14 8.00004L2 8.00004"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="w-full p-1.5">
                    <a
                      className="group"
                      href="https://jobs.eu.lever.co/aave/f452834c-b181-4278-a75e-2b1510517443"
                      target="blank"
                    >
                      <div className="p-5 h-full bg-white border group-hover:border-gray-300 rounded-xl">
                        <div className="flex flex-wrap justify-between items-center -m-2">
                          <div className="w-auto p-2">
                            <p className="inline-block mb-3 px-2.5 py-1 text-xs text-indigo-600 font-medium bg-indigo-50 uppercase rounded-md">
                              Engineering
                            </p>
                            <h3 className="mb-2.5 text-xl font-bold font-heading leading-snug">
                              General Application - Engineering
                            </h3>
                            <p className="text-sm text-gray-600 font-medium">
                              <span>Remote</span>
                              <span className="px-2">•</span>
                              <span>Full Time</span>
                            </p>
                          </div>
                          <div className="w-auto p-2">
                            <div className="flex items-center justify-center w-11 h-11 bg-indigo-600 group-hover:bg-indigo-700 rounded-full">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.33333 3.33337L14 8.00004M14 8.00004L9.33333 12.6667M14 8.00004L2 8.00004"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="w-full p-1.5">
                    <a
                      className="group"
                      href="https://jobs.eu.lever.co/aave/f452834c-b181-4278-a75e-2b1510517443"
                      target="blank"
                    >
                      <div className="p-5 h-full bg-white border group-hover:border-gray-300 rounded-xl">
                        <div className="flex flex-wrap justify-between items-center -m-2">
                          <div className="w-auto p-2">
                            <p className="inline-block mb-3 px-2.5 py-1 text-xs text-orange-600 font-medium bg-orange-50 uppercase rounded-md">
                              Marketing
                            </p>
                            <h3 className="mb-2.5 text-xl font-bold font-heading leading-snug">
                              General Application - Marketing
                            </h3>
                            <p className="text-sm text-gray-600 font-medium">
                              <span>US / Canada, Remote</span>
                              <span className="px-2">•</span>
                              <span>Full Time</span>
                            </p>
                          </div>
                          <div className="w-auto p-2">
                            <div className="flex items-center justify-center w-11 h-11 bg-orange-600 group-hover:bg-indigo-700 rounded-full">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.33333 3.33337L14 8.00004M14 8.00004L9.33333 12.6667M14 8.00004L2 8.00004"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="w-full p-1.5">
                    <a
                      className="group"
                      href="https://jobs.eu.lever.co/aave/f452834c-b181-4278-a75e-2b1510517443"
                      target="blank"
                    >
                      <div className="p-5 h-full bg-white border group-hover:border-gray-300 rounded-xl">
                        <div className="flex flex-wrap justify-between items-center -m-2">
                          <div className="w-auto p-2">
                            <p className="inline-block mb-3 px-2.5 py-1 text-xs text-red-600 font-medium bg-red-50 uppercase rounded-md">
                              Security
                            </p>
                            <h3 className="mb-2.5 text-xl font-bold font-heading leading-snug">
                              General Application - Security
                            </h3>
                            <p className="text-sm text-gray-600 font-medium">
                              <span>US / Canada, Remote</span>
                              <span className="px-2">•</span>
                              <span>Full Time</span>
                            </p>
                          </div>
                          <div className="w-auto p-2">
                            <div className="flex items-center justify-center w-11 h-11 bg-red-600 group-hover:bg-indigo-700 rounded-full">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.33333 3.33337L14 8.00004M14 8.00004L9.33333 12.6667M14 8.00004L2 8.00004"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
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
