export interface Launch {
  id: string;
  mission_name: string;
  launch_date_local: string;
  launch_site: {
    site_name_long: string;
  };
  links: {
    article_link: string;
    video_link: string;
  };
  rocket: {
    rocket_name: string;
    first_stage: {
      cores: Array<{
        flight: number;
        core: {
          reuse_count: number;
          status: string;
        };
      }>;
    };
    second_stage: {
      payloads: Array<{
        payload_type: string;
        payload_mass_kg: number | null;
        payload_mass_lbs: number | null;
      }>;
    };
  };
  ships: Array<{
    name: string;
    home_port: string;
    image: string;
  }>;
}
