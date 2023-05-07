import { PopupButton } from "@typeform/embed-react";

export default function SubmitProject() {
  return (
    <section className="mb-16 md:mb-24 container max-w-8xl mx-auto px-6 lg:px-0">
      <div className="px-10 md:px-20 py-14  border-4 border-indigo-900 shadow-md rounded-2xl bg-indigo-200">
        <div className="flex flex-wrap -mx-4 items-center">
          <div className="w-full lg:w-3/5 px-4 mb-8 lg:mb-0">
            <span className="text-lg font-bold text-indigo-500">
              Take your seat
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-4 mb-6 md:mb-8 leading-[2.5rem] md:leading-[3rem] max-w-xl">
              Submit your project to be featured on
              <span className="text-indigo-700"> Awesome Polka!</span>
            </h1>

            <div>
              <span className="inline-flex mr-3 h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-green-200 uppercase shadow-sm">
                #DEFI
              </span>
              <span className="inline-flex mr-3 h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-orange-200 uppercase shadow-sm">
                #SPORTS
              </span>
              <span className="inline-flex mr-3 h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-red-200 uppercase shadow-sm">
                #NFT
              </span>
            </div>
          </div>
          <div className="w-full lg:w-2/5 px-4">
            <div className="flex flex-col flex-wrap items-center lg:justify-end">
              <PopupButton
                id={process.env.NEXT_PUBLIC_TYPEFORM_PROJECTS_FORM_ID as string}
                style={{ fontSize: 20 }}
                className="inline-block w-full py-4 px-6 mb-4 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-[3px] border-black shadow rounded transition duration-200"
              >
                Submit Your Project
              </PopupButton>
              <PopupButton
                id={process.env.NEXT_PUBLIC_TYPEFORM_SUPPORT_FORM_ID as string}
                style={{ fontSize: 20 }}
                className="inline-block w-full py-4 px-6 text-center leading-6 text-lg text-indigo-900 hover:text-white font-extrabold bg-white hover:bg-indigo-800 border-[3px] border-black shadow rounded transition duration-200"
              >
                Contact Us
              </PopupButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
