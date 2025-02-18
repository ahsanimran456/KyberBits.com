"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Import SVGs as assets
import appstore from "../../../public/Assests/images/appstore.svg";
import google from "../../../public/Assests/images/google.svg";
import playstore from "../../../public/Assests/images/playstore.svg";

const SendEmail = () => {
    const [email, setEmail] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = () => {
        console.log("Email Submitted:", email);
    };

    return (
        <section className="max-w-screen-xl mx-auto flex flex-col items-center w-full text-white mt-24">
            {/* Email Section */}
            <motion.div
                className="flex flex-col p-8 w-full space-y-7 text-left justify-center items-start"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
            >
                <motion.p
                    className="text-2xl font-bold "
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: false }}
                >
                    Sign Up for Exclusive Updates!
                </motion.p>

                {/* Input and Button */}
                <motion.div
                    className="flex space-x-4"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                >
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="p-3 rounded-3xl border-2  w-[400px] border-gray-300 focus:outline-none bg-transparent"
                        placeholder="abc@gmail.com"
                    />
                   
                    <button className="custom_btn_sec buttons_all_sec "  onClick={handleSubmit} style={{width:"10rem"}}>
                        <span className="bg-[black] w-full h-full flex items-center justify-center">
                            Send Email
                        </span>
                    </button>
                </motion.div>
            </motion.div>

            {/* Available Soon On Section */}
            <motion.div
                className="flex flex-col items-start w-full p-8 space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: false }}
            >

                <motion.p
                    className="text-2xl font-bold mb-4"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: false }}
                >
                    Available Soon On
                </motion.p>

                {/* App Logos */}
                <div className="flex space-x-6">
                    {/* Play Store Icon */}
                    <Image
                        src={playstore}
                        width={200}
                        height={200}
                        alt="Play Store"
                        className="hover:scale-110 transition transform"
                    />
                    {/* App Store Icon */}
                    <Image
                        src={appstore}
                        width={200}
                        height={200}
                        alt="App Store"
                        className=" hover:scale-110 transition transform"
                    />
                    {/* Google Chrome Icon */}
                    <Image
                        src={'https://www.qubetics.com/assets/chrome-extension-B5E7moDo.svg'}
                        width={200}
                        height={200}
                        alt="Google Chrome"
                        className=" hover:scale-110 transition transform"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default SendEmail;
