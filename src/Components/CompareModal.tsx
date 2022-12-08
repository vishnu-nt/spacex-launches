import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Select from "./Select";
import { Launch } from "../utils/types";

interface IProps {
  launches: Launch[];
  selectedLaunches: Launch[];
  setSelectedLaunches: (launches: Launch[]) => void;
}

const Modal = ({ selectedLaunches, setSelectedLaunches, launches }: IProps) => {
  const handleCompareSelect = (selectedLaunchId: string, idx: number) => {
    const itemsToCompare = [...selectedLaunches];
    const selectedItem = launches.find(
      (l) => l.id === selectedLaunchId
    ) as Launch;
    itemsToCompare[idx] = selectedItem;
    setSelectedLaunches(itemsToCompare);
  };

  const formatDate = (dateString: string) => {
    if (dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    }
    return "";
  };

  const renderShipCard = (name: string, homePort: string, imageUrl: string) => (
    <div className="flex justify-center" key={name}>
      <div className="flex flex-col rounded-lg bg-white shadow-sm md:max-w-xl md:flex-row">
        <img
          className="h-16 w-full rounded-t-lg object-contain md:h-auto md:w-24 md:rounded-none md:rounded-l-lg"
          src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
          alt=""
        />
        <div className="flex flex-col justify-start p-6">
          <h5 className="mb-2 text-lg font-medium text-gray-900">{name}</h5>
          <p className="text-xs text-gray-600">{homePort}</p>
        </div>
      </div>
    </div>
  );

  const launchOptions = launches.map((l) => ({
    value: l.id,
    label: l.mission_name,
  }));

  const firstItemToCompare = selectedLaunches[0] || {};
  const secondItemToCompare = selectedLaunches[1] || {};
  const thirdItemToCompare = selectedLaunches[2] || {};

  const table = (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full border text-center">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 text-sm font-medium text-gray-900"
                  ></th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 text-sm font-medium text-gray-900"
                  >
                    <div className="mt-12">
                      {firstItemToCompare?.mission_name}
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="border-r px-6 py-4 text-sm font-medium text-gray-900"
                  >
                    <div className="mb-4">
                      <Select
                        options={launchOptions}
                        value=""
                        onChange={(val) => handleCompareSelect(val, 1)}
                      />
                    </div>

                    {secondItemToCompare?.mission_name}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-sm font-medium text-gray-900"
                  >
                    <div className="mb-4">
                      <Select
                        options={launchOptions}
                        value=""
                        onChange={(val) => handleCompareSelect(val, 2)}
                      />
                    </div>

                    {thirdItemToCompare?.mission_name}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="whitespace-nowrap border-r px-6 py-4 text-left text-sm font-medium text-gray-900">
                    Launch Date
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 text-sm font-light text-gray-900">
                    {formatDate(firstItemToCompare?.launch_date_local)}
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 text-sm font-light text-gray-900">
                    {formatDate(secondItemToCompare?.launch_date_local)}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                    {formatDate(secondItemToCompare?.launch_date_local)}
                  </td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="whitespace-nowrap border-r px-6 py-4 text-left text-sm font-medium text-gray-900">
                    Launch site
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 text-sm font-light text-gray-900">
                    {firstItemToCompare?.launch_site?.site_name_long}
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 text-sm font-light text-gray-900">
                    {secondItemToCompare?.launch_site?.site_name_long}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                    {thirdItemToCompare?.launch_site?.site_name_long}
                  </td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="whitespace-nowrap border-r px-6 py-4 text-left text-sm font-medium text-gray-900">
                    First stage flight
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 text-center text-sm font-light text-gray-900">
                    {firstItemToCompare?.rocket?.first_stage.cores[0]?.flight}
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 text-sm font-light text-gray-900">
                    {secondItemToCompare?.launch_site?.site_name_long}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                    {thirdItemToCompare?.rocket?.first_stage.cores[0]?.flight}
                  </td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="whitespace-nowrap border-r px-6 py-4 text-left text-sm font-medium text-gray-900">
                    Core reuse count
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 text-sm font-light text-gray-900">
                    {
                      firstItemToCompare?.rocket?.first_stage?.cores[0]?.core
                        ?.reuse_count
                    }
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 text-center text-sm font-light text-gray-900">
                    {
                      secondItemToCompare?.rocket?.first_stage?.cores[0]?.core
                        ?.reuse_count
                    }
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                    {
                      thirdItemToCompare?.rocket?.first_stage?.cores[0]?.core
                        ?.reuse_count
                    }
                  </td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="whitespace-nowrap border-r px-6 py-4 text-left text-sm font-medium text-gray-900">
                    Status
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 text-sm font-light text-gray-900">
                    {
                      firstItemToCompare?.rocket?.first_stage?.cores[0]?.core
                        ?.status
                    }
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 text-center text-sm font-light text-gray-900">
                    {
                      secondItemToCompare?.rocket?.first_stage?.cores[0]?.core
                        ?.status
                    }
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                    {
                      thirdItemToCompare?.rocket?.first_stage?.cores[0]?.core
                        ?.status
                    }
                  </td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="whitespace-nowrap border-r px-6 py-4 text-left text-sm font-medium text-gray-900">
                    Payload type
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 text-sm font-light text-gray-900">
                    {
                      firstItemToCompare?.rocket?.second_stage?.payloads[0]
                        ?.payload_type
                    }
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 text-sm font-light text-gray-900">
                    {
                      secondItemToCompare?.rocket?.second_stage?.payloads[0]
                        ?.payload_type
                    }
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                    {
                      thirdItemToCompare?.rocket?.second_stage?.payloads[0]
                        ?.payload_type
                    }
                  </td>
                </tr>
                <tr className="border-b bg-white">
                  <td className="whitespace-nowrap border-r px-6 py-4 text-left text-sm font-medium text-gray-900">
                    Payload mass
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 text-sm font-light text-gray-900">
                    {
                      firstItemToCompare?.rocket?.second_stage?.payloads[0]
                        ?.payload_type
                    }
                  </td>
                  <td className="whitespace-nowrap border-r px-6 py-4 text-sm font-light text-gray-900">
                    {
                      secondItemToCompare?.rocket?.second_stage.payloads[0]
                        ?.payload_mass_kg
                    }
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                    {
                      thirdItemToCompare?.rocket?.second_stage?.payloads[0]
                        ?.payload_mass_kg
                    }
                  </td>
                </tr>
                <tr className="border-b bg-white text-left">
                  <td className="whitespace-nowrap border-r px-6 py-4 text-sm font-medium text-gray-900">
                    Ships
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                    {firstItemToCompare?.ships?.map((ship) =>
                      renderShipCard(ship.name, ship.home_port, ship.image)
                    )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                    {secondItemToCompare?.ships?.map((ship) =>
                      renderShipCard(ship.name, ship.home_port, ship.image)
                    )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                    {thirdItemToCompare?.ships?.map((ship) =>
                      renderShipCard(ship.name, ship.home_port, ship.image)
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Transition.Root show={selectedLaunches.length > 0} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setSelectedLaunches([])}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative max-w-fit transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full xl:max-w-7xl">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="mb-4 flex justify-between">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Compare Launches
                    </Dialog.Title>
                  </div>
                  {table}
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setSelectedLaunches([])}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
