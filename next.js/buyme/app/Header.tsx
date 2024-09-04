import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between p-4 max-w-screen-xl">
      <Link href={"/"}>Home</Link>
      <nav></nav>
    </header>
  );
}
