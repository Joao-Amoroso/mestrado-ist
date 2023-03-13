import List from "@/components/List";
import Table from "@/components/Table";
import { ScheduleProvider } from "@/context/ScheduleContext";
import { useState, createContext } from "react";

export default function Home() {
    const [tab, setTab] = useState<string>("Cadeiras");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <ScheduleProvider>
            {isOpen && <Modal close={() => setIsOpen(false)} />}
            <div className="sm:grid sm:grid-cols-6 sm:gap-3 flex flex-col-reverse h-screen">
                <div className="sm:col-span-1 bg-blue-900 flex  sm:items-start justify-center items-center p-2">
                    <ul
                        className="flex w-full sm:flex-col  justify-evenly
                     items-center sm:mt-6 gap-5 text-lg"
                    >
                        {["Cadeiras", "Horario"].map((v, i) => (
                            <li
                                className={`px-3 py-2 w-fit text-white cursor-pointer text-center relative
                                after:absolute after:bottom-0 after:left-0 after:h-[2px] 
                                after:scale-x-0
                                after:hover:scale-x-100
                                after:transition-transform after:duration-300 after:origin-center
                                after:w-full after:bg-gray-200 ${
                                    tab == v
                                        ? "after:scale-x-0 after:hover:scale-x-0 after:transition-none border-2 border-gray-200 hover:bg-slate-50 hover:bg-opacity-10"
                                        : ""
                                }`}
                                key={i}
                                onClick={() => setTab(v)}
                            >
                                {v}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sm:col-span-5 pt-3 px-3 pb-2 grow overflow-y-auto">
                    {tab == "Cadeiras" ? (
                        <List open={() => setIsOpen(true)} />
                    ) : (
                        <Table />
                    )}
                </div>
            </div>
        </ScheduleProvider>
    );
}

type ModalProps = {
    close: () => void;
};
function Modal({ close }: ModalProps): JSX.Element {
    const especializations = [
        "Sistemas distribuidos",
        "Ciencia de Dados",
        "Inteligencia Artificial"
    ];
    const [selected, setSelected] = useState<number>(0);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
        <div className="fixed h-screen w-screen z-50 bg-black flex items-center justify-center bg-opacity-60">
            <div className="bg-white p-5 flex flex-col gap-4 rounded-sm">
                <div className="flex gap-2 items-center">
                    <div>Especializacao</div>
                    <div className="relative w-full">
                        <button
                            onClick={() => setIsVisible((prev) => !prev)}
                            className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                        >
                            <span className="flex items-center flex-col">
                                <span className="ml-3 block truncate">
                                    {especializations[selected]}
                                </span>
                                {/* {especializations.map(
                                    (v, i) =>
                                        i != selected && (
                                            <span
                                                key={i}
                                                className="ml-3 block truncate scale-y-0 scale-x-0"
                                            >
                                                {v}
                                            </span>
                                        )
                                )} */}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <svg
                                    className="h-5 w-5 text-gray-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </span>
                        </button>
                        {isVisible && (
                            <ul className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {especializations.map((v, i) => (
                                    <li
                                        key={i}
                                        className={`"text-gray-900 relative cursor-pointer hover:bg-indigo-300 py-2 pl-3 pr-9 ${
                                            i == selected ? "bg-blue-600" : ""
                                        }`}
                                        onClick={() => {
                                            setSelected(i);
                                            setIsVisible(false);
                                        }}
                                    >
                                        {v}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div className="flex justify-around gap-2">
                    <button
                        className="bg-red-300 px-3 py-1 shadow-sm rounded-sm"
                        onClick={() => close()}
                    >
                        cancel
                    </button>
                    <button
                        className="bg-blue-300 px-3 py-1 shadow-sm rounded-sm"
                        onClick={() => close()}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
