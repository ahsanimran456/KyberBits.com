"use client";
import React from 'react';
import { motion } from 'framer-motion';
import mobile from '../../../public/Assests/images/image wallet-no background.png';
import Image from 'next/image';
import Breadcrumbs from '../components/Breadcrumbs';
import SendEmail from '../components/SendEmail';
import Tokenomics from '../components/Tokenomics';
import '../../app/components/components.css'
const Tokennomics = () => {
    return (
        <>
            <section className="max-w-screen-xl mx-auto flex items-center relative w-full mt-20 mb-56 text-white bg-shades">
                <motion.div
                    className="w-[50%] flex flex-col p-8 space-y-7"
                    initial={{ opacity: 1, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Breadcrumbs />
                    <motion.h1
                        className="text-4xl leading-normal font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
                        initial={{ opacity: 1, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        TICS is central to the KyberBits Network's functionality, enabling the transition from a conceptual model to a fully operational platform.
                    </motion.h1>
                    <motion.p
                        className="text-gray-500 font-sans leading-loose text-md"
                        initial={{ opacity: 1, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        The total supply of tokens will be determined by the amount sold during the presale, which will consistently represent 12.85% of the total supply.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="w-[100%] lg:w-[50%] text-center flex justify-center"
                    initial={{ opacity: 0, x: 100 }} // Start off-screen
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
            </section>
            <Tokenomics ispageinner={true} />
            <section className="max-w-screen-lg mx-auto py-8 px-4 mt-20 text-white">
                <motion.h1
                    className="text-5xl leading-normal text-center font-sans font-bold text-white"
                    initial={{ opacity: 1, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: false }}
                >
                    Token Distribution
                </motion.h1>
                <motion.p
                    className="text-gray-500 mb-10 font-sans leading-loose text-md"
                    initial={{ opacity: 1, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: false }}
                >
                    KyberBits is underpinned by a carefully crafted tokenomics structure designed to support the sustainability and growth of our blockchain ecosystem. The total supply of KyberBits tokens (TICS) wil be determined by the amount of tokens sold during the presale.
                </motion.p>
                <h6 className="text-2xl  font-bold mb-10 text-white">
                    Token Distribution Overview
                </h6>
                <ul className="list-disc pl-8 space-y-4 ">
                    <li>
                        <strong>Presale/ICO (12.85%)</strong>: 12.85% of total tokens are set aside for presale and ICO, allowing early participants to support the initial phase of the project.
                    </li>
                    <li>
                        <strong>Team (11.88%)</strong>: of tokens are allocated to the team, with a vesting period that includes a 6-month cliff to ensure long-term commitment.
                    </li>
                    <li>
                        <strong>Ecosystem (20.85%)</strong>: is dedicated to reinforcing the KyberBits ecosystem, which encompasses liquidity provision and validator rewards to sustain a robust environment.
                    </li>
                    <li>
                        <strong>Advisors (3.12%)</strong>: is reserved for advisors, who provide essential strategic guidance to shape the project’s direction. These tokens will also have a vesting period that also includes a 6-month cliff.
                    </li>
                    <li>
                        <strong>Foundation (18.23%)</strong>: supports the KyberBits Foundation, funding promising projects that leverage the KyberBits network.
                    </li>
                    <li>
                        <strong>Network Operations (13.78%)</strong>: ensures the smooth operation of the KyberBits network, covering ongoing maintenance and operational needs.
                    </li>
                    <li>
                        <strong>Reserves (15%)</strong>: is kept in reserve to address unforeseen needs and maintain stability within the marketplace as necessary.
                    </li>
                    <li>
                        <strong>Community Incentives (4.29%)</strong>: aims to foster community growth and encourage adoption through various incentives.
                    </li>
                </ul>
                <motion.p
                    className="text-gray-500 mt-12 mb-10 font-sans leading-loose text-md"
                    initial={{ opacity: 1, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: false }}
                >
                    The total supply of tokens will adjust based on the volume sold during the presale, with the presale portion consistently representing 12.85% of the total, ensuring adaptability and scalability in supply management.
                </motion.p>
                <motion.h1
                    className="text-3xl leading-normal font-sans font-bold text-white"
                    initial={{ opacity: 1, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: false }}
                >
                    Presale/ICO Stages
                </motion.h1>
                <motion.p
                    className="text-gray-500  mb-10 font-sans leading-loose text-md"
                    initial={{ opacity: 1, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: false }}
                >
                    The presale for KyberBits is planned to span 6-8 months, aligning with our anticipated timeline for the launch of the mainnet. The presale is structured into stages, each lasting 7 days. With the conclusion of each stage, the price for the next stage will increase by 10%. At the launch of the mainnet, the listing price of the tokens will be set at 20% above the price of the final presale stage. This staged approach is designed to gradually scale investment opportunities up to the official network launch.
                </motion.p>
                <motion.h1
                    className="text-3xl leading-normal font-sans font-bold text-white"
                    initial={{ opacity: 1, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: false }}
                >
                    Launch Strategy Overview
                </motion.h1>
                <motion.p
                    className="text-gray-500  mb-10 font-sans leading-loose text-md"
                    initial={{ opacity: 1, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: false }}
                >
                    KyberBits has developed a careful launch strategy for the BITS token aimed at maintaining market stability. At the outset, liquidity will be introduced in a phased manner to help manage market dynamics effectively. Renowned market makers will be engaged to assist in stabilizing the token as it becomes publicly tradable. After navigating the initial market adjustments typical for new tokens, we will methodically increase liquidity and introduce additional market makers.

                    This approach is intended to support a stable trading environment for the $BITS token, complementing the overall development and expansion goals of the KyberBits ecosystem. Our strategy focuses on balancing immediate market needs with the long-term sustainability of the token, ensuring that it serves the interests of the community and stakeholders effectively.
                </motion.p>
            </section>
            <section className="max-w-screen-xl mx-auto flex justify-center items-center mt-20 w-full text-white space-y-10">
                <motion.div
                    className="flex flex-col items-center text-center mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                >
                    <div className="relative  font-normal  leading-relaxed text-gray-400 max-w-3xl mx-auto">
                        {/* Decorative Quotation Marks */}
                        <span className="absolute top-[-1.1rem] left-[-1.9rem] text-6xl text-white font-bold">“</span>
                        <span className='text-white text-lg '>
                            If you don’t believe it or don’t get it, I don’t have the time to try to convince you, sorry
                        </span>
                        <span className="absolute bottom-[-1.5rem] right-[-2rem] text-6xl text-white font-bold">”</span>
                    </div>
                    <span className='text-white font-semibold text-md  italic'>
                            Satoshi Nakamoto - The Founder
                        </span>
                </motion.div>
            </section>


            <SendEmail />
        </>
    );
};

export default Tokennomics;
