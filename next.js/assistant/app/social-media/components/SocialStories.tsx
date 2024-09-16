import Image from "next/image";
import vence from "@/public/img/pexels-vince.jpg";
import React from "react";

export default function SocialStories() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-x-scroll text-sm">
      <div className="flex gap-8 w-max">
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src={vence}
            height={80}
            width={80}
            alt="Story"
            className="h-20 w-20 rounded-full ring-2"
          />
          <span className="font-medium">Ricky</span>
        </div>
        {/* Next Story */}
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src={vence}
            height={80}
            width={80}
            alt="Story"
            className="h-20 w-20 rounded-full ring-2"
          />
          <span className="font-medium">Ricky</span>
        </div>
        {/* Next Story */}
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src={vence}
            height={80}
            width={80}
            alt="Story"
            className="h-20 w-20 rounded-full ring-2"
          />
          <span className="font-medium">Ricky</span>
        </div>
        {/* Next Story */}
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src={vence}
            height={80}
            width={80}
            alt="Story"
            className="h-20 w-20 rounded-full ring-2"
          />
          <span className="font-medium">Ricky</span>
        </div>
        {/* Next Story */}
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src={vence}
            height={80}
            width={80}
            alt="Story"
            className="h-20 w-20 rounded-full ring-2"
          />
          <span className="font-medium">Ricky</span>
        </div>
        {/* Next Story */}
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src={vence}
            height={80}
            width={80}
            alt="Story"
            className="h-20 w-20 rounded-full ring-2"
          />
          <span className="font-medium">Ricky</span>
        </div>
        {/* Next Story */}
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src={vence}
            height={80}
            width={80}
            alt="Story"
            className="h-20 w-20 rounded-full ring-2"
          />
          <span className="font-medium">Ricky</span>
        </div>
        {/* Next Story */}
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src={vence}
            height={80}
            width={80}
            alt="Story"
            className="h-20 w-20 rounded-full ring-2"
          />
          <span className="font-medium">Ricky</span>
        </div>
        {/* Next Story */}
      </div>
    </div>
  );
}
