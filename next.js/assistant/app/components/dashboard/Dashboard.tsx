import React from "react";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <div className="bg-gray-200 min-h-screen flex">
      <Sidebar />
      <div className=" bg-white flex-1 rounded-lg m-5">
      <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
          <button className="flex p-2 rounded transition-colors relative gap-2 w-full items-center">

            <div className="text-start">
              <span className="text-sm font-bold block">Good morning, Andel</span>
              <span className="text-xs block text-stone-500">
                Tuesday, Aug 8
              </span>
            </div>

          </button>
        </div>
      </div>
    </div>
  );
}
