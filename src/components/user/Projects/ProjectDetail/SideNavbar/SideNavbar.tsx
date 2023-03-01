//** React Imports */
import { useState, useRef } from "react";

// ** Icon Imports
import {
  FolderIcon,
  HomeIcon,
  UsersIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

interface SideNavbarProps {
  open: boolean;
}

export default function SideNavbar(props: SideNavbarProps) {
  //TODO: Auto Handle with Scroll Position
  const ref = useRef(null);

  const [navigation, setNavigation] = useState([
    {
      name: "Project Detail",
      href: "#description",
      icon: HomeIcon,
      current: false,
    },
    {
      name: "Token Stats",
      href: "#token-stats",
      icon: UsersIcon,
      current: false,
    },
    {
      name: "GitHub Activity",
      href: "#github-activity",
      icon: FolderIcon,
      current: false,
    },

    {
      name: "Articles",
      href: "#articles",
      icon: DocumentTextIcon,
      current: false,
    },
    { name: "FAQ", href: "#faq", icon: QuestionMarkCircleIcon, current: false },
    {
      name: "Job Openings",
      href: "#jobs",
      icon: BriefcaseIcon,
      current: false,
    },
  ]);

  // @ts-ignore
  function handleClick(item) {
    // @ts-ignore
    if (item.href) {
      navigation.forEach((item) => {
        item.current = false;
      });
      // @ts-ignore
      const index = navigation.findIndex((x) => x.href === item.href);
      // @ts-ignore
      const newNavigation = [...navigation];
      // @ts-ignore
      newNavigation[index].current = true;
      setNavigation(newNavigation);
    }
  }

  // @ts-ignore
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  function handleVote() {
    console.log("Voted");
  }

  return (
    <>
      <div className="rounded-2xl shadow-xl border-4 border-indigo-900">
        <div className="bg-white rounded-2xl px-10 py-10">
          <div className="flex-1 overflow-y-auto">
            <nav className="space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-100 border-[3px] border-indigo-900 rounded-xl"
                      : "px-4 py-3 text-lg font-semibold",
                    "group flex items-center px-2 py-3 text-base font-medium rounded-md"
                  )}
                  onClick={() => handleClick(item)}
                >
                  <item.icon
                    className={classNames(
                      item.current
                        ? "text-gray-500"
                        : "text-gray-400 group-hover:text-gray-500",
                      "mr-4 flex-shrink-0 h-6 w-6"
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
