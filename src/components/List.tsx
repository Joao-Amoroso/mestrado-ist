import { useSechudle } from "@/context/ScheduleContext";
import React, { useState } from "react";
import TextInput from "./TextInput";
import { Degree } from "@/types/types";
type ListProps = {
    open: () => void;
};
export default function List({ open }: ListProps) {
    const { degrees } = useSechudle();

    const [tags, setTags] = useState<
        { name: string; acronym: string; selected: boolean }[]
    >(
        degrees.map((v) => {
            return { name: v.name, acronym: v.acronym, selected: false };
        })
    );

    const oneSelected = tags.some((v) => v.selected);

    return (
        <>
            <form className="rounded-sm md:grid md:grid-cols-4 flex flex-col gap-3">
                <TextInput
                    tags={tags}
                    setSelected={(i: number) =>
                        setTags((prev) =>
                            prev.map((v, j) =>
                                j == i ? { ...v, selected: true } : v
                            )
                        )
                    }
                />
                <div className="col-span-2 flex gap-4 md:ml-4">
                    <div className="flex gap-2 items-center">
                        <label htmlFor="none">None</label>
                        <input
                            type="radio"
                            name="radio"
                            id="none"
                            value="none"
                            defaultChecked={true}
                        />
                    </div>
                    <div className="flex gap-2 items-center">
                        <label htmlFor="especializacao">Especialização</label>
                        <input
                            type="radio"
                            name="radio"
                            id="especializacao"
                            value="especializacao"
                        />
                    </div>
                    <div className="flex gap-2 items-center">
                        <label htmlFor="periodo">Periodo</label>
                        <input
                            type="radio"
                            name="radio"
                            id="periodo"
                            value="periodo"
                        />
                    </div>
                </div>
            </form>
            <div className="flex gap-2 p-2 pl-0 mb-2 mt-1">
                {tags.map(
                    (v, i) =>
                        v.selected && (
                            <div
                                key={i}
                                className="relative px-3 py-1 bg-green-300 rounded-full shadow-sm text-sm
                        flex items-center justify-between pr-2 hover:brightness-125 cursor-default
                            
                        "
                            >
                                <span>{v.acronym}</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    className="w-[1.2em] h-[1.2em] ml-1 hover:fill-gray-700 cursor-pointer"
                                    onClick={() =>
                                        setTags((prev) =>
                                            prev.map((v, j) =>
                                                j == i
                                                    ? { ...v, selected: false }
                                                    : v
                                            )
                                        )
                                    }
                                >
                                    <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                                </svg>
                            </div>
                        )
                )}
            </div>
            <ul className="flex flex-col gap-3">
                {degrees.map((v, i) => {
                    if (oneSelected) {
                        return (
                            tags[i].selected && (
                                <Degree value={v} key={i} open={open} id={i} />
                            )
                        );
                    }

                    return <Degree value={v} key={i} open={open} id={i} />;
                })}
            </ul>
        </>
    );
}

type DegreeProps = {
    value: Degree;
    open: () => void;
    id: number;
};

function Degree({ value, open, id }: DegreeProps) {
    const [collapsed, setCollapsed] = useState<boolean>(true);

    const coursesPerPeriod: { tag: string; added: boolean }[][] = [
        [],
        [],
        [],
        []
    ];

    for (const course of value.courses) {
        for (const v of course.period) {
            coursesPerPeriod[v - 1].push({
                tag: `(${course.acronym}) ${course.name}`,
                added: false
            });
        }
    }

    const [courses, setCourse] = useState(coursesPerPeriod);

    return (
        <li className="bg-slate-50  shadow-md rounded">
            <h1
                className="p-3 flex items-center cursor-pointer hover:bg-gray-100 rounded"
                onClick={() => setCollapsed((prev) => !prev)}
            >
                <svg
                    viewBox="0 0 39 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-[1.4em] h-[1.4em] transition-transform duration-150 ${
                        collapsed ? "rotate-0" : "rotate-90"
                    }`}
                >
                    <path
                        d="M15.275 29.25L13 26.975L20.475 19.5L13 12.025L15.275 9.75L25.025 19.5L15.275 29.25Z"
                        fill="black"
                    />
                </svg>
                {value.name}
                {"  "}({value.acronym})
            </h1>
            {!collapsed && (
                <>
                    <div className="border-b border-gray-200" />

                    <form className="ml-2 p-3 flex gap-4">
                        <div className="flex gap-2 items-center">
                            <label htmlFor={`especializacao${id}`}>
                                Especialização
                            </label>
                            <input
                                type="radio"
                                name="radio"
                                id={`especializacao${id}`}
                                value={`especializacao${id}`}
                                defaultChecked={true}
                            />
                        </div>
                        <div className="flex gap-2 items-center">
                            <label htmlFor={`periodo${id}`}>Periodo</label>
                            <input
                                type="radio"
                                name="radio"
                                id={`periodo${id}`}
                                value={`periodo${id}`}
                            />
                        </div>
                    </form>

                    <ul className=" p-3 ml-2 flex flex-col gap-3">
                        <CollapseMenu
                            value="P1"
                            content={courses[0]}
                            open={open}
                        />

                        <CollapseMenu
                            value="P2"
                            content={courses[1]}
                            open={open}
                        />
                        <CollapseMenu
                            value="P3"
                            content={courses[2]}
                            open={open}
                        />
                        <CollapseMenu
                            value="P4"
                            content={courses[3]}
                            open={open}
                        />
                    </ul>
                </>
            )}
        </li>
    );
}

type Content = {
    tag: string;
    added: boolean;
};
type CollapseMenuProps = {
    value: string;
    content: Content[];
    open: () => void;
};
function CollapseMenu({ value, content, open }: CollapseMenuProps) {
    const [collapsed, setCollapsed] = useState<boolean>(true);

    return (
        <li className="border border-gray-200 shadow">
            <h1
                className="p-2 flex items-center cursor-pointer hover:bg-gray-100"
                onClick={() => setCollapsed((prev) => !prev)}
            >
                <svg
                    viewBox="0 0 39 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-[1.4em] h-[1.4em] transition-transform duration-150 ${
                        collapsed ? "rotate-0" : "rotate-90"
                    }`}
                >
                    <path
                        d="M15.275 29.25L13 26.975L20.475 19.5L13 12.025L15.275 9.75L25.025 19.5L15.275 29.25Z"
                        fill="black"
                    />
                </svg>
                {value}
            </h1>
            {!collapsed && (
                <>
                    <div className="border-b border-gray-200" />

                    <ul className=" p-3 ml-2 flex flex-col gap-3">
                        {content.map((v, i) => (
                            <li
                                className=" relative
                                after:absolute after:bottom-0 after:left-0 after:h-[2px] 
                                after:scale-x-0
                                after:hover:scale-x-100
                                after:transition-transform after:duration-300 after:origin-left
                                after:w-full after:bg-red-500
                                p-2 flex justify-between items-center cursor-pointer"
                                key={i}
                                onClick={() =>
                                    v.added ? (v.added = false) : open()
                                }
                            >
                                <p>{v.tag}</p>
                                {v.added ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        className="h-4 w-4"
                                    >
                                        <path d="M416 288H384L32 288H0l0-64 32 0 352 0 32 0v64z" />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        className="h-4 w-4"
                                    >
                                        <path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z" />
                                    </svg>
                                )}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </li>
    );
}
