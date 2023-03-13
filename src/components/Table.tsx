import { useSechudle } from "@/context/ScheduleContext";
import React from "react";

export default function Table() {
    const { courses } = useSechudle();

    return (
        <div className="flex flex-col">
            <div className="flex md:flex-row justify-evenly items-center flex-col">
                <div>
                    <h1>
                        Ano 1{" "}
                        <span>
                            {" "}
                            <span className="text-red-600">30</span>/60
                        </span>
                    </h1>
                    <div className="grid gap-2 grid-cols-4  ">
                        {["P1", "P2", "P3", "P4"].map((v, i) => (
                            <div key={i} className="grid place-items-center">
                                <h1 className="font-bold">{v}</h1>
                            </div>
                        ))}
                    </div>
                    <div className="grid gap-2 p-3 grid-cols-4 grid-flow-dense ">
                        {courses.map((v, i) => (
                            <div
                                key={i}
                                className={`bg-indigo-400 
                            p-2 rounded
                             shadow w-full  ${
                                 v.period.length == 2 ? " col-span-2" : ""
                             }  col-start-${v.period[0]} col-end-${
                                    v.period[0]
                                } `}
                            >
                                {v.acronym} {i}
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h1>Ano 2</h1>
                    <div className="flex h-40 gap-2 p-3">
                        <div className=" flex items-center gap-1 flex-col">
                            {["AID", "CCEIC", "DAD"].map((v) => (
                                <div className="w-full px-3 py-1 bg-red-500 rounded-sm shadow text-center">
                                    {v}
                                </div>
                            ))}
                        </div>
                        <div className=" flex items-center gap-1 flex-col ">
                            {["AID", "CCEIC", "DAD"].map((v) => (
                                <div className="w-full px-3 py-1 bg-red-500 rounded-sm shadow  text-center">
                                    {v}
                                </div>
                            ))}
                        </div>
                        <div className=" flex items-center gap-1 flex-col">
                            {["AID", "CCEIC", "DAD"].map((v) => (
                                <div className="w-full px-3 py-1 bg-red-500 rounded-sm shadow text-center">
                                    {v}
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-1 flex-col">
                            {["AID", "CCEIC", "DAD"].map((v) => (
                                <div className="w-full px-3 py-1 bg-red-500 rounded-sm shadow text-center">
                                    {v}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-auto w-fit gap-2">
                <p className="flex items-center">
                    Sistemas distribuidos
                    <span className="bg-[#EF5350] ml-2 h-[1em] w-[1em] block"></span>
                </p>

                <p className="flex items-center">
                    Ciencia de Dados
                    <span className="bg-[#616161] ml-2 h-[1em] w-[1em] block"></span>
                </p>

                <p className="flex items-center">
                    Opção Livre
                    <span className="bg-[#212121] ml-2 h-[1em] w-[1em] block"></span>
                </p>
            </div>
        </div>
    );
    // return (
    //     <>
    //         <h1>Ano 1</h1>
    //         <div className="grid grid-cols-4 h-40">
    //             <div className="border-r-2 border-gray-900 flex items-center gap-2 flex-col p-4">
    //                 {["AID", "CCEIC", "DAD"].map((v) => (
    //                     <div className="px-3 py-1 bg-red-500 rounded-sm shadow w-[6rem] text-center">
    //                         {v}
    //                     </div>
    //                 ))}
    //             </div>
    //             <div className="border-r-2 border-gray-900 flex items-center gap-2 flex-col p-4">
    //                 {["AID", "CCEIC", "DAD"].map((v) => (
    //                     <div className="px-3 py-1 bg-red-500 rounded-sm shadow w-[6rem] text-center">
    //                         {v}
    //                     </div>
    //                 ))}
    //             </div>
    //             <div className="border-r-2 border-gray-900 flex items-center gap-2 flex-col p-4">
    //                 {["AID", "CCEIC", "DAD"].map((v) => (
    //                     <div className="px-3 py-1 bg-red-500 rounded-sm shadow w-[6rem] text-center">
    //                         {v}
    //                     </div>
    //                 ))}
    //             </div>
    //             <div className="flex items-center gap-2 flex-col p-4">
    //                 {["AID", "CCEIC", "DAD"].map((v) => (
    //                     <div className="px-3 py-1 bg-red-500 rounded-sm shadow w-[6rem] text-center">
    //                         {v}
    //                     </div>
    //                 ))}
    //             </div>
    //         </div>
    //         <h1>Ano 2</h1>
    //         <div className="grid grid-cols-4 h-40">
    //             <div className="border-r-2 border-gray-900 flex items-center gap-2 flex-col p-4">
    //                 {["AID", "CCEIC", "DAD"].map((v) => (
    //                     <div className="px-3 py-1 bg-red-500 rounded-sm shadow w-[6rem] text-center">
    //                         {v}
    //                     </div>
    //                 ))}
    //             </div>
    //             <div className="border-r-2 border-gray-900 flex items-center gap-2 flex-col p-4">
    //                 {["AID", "CCEIC", "DAD"].map((v) => (
    //                     <div className="px-3 py-1 bg-red-500 rounded-sm shadow w-[6rem] text-center">
    //                         {v}
    //                     </div>
    //                 ))}
    //             </div>
    //             <div className="border-r-2 border-gray-900 flex items-center gap-2 flex-col p-4">
    //                 {["AID", "CCEIC", "DAD"].map((v) => (
    //                     <div className="px-3 py-1 bg-red-500 rounded-sm shadow w-[6rem] text-center">
    //                         {v}
    //                     </div>
    //                 ))}
    //             </div>
    //             <div className="flex items-center gap-2 flex-col p-4">
    //                 {["AID", "CCEIC", "DAD"].map((v) => (
    //                     <div className="px-3 py-1 bg-red-500 rounded-sm shadow w-[6rem] text-center">
    //                         {v}
    //                     </div>
    //                 ))}
    //             </div>
    //         </div>
    //     </>
    // );
}
