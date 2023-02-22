import List from "@/components/List";
import Table from "@/components/Table";
import { useState } from "react";

export default function Home() {
    const [tab, setTab] = useState<string>("Cadeiras");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            {isOpen && <Modal close={() => setIsOpen(false)} />}
            <div className="grid grid-cols-6 gap-3 h-screen">
                <div className="col-span-1 bg-blue-700">
                    <ul className="flex w-full flex-col items-center mt-6 gap-5">
                        <li
                            className="px-3 py-2 w-fit bg-red-300 text-center hover:bg-slate-500"
                            onClick={() => setTab("Cadeiras")}
                        >
                            Cadeiras
                        </li>
                        <li
                            className="px-3 py-2 w-fit bg-red-300 text-center hover:bg-slate-500"
                            onClick={() => setTab("Horario")}
                        >
                            horario
                        </li>
                    </ul>
                </div>
                <div className="col-span-5 pt-3 px-3">
                    {tab == "Cadeiras" ? (
                        <List open={() => setIsOpen(true)} />
                    ) : (
                        <Table />
                    )}
                </div>
            </div>
        </>
    );
}

type ModalProps = {
    close: () => void;
};
function Modal({ close }: ModalProps): JSX.Element {
    return (
        <div className="fixed h-screen w-screen z-50 bg-black flex items-center justify-center bg-opacity-60">
            <div className="bg-white p-5 flex flex-col gap-4 rounded-sm">
                <div className="flex gap-2 items-center">
                    <div>Especializacao</div>
                    <div className="relative">
                        <button className="elative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                            <span className="flex items-center">
                                <span className="ml-3 block truncate">
                                    Tom Cook
                                </span>
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
                        {/* <ul className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    <li className="select-nonetext-gray-900 relative cursor-default select-none py-2 pl-3 pr-9">
                        C
                    </li>
                    <li className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9">
                        C
                    </li>
                </ul> */}
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
