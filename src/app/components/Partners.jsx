"use client";
import React from 'react';
import { motion } from 'framer-motion';  // Import Framer Motion
import Image from 'next/image';  // Import Next.js Image component
import partners from '../../../public/Assests/images/partner.png'; // Example image

const partnerImages = [
    { id: 1, name: 'Partner 1', image: partners },
    { id: 2, name: 'Partner 2', image: partners },
    { id: 3, name: 'Partner 3', image: partners },
    { id: 4, name: 'Partner 4', image: partners },
    // Add more partners as needed
];

const Partners = () => {
    return (
        <section className="max-w-screen-xl mx-auto flex items-center w-full text-white mt-24 ">
            <motion.div
                className="flex flex-col p-8 w-full space-y-7 text-center justify-center items-center"
                initial={{ opacity: 0, y: 50 }}   // Start below the screen
                whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                transition={{ duration: 1 }}
                viewport={{ once: false }} // Keep triggering animation when in view
            >
                <motion.div
                    className="max-auto max-w-4xl mb-14"
                    initial={{ opacity: 0, y: 50 }}   // Start below the screen
                    whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                    transition={{ duration: 1 }}
                    viewport={{ once: false }} // Keep triggering animation when in view
                >
                    <motion.h1
                        className="text-4xl leading-normal  font-bold font-title   headings-gr"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        Partners
                    </motion.h1>
                </motion.div>

                {/* Render partner images with animation */}
                <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {partnerImages.map((partner, index) => (
                        <motion.div
                            key={partner.id}
                            className="flex justify-center items-center"
                            initial={{ opacity: 0, rotate: 180 }} // Start with rotation
                            whileInView={{ opacity: 1, rotate: 0 }} // Rotate to normal position
                            transition={{
                                duration: 1,
                                delay: index * 0.2,  // Staggered delay for each logo
                                type: 'spring',
                                stiffness: 100,
                                damping: 10
                            }}
                            viewport={{ once: false }}
                        >
                            <Image
                                src={partner.image}
                                alt={partner.name}
                                width={128} // Set the width for the image
                                height={128} // Set the height for the image
                                className="object-contain"
                            />
                            
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Partners;
