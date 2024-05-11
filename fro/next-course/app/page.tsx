// Search Metdata
export const metadata = {
  title: "About my page",
};

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header>
        <Link href="/blog">Blog</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/profile">Profile</Link>
      </header>
      <h1>Home Page</h1>
    </div>
  );
}
