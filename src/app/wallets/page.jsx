"use client";
import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import mobile from '../../../public/Assests/images/image wallet-no background.png';
import SendEmail from '../components/SendEmail';
import Image from 'next/image';
import Breadcrumbs from '../components/Breadcrumbs';
import '../../app/components/components.css'


const Wallet = () => {
    const words = `Marking a significant advancement in the realm of cryptocurrency payments`;

    return (
        <>
            <section className="max-w-screen-xl mx-auto flex items-center relative w-full mt-20 text-white bg-shades">
                <motion.div
                    className="w-[50%] flex flex-col  p-8 space-y-4"
                    initial={{ opacity: 1, y: 50 }} // Start below the screen
                    whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                    transition={{ duration: 1 }}
                >
                    <Breadcrumbs />
                    <motion.h1
                        className="text-4xl   font-bold leading-normal font-title   headings-gr"
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
                        Explore the KyberBits multi-chain crypto wallet, a non-custodial, open-source hub. Experience in-app feeless $BITS transfers, debit and virtual card options, smooth Apple Pay and Google Pay integration, a decentralized VPN (dVPN) service, and a gateway to a tokenized asset marketplace—all within a single application.
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
                    className="w-[100%] lg:w-[30%] text-center flex justify-center"
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

                <motion.div
                    className="w-[70%] flex flex-col  p-8 space-y-4"
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
                        Expansive Platform Accessibility
                    </motion.h1>

                    <motion.p
                        className="text-gray-500 font-sans leading-loose text-md"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        The KyberBits Wallet, an integral part of the KyberBits Network's ecosystem, is set to launch across multiple user-friendly platforms, including iOS, Android, and desktop interfaces. This wide-ranging accessibility ensures that users can manage their BITS tokens and other digital assets effortlessly, irrespective of their device preference.
                    </motion.p>
                    <motion.h1
                        className="text-lg leading-normal font-sans font-bold  text-white"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        Debit Card Integration and Mobile Payment Compatibility
                    </motion.h1>

                    <motion.p
                        className="text-gray-500 font-sans leading-loose text-md"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        A standout feature of the KyberBits Wallet would be its integration with debit cards recognized by major financial networks such as Visa and Mastercard. This integration will further be enhanced by compatibility with popular mobile payment systems like Apple Pay and Google Pay. Users will have the flexibility to link their KyberBits Wallet to these services, enabling them to use their $BITS tokens through widely accepted mobile payment platforms. This amalgamation of traditional and modern payment methods significantly streamlines the process of spending cryptocurrency in everyday transactions.
                    </motion.p>
                    <motion.h1
                        className="text-lg leading-normal font-sans font-bold  text-white"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        Virtual Card Functionality
                    </motion.h1>

                    <motion.p
                        className="text-gray-500 font-sans leading-loose text-md"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        In addition to physical debit card support, the KyberBits Wallet will be equipped with virtual card capabilities. This feature allows users to generate a virtual card within the app, which can be used for online purchases and transactions where digital card usage is accepted. The virtual card will offer an additional layer of convenience and security, giving users a versatile tool for managing their digital finances.
                    </motion.p>
                    <motion.h1
                        className="text-lg leading-normal font-sans font-bold  text-white"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        Instant Crypto-to-Stablecoin Conversion for Transactions
                    </motion.h1>

                    <motion.p
                        className="text-gray-500 font-sans leading-loose text-md"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        The planned conversion mechanism in the KyberBits Wallet will enable automatic exchange of BITS tokens into stablecoins such as USDT or USDC when users make purchases. This instant conversion at the transaction point ensures that merchants receive the equivalent value in stablecoins, providing stability against the volatility of the cryptocurrency market. This feature, once implemented, aims to enhance transaction reliability and user confidence within the KyberBits ecosystem.
                    </motion.p>
                    <motion.h1
                        className="text-lg leading-normal font-sans font-bold  text-white"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        Smooth Conversion to Fiat for Service Providers
                    </motion.h1>

                    <motion.p
                        className="text-gray-500 font-sans leading-loose text-md"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        The transaction process within the KyberBits Wallet is designed to conclude with the conversion of stablecoins into fiat currency, ensuring that service providers receive the precise fiat amount for their goods and services. This streamlined conversion process is part of our planned features to enhance reliability and efficiency, demonstrating KyberBits Network's dedication to enabling practical, real-world applications of cryptocurrency.
                    </motion.p>
                    <motion.h1
                        className="text-lg leading-normal font-sans font-bold  text-white"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        Gasless Transfers of TICS Tokens
                    </motion.h1>

                    <motion.p
                        className="text-gray-500 font-sans leading-loose text-md"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        The KyberBits wallet introduces the capability for gasless transfers of BITS tokens within the ecosystem. This innovative feature is designed to enhance the user experience and encourage participation in the network. By eliminating transaction fees, it significantly increases the utility and appeal of the BITS token, streamlining interactions within the KyberBits ecosystem.
                    </motion.p>
                    <motion.h1
                        className="text-lg leading-normal font-sans font-bold  text-white"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        The KyberBits Marketplace
                    </motion.h1>

                    <motion.p
                        className="text-gray-500 font-sans leading-loose text-md"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        The planned KyberBits Marketplace will be a decentralized platform that enables users to acquire and manage a diverse range of tokenized assets. Utilizing blockchain technology, it aims to offer a secure and transparent environment for trading digital representations of real-world assets such as real estate, art, and commodities. This innovative marketplace is designed to simplify the process of asset acquisition, broadening opportunities for asset ownership and portfolio diversification.
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
                        <span className="absolute top-[-1.1rem] left-[-1.1rem] text-6xl text-white font-bold">“</span>
                        <span className='text-white text-lg '>
                            Whereas most technologies tend to automate workers on the periphery doing menial tasks, blockchains automate away the centre. Instead of putting the taxi driver out of a job, blockchain puts Uber out of a job and lets the taxi drivers work with the customer directly.
                        </span>
                        <span className="absolute bottom-[-1.5rem] right-[2.5rem] text-6xl text-white font-bold">”</span>
                    </div>
                </motion.div>
            </section>
            <SendEmail />


        </>
    );
};

export default Wallet;
