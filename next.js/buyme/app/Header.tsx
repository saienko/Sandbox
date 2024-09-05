import Link from "next/link";
import React from "react";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about/",
  },
  {
    title: "FAQ",
    href: "/faq/",
  },
  {
    title: "Login",
    href: "/login/",
  },
];
export default function Header() {
  return (
    <header className="flex justify-between max-w-screen-xl  mx-auto text-center p-10 border-b">
      <div></div>
      <nav className="flex gap-4 items-center">
        {links.map((link, idx) => (
          <Link href={link.href} key={idx}>
            {link.title}
          </Link>
        ))}
        <button className="border rounded-full px-4 py-2">
          <Link href={"login"}>Sing In</Link>
        </button>
        <button className="bg-amber-400 rounded-full px-4 py-2 shadow-md transition duration-300 ease-linear hover:bg-amber-800 hover:text-white ">
          <Link href={"login"}>Sing Up</Link>
        </button>
      </nav>
    </header>
  );
}
