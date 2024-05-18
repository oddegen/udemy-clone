import Navbar from "@/Components/Navbar";
import Footer from "@/Components/ui/Footer";

export default function Authenticated({ user, children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar user={user} />

            <main>{children}</main>
            <Footer/>
        </div>
    );
}
