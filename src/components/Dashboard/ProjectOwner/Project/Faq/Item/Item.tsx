export interface FaqProps {
  index: number;
  question: string;
  answer: string;
}

export const FaqItem = ({ index, question, answer }: FaqProps) => {
  return (
    <div className="space-y-6 sm:space-y-5">
      <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t-2 sm:border-indigo-500 sm:pt-10">
        <label
          htmlFor="bio"
          className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
        >
          Question
        </label>
        <div className="mt-2 sm:col-span-2 sm:mt-0">
          <input
            type="text"
            name="bio"
            id="bio"
            autoComplete="given-name"
            className="block w-full max-w-xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5 pb-5">
        <label
          htmlFor="about"
          className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
        >
          Answer
        </label>
        <div className="mt-2 sm:col-span-2 sm:mt-0">
          <textarea
            id="about"
            name="about"
            rows={6}
            className="block w-full max-w-xl rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
          />
          <p className="mt-2 text-sm text-gray-500">
            Write a paragraph about your project.
          </p>
        </div>
      </div>
    </div>
  );
};
