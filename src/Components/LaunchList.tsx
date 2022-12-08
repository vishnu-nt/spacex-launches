import { useState } from "react";
import LaunchCard from "./LaunchCard";
import type { Launch } from "../utils/types";
import CompareModal from "./CompareModal";

const LaunchList = () => {
  const [selectedLaunches, setSelectedLaunches] = useState<Launch[]>([]);
  return (
    <>
      <div className="mt-20 p-6">
        <div className="grid grid-cols-12 gap-8">
          {data.data.launchesPast.map((launch) => (
            <div className="col-span-4" key={launch.id}>
              <LaunchCard launch={launch} setSelectedLaunches={setSelectedLaunches} />
            </div>
          ))}
        </div>
      </div>
      <CompareModal
        launches={data.data.launchesPast}
        selectedLaunches={selectedLaunches}
        setSelectedLaunches={setSelectedLaunches}
      />
    </>
  );
};

export default LaunchList;

export const data = {
  data: {
    launchesPast: [
      { 
        id: "1",
        mission_name: "FalconSat",
        launch_date_local: "2006-03-25T10:30:00+12:00",
        launch_site: {
          site_name_long: "Kwajalein Atoll Omelek Island",
        },
        links: {
          article_link:
            "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html",
          video_link: "https://www.youtube.com/watch?v=0a_00nJ_Y88",
        },
        rocket: {
          rocket_name: "Falcon 1",
          first_stage: {
            cores: [
              {
                flight: 1,
                core: {
                  reuse_count: 0,
                  status: "lost",
                },
              },
            ],
          },
          second_stage: {
            payloads: [
              {
                payload_type: "Satellite",
                payload_mass_kg: 20,
                payload_mass_lbs: 43,
              },
            ],
          },
        },
        ships: [],
      },
      {
        id: "2",
        mission_name: "DemoSat",
        launch_date_local: "2007-03-21T13:10:00+12:00",
        launch_site: {
          site_name_long: "Kwajalein Atoll Omelek Island",
        },
        links: {
          article_link:
            "https://www.space.com/3590-spacex-falcon-1-rocket-fails-reach-orbit.html",
          video_link: "https://www.youtube.com/watch?v=Lk4zQ2wP-Nc",
        },
        rocket: {
          rocket_name: "Falcon 1",
          first_stage: {
            cores: [
              {
                flight: 1,
                core: {
                  reuse_count: 0,
                  status: "lost",
                },
              },
            ],
          },
          second_stage: {
            payloads: [
              {
                payload_type: "Satellite",
                payload_mass_kg: null,
                payload_mass_lbs: null,
              },
            ],
          },
        },
        ships: [],
      },
      {
        id: "3",
        mission_name: "Trailblazer",
        launch_date_local: "2008-08-03T15:34:00+12:00",
        launch_site: {
          site_name_long: "Kwajalein Atoll Omelek Island",
        },
        links: {
          article_link:
            "http://www.spacex.com/news/2013/02/11/falcon-1-flight-3-mission-summary",
          video_link: "https://www.youtube.com/watch?v=v0w9p3U8860",
        },
        rocket: {
          rocket_name: "Falcon 1",
          first_stage: {
            cores: [
              {
                flight: 1,
                core: {
                  reuse_count: 0,
                  status: "lost",
                },
              },
            ],
          },
          second_stage: {
            payloads: [
              {
                payload_type: "Satellite",
                payload_mass_kg: null,
                payload_mass_lbs: null,
              },
              {
                payload_type: "Satellite",
                payload_mass_kg: null,
                payload_mass_lbs: null,
              },
            ],
          },
        },
        ships: [],
      },
      {
        id: "4",
        mission_name: "RatSat",
        launch_date_local: "2008-09-28T11:15:00+12:00",
        launch_site: {
          site_name_long: "Kwajalein Atoll Omelek Island",
        },
        links: {
          article_link: "https://en.wikipedia.org/wiki/Ratsat",
          video_link: "https://www.youtube.com/watch?v=dLQ2tZEH6G0",
        },
        rocket: {
          rocket_name: "Falcon 1",
          first_stage: {
            cores: [
              {
                flight: 1,
                core: {
                  reuse_count: 0,
                  status: "lost",
                },
              },
            ],
          },
          second_stage: {
            payloads: [
              {
                payload_type: "Satellite",
                payload_mass_kg: 165,
                payload_mass_lbs: 363,
              },
            ],
          },
        },
        ships: [],
      },
      {
        id: "5",
        mission_name: "RazakSat",
        launch_date_local: "2009-07-13T15:35:00+12:00",
        launch_site: {
          site_name_long: "Kwajalein Atoll Omelek Island",
        },
        links: {
          article_link:
            "http://www.spacex.com/news/2013/02/12/falcon-1-flight-5",
          video_link: "https://www.youtube.com/watch?v=yTaIDooc8Og",
        },
        rocket: {
          rocket_name: "Falcon 1",
          first_stage: {
            cores: [
              {
                flight: 1,
                core: {
                  reuse_count: 0,
                  status: "lost",
                },
              },
            ],
          },
          second_stage: {
            payloads: [
              {
                payload_type: "Satellite",
                payload_mass_kg: 200,
                payload_mass_lbs: 440,
              },
            ],
          },
        },
        ships: [],
      },
      {
        id: "6",
        mission_name: "Falcon 9 Test Flight",
        launch_date_local: "2010-06-04T14:45:00-04:00",
        launch_site: {
          site_name_long:
            "Cape Canaveral Air Force Station Space Launch Complex 40",
        },
        links: {
          article_link:
            "http://www.spacex.com/news/2013/02/12/falcon-9-flight-1",
          video_link: "https://www.youtube.com/watch?v=nxSxgBKlYws",
        },
        rocket: {
          rocket_name: "Falcon 9",
          first_stage: {
            cores: [
              {
                flight: 1,
                core: {
                  reuse_count: 0,
                  status: "lost",
                },
              },
            ],
          },
          second_stage: {
            payloads: [
              {
                payload_type: "Dragon Boilerplate",
                payload_mass_kg: null,
                payload_mass_lbs: null,
              },
            ],
          },
        },
        ships: [],
      },
      {
        id: "7",
        mission_name: "COTS 1",
        launch_date_local: "2010-12-08T11:43:00-04:00",
        launch_site: {
          site_name_long:
            "Cape Canaveral Air Force Station Space Launch Complex 40",
        },
        links: {
          article_link:
            "https://en.wikipedia.org/wiki/SpaceX_COTS_Demo_Flight_1",
          video_link: "https://www.youtube.com/watch?v=cdLITgWKe_0",
        },
        rocket: {
          rocket_name: "Falcon 9",
          first_stage: {
            cores: [
              {
                flight: 1,
                core: {
                  reuse_count: 0,
                  status: "lost",
                },
              },
            ],
          },
          second_stage: {
            payloads: [
              {
                payload_type: "Dragon 1.0",
                payload_mass_kg: null,
                payload_mass_lbs: null,
              },
              {
                payload_type: "Satellite",
                payload_mass_kg: null,
                payload_mass_lbs: null,
              },
            ],
          },
        },
        ships: [
          {
            name: "American Champion",
            home_port: "Port of Los Angeles",
            image: "https://i.imgur.com/woCxpkj.jpg",
          },
        ],
      },
      {
        id: "8",
        mission_name: "COTS 2",
        launch_date_local: "2012-05-22T03:44:00-04:00",
        launch_site: {
          site_name_long:
            "Cape Canaveral Air Force Station Space Launch Complex 40",
        },
        links: {
          article_link: "https://en.wikipedia.org/wiki/Dragon_C2%2B",
          video_link: "https://www.youtube.com/watch?v=tpQzDbAY7yI",
        },
        rocket: {
          rocket_name: "Falcon 9",
          first_stage: {
            cores: [
              {
                flight: 1,
                core: {
                  reuse_count: 0,
                  status: "lost",
                },
              },
            ],
          },
          second_stage: {
            payloads: [
              {
                payload_type: "Dragon 1.0",
                payload_mass_kg: 525,
                payload_mass_lbs: 1157,
              },
            ],
          },
        },
        ships: [
          {
            name: "American Champion",
            home_port: "Port of Los Angeles",
            image: "https://i.imgur.com/woCxpkj.jpg",
          },
        ],
      },
      {
        id: "9",
        mission_name: "CRS-1",
        launch_date_local: "2012-10-08T20:35:00-04:00",
        launch_site: {
          site_name_long:
            "Cape Canaveral Air Force Station Space Launch Complex 40",
        },
        links: {
          article_link:
            "https://www.nasa.gov/mission_pages/station/main/spacex-crs1-target.html",
          video_link: "https://www.youtube.com/watch?v=-Vk3hiV_zXU",
        },
        rocket: {
          rocket_name: "Falcon 9",
          first_stage: {
            cores: [
              {
                flight: 1,
                core: {
                  reuse_count: 0,
                  status: "lost",
                },
              },
            ],
          },
          second_stage: {
            payloads: [
              {
                payload_type: "Dragon 1.0",
                payload_mass_kg: 400,
                payload_mass_lbs: 881,
              },
              {
                payload_type: "Dragon 1.0",
                payload_mass_kg: 400,
                payload_mass_lbs: 881,
              },
            ],
          },
        },
        ships: [
          {
            name: "American Islander",
            home_port: "Port of Los Angeles",
            image: "https://i.imgur.com/jmj8Sh2.jpg",
          },
        ],
      },
      {
        id: "10",
        mission_name: "CRS-2",
        launch_date_local: "2013-03-01T15:10:00-04:00",
        launch_site: {
          site_name_long:
            "Cape Canaveral Air Force Station Space Launch Complex 40",
        },
        links: {
          article_link: "https://en.wikipedia.org/wiki/SpaceX_CRS-2",
          video_link: "https://www.youtube.com/watch?v=ik0ElKl5kW4",
        },
        rocket: {
          rocket_name: "Falcon 9",
          first_stage: {
            cores: [
              {
                flight: 1,
                core: {
                  reuse_count: 0,
                  status: "lost",
                },
              },
            ],
          },
          second_stage: {
            payloads: [
              {
                payload_type: "Dragon 1.0",
                payload_mass_kg: 677,
                payload_mass_lbs: 1492,
              },
            ],
          },
        },
        ships: [
          {
            name: "American Islander",
            home_port: "Port of Los Angeles",
            image: "https://i.imgur.com/jmj8Sh2.jpg",
          },
        ],
      },
    ],
  },
};
