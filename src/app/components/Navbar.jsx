"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
// import logo from "../../../public/center.png";
import logo from "../../../public/weblogo.png";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const navLinks = [
        { name: "Wallet", href: "/wallets" },
        { name: "Banks & Institutions", href: "/banks-and-institutions" },
        { name: "KyberBits Tool", href: "/qubeqode" },
        { name: "DVPN", href: "/dvpn" },
        { name: "SecureChat", href: "/secureChat" },
        { name: "Tokenomics", href: "/tokenomics" },
        { name: "Roadmap", href: "/roadmap" },
        { name: "Our Vision", href: "/our-vision" },
        { name: "How To Buy", href: "/how-to-buy" },
        { name: "Whitepaper", href: "/whitepaper" },
    ];

    return (
        <nav
            className={`fixed font-sans top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#12121266] backdrop-blur-[0.625rem] shadow-lg" : "bg-[#000000c7]"
                }`}
        >
            <div className="max-w-screen-2xl mx-auto flex items-center justify-between py-2 px-6">
                <div className="flex items-center justify-center">
                    <Link href="/">
                        <Image src={logo} alt="Logo" width={120} height={120} className="mr-4" />
                    </Link>
                </div>

                {/* Navigation Links (Desktop) */}
                <ul className="hidden lg:flex space-x-4 text-sm font-medium">
                    {navLinks.map((link) => (
                        <li key={link.href} className="relative group">
                            <Link
                                href={link.href}
                                className={`transition-all duration-300 relative pb-1 ${pathname === link.href
                                    ? "bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-blue-400 to-purple-500"
                                    : "hover:text-blue-400"
                                    }`}
                            >
                                {link.name}
                                {/* Gradient Underline */}
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-green-200 via-blue-400 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right Side */}
                <div className="flex items-center space-x-4">
                    {/* Join Presale Button */}
                    <Link href="/presale">
                        {/* <button className="relative px-4 py-2 font-medium text-sm text-white rounded-full shadow-lg bg-gradient-to-r from-green-300 via-blue-500 to-indigo-600 transition-all duration-500 ease-out overflow-hidden hover:scale-105 hover:shadow-xl">
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -translate-x-full hover:translate-x-full transition-all duration-700"></span>
                            Join Presale
                        </button> */}
                        {/* <button
                            className="px-4 py-3 text-xs min-w-36 text-black hover:text-[#ffff] font-semibold rounded-full shadow-lg bg-gradient-to-r from-green-200 via-blue-400 to-purple-500 hover:opacity-90 transition-all duration-300"
                        >
                            Join Presale
                        </button> */}
                        <button className="custom_navbar_btn overflow-hidden hover:scale-105 hover:shadow-xl">
                            <span className="w-full h-full relative transition-all duration-500 ease-out">
                                Join Presale
                            </span>
                        </button>
                    </Link>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button onClick={toggleMobileMenu}>
                            {mobileMenuOpen ? (
                                <FaTimes className="text-white h-6 w-6" />
                            ) : (
                                <FaBars className="text-white h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation (Left Drawer) */}
            <div
                className={`fixed top-0 left-0 w-64 h-screen bg-black/90 shadow-lg transform transition-transform z-10 duration-300 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Close Button */}
                <div className="flex justify-end p-4">
                    <button onClick={toggleMobileMenu}>
                        <FaTimes className="text-white h-6 w-6" />
                    </button>
                </div>

                {/* Menu Items */}
                <ul className="flex flex-col space-y-3 px-6">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`block py-2 transition-all duration-300 ${pathname === link.href
                                    ? "bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-blue-400 to-purple-500"
                                    : "hover:text-gray-300"
                                    }`}
                                onClick={toggleMobileMenu}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Backdrop Overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm"
                    onClick={toggleMobileMenu}
                ></div>
            )}
        </nav>
    );
};

export default Navbar;
