"use client";
import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import mobile from '../../../public/Assests/images/image wallet-no background.png';
import SendEmail from '../components/SendEmail';
import Image from 'next/image';
import Breadcrumbs from '../components/Breadcrumbs';
import '../../app/components/components.css'


const Bankinstitutions = () => {
    const words = `Facilitating Near-Instant Cross-Border Settlements for Banks and Financial Institutions`;

    return (
        <>
         <section className="max-w-screen-xl mx-auto flex items-center relative w-full mt-20 text-white bg-shades">
                <motion.div
                    className="w-[50%] flex flex-col  p-8 space-y-7"
                    initial={{ opacity: 1, y: 50 }} // Start below the screen
                    whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                    transition={{ duration: 1 }}
                    viewport={{ once: false }} // Keep triggering animation when in view
                >
                    <Breadcrumbs />
                    <motion.h1
                        className="text-4xl leading-normal font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
                        initial={{ opacity: 1, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        {words}
                    </motion.h1>

                    <motion.p
                        className="text-gray-500 font-sans leading-loose text-md"
                        initial={{ opacity: 1, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        By enabling near-instant cross-border settlements and offering exclusive token deployment with controlled trading, the KyberBits Network not only enhances the efficiency and effectiveness of international transactions but also paves the way for a new era of financial innovation and inclusivity.
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

            <section className="max-w-screen-xl mx-auto flex  mt-20 w-full text-white ">

                <motion.div
                    className="flex flex-col max-w-screen-lg mx-auto  p-8 space-y-4"
                    initial={{ opacity: 0, y: 50 }} // Start below the screen
                    whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                    transition={{ duration: 1 }}
                    viewport={{ once: false }} // Keep triggering animation when in view
                >
                    <motion.h1
                        className="text-lg leading-normal font-sans font-bold  text-white"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        KyberBits Network's Solution for Financial Institutions
                    </motion.h1>

                    <motion.p
                        className="text-gray-500 font-sans leading-loose text-md"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        The KyberBits Network introduces a groundbreaking solution for banks and financial institutions, enabling them to utilize the BITS token for near-instant cross-border payments and settlements. By becoming partners with the KyberBits Network, these institutions can leverage blockchain technology to facilitate faster, more cost-effective, and transparent international transactions.
                    </motion.p>
                    <motion.h1
                        className="text-lg leading-normal font-sans font-bold  text-white"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        Near-Instant Settlements and Their Impact
                    </motion.h1>

                    <motion.p
                        className="text-gray-500 font-sans leading-loose text-md"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        Near-instant settlements revolutionize how cross-border transactions are conducted. By significantly reducing the transaction time from days to mere seconds or minutes, the KyberBits Network ensures that funds are transferred swiftly and securely across borders. This speed and efficiency are particularly beneficial for businesses that require quick settlement to maintain cash flow and operational efficiency. For individuals, it means faster remittances and the ability to manage international transactions without the typical delays.
                    </motion.p>
                    <motion.h1
                        className="text-lg leading-normal font-sans font-bold  text-white"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        Exclusivity and Token Deployment for Partners
                    </motion.h1>

                    <motion.p
                        className="text-gray-500 font-sans leading-loose text-md"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        Banks and financial institutions partnering with the KyberBits Network have the unique opportunity to deploy their own native tokens on the KyberBits blockchain. This feature allows institutions to create a token exclusively for their use, providing them control over its utility and distribution. These native tokens can serve various purposes, including internal settlements, customer rewards, or specific financial products tailored to their clientele.
                    </motion.p>
                    <motion.h1
                        className="text-lg leading-normal font-sans font-bold  text-white"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        Smart Contract-Controlled Trading
                    </motion.h1>

                    <motion.p
                        className="text-gray-500 font-sans leading-loose text-md"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        An innovative aspect of this partnership is the use of smart contracts to manage the trading of these newly created tokens. Smart contracts on the KyberBits Network can be programmed to restrict price fluctuations, ensuring stability and predictability for the tokens. This control is crucial for financial institutions that require a stable and reliable medium for transactions, avoiding the typical volatility associated with cryptocurrencies.
                    </motion.p>
                </motion.div>

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
                        <span className="absolute top-[-1.1rem] left-[-1.7rem] text-6xl text-white font-bold">“</span>
                        <span className='text-white  font-normal hover:underline hover:cursor-pointer  italic  text-lg '>
                        The root problem with conventional currency is all the trust that’s required to make it work. The central bank must be trusted not to debase the currency, but the history of fiat currencies is full of breaches of that trust.
                        </span>
                        <span className="absolute bottom-[-1.5rem] right-[33%] text-6xl text-white font-bold">”</span>
                       
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

export default Bankinstitutions;
