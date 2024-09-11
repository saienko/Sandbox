import React from "react";

export default function Sidebar() {
  return (
    <div className="bg-gray-200 basis-1/6 mt-5 ml-5">
      <div className="sticky top-4">
        <div className="border-b mb-4 mt-2 pb-4 border-stone-300 hover:bg-stone-200">
          <button className="flex p-0.5 rounded transition-colors relative gap-2 w-full items-center">
            <img
              src="https://api.dicebear.com/9.x/notionists/svg?seed=Midnight"
              alt="avatar"
              className="size-12 rounded shrink-0"
            />
            <div className="text-start">
              <span className="text-sm font-bold block">Sandel Andel</span>
              <span className="text-xs block text-stone-500">
                sandel@andel.com
              </span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 absolute right-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
