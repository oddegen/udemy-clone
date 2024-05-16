import React from "react";
import { Link } from "@inertiajs/react";


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <h2 className="text-xl font-bold mb-4">
                            Teach the world online
                        </h2>
                        <p>
                            Create an online video course, reach students across
                            the globe, and earn money
                        </p>
                        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
                            Teach on Udemy
                        </button>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">
                            Top companies choose{" "}
                            <span className="text-blue-500">
                                Udemy Business
                            </span>{" "}
                            to build in-demand career skills.
                        </h2>
                        <div className="flex space-x-4">
                            <img
                                src="nasdaq.png"
                                alt="Nasdaq"
                                className="h-8"
                            />
                            <img
                                src="volkswagen.png"
                                alt="Volkswagen"
                                className="h-8"
                            />
                            <img src="box.png" alt="Box" className="h-8" />
                            <img
                                src="netapp.png"
                                alt="NetApp"
                                className="h-8"
                            />
                            <img
                                src="eventbrite.png"
                                alt="Eventbrite"
                                className="h-8"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                        <ul>
                            <li className="mb-2">
                                <Link href="#" className="hover:text-purple-600">
                                    Udemy Business
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#" className="hover:text-purple-600">
                                    Teach on Udemy
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#" className="hover:text-purple-600">
                                    Get the app
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#" className="hover:text-purple-600">
                                    About us
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#" className="hover:text-purple-600">
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="mb-2">
                                <Link href="#" className="hover:text-purple-600">
                                    Careers
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#" className="hover:text-purple-600">
                                    Blog
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#" className="hover:text-purple-600">
                                    Help and Support
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#" className="hover:text-purple-600">
                                    Affiliate
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#" className="hover:text-purple-600">
                                    Investors
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="mb-2">
                                <Link href="#" className="hover:text-purple-600">
                                    Terms
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#" className="hover:text-purple-600">
                                    Privacy policy
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#" className="hover:text-purple-600">
                                    Cookie settings
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#" className="hover:text-purple-600">
                                    Sitemap
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#" className="hover:text-purple-600">
                                    Accessibility statement
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center md:text-right">
                        <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded">
                            English
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
