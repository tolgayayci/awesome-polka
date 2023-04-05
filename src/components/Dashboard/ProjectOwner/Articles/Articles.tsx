import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Loader from "../../../Dashboard/Loader/Loader";
import { useProjectStore } from "../../../../data/store/projectStore";
import { readProjectAttribute } from "../../../../data/queries/readProjectAttribute";

export default function Articles() {
  const [isLoading, setIsLoading] = useState(true);
  const project = useProjectStore((state) => state.project);

  async function check() {
    try {
      if (!project) {
        //TODO: Change parameter to project slug
        await readProjectAttribute("lens-protocol");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    check();
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <section className="container max-w-8xl mx-auto mt-7">
        <div className="flex justify-center gap-8">
          <div className="w-1/3">analtytics and create article button</div>
          <div className="w-2/3">
            {project?.articles && project.articles.items.length > 5 ? (
              project.articles.items.map((article) => (
                <div key={article?.id}>{article?.title}</div>
              ))
            ) : (
              <Link href="/dashboard/articles/editor">
                <button
                  type="button"
                  className="relative block w-full rounded-lg border-2 border-dashed border-indigo-300 p-36 text-center hover:border-indigo-700"
                >
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
                    />
                  </svg>
                  <span className="mt-2 block text-sm font-semibold text-indigo-700">
                    You have no articles yet. Create one now!
                  </span>
                </button>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
