"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import mobile from "../../../public/Assests/images/bannersection.png";
import SendEmail from "../components/SendEmail";
import "../../app/components/components.css";
import appstore from "../../../public/Assests/images/appstore.svg";
import Link from "next/link";
import metamask from '../../../public/Assests/images/metmask.svg'
import trust from '../../../public/Assests/images/trust.svg'


const Bankinstitutions = () => {
    return (
        <>
            {/* Main Section */}
            <section className="relative max-w-screen-xl mx-auto flex items-center justify-center w-full mt-20 text-white bg-shades px-6">
                <motion.div
                    className="relative w-full flex justify-center"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                >
                    {/* Text Overlay */}
                    <div className="absolute top-[24%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex justify-center items-center flex-col">
                        <motion.div
                            className="lg:text-4xl md:text-3xl text-3xl lg:max-w-[33rem] mx-auto  w-full leading-normal  font-bold font-title   headings-gr"
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: false }}
                        >
                            <motion.h1 className="leading-normal">
                                Buying BITS with ETH, BNB, MATIC, USDT, USDC or BUSD
                            </motion.h1>
                        </motion.div>
                        <button className="custom_btn_sec buttons_all_sec mt-4 ">
                            <span className="bg-[#141414] w-full h-full flex items-center justify-center">
                                Learn More
                            </span>
                        </button>

                    </div>

                    {/* Image */}
                    <div className="w-full max-w-[1200px] lg:max-w-[1400px] xl:max-w-[1600px]">
                        <Image
                            src={mobile}
                            alt="Vip KyberBits"
                            className="object-cover rounded-lg w-full h-auto"
                            quality={100}
                            priority
                        />
                    </div>
                </motion.div>
            </section>

            {/* New Section Below */}
            <section className="max-w-screen-xl mx-auto w-full text-white  px-6 py-16">
                <motion.div
                    className="text-center flex flex-col items-center justify-center "
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                >
                    <motion.div
                        className="lg:text-4xl  md:text-3xl text-3xl lg:max-w-[33rem] w-full leading-normal  font-bold font-title   headings-gr"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        <motion.h1 className="leading-normal">
                            Step 1- Wallet Setup
                        </motion.h1>
                    </motion.div>
                    <motion.p
                        className="text-white mt-5 text-lg  lg:max-w-[55rem] w-full font-sans leading-loose text-md"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        Welcome aboard! Start by getting MetaMask on your desktop browser or a Wallet Connect-compatible wallet like Trust Wallet for your mobile.
                        <br />
                        Desktop users, MetaMask is ideal for a smooth purchase process. Mobile users, Trust Wallet or MetaMask connected through Wallet Connect is your go-to.
                    </motion.p>


                    <div className='flex justify-center items-center gap-x-10  mt-10'>
                        <Link href={'#'} className='flex  justify-center flex-col items-center min-w-80    svg-borders'>
                            <div className='py-5 bg-[#020202] w-full px-14'>
                                <span>
                                    Download
                                </span>
                                <Image src={metamask} alt="Meta-mask" width={200} height={200} />
                            </div>
                        </Link>
                        <Link href={'#'} className='flex  justify-center flex-col items-center min-w-80  svg-borders'>
                            <div className='py-5 bg-[#020202] w-full text-center flex justify-center flex-col items-center px-14'>
                                <span>
                                    Download
                                </span>
                                <Image src={trust} alt="trust" width={150} height={150} />
                            </div>
                        </Link>

                    </div>
                </motion.div>
            </section>
            <section className="max-w-screen-xl mx-auto w-full text-white  px-6 pb-16">
                <motion.div
                    className="text-center flex flex-col items-center justify-center "
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                >
                    <motion.div
                        className="lg:text-4xl  md:text-3xl text-3xl lg:max-w-[40rem] w-full leading-normal font-bold font-title   headings-gr"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        <motion.h1 className="leading-normal">
                            Step 2 - Purchase Process
                        </motion.h1>
                    </motion.div>
                    <motion.p
                        className="text-white mt-5 text-lg  lg:max-w-[60rem] w-full font-sans leading-loose text-md"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        Ready to invest? Simply pick your preferred currency on our site, input how many BITS tokens you'd like, and hit 'Buy Now'. A prompt will pop up from your wallet for transaction confirmation, where you’ll also see the gas fees.
                        <br />
                        <span className="italic">
                            Note: Purchasing with USDT/USDC may involve two approvals—one to okay the contract and another for the actual payment.
                        </span>
                    </motion.p>
                    <div className="flex justify-center gap-6 mt-6">
                        <Image
                            src={'https://www.qubetics.com/img/tics/tics.webp'}
                            width={700} // Aspect ratio ke liye
                            height={700}
                            alt="Play Store"
                        />
                    </div>
                </motion.div>
            </section>
            <section className="max-w-screen-xl mx-auto w-full text-white  px-6 pb-16">
                <motion.div
                    className="text-center flex flex-col items-center justify-center "
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                >
                    <motion.div
                        className="lg:text-4xl  md:text-3xl text-3xl lg:max-w-[33rem] w-full leading-normal  font-bold font-title   headings-gr"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        <motion.h1 className="leading-normal">

                            Step 3 - Token Reception
                        </motion.h1>
                    </motion.div>
                    <motion.p
                        className="text-white text-lg mt-5 mb-10  lg:max-w-[60rem] w-full font-sans leading-loose "
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        Once our presale wraps up, you can collect your BITS tokens through our website or wait for an airdrop straight to your wallet. Meanwhile, keep an eye on your investment and the token
                        <br />
                        <span className="italic">
                            prices from your dashboard. Just connect your wallet to our website, and voilà—you’re there!
                        </span>
                    </motion.p>
                    <div className="flex justify-center gap-6 mt-10">

                        <Image
                            src={'https://buy.qubetics.com/assets/token_reception-CyYlPVuV.png'}
                            width={280} // Aspect ratio ke liye
                            height={280}
                            alt="token_reception"
                        />
                    </div>
                </motion.div>
            </section>
            <section className="relative max-w-screen-xl mx-auto flex items-center justify-center w-full mt-32 bg-shades text-white  px-6">

                <motion.div
                    className="relative w-full flex justify-center"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                >
                    {/* Text Overlay */}
                    <div className="absolute top-[4%] left-1/2 transform w-full flex justify-center flex-col items-center   -translate-x-1/2 -translate-y-1/2 text-center">
                        <motion.div
                            className="lg:text-4xl text-center md:text-3xl text-3xl lg:max-w-[40rem]  font-bold leading-normal font-title   headings-gr"
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: false }}
                        >
                            <motion.h1 className="leading-normal">
                                Buying BITS with BTC, SOL, LTC, TRX, USDT-ERC20 and More
                            </motion.h1>
                        </motion.div>

                        <button className="custom_btn_sec buttons_all_sec mt-4" style={{ width: "18%" }}>
                            <span className="bg-[#141414] w-full h-full flex items-center justify-center">
                                Buy Now
                            </span>
                        </button>
                    </div>

                    {/* Image */}
                    <div className="w-full max-w-[1200px] lg:max-w-[1400px] xl:max-w-[1600px]">
                        <Image
                            src={'https://www.qubetics.com/img/how-to-buy-banner/how-to-buy-banner.webp'}
                            alt="Vip KyberBits"
                            className="object-cover rounded-lg w-full h-auto"
                            quality={100}
                            width={1000}
                            height={1000}
                            priority
                        />
                    </div>
                </motion.div>
            </section>


            <section className="max-w-screen-xl mx-auto w-full text-white  px-6 py-16">
                <motion.div
                    className="text-center flex flex-col items-center justify-center "
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                >
                    <motion.div
                        className="lg:text-4xl  md:text-3xl text-3xl lg:max-w-[33rem] w-full leading-normal font-bold font-title   headings-gr"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        <motion.h1 className="leading-normal">
                            Step 1- Wallet Setup
                        </motion.h1>
                    </motion.div>
                    <motion.p
                        className="text-white mt-5 text-lg  lg:max-w-[60rem] w-full font-sans leading-loose text-md"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        Welcome aboard! Start by getting MetaMask on your desktop browser or a Wallet Connect-compatible wallet like Trust Wallet for your mobile.
                        <br />
                        Desktop users, MetaMask is ideal for a smooth purchase process. Mobile users, Trust Wallet or MetaMask connected through Wallet Connect is your go-to.
                    </motion.p>
                    <div className='flex justify-center items-center gap-x-10  mt-10'>
                        <Link href={'#'} className='flex  justify-center flex-col items-center min-w-80    svg-borders'>
                            <div className='py-5 bg-[#020202] w-full px-14'>
                                <span>
                                    Download
                                </span>
                                <Image src={metamask} alt="Meta-mask" width={200} height={200} />
                            </div>
                        </Link>
                        <Link href={'#'} className='flex  justify-center flex-col items-center min-w-80  svg-borders'>
                            <div className='py-5 bg-[#020202] w-full text-center flex justify-center flex-col items-center px-14'>
                                <span>
                                    Download
                                </span>
                                <Image src={trust} alt="trust" width={150} height={150} />
                            </div>
                        </Link>

                    </div>
                </motion.div>
            </section>
            <section className="max-w-screen-xl mx-auto w-full text-white px-6 pb-16">
                <motion.div
                    className="text-center flex flex-col items-center justify-center "
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                >
                    <motion.div
                        className="lg:text-4xl  md:text-3xl text-3xl lg:max-w-[40rem] w-full leading-normal  font-bold headings-gr font-title"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        <motion.h1 className="leading-normal">
                            Step 2 - Sending Your Payment
                        </motion.h1>
                    </motion.div>
                    <motion.p
                        className="text-white mt-5 text-md  lg:max-w-[60rem] w-full font-sans leading-loose text-md"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        Choose your desired currency and BITS token amount on our website and click 'Buy Now'. We'll generate a unique QR code and a wallet address for you to send your payment. Once your transaction is blockchain-confirmed, your purchased BITS tokens will be allocated to your wallet address, and your balance will reflect your purchase on your dashboard. Keep your transaction ID handy, just in case.

                    </motion.p>
                    <div className="flex justify-center gap-6 mt-6">
                        <Image
                            src={'https://www.qubetics.com/img/send-payment/send-payment.webp'}
                            width={900} // Aspect ratio ke liye
                            height={900}
                            alt="Play Store"
                        />
                    </div>
                </motion.div>
            </section>
            <section className="max-w-screen-xl mx-auto w-full text-white  px-6 pb-16">
                <motion.div
                    className="text-center flex flex-col items-center justify-center "
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                >
                    <motion.div
                        className="lg:text-4xl  md:text-3xl text-3xl lg:max-w-[40rem] w-full leading-normal  font-bold headings-gr font-title"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        <motion.h1 className="leading-normal">

                            Step 3 - Claiming Your Tokens
                        </motion.h1>
                    </motion.div>
                    <motion.p
                        className="text-white text-md mt-5  lg:max-w-[60rem] w-full font-sans leading-loose text-md"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        After our presale ends, claiming your BITS tokens will be a breeze—you can do it right from our website or receive them through an airdrop. Your dashboard, accessible by connecting your wallet to our site, will show you all your token details and values.
                    </motion.p>
                    <div className="flex justify-center gap-6 mt-6">
                        <Image
                            src={'https://www.qubetics.com/assets/wallet-D2hwlbVu.svg'}
                            width={300} // Aspect ratio ke liye
                            height={300}
                            alt="Play Store"
                        />
                    </div>
                    <motion.p
                        className="text-themedescColor italic text-lg mt-24 lg:max-w-[60rem] w-full font-sans leading-loose text-md"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        Disclaimer: Please note that BITS tokens will be distributed to purchasers through an airdrop or a claim process available on our website. Tokens will only be sent to the wallet address used at the time of purchase. It is crucial to maintain access to your wallet, as recovery of tokens is not possible if access is lost. Keep your wallet details secure.


                    </motion.p>
                </motion.div>
            </section>

            <SendEmail />
        </>
    );
};

export default Bankinstitutions;
