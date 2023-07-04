import Link from "next/link";
import ApplicationsTable from "./Table/Table";
import Loader from "../../Dashboard/Loader/Loader";

import { useCheckApplications } from "../../../hooks/useCheckApplications";
import { ApplicationProps } from "../../../types/types";

export default function Admin() {
  const { applications, isLoading } = useCheckApplications();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container max-w-8xl mx-auto mt-10">
      <div className="flex">
        <div className="w-full">
          {applications.length > 0 ? (
            <div className="border-[3px] border-indigo-800 rounded-lg px-16 pt-16 h-full">
              <h2 className="text-2xl font-bold mb-6 text-indigo-700 border-b-[3px] border-indigo-700 pb-4 max-w-xs">
                Waiting Approvals
              </h2>
              <ApplicationsTable
                applications={applications as Array<ApplicationProps | null>}
              />
            </div>
          ) : (
            <Link href="#">
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
                  You have no waiting approvals!
                </span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
