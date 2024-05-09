import Image from "next/image";
import NavBar from "./_components/NavBar";
import QuizCard from "./_components/QuizCard";

export default function Home() {
  const authenticated = false
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-screen-xl p-4 sm:px-8 sm:py-8 lg:px-10 flex justify-between items-center">
        <QuizCard />
        <QuizCard />
        <QuizCard />
      </main>
    </>
  );
}
