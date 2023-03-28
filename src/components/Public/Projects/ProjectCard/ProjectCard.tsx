// ** Next Imports
import Image from "next/image";
import Link from "next/link";

// ** Style Imports
import styles from "./ProjectCard.module.css";

// ** Icon Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faDiscord,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { faLink } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

interface ProjectCardProps {
  hits: any;
}

export default function ProjectCard({ hits }: ProjectCardProps) {
  return (
    <div>
      <Link href={`/projects/lens-protocol`}>
        <div className="px-10 py-10 bg-white border-4 border-indigo-900 rounded-2xl shadow-md shadow-indigo-500/50">
          <div>
            <div className="block pt-4">
              <Image
                src={hits.logo}
                alt="Picture of the author"
                width={100}
                height={100}
                className={styles.image}
              />
            </div>
            <div className="my-4">
              <h3 className="text-2xl text-gray-900 font-bold max-h-[4em] leading-8 overflow-hidden line-clamp-1">
                {hits.name}
              </h3>
              {/* <p className="my-4 text-sm text-gray-500 font-medium leading-relaxed">
                {hits.brand}
              </p> */}
              <div className="my-4 line-clamp-1 ellipsis-none">
                {hits["categories.lvl0"][0] && (
                  <span className="inline-flex mr-3 h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-green-200 uppercase shadow-sm">
                    {hits["categories.lvl0"][0]}
                  </span>
                )}
                {hits["categories.lvl0"][1] && (
                  <span className="inline-flex h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-orange-200 uppercase shadow-sm">
                    {hits["categories.lvl0"][1]}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-700 font-medium line-clamp-2 min-h-[3rem] my-3 leading-relaxed">
                {hits.description}
              </p>
              <div className="my-6 border-t-4 border-indigo-900 max-w-[6rem]"></div>
              <div className="flex space-x-3">
                <Link href="#" target="_blank">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="lg"
                    className={styles.logo}
                  />
                </Link>
                <Link href={`https:twitter.com/awesomeaave`}>
                  <FontAwesomeIcon
                    icon={faDiscord}
                    size="lg"
                    className={styles.logo}
                  />
                </Link>
                <Link href={`https:twitter.com/awesomeaave`}>
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="lg"
                    className={styles.logo}
                  />
                </Link>
                <Link href={`https:twitter.com/awesomeaave`}>
                  <FontAwesomeIcon
                    icon={faLink}
                    size="lg"
                    className={styles.logo}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
