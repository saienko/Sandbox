import React from "react";
import SocialLeftMenu from "./components/SocialLeftMenu";
import SocialRightMenu from "./components/SocialRightMenu";
import SocialFeed from "./components/SocialFeed";
import SocialAddPost from "./components/SocialAddPost";
import SocialStories from "./components/SocialStories";

export default function SocialMedia() {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <SocialLeftMenu />
      </div>
      <div className="w-full lg:w-[705] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <SocialStories />
          <SocialAddPost />
          <SocialFeed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <SocialRightMenu />
      </div>
    </div>
  );
}
