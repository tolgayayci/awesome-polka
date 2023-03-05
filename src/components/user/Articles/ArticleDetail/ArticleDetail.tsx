// ** Next Imports
import Image from "next/image";
import Link from "next/link";

// ** Style Imports
import styles from "./ArticleDetail.module.css";

interface ArticleCardProps {
  hits: any;
}

export default function ArticleDetail({ hits }: ArticleCardProps) {
  return (
    <div className="bg-white border-4 border-indigo-900 shadow-md rounded-2xl overflow-hidden">
      <Image
        src={hits.image}
        alt="Picture of the author"
        width={300}
        height={300}
        className="w-full block object-cover h-64"
      />
      <div className="px-6 py-8 md:p-10 border-t-4 border-indigo-900">
        <span className="inline-flex mb-6 h-6 items-center justify-center text-xs font-extrabold px-2 text-indigo-900 rounded border-2 border-indigo-900 bg-green-200 uppercase shadow-sm">
          {hits.project}
        </span>
        <span className="inline-flex ml-3 h-6 items-center justify-center text-xs font-extrabold px-2 text-indigo-900 rounded border-2 border-indigo-900 bg-orange-200 uppercase shadow-sm">
          {hits.category}
        </span>
        <p className="text-xl font-bold text-orange-400 mb-2">{hits.date}</p>
        <h2 className="text-2xl font-extrabold mb-6 leading-8 h-[4rem] overflow-hidden">
          {hits.title}
        </h2>
        <p className="text-lg mb-6 leading-7 min-h-[7rem] max-h-[7rem] overflow-hidden">
          {hits.description}
        </p>
        <Link
          className="inline-block text-xl font-bold text-orange-500 hover:text-indigo-600"
          href={`${hits.originalLink}`}
          target="_blank"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
