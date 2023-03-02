import { useEffect, useState } from "react";

// ** Chart Imports
import ReactECharts from "echarts-for-react";

// ** Style Imports
import styles from "./GitHubActivity.module.css";

import classNames from "classnames";

interface GitHubActivityProps {
  open: boolean;
}

export default function GitHubActivity(props: GitHubActivityProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [options, setOptions] = useState<object | null>(null);

  async function getCommitHistoryByWeeks() {
    // get github repo stats
    const response = await fetch(
      "https://api.github.com/repos/lens-protocol/lens-sdk/stats/participation"
    );

    const data = await response.json();

    console.log(data);

    let opt = options;

    function getOneWeekBefore(key: number, length: number) {
      let reverseIndex = length - key;
      var today = new Date();

      var lastWeek = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 7 * reverseIndex
      );

      var mm = String(lastWeek.getMonth() + 1).padStart(2, "0"); //January is 0!
      // format months as "Jan", "Feb", etc. instead of "01", "02", etc.
      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      mm = months[parseInt(mm) - 1];
      var yyyy = lastWeek.getFullYear();

      return mm + " " + yyyy;
    }

    opt = {
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        //@ts-ignore
        data: data.all.map((index, key) =>
          getOneWeekBefore(key, data.all.length)
        ),
      },
      yAxis: {
        type: "value",
        boundaryGap: [0, "20%"],
      },
      dataZoom: [
        {
          type: "slider",
          start: 70,
          bottom: 10,
          xAxisIndex: 0,
          end: 100,
        },
      ],
      grid: {
        left: "3%",
        right: "5%",
        top: "12%",
        bottom: "22%",
      },
      series: [
        {
          name: `Lens Commit History By Weeks`,
          type: "line",
          smooth: true,
          symbol: "none",
          areaStyle: {},
          data: data.all,
        },
      ],
    };

    setOptions(opt);
    setIsLoading(false);
  }

  useEffect(() => {
    getCommitHistoryByWeeks();
  }, []);

  return (
    <>
      {props.open && (
        <section
          id="github-activity"
          className="overflow-hidde rounded-2xl shadow-xl hover:shadow-2xl my-8 scroll-mt-[60px] md:p-[6px] border-4 border-indigo-900"
        >
          <div className="bg-white rounded-2xl py-4 px-8 md:px-16 md:py-16">
            <div className="container md:px-4 mx-auto">
              <div className="flex flex-wrap md:-m-8">
                <div className="w-full p-2 md:p-8">
                  <div className="flex flex-col justify-between h-full">
                    <div className="block">
                      <h2 className="mb-4 mt-8 md:mt-0 text-4xl md:text-5xl font-bold font-heading tracking-px-n leading-tight">
                        GitHub Activity
                      </h2>
                      <p className="mb-4 text-gray-600 font-medium leading-relaxed">
                        Stats for lens-protocol/lens-sdk over the past year by
                        week.
                      </p>
                    </div>
                    {isLoading ? (
                      <div className="block">
                        <h1>Loading</h1>
                      </div>
                    ) : (
                      <ReactECharts
                        option={options}
                        lazyUpdate={false}
                        className="mb-8 mt:mb-0"
                      />
                    )}
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
