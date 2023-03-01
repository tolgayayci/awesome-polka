// ** React Imports
import { useEffect, useState } from "react";

// ** Chart Imports
import ReactECharts from "echarts-for-react";

// ** Style Imports
import styles from "./TokenStats.module.css";
import classNames from "classnames";

// ** Icon Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

interface ITokenStatsProps {
  open: boolean;
}

export default function TokenStats(props: ITokenStatsProps) {
  interface IUserOptionsType {
    chartType: string;
    day: string;
  }

  const [isLoading, setLoading] = useState(true);
  const [options, setOptions] = useState<object | null>(null);
  const [userOptions, setUserOptions] = useState<IUserOptionsType>({
    chartType: "prices",
    day: "max",
  });

  async function selectOption(coin: string, day: number, chartType: string) {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coin}/market_chart/?vs_currency=usd&days=${day}&interval=daily`
    );

    const json = await response.json();

    if (json.prices) {
      let opt = options;

      if (chartType === "prices") {
        opt = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "time",
            boundaryGap: false,
          },
          yAxis: {
            type: "value",
            boundaryGap: [0, "80%"],
          },
          grid: {
            left: "3%",
            right: "5%",
            top: "12%",
            bottom: "22%",
          },
          dataZoom: [
            {
              type: "slider",
              start: 60,
              end: 100,
            },
          ],
          series: [
            {
              name: `${coin} Price`,
              type: "line",
              smooth: true,
              symbol: "none",
              areaStyle: {},
              data: json.prices,
            },
          ],
        };

        setOptions(opt);
        setLoading(false);
      } else if (chartType === "total_volumes") {
        opt = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "time",
            boundaryGap: false,
          },
          yAxis: {
            type: "value",
            boundaryGap: [0, "80%"],
          },
          grid: {
            left: "8%",
            right: "5%",
            top: "12%",
            bottom: "22%",
          },
          dataZoom: [
            {
              type: "inside",
              start: 0,
              end: 20,
            },
            {
              start: 0,
              end: 20,
            },
          ],
          series: [
            {
              name: `${coin} Total Volume`,
              type: "line",
              smooth: true,
              symbol: "none",
              areaStyle: {},
              data: json.total_volumes,
            },
          ],
        };

        setOptions(opt);
        setLoading(false);
      } else if (chartType === "market_caps") {
        opt = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "time",
            boundaryGap: false,
          },
          yAxis: {
            type: "value",
            boundaryGap: [0, "80%"],
          },
          grid: {
            left: "8%",
            right: "5%",
            top: "12%",
            bottom: "22%",
          },
          dataZoom: [
            {
              type: "inside",
              start: 0,
              end: 20,
            },
            {
              start: 0,
              end: 20,
            },
          ],
          series: [
            {
              name: `${coin} Market Cap`,
              type: "line",
              smooth: true,
              symbol: "none",
              areaStyle: {},
              data: json.market_caps,
            },
          ],
        };

        setOptions(opt);
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    //@ts-ignore
    selectOption("aave", userOptions.day, userOptions.chartType);
  }, [userOptions]);

  return (
    <>
      {props.open && (
        <section
          id="token-stats"
          className="rounded-2xl shadow-xl hover:shadow-2xl my-8 scroll-mt-[60px] md:p-[6px] border-4 border-indigo-900"
        >
          <div className="bg-white rounded-2xl py-4 px-8 md:px-16 md:py-16">
            <div className="container md:px-4 mx-auto">
              <div className="flex flex-wrap md:-m-8">
                <div className="w-full p-2 md:p-8">
                  <div className="flex flex-col justify-between h-full">
                    <div className="block">
                      <h2 className="mb-6 mt-8 md:mt-0 text-4xl md:text-5xl font-bold font-heading tracking-px-n leading-tight">
                        Token Stats
                      </h2>
                      <p className="mb-6 md:mb-10 text-gray-600 font-semibold md:font-medium md:leading-relaxed">
                        The Aave token (AAVE) is the native currency for the
                        Aave network and the keystone for a new, inclusive, and
                        borderless digital economy.
                      </p>
                    </div>
                    {isLoading ? (
                      <div className="block">
                        <h1>Loading</h1>
                      </div>
                    ) : (
                      <div className="block">
                        <div className="grid grid-cols-3">
                          <div className="col-span-3 md:col-span-2">
                            <div
                              className="inline-flex rounded-md shadow-sm"
                              role="group"
                            >
                              <button
                                type="button"
                                className={classNames(
                                  "px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white",
                                  {
                                    "bg-gray-900 text-white dark:text-white":
                                      userOptions.chartType === "prices",
                                  }
                                )}
                                onClick={() =>
                                  setUserOptions({
                                    chartType: "prices",
                                    day: userOptions.day,
                                  })
                                }
                              >
                                Price
                              </button>
                              <button
                                type="button"
                                className={classNames(
                                  "px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white",
                                  {
                                    "bg-gray-900 text-white dark:text-white":
                                      userOptions.chartType === "total_volumes",
                                  }
                                )}
                                onClick={() =>
                                  setUserOptions({
                                    chartType: "total_volumes",
                                    day: userOptions.day,
                                  })
                                }
                              >
                                Total Volume
                              </button>
                              <button
                                type="button"
                                className={classNames(
                                  "px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white ",
                                  {
                                    "bg-gray-900 text-white dark:text-white":
                                      userOptions.chartType === "market_caps",
                                  }
                                )}
                                onClick={() =>
                                  setUserOptions({
                                    chartType: "market_caps",
                                    day: userOptions.day,
                                  })
                                }
                              >
                                Marketcap
                              </button>
                            </div>
                          </div>
                          <div className="hidden md:grid col-span-3 md:col-span-1 place-items-end">
                            <div
                              className="inline-flex rounded-md shadow-sm"
                              role="group"
                            >
                              <button
                                type="button"
                                className={classNames(
                                  "px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white",
                                  {
                                    "bg-gray-900 text-white dark:text-white":
                                      userOptions.day === "7",
                                  }
                                )}
                                onClick={() =>
                                  setUserOptions({
                                    day: "7",
                                    chartType: userOptions.chartType,
                                  })
                                }
                              >
                                7D
                              </button>
                              <button
                                type="button"
                                className={classNames(
                                  "px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white",
                                  {
                                    "bg-gray-900 text-white dark:text-white":
                                      userOptions.day === "30",
                                  }
                                )}
                                onClick={() =>
                                  setUserOptions({
                                    day: "30",
                                    chartType: userOptions.chartType,
                                  })
                                }
                              >
                                30D
                              </button>
                              <button
                                type="button"
                                className={classNames(
                                  "px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white",
                                  {
                                    "bg-gray-900 text-white dark:text-white":
                                      userOptions.day === "max",
                                  }
                                )}
                                onClick={() =>
                                  setUserOptions({
                                    day: "max",
                                    chartType: userOptions.chartType,
                                  })
                                }
                              >
                                ALL
                              </button>
                            </div>
                          </div>
                        </div>

                        <ReactECharts option={options} lazyUpdate={false} />
                        <p className="mt-5 mb-8 md:mb-0 text-gray-600 font-medium text-center leading-relaxed">
                          Data Source: Coin Gecko
                        </p>
                      </div>
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
