// ** Next Imports
import Image from "next/image";

// ** Style Imports
import styles from "./Team.module.css";

interface ITeamProps {
  open: boolean;
}

export default function Team(props: ITeamProps) {
  return (
    <>
      {props.open && (
        <section
          id="team"
          className="rounded-2xl shadow-xl hover:shadow-2xl my-8 scroll-mt-[60px] p-[6px] border-4 border-indigo-900"
        >
          <div className="bg-white rounded-2xl py-8 px-6 md:px-10 md:py-20 ">
            <div className="container px-4 mx-auto">
              <h2 className="mb-4 mt-4 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-bold font-heading tracking-px-n leading-none">
                The team behind Lens
              </h2>
              <p className="mb-6 md:mb-12 text-gray-600 font-medium leading-relaxed">
                People who make this project possible
              </p>
              <div className="flex flex-wrap justify-center -mx-4 -mb-8">
                <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                  <div className="max-w-md mx-auto flex flex-col h-full px-6 py-12 md:p-12 bg-white border-2 border-indigo-900 rounded-2xl shadow text-center">
                    <Image
                      className="max-w-max mx-auto block mb-8 rounded-full"
                      src="https://media.licdn.com/dms/image/C4E03AQFBW5t5HSp9fA/profile-displayphoto-shrink_800_800/0/1649332276695?e=1683158400&v=beta&t=zJqk96OMlT8oGINHSthkA6lyH2jH_rDYhGycAxb4ZtQ"
                      alt=""
                      width={100}
                      height={100}
                    />
                    <h2 className="text-xl font-extrabold mb-2">
                      Stani
                      <span className="block">Kulechov</span>
                    </h2>
                    <span className="block mb-6 font-bold text-indigo-300 leading-6">
                      CEO &amp; <br /> Founder
                    </span>
                    <div className="mt-auto">
                      <a
                        className="inline-block h-6 text-indigo-900 hover:text-indigo-800 mr-4"
                        href="#"
                      >
                        <svg
                          width="17"
                          height="24"
                          viewBox="0 0 17 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.7247 29.5454V16.2767H15.2637L15.9446 11.1041H10.7247V7.80212C10.7247 6.305 11.1469 5.28473 13.3381 5.28473L16.1284 5.28361V0.657045C15.6458 0.59554 13.9895 0.454529 12.0616 0.454529C8.03601 0.454529 5.28 2.86466 5.28 7.28983V11.1041H0.727295V16.2767H5.28V29.5454H10.7247Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </a>
                      <a
                        className="inline-block h-6 text-indigo-900 hover:text-indigo-800 mr-3"
                        href="#"
                      >
                        <svg
                          width="32"
                          height="24"
                          viewBox="0 0 32 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M31.3636 3.24326C30.2259 3.74735 29.0053 4.08922 27.7228 4.24185C29.0323 3.45765 30.0347 2.21382 30.5098 0.73624C29.2814 1.46245 27.9255 1.98978 26.4808 2.27563C25.3239 1.04144 23.6783 0.272705 21.853 0.272705C18.3513 0.272705 15.5121 3.11195 15.5121 6.61175C15.5121 7.10811 15.5681 7.59291 15.6762 8.05649C10.4073 7.79185 5.73508 5.26745 2.60806 1.43154C2.06145 2.36639 1.75049 3.45569 1.75049 4.61846C1.75049 6.81841 2.87074 8.75952 4.57044 9.89518C3.5313 9.86043 2.55397 9.57457 1.69837 9.09942V9.17862C1.69837 12.2496 3.88478 14.8127 6.78387 15.396C6.25271 15.5389 5.69261 15.6181 5.11317 15.6181C4.70372 15.6181 4.30776 15.5776 3.91953 15.5003C4.72685 18.0208 7.06781 19.8538 9.8414 19.904C7.67236 21.6037 4.93741 22.6139 1.96685 22.6139C1.45503 22.6139 0.950892 22.583 0.454529 22.5269C3.26094 24.329 6.59271 25.3797 10.1736 25.3797C21.8377 25.3797 28.2134 15.7186 28.2134 7.33993L28.1922 6.51907C29.4379 5.63053 30.5156 4.51417 31.3636 3.24326Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </a>
                      <a
                        className="inline-block h-6 text-indigo-900 hover:text-indigo-800"
                        href="#"
                      >
                        <svg
                          width="34"
                          height="26"
                          viewBox="0 0 34 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9.6677 0.636353H24.3319C29.3122 0.636353 33.3638 4.68801 33.3636 9.6679V24.3321C33.3636 29.312 29.3122 33.3636 24.3319 33.3636H9.6677C4.68782 33.3636 0.636353 29.3122 0.636353 24.3321V9.6679C0.636353 4.68801 4.68782 0.636353 9.6677 0.636353ZM24.3321 30.4599C27.711 30.4599 30.4601 27.711 30.4601 24.3321H30.4599V9.6679C30.4599 6.28913 27.7109 3.54007 24.3319 3.54007H9.6677C6.28893 3.54007 3.54007 6.28913 3.54007 9.6679V24.3321C3.54007 27.711 6.28893 30.4601 9.6677 30.4599H24.3321ZM8.42856 17.0002C8.42856 12.2737 12.2736 8.42856 17 8.42856C21.7263 8.42856 25.5714 12.2737 25.5714 17.0002C25.5714 21.7265 21.7263 25.5714 17 25.5714C12.2736 25.5714 8.42856 21.7265 8.42856 17.0002ZM11.38 17C11.38 20.0988 13.9012 22.6198 17 22.6198C20.0988 22.6198 22.62 20.0988 22.62 17C22.62 13.901 20.099 11.3798 17 11.3798C13.901 11.3798 11.38 13.901 11.38 17Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </a>
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
