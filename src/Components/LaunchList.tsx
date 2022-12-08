import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";
import { useDebounce } from "@react-hook/debounce";

import LaunchCard from "./LaunchCard";
import type { Launch } from "../__generated__/graphql";
import CompareModal from "./CompareModal";
import { LAUNCHES_PAST } from "../services/queries";

const LaunchList = () => {
  const { data, loading, error, fetchMore, refetch } = useQuery(LAUNCHES_PAST, {
    variables: {
      limit: 10,
      offset: 0,
    },
  });
  const [selectedLaunches, setSelectedLaunches] = useState<Launch[]>([]);
  const [filters, setFilters] = useDebounce(
    { missionName: "", rocketName: "" },
    400
  );

  const handleSearch = (value: string, key: "missionName" | "rocketName") => {
    setFilters({ ...filters, [key]: value });
  };

  useEffect(() => {
    refetch({
      offset: 0,
      limit: 10,
      ...filters,
    });
  }, [filters, refetch]);

  if (!data && loading) {
    return (
      <h3 className="mt-20 text-center text-gray-900 dark:text-white">
        Loading...
      </h3>
    );
  }

  if (!data || error) {
    return (
      <h3 className="mt-20 text-center text-gray-900 dark:text-white">
        {error?.message || "Can't fetch launches. Please try again"}
      </h3>
    );
  }

  return (
    <>
      <div className="mt-20 p-6">
        <header className="mb-4 flex justify-end">
          <div className="mr-4">
            <label
              htmlFor="mission-search"
              className="text-gray-900 dark:text-gray-400"
            >
              Mission name:
            </label>
            <input
              onChange={(event) =>
                handleSearch(event.target.value, "missionName")
              }
              placeholder="Search.."
              id="mission-search"
              className="w-full border py-2 px-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>
          <div>
            <label
              htmlFor="rocket-search"
              className="text-gray-900 dark:text-gray-400"
            >
              Rocket name:
            </label>
            <input
              onChange={(event) =>
                handleSearch(event.target.value, "rocketName")
              }
              placeholder="Search.."
              id="rocket-search"
              className="w-full border py-2 px-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>
        </header>
        <InfiniteScroll
          pageStart={0}
          className="grid grid-cols-12 gap-8"
          initialLoad={false}
          loadMore={() =>
            fetchMore({
              variables: {
                offset: data.launchesPast?.length,
              },
            })
          }
          hasMore
        >
          {data.launchesPast?.map((launch, i) => (
            <div
              className="col-span-12 sm:col-span-6 md:col-span-4"
              key={launch?.id || i}
            >
              <LaunchCard
                launch={launch!}
                setSelectedLaunches={setSelectedLaunches}
              />
            </div>
          ))}
        </InfiniteScroll>
        {data?.launchesPast?.length === 0 && (
          <h3 className="text-center text-gray-900 dark:text-white">
            No launches found for your query.
          </h3>
        )}
      </div>
      <CompareModal
        launches={data.launchesPast as Launch[]}
        selectedLaunches={selectedLaunches}
        setSelectedLaunches={setSelectedLaunches}
      />
    </>
  );
};

export default LaunchList;
