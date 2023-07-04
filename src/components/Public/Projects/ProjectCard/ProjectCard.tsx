// ** Next Imports
import Image from "next/image";
import Link from "next/link";

// ** Style Imports
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  hits: any;
}

export default function ProjectCard({ hits }: ProjectCardProps) {
  return (
    <div>
      <Link href={`/projects/${hits.slug}`}>
        <div className="px-10 py-10 bg-white border-4 border-indigo-900 rounded-2xl shadow-md shadow-indigo-500/50">
          <div>
            <div className="block pt-4">
              <Image
                src="/awesome-polka.png"
                alt="Picture of the author"
                width={100}
                height={100}
                className={styles.image}
              />
            </div>
            <div className="my-4">
              <h3 className="text-2xl text-gray-900 font-bold max-h-[4em] leading-8 overflow-hidden line-clamp-1">
                {hits.title}
              </h3>
              <div className="my-4 line-clamp-1 ellipsis-none">
                {hits["categories.lvl0"][0] ? (
                  <span className="inline-flex mr-3 h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-green-200 uppercase shadow-sm">
                    {hits["categories.lvl0"]}
                  </span>
                ) : (
                  <span className="inline-flex mr-3 h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-green-200 uppercase shadow-sm">
                    no category
                  </span>
                )}
                {hits.parentChain["title"] && (
                  <span className="inline-flex h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-orange-200 uppercase shadow-sm">
                    {hits.parentChain["title"]}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-700 font-medium line-clamp-2 min-h-[3rem] my-3 leading-relaxed">
                {hits.description ? hits.description : "No Description Found"}
              </p>
              <div className="my-6 border-t-4 border-indigo-900 max-w-[6rem]"></div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
