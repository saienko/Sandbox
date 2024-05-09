"use client";
import { useState } from "react";

export default function UserMenu() {
  const UserMenu = () => {
    const [openUserMenu, setOpenUserMenu] = useState(false);
  };

  const useMenuHandler = () => {
    setOpenUserMenu(!openUserMenu);
  };

  const links = [
    { name: "Stats", path: "/stats" },
    { name: "Leaderboards", path: "/leaderboads" },
  ];
  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Login
      </button>
    </>
  );
}
