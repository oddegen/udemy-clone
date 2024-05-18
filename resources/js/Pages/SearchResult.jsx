import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";


export default function SearchResult({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Search Results" />
            {/* your implementation starts */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Search Results Page</div>
                    </div>
                </div>
            </div>
            {/* your implementation ends */}
        </AuthenticatedLayout>
    );
}