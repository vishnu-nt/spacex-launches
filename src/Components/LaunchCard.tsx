import { getYoutubeThumbnailUrl } from "../utils/helper";
import type { Launch } from "../utils/types";

interface Iprops {
  launch: Launch;
  setSelectedLaunches: (launches: Launch[]) => void;
}

const LaunchCard = (props: Iprops) => {

  const handleCompareClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.setSelectedLaunches([props.launch]);
  };

  return (
    <a
      href={props.launch.links.article_link}
      target="_blank"
      rel="noreferrer"
      className="rounded-2xl border border-none bg-white shadow-md dark:bg-gray-800 block h-full"
    >
      <img
        className="rounded-t-lg h-72 w-full"
        src={getYoutubeThumbnailUrl(props.launch.links.video_link)}
        alt=""
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.launch.mission_name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.launch.launch_site.site_name_long}
        </p>
        <button
          onClick={handleCompareClick}
          className="mt-4 block w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 p-3 text-center text-sm font-medium text-white"
        >
          + Compare
        </button>
      </div>
    </a>
  );
};

export default LaunchCard;
