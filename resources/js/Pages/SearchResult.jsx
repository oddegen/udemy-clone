import CourseList from "@/Components/CourseList";
import FilterSidebar from "@/Components/FilterSidebar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function SearchResult({ auth }) {
    const { courses, query } = usePage().props;
    const [sortBy, setSortBy] = useState('rating_desc');
    const [ratingFilter, setRatingFilter] = useState(null);

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    }

    const handleRatingFilterChange = (e) => {
        setRatingFilter(parseFloat(e.target.value));
    }

    const filteredCourses = courses
        .filter(course => !ratingFilter || course.rating_avg_rating >= ratingFilter)
        .sort((a, b) => {
            if (sortBy === 'rating_desc') return b.rating_avg_rating - a.rating_avg_rating;
            if (sortBy === 'rating_asc') return a.rating_avg_rating - b.rating_avg_rating;
            return 0;
        });
    
    console.log(filteredCourses);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Search Results" />
            <div className="mx-80 mt-10 mb-10">
                <div>
                    <p className="font-bold text-xl"><span>{ Object.keys(filteredCourses).length}</span> Results for <span>{query}</span></p>
                </div>
                <div className="flex justify-start gap-6 my-5">
                    <div className="relative">
                        <select
                            id="sort-by"
                            class="px-4 py-2 bg-gray-200 rounded-md appearance-none pr-8"
                            value={sortBy}
                            onChange={handleSortChange}
                        >
                            <option value="rating_desc">Rating: Descending</option>
                            <option value="rating_asc">Rating: Ascending</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                    <div className="text-center">
                        <Link class="text-purple-700">clear filters</Link>
                    </div>
                </div>
                <div className="flex">
                    <FilterSidebar handleRatingFilterChange={handleRatingFilterChange} />
                    <CourseList courses={filteredCourses} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}