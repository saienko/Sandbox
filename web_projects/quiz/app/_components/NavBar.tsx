import React from "react";
import Image from "next/image";
import UserMenu from "./UserMenu";

function NavBar() {
  return (
    <nav className="mx-auto max-w-screen-xl p-4 sm:px-8 sm:py-8 lg:px-10 flex justify-between items-center">
      <Image src="/img/quiz.png" width={32} height={32} alt="QuizHome Image" className="h-8"/>
      <h1>Navigation Bar1</h1>
      <h1>Navigation Bar2</h1>
      <h1>Navigation Bar3</h1>
      <h1>Navigation Bar4</h1>
      <h1>Navigation Bar5</h1>

      <UserMenu />
    </nav>
  );
}

export default NavBar;
