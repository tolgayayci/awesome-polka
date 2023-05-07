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
                      About {props.project.name}
                    </h3>
                    <h5 className="mb-7 text-[20px] text-gray-700 font-semibold">
                      {props.project.bio}
                    </h5>
                    <p className="mt-7 text-md md:text-[17px] text-gray-900 leading-[1.6rem] md:leading-7">
                      {props.project.description}
                    </p>
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
