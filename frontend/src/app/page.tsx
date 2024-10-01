import GradeList from "./components/gradeList/GradeList";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex w-screen h-screen justify-center items-center">
        <GradeList />
      </div>
    </>
  );
}
