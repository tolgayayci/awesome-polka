import { useCheckProjects } from "../../../hooks/useCheckProjects";

import Link from "next/link";
import Loader from "../../Dashboard/Loader/Loader";
import Table from "./Table/Table";
import { Project } from "../../../API";

export default function Users() {
  const { projects, isLoading } = useCheckProjects();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container max-w-8xl mx-auto mt-10">
      <div className="flex">
        <div className="w-full">
          {(projects?.items.length as number) > 0 ? (
            <div className="border-[3px] border-indigo-800 rounded-lg px-16 pt-16 h-full">
              <h2 className="text-2xl font-bold mb-6 text-indigo-700 border-b-[3px] border-indigo-700 pb-4 max-w-xs">
                Approved Users
              </h2>
              <Table projects={projects?.items as Array<Project | null>} />
            </div>
          ) : (
            <Link href="/dashboard/articles/editor">
              <button
                type="button"
                className="relative block w-full rounded-lg border-2 border-dashed border-indigo-300 p-36 text-center hover:border-indigo-700 h-full"
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
    </div>
  );
}
