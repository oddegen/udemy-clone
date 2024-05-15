import Accordian from "@/Components/Accordian";
import CourseList from "@/Components/ui/CourseList";
import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const sections = [
        {
            title: "Section 1",
            lecture_count: 6,
            lecture_min_count: "3h 10m",
            lectures: [
                {
                    title: "Introduction to React",
                    type: "video",
                    url: "https://example.com/react-intro",
                    url_preview: "https://example.com/react-intro-preview",
                    min: "10m",
                },
                {
                    title: "React Components",
                    type: "video",
                    url: "https://example.com/react-components",
                    url_preview: "https://example.com/react-components-preview",
                    min: "15m",
                },
                {
                    title: "State and Props",
                    type: "video",
                    url: "https://example.com/react-state-props",
                    url_preview:
                        "https://example.com/react-state-props-preview",
                    min: "20m",
                },
                {
                    title: "React Hooks",
                    type: "video",
                    url: "https://example.com/react-hooks",
                    url_preview: "https://example.com/react-hooks-preview",
                    min: "25m",
                },
                {
                    title: "Project: Building a To-Do App",
                    type: "video",
                    url: "https://example.com/react-todo-app",
                    url_preview: "https://example.com/react-todo-app-preview",
                    min: "1h 20m",
                },
                {
                    title: "React Best Practices",
                    type: "article",
                    url: "https://example.com/react-best-practices",
                    min: "30m",
                },
            ],
        },
        {
            title: "Section 2",
            lecture_count: 4,
            lecture_min_count: "2h 15m",
            lectures: [
                {
                    title: "Introduction to HTML",
                    type: "video",
                    url: "https://example.com/html-intro",
                    url_preview: "https://example.com/html-intro-preview",
                    min: "30m",
                },
                {
                    title: "Introduction to CSS",
                    type: "video",
                    url: "https://example.com/css-intro",
                    url_preview: "https://example.com/css-intro-preview",
                    min: "45m",
                },
                {
                    title: "Project: Building a Personal Portfolio",
                    type: "video",
                    url: "https://example.com/portfolio-project",
                    url_preview:
                        "https://example.com/portfolio-project-preview",
                    min: "30m",
                },
                {
                    title: "CSS Grid Layout",
                    type: "article",
                    url: "https://example.com/css-grid-layout",
                    min: "30m",
                },
            ],
        },
    ];

    return (
        <>
            <Head title="Udemy" />
            <div>Welcome</div>
            <Accordian sections={sections} />
            <CourseList />
        </>
    );
}
