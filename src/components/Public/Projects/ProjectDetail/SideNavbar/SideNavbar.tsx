//** React Imports */
import { useState } from "react";

// ** Icon Imports
import {
  FolderIcon,
  HomeIcon,
  UsersIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

import type { Project } from "../../../../../API";

interface SideNavbarProps {
  open: boolean;
  data: Project;
}

export default function SideNavbar(props: SideNavbarProps) {
  const [navigation, setNavigation] = useState([
    {
      name: "Project Detail",
      href: "#description",
      icon: HomeIcon,
      current: true,
      disabled: props.data.description ? false : true,
    },
    {
      name: "Token Stats",
      href: "#token-stats",
      icon: CurrencyDollarIcon,
      current: false,
      disabled: props.data.tokenSymbol ? false : true,
    },
    {
      name: "GitHub Activity",
      href: "#github-activity",
      icon: FolderIcon,
      current: false,
      disabled: props.data.githubRepoUrl ? false : true,
    },
    {
      name: "Team",
      href: "#team",
      icon: UsersIcon,
      current: false,
      disabled: props.data.team ? false : true,
    },
    {
      name: "Articles",
      href: "#articles",
      icon: DocumentTextIcon,
      current: false,
      disabled: props.data.articles ? false : true,
    },
    {
      name: "FAQ",
      href: "#faq",
      icon: QuestionMarkCircleIcon,
      current: false,
      disabled: props.data.faq ? false : true,
    },
    {
      name: "Job Openings",
      href: "#jobs",
      icon: BriefcaseIcon,
      current: false,
      disabled: props.data.openJobs ? false : true,
    },
  ]);

  function handleClick(item) {
    if (item.href) {
      navigation.forEach((item) => {
        item.current = false;
      });

      const index = navigation.findIndex((x) => x.href === item.href);

      const newNavigation = [...navigation];

      newNavigation[index].current = true;
      setNavigation(newNavigation);
    }
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className="rounded-2xl shadow-xl border-4 border-indigo-900">
        <div className="bg-white rounded-2xl px-10 py-10">
          <div className="flex-1 overflow-y-auto">
            <nav className="space-y-1">
              {navigation
                .filter((item) => !item.disabled)
                .map((item, index) => (
                  <a
                    key={index}
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
