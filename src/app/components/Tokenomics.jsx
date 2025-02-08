"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import roundCircle from "../../../public/Assests/images/chart.png";
import dot from "../../../public/Assests/images/dot.png";
import './components.css'

const Tokenomics = ({ispageinner}) => {
  const heading = "Tokenomics";
  const description =
    "The total supply of tokens will be determined by the amount sold during the presale, which will consistently represent 12.85% of the total supply. This approach ensures flexibility and scalability in managing the supply based on participant interest and investment.";

  return ( 
    <section className={`max-w-screen-xl  relative chart-container ${ispageinner? 'chart-container-inner' : ''}   mx-auto flex flex-col justify-center items-center text-center text-white mt-20 pt-9`}>
      {/* Heading and Description */}
      <motion.div
        className="text-white p-6 max-w-4xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl leading-normal font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {heading}
        </motion.h1>
        <motion.p
          className="text-gray-400 mt-4 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {description}
        </motion.p>
      </motion.div>

      {/* Radial Chart with Labels */}
      <div className="relative mt-40 w-[200px] h-[200px] lg:w-[400px]  lg:h-[400px] mb-20">
        {/* Chart Image */}
        <Image
          src={roundCircle}
          alt="Radial Chart"
          className="absolute w-full h-full"
        />
        <Image
          src={dot}
          alt="Radial Chart Center Dot"
          className="absolute w-24 h-24 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <div className="TokenomicsContent  text-white">
          <div className="content-heading th-1">
            <p>
              Community Incentives 4.29%
            </p>
            <div className="th-1-dot"></div>
            <div className="content-heading-lines ">
              <div className="th-1-lines"></div>
            </div>
          </div>
          <div className="content-heading th-2">
            <p>
              Reserves 15.00%
            </p>
            <div className="th-2-dot"></div>
            <div className="content-heading-lines ">
              <div className="th-2-lines"></div>
            </div>
          </div>
          <div className="content-heading th-3">
            <p>
              Network Operations 13.78%
            </p>
            <div className="th-3-dot"></div>
            <div className="content-heading-lines ">
              <div className="th-3-lines"></div>
            </div>
          </div>
          <div className="content-heading th-4">
            <p>
              Foundation 18.23%
            </p>
            <div className="th-4-dot"></div>
            <div className="content-heading-lines ">
              <div className="th-4-lines"></div>
            </div>
          </div>


          <div className="content-heading th-r-1">
            <p>
              Community Incentives 4.29%
            </p>
            <div className="th-r-1-dot"></div>
            <div className="content-heading-lines ">
              <div className="th-r-1-lines"></div>
            </div>
          </div>
         <div className="content-heading th-r-2">
            <p>
              Community Incentives 4.29%
            </p>
            <div className="th-r-2-dot"></div>
            <div className="content-heading-lines ">
              <div className="th-r-2-lines"></div>
            </div>
          </div>
          <div className="content-heading th-r-3">
            <p>
              Community Incentives 4.29%
            </p>
            <div className="th-r-3-dot"></div>
            <div className="content-heading-lines ">
              <div className="th-r-3-lines"></div>
            </div>
          </div>
          <div className="content-heading th-r-4">
            <p>
              Community Incentives 4.29%
            </p>
            <div className="th-r-4-dot"></div>
            <div className="content-heading-lines ">
              <div className="th-r-4-lines"></div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="text-white p-6 mx-auto max-w-4xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="text-gray-400 mt-4 text-sm  leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          The distribution of these tokens is meticulously planned to ensure the long-term sustainability and growth of the network
        </motion.p>
        <button className="px-6 py-3 mt-12 rounded-full w-[200px] bg-[#202020] hover:bg-gray-800 transition">
            How to buy?
          </button>
      </motion.div>
    </section>
  );
};

export default Tokenomics;




