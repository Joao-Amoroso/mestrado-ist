import React from "react";

export default function Table() {
    return (
        <>
            <h1>Ano 1</h1>
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
        </>
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
