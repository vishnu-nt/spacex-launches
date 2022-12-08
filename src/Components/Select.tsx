import { useState } from "react";
import { Combobox, Transition } from "@headlessui/react";

interface IProps {
  options: Array<{ label: string; value: string }>;
  value: string;
  onChange: (value: string) => void;
}

const Select = ({ options, value, onChange }: IProps) => {
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? options
      : options.filter((opt) => {
          return opt.label.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox value={value} onChange={onChange}>
      {({ open }) => (
        <>
          <Combobox.Input
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search.."
            className="w-full border py-2 px-2"
          />
          {open && (
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <div className="relative">
                <Combobox.Options
                  static
                  className="absolute left-0 right-0 bg-white text-left shadow-md"
                >
                  {filteredPeople.map((opt) => (
                    <Combobox.Option
                      key={opt.value}
                      value={opt.value}
                      className="cursor-pointer border-b px-2 py-2 hover:bg-gray-50"
                    >
                      {opt.label}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              </div>
            </Transition>
          )}
        </>
      )}
    </Combobox>
  );
};

export default Select;
