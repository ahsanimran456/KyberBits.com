"use client";
import React from 'react';
import { motion } from 'framer-motion';  
import mobile from '../../../public/Assests/images/wallet.png';
import Image from 'next/image';

const NewEra = () => {
  const words = `Shaping a New Era of Financial Interaction with KYUSD`;

  return (
    <section className="max-w-screen-xl  overflow-hidden mx-auto flex flex-wrap flex-col-reverse lg:flex-row items-center w-full text-white pt-24 relative">
      
      {/* Left Content */}
      <motion.div
        className="w-[100%] lg:w-[50%] flex flex-col lg:p-8 md:p-6 p-4 space-y-7"
        initial={{ opacity: 0, y: 50 }}  
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        viewport={{ once: false }} 
      >
        <motion.div
          className="lg:text-4xl md:text-3xl text-3xl lg:max-w-[33rem] w-full leading-normal font-title font-semibold  headings-gr"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <motion.h1 className="leading-normal">{words}</motion.h1>
        </motion.div>

        <motion.p
          className="text-gray-500 font-sans leading-loose text-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: false }}
        >
          The integration of KYBITS tokens with the soon-to-be-deployed USDC/USDT-backed KUSD, promotes market stability and accurate transaction reflections, enhancing user confidence. This strategic pairing is designed to increase demand for KYBITS, fostering enhanced utility and user engagement due to its security and potential.
        </motion.p>

        <motion.div
          className="flex space-x-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} 
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

      {/* Right Image Section */}
      <motion.div
        className="w-[100%] lg:w-[50%] flex justify-center relative"
        initial={{ opacity: 0, x: 100 }}  
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        viewport={{ once: false }} 
      >
        <div className="w-full max-w-[250px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[600px] relative z-10">
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

        {/* Shine Effect - Light Gradient on Left Bottom */}
        {/* <div className="absolute bottom-[-20%] left-[-10%] w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-gradient-to-r from-transparent via-blue-500 to-purple-600 opacity-30 blur-2xl animate-shine" /> */}
      </motion.div>
    </section>
  );
};

export default NewEra;
