"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import mobile from '../../../public/Assests/images/image wallet-no background.png';
import orbit from '../../../public/Assests/images/world-solar-system(1).png';
import SendEmail from '../components/SendEmail';
import dvpn from '../../../public/Assests/images/dvpn.svg';
import '../../app/components/components.css'
import Breadcrumbs from '../components/Breadcrumbs'

const Dvpn = () => {
    const words = `Redefine the landscape of digital finance through the power of blockchain technology`;
    const teamMembers = [
        {
            name: "Shaffy Yaqubi",
            role: "CEO",
            img: mobile,
            description:
                "Shaffy Yaqubi is a passionate entrepreneur and blockchain enthusiast...",
        },
        {
            name: "Matthew Collins",
            role: "COO",
            img: mobile,
            description:
                "With more than 30 years of director-level experience...",
        },
        {
            name: "Winn Faria",
            role: "CTO",
            img: mobile,
            description:
                "Winn is a seasoned financial services executive...",
        },
        {
            name: "Karan Chopra",
            role: "Technical Project Manager",
            img: mobile,
            description:
                "With six years of experience, Karan Chopra is a skilled Solutions Architect...",
        },
    ];
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
                        className="text-4xl leading-normal font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
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
                        We aim to empower individuals and businesses worldwide by providing a secure, transparent, and accessible platform for managing and investing in digital assets. Our ultimate goal is to bridge the gap between traditional financial systems and modern digital solutions, making financial freedom and innovation accessible to everyone.
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




            <section className="relative max-w-screen-xl     mx-auto flex flex-wrap items-center w-full text-white pt-24 ">
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
                        className="lg:text-4xl md:text-3xl text-3xl lg:max-w-[33rem] w-full leading-normal font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        <motion.h1 className="leading-normal">
                            Our Mission</motion.h1>
                    </motion.div>

                    <motion.p
                        className="text-themedescColor font-sans leading-loose text-md"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        KyberBits aims to become the world's Strongest Layer 1, Web3 aggregated ecosystem, uniting major blockchains like Bitcoin, Ethereum, Solana, and more. Our vision involves creating a versatile blockchain platform that simplifies and enhances digital interactions across diverse sectors. We plan to develop a non-custodial, open-source wallet integrated with debit and virtual cards, cross-chain DeFi exchanges, and a decentralized VPN (dVPN) to provide enhanced privacy and true decentralization. Our commitment is to provide a seamless experience that facilitates secure transactions and effective management of both crypto and fiat currencies, paving the way for innovative blockchain utilization and expanded digital economy engagement.
                    </motion.p>

                    <motion.div
                        className="flex space-x-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }} // Trigger animation when in view
                        transition={{ delay: 0.6, duration: 1 }}
                        viewport={{ once: false }}
                    >
                        <button className="px-6 py-3 rounded-full w-[200px] bg-[#202020] hover:bg-gray-800 transition">
                            Learn More
                        </button>
                    </motion.div>
                </motion.div>
            </section>
            <section className="relative max-w-screen-xl     mx-auto flex flex-wrap items-center w-full text-white pt-24 ">
                {/* Content Section */}
                <motion.div
                    className="w-[100%] lg:w-[50%] flex flex-col lg:p-8 md:p-6 p-4 space-y-7"
                    initial={{ opacity: 0, y: 50 }} // Start below the screen
                    whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                    transition={{ duration: 1 }}
                    viewport={{ once: false }} // Keep triggering animation when in view
                >
                    <motion.div
                        className="lg:text-4xl md:text-3xl text-3xl lg:max-w-[33rem] w-full leading-normal font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        <motion.h1 className="leading-normal">
                            Our Goal</motion.h1>
                    </motion.div>

                    <motion.p
                        className="text-themedescColor font-sans leading-loose text-md"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        Our primary goal is to establish KyberBits as a leading force in the blockchain industry by delivering a platform that meets the needs of both novice users and experienced blockchain enthusiasts. We focus on inclusivity and user empowerment through education and the provision of state-of-the-art tools that enhance user experience. Through continuous innovation and adherence to the highest standards of security and compliance, we aim to contribute significantly to the evolution of the blockchain sector.
                    </motion.p>

                    <motion.div
                        className="flex space-x-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }} // Trigger animation when in view
                        transition={{ delay: 0.6, duration: 1 }}
                        viewport={{ once: false }}
                    >
                        <button className="px-6 py-3 rounded-full w-[200px] bg-[#202020] hover:bg-gray-800 transition">
                            Learn More
                        </button>
                    </motion.div>
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
            <section className="max-w-screen-xl mx-auto flex items-center relative w-full mt-20 text-white bg-shades-left">

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
                <motion.div
                    className="w-[50%] flex flex-col p-8 space-y-7"
                    initial={{ opacity: 1, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >

                    <motion.h1
                        className="text-4xl leading-normal font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
                        initial={{ opacity: 1, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        Our Approach
                    </motion.h1>
                    <motion.p
                        className="text-gray-500 font-sans leading-loose text-md"
                        initial={{ opacity: 1, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        We believe in the power of community and collaboration. As such, KyberBits actively seeks partnerships with other innovators in the field, regulatory bodies, and educational institutions to ensure our platform remains on the cutting edge of technology. We are to maintaining an open dialogue with our users, valuing their feedback and integrating their insights into our ongoing development process.
                    </motion.p>
                </motion.div>

            </section>
            <section className="max-w-screen-xl mx-auto text-white mt-20 px-4">
                {/* Title with Enhanced Animation */}
                <motion.h1
                    className="text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                >
                    Our Team
                </motion.h1>

                {/* Description */}
                <motion.p
                    className="text-gray-400 text-center max-w-6xl mx-auto mt-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Leading KyberBits is our CEO, Shaffy Yaqubi, a passionate advocate for blockchain with a robust background in biomedical science. Shaffy’s extensive experience includes teaching clinical skills to healthcare professionals in both the NHS and private sectors in the UK. His deep understanding of complex systems and commitment to applying this knowledge to blockchain technology highlight his capability and insight, guiding KyberBits with precision and foresight. Our technological backbone is supported by a contracted team of over 700 highly skilled blockchain and Web3 developers from around the globe, with regional offices in the United States, Australia, the United Kingdom, India, and the United Arab Emirates. This international team brings diverse perspectives and expertise to ensure KyberBits remains innovative and competitive in the blockchain realm.
                </motion.p>

                {/* Team Members Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="p-6 rounded-xl text-center shadow-lg border border-gray-800 bg-[#121212]"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            {/* Image */}
                            <div className="relative w-40 h-40 mx-auto mb-4">
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    width={160}
                                    height={160}
                                    className="rounded-full border-4 border-gradient-to-r from-green-400 via-blue-500 to-purple-600"
                                />
                            </div>
                            {/* Name & Role */}
                            <h3 className="text-xl font-bold">{member.name}</h3>
                            <p className="text-sm text-gray-400">{member.role}</p>
                            {/* Description */}
                            <p className="text-gray-500 text-sm mt-3">{member.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
            <section className="max-w-screen-xl mx-auto flex justify-center text-white mt-20 px-4">
                <Image
                    src={orbit}
                    alt="orbit"
                    width={1000}
                    height={300}
                    className="w-full max-w-[1000px] h-auto object-cover"
                />
            </section>
            <section className="max-w-screen-lg mx-auto text-center relative text-white py-16 px-6 bg-shades">
            {/* <section className="max-w-screen-xl mx-auto  items-center relative  mt-20 px-6 text-white bg-shades"> */}
  {/* Heading */}
  <h1 className="text-4xl font-bold leading-tight">
    Let's collaborate to unlock the transformative potential of blockchain and reshape the future of finance together.
  </h1>

  {/* Paragraph */}
  <p className="text-gray-400 mt-6 text-lg">
    We invite you to be part of the Qubetics journey as we continue to develop and refine our ecosystem. Whether you are looking to invest, explore blockchain technology, or expand your knowledge of digital finance, Qubetics is here to provide support and guidance.
  </p>

  {/* Input and Button */}
  <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
    <input
      type="email"
      placeholder="Email"
      className="bg-gray-900 text-white px-5 py-4 rounded-3xl w-full  md:w-96 outline-none"
    />
   <button className="px-6 py-4 rounded-full w-[200px] bg-[#202020] hover:bg-gray-800 transition">
            Join Now
          </button>
  </div>
</section>



            <SendEmail />
        </>
    );
};

export default Dvpn;
