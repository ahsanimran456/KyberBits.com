"use client";
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import mobile from "../../../public/Assests/images/wallet.png";
import Image from "next/image";
import './components.css'

const NetWork = () => {
  const words = `The KyberBits Network's initiative for banks and financial institutions is a significant step toward modernizing the global financial landscape.`;

  return (
    <section className="relative max-w-screen-xl     mx-auto flex flex-wrap items-center w-full text-white pt-24 ">
      {/* Shine Effect */}
      {/* <div className="absolute top-[-30%] z-10 lg:right-[-10%] right-0 w-[500px] h-[500px] bg-gradient-to-r from-transparent via-blue-500 to-purple-600 opacity-40 blur-2xl animate-shine" /> */}

      {/* Image Section with Animation */}
      <motion.div
        className="w-[100%] lg:w-[50%] text-center flex justify-center"
        initial={{ opacity: 0, x: -100 }} // Start off-screen
        whileInView={{ opacity: 1, x: 0 }} // Trigger animation when in view
        transition={{ duration: 0.8 }}
        viewport={{ once: false }} // Keep triggering the animation as long as the section is in view
      >
        <div className="w-full max-w-[250px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[600px]">
          <Image
            src={mobile}
            alt="Vip KyberBits"
            className="object-cover rounded-lg"
            width={600}
            height={400}
            quality={100}
            priority
          />
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="w-[100%] lg:w-[50%] flex flex-col lg:p-8 md:p-6 p-4 space-y-7"
        initial={{ opacity: 0, y: 50 }} // Start below the screen
        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
        transition={{ duration: 1 }}
        viewport={{ once: false }} // Keep triggering animation when in view
      >
        <motion.div
          className="lg:text-4xl md:text-3xl text-3xl lg:max-w-[33rem] w-full leading-normal font-title font-semibold headings-gr"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <motion.h1 className="leading-normal">{words}</motion.h1>
        </motion.div>

        <motion.p
          className="text-themedescColor font-sans leading-loose text-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: false }}
        >
          The integration of KUSD tokens with the dollar-backed Tether/Circle (USDT/USDC) introduces stability to the crypto environment, closely mirroring real-world currency values. This strategic connection between KyberBits and KUSD aims to enhance the utility of the BITS token, drawing users to its dependable and promising features.
        </motion.p>

        <motion.div
          className="flex space-x-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} // Trigger animation when in view
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: false }}
        >
          <button className="custom_btn_sec buttons_all_sec ">
            <span className="bg-[#141414] w-full h-full flex items-center justify-center">
            Learn More
            </span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NetWork;
