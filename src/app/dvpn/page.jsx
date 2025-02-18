"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import mobile from '../../../public/Assests/images/image wallet-no background.png';
import SendEmail from '../components/SendEmail';
import dvpn from '../../../public/Assests/images/dvpn.svg';
import '../../app/components/components.css'
import Breadcrumbs from '../components/Breadcrumbs'

const Dvpn = () => {
    const words = `Decentralized VPN Redefining Internet Privacy and Freedom`;

    return (
        <>
              <section className="max-w-screen-xl mx-auto flex items-center relative w-full mt-20 text-white bg-shades">
                <motion.div
                    className="w-[50%] flex flex-col p-8 space-y-7"
                    initial={{ opacity: 1, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Breadcrumbs />

                    <motion.h1
                        className="text-4xl leading-normal font-bold font-title   headings-gr"
                        initial={{ opacity: 1, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        {words}
                    </motion.h1>
                    <motion.p
                        className="text-gray-500 font-sans leading-loose text-md"
                        initial={{ opacity: 1, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        The KyberBits ecosystem introduces a decentralized VPN (dVPN) service designed to enhance security, privacy, and access to an unrestricted internet. Unlike traditional centralized VPN providers that can log, censor, or restrict user data. Operating on a fully decentralized, peer-to-peer network, ensures that no single authority controls user traffic or data. This decentralized model leverages blockchain technology to offer unparalleled transparency, privacy, and resistance to censorship
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

            <section className="max-w-screen-xl mx-auto flex mt-20 w-full text-white">
                <motion.div
                    className="flex flex-col max-w-screen-lg mx-auto  space-y-4"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                >
                    {/* Heading 1 with Image */}
                    <div className="flex  space-x-4 " style={{ marginTop: '3rem' }}>
                        <Image src={dvpn} alt="Near-Instant Settlements" className='w-20 h-20' />
                        <div>
                            <motion.h1
                                className="text-lg leading-normal font-sans font-bold text-white"
                                initial={{ opacity: 0, y: -50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                viewport={{ once: false }}
                            >
                                End-to-End Encryption
                            </motion.h1>
                            <motion.p
                                className="text-gray-500 font-sans leading-loose text-md"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                viewport={{ once: false }}
                            >
                                All data passing through the KyberBits dVPN will be encrypted using strong encryption algorithms such as AES-256 or ChaCha20. This ensures that even if traffic is intercepted, it cannot be read or tampered with by third parties, including the nodes through which the traffic passes.
                            </motion.p>
                        </div>
                    </div>
                    <div className="flex  space-x-4 " style={{ marginTop: '3rem' }}>
                        <Image src={dvpn} alt="Near-Instant Settlements" className='w-20 h-20' />
                        <div>
                            <motion.h1
                                className="text-lg leading-normal font-sans font-bold text-white"
                                initial={{ opacity: 0, y: -50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                viewport={{ once: false }}
                            >
                                Multi-Hop Routing
                            </motion.h1>
                            <motion.p
                                className="text-gray-500 font-sans leading-loose text-md"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                viewport={{ once: false }}
                            >
                                User traffic is routed through multiple nodes before reaching its destination. This method, similar to Tor’s onion routing, obscures the origin and destination of the traffic, ensuring that no single node can trace the entire route of the data. This drastically reduces the likelihood of surveillance or traffic analysis attacks.
                            </motion.p>
                        </div>
                    </div>

                    {/* Repeat for other headings */}
                    <div className="flex  space-x-4 " style={{ marginTop: '3rem' }}>
                        <Image src={dvpn} alt="Near-Instant Settlements" className='w-20 h-20' />
                        <div>
                            <motion.h1
                                className="text-lg leading-normal font-sans font-bold text-white"
                                initial={{ opacity: 0, y: -50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                viewport={{ once: false }}
                            >
                                Zero-Logging Policy
                            </motion.h1>
                            <motion.p
                                className="text-gray-500 font-sans leading-loose text-md"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                viewport={{ once: false }}
                            >
                                The decentralized nature of KyberBits dVPN means that there is no centralized entity to log user data. Individual node operators are prohibited from logging user data, and traffic is encrypted, so even if a malicious node is present, it will not be able to access or store any user data.
                            </motion.p>
                        </div>
                    </div>
                    <div className="flex  space-x-4 " style={{ marginTop: '3rem' }}>
                        <Image src={dvpn} alt="Near-Instant Settlements" className='w-20 h-20' />
                        <div>
                            <motion.h1
                                className="text-lg leading-normal font-sans font-bold text-white"
                                initial={{ opacity: 0, y: -50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                viewport={{ once: false }}
                            >
                                Anti-Abuse Mechanisms
                            </motion.h1>
                            <motion.p
                                className="text-gray-500 font-sans leading-loose text-md"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                viewport={{ once: false }}
                            >
                                To prevent malicious actors from exploiting the KyberBits dVPN for illegal activities or denial of service attacks, the network will implement reputation-based scoring for nodes. Nodes that consistently deliver quality service are rewarded, while nodes involved in malicious activities are penalized or blacklisted from the network
                            </motion.p>
                        </div>
                    </div>
                    <div className="flex  space-x-4 " style={{ marginTop: '3rem' }}>
                        <Image src={dvpn} alt="Near-Instant Settlements" className='w-20 h-20' />
                        <div>
                            <motion.h1
                                className="text-lg leading-normal font-sans font-bold text-white"
                                initial={{ opacity: 0, y: -50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                viewport={{ once: false }}
                            >
                                Blockchain Integration for Audits
                            </motion.h1>
                            <motion.p
                                className="text-gray-500 font-sans leading-loose text-md"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                viewport={{ once: false }}
                            >
                                Transactions between bandwidth providers and users are recorded on the KyberBits blockchain, providing full transparency and traceability of payments without compromising privacy. This integration ensures accountability while protecting user anonymity
                            </motion.p>
                        </div>
                    </div>
                    {/* Add images for the remaining sections as needed */}
                </motion.div>


            </section>
            <SendEmail />
        </>
    );
};

export default Dvpn;
