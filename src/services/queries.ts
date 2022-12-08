import { gql } from "../__generated__/gql";

export const LAUNCHES_PAST = gql(`
  query launchesPast($limit: Int!, $offset: Int, $missionName: String, $rocketName: String) {
    launchesPast(limit: $limit, offset: $offset, find: {mission_name: $missionName, rocket_name: $rocketName}) {
      mission_name
      id
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        second_stage {
          payloads {
            payload_type
            payload_mass_kg
            payload_mass_lbs
          }
        }
      }
      ships {
        name
        home_port
        image
      }
    }
  }
`);
