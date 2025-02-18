"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import mobile from '../../../public/Assests/images/image wallet-no background.png';
import SendEmail from '../components/SendEmail';
import dvpn from '../../../public/Assests/images/dvpn.svg';
import '../../app/components/components.css'
import Breadcrumbs from '../components/Breadcrumbs'
import RoadMap from '../components/RoadMap';

const page = () => {
    const words = `Explore the amazing journey of KyberBits Network.`;

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
                        className="text-4xl leading-normal  font-bold font-title   headings-gr"
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
                        At KyberBits, we are committed to transparency and precision in every step of our development journey. Our roadmap is designed to clearly outline the strategic milestones we plan to achieve, reflecting our commitment to innovation and excellence. Each phase has been meticulously planned to ensure that we not only meet but exceed the expectations of our community. As we progress, we will continue to update our roadmap to keep everyone informed of our advancements and to demonstrate our dedication to delivering a robust, efficient, and versatile blockchain ecosystem. This approach underscores our professional ethos and our drive to pioneer effective solutions in the blockchain space.
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

            <RoadMap/>

            
            <SendEmail />
        </>
    );
};

export default page;
