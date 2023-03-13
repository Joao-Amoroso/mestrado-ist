import React, { useState } from "react";

type TextInputProps = {
    tags: { name: string; acronym: string; selected: boolean }[];
    setSelected: (i: number) => void;
};

export default function TextInput({ tags, setSelected }: TextInputProps) {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isHover, setIsHover] = useState<boolean>(false);

    const [text, setText] = useState<string>("");

    return (
        <div
            className="col-span-2 relative"
            onFocus={() => setIsActive(true)}
            onBlur={() => (isHover ? null : setIsActive(false))}
        >
            <div className="flex items-center relative">
                <input
                    type="text"
                    placeholder="Filter courses or specializations"
                    className=" outline-none border py-2 px-2 pr-7  w-full rounded-md border-gray-300 shadow-sm focus-visible:border-indigo-500 focus-visible:ring-indigo-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    value={text}
                    onFocus={() => console.log("text focus")}
                    onBlur={() => console.log("text blur")}
                    onChange={(e) => setText(e.target.value)}
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="w-[1.4em] h-[1.4em] ml-1 fill-gray-500 hover:fill-gray-700 cursor-pointer absolute right-0 pr-3"
                    onClick={() => setText("")}
                >
                    <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                </svg>
            </div>

            {isActive && (
                <ul
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white  text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                >
                    {tags.map((v, i) => {
                        if (
                            !v.name
                                .toLowerCase()
                                .includes(text.toLowerCase()) &&
                            !v.acronym
                                .toLowerCase()
                                .includes(text.toLowerCase())
                        )
                            return null;
                        return (
                            !v.selected && (
                                <li
                                    key={i}
                                    className="text-gray-900 relative py-2 pl-3 pr-9 cursor-pointer hover:bg-indigo-500"
                                    onClick={() => {
                                        setText("");
                                        setSelected(i);
                                        setIsActive(false);
                                        setIsHover(false);
                                    }}
                                >
                                    {v.name}
                                </li>
                            )
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
