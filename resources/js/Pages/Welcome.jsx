import Accordian from "@/Components/Accordian";
import CardList from "@/Components/CardList";
import CourseList from "@/Components/CourseList";
import CourseReview from "@/Components/CourseReview";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

export default function Welcome({ auth }) {
  return (
    <>
      <Head title="Udemy" />
      <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
        <div>
          <div>
            <Navbar user={auth.user} />
            <CourseList />
            <CardList />
            <CourseReview />

            <footer className="py-16 text-center text-sm text-black dark:text-white/70">
              {/* Laravel v{laravelVersion} (PHP v{phpVersion}) */}
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
