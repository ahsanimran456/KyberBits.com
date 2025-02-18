"use client";
import React, { useState, useEffect } from "react";
import dot from '../../../public/Assests/images/presaledot.png'
import Image from 'next/image';
import { RiArrowDropDownLine } from "react-icons/ri";
import img from '../../../public/Assests/images/eth.svg'
import bnb from '../../../public/Assests/images/bnb.svg'
import trx from '../../../public/Assests/images/trx.svg'
import bit from '../../../public/Assests/images/bit.svg'
import sol from '../../../public/Assests/images/sql.svg'
import metamask from '../../../public/Assests/images/metmask.svg'
import trust from '../../../public/Assests/images/trust.svg'
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';
import '../components/components.css'
import SendEmail from "../components/SendEmail";


const Page = () => {

  // Set the target date for the next phase
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 20); // Example: 6 days from today

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const paymentMethods = [
    {
      name: "ETH",
      icon: img,
      network: "ERC-20",
      subItems: [],
    },
    {
      name: "BNB",
      icon: bnb,
      network: "BEP-20",
      subItems: [
        { name: "BNB", network: "BEP-20" },
        { name: "BUSD", network: "BEP-20" },
        { name: "USDT", network: "BEP-20" },
      ],
    },
    {
      name: "TRX",
      icon: trx,
      network: "TRC-20",
      subItems: [],
    },
    {
      name: "BTC",
      icon: bit,
      network: "Bitcoin",
      subItems: [],
    },
    {
      name: "SOL",
      icon: sol,
      network: "Solana",
      subItems: [],
    },
    {
      name: "More",
      icon: img,
      network: "More",
      subItems: [],
    },
  ];

  return (
    <>
      <section className="countdown-section relative  px-28 mx-auto flex flex-col items-center w-full text-white pt-36 pb-12">
        {/* Timer Content */}
        <div className="relative z-10 text-center">
          <h2 className="lg:text-6xl font-title md:text-3xl text-3xl lg:max-w-[33rem] w-full leading-normal font-bold  headings-gr">
            Phase 22
          </h2>
          <p className="text-lg mt-2">NEXT PHASE BEGINS IN</p>

          {/* Timer */}
          <div className="flex justify-center space-x-8 mt-6">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold">{Object.values(timeLeft)[index]}</p>
                <p className="text-lg">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative max-w-screen-xl px-28 mx-auto flex flex-wrap items-center w-full text-white pt-24">
        <div className="max-w-screen-lg mx-auto w-full">
          <div className="w-full ">
            <div className="flex justify-between">
              <div>
                <p className="text-[#909090]  text-sm text-center">USDT Raised</p>
                <h3 className="text-white text-2xl font-bold">$12,745,115.96</h3>
              </div>
              <div>
                <p className="text-[#909090]  text-sm text-center">Holders</p>
                <h3 className="text-white text-2xl font-bold">19,921</h3>
              </div>
            </div>
            <div className='border border-white border-opacity-15  w-full p-6 bg-[#141414] rounded-md mt-3 pb-10'>
              <div className='px-10 mt-10'>
                <div className='flex justify-between w-full'>
                  <div className='flex gap-2'>
                    <div className="flex items-center gap-2">
                      <Image
                        src={bnb}
                        alt="dot"
                        width={30}
                        height={30}
                        className=""
                      />
                      <h2 className="text-white text-lg font-bold">
                        1 TICS = {""}
                      </h2>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image
                        src={bnb}
                        alt="dot"
                        width={30}
                        height={30}
                        className=""
                      />
                      <h2 className="text-white text-lg font-bold">
                        {" "}0.07339091 USD
                      </h2>
                    </div>
                  </div>
                  <div>
                    <p className="text-white text-lg font-bold">
                      10% Increase On Next Phase
                    </p>
                  </div>
                </div>
                <div className='mt-3'>
                  <div className='rounded-3xl bg-[#9485fd4d] h-5 p-1  '>
                    <div className='relative  h-full w-[70%] rounded-3x '
                      style={{ background: "linear-gradient(to right, #85faeb, #bb68f7)", borderRadius: '999rem' }}
                    >
                      <div className="absolute top-[50%] right-0 transform translate-x-1/2 -translate-y-1/2">
                        <Image
                          src={dot}
                          alt="dot"
                          width={40}
                          height={40}
                          className=""
                        />
                      </div>
                      <div className='absolute -top-2 right-[-16.7%] ranslate-x-1/2 translate-y-1/2 '>
                        <div
                          className="relative flex rounded-md p-[0.3px] min-w-[13rem] border text-sm noch"
                          style={{
                            // background: "conic-gradient(from 225deg at 50% 50%, #ffc876, #79fff7, #9f53ff, #ff98e2, #ffc876)",
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <div className='relative p-3  bg-[#202020] rounded-[1rem] w-full '>
                            <div className='inner-noch'>
                              <div className='flex items-center gap-2'>
                                <Image
                                  src='/center.png'
                                  alt="logo"
                                  width={40}
                                  height={40}
                                  className=""
                                />
                                <h3 className='text-md font-bold'>472,422,444 TICS</h3>
                              </div>
                              <div className='flex justify-center items-center'>
                                Tokens Sold
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-36 coin-body-main justify-center '>
                <div className='flex justify-center items-center gap-x-2'>
                  <h3 className='text-2xl font-bold'>
                    Step 1 {" "}
                  </h3>
                  <p className='text-[#909090] text-lg font-normal p-0 m-0'>
                    {" "} - Select the payment method
                  </p>
                </div>
                <div className='coin-body-list flex gap-3 justify-center items-center mt-6 flex-wrap'>

                  {/* <div className='bg-[#2f2f2f] p-[0.6px] rounded-3xl relative h-[3.375rem]  w-72' key={""}>
                  <div className='flex  bg-[#181818] justify-between items-center p-2 rounded-3xl  h-full w-full'>
                    <div className='flex items-center justify-center gap-2'>
                      <div>
                        <Image
                          src={'/eth.png'}
                          alt="coin-icon"
                          width={35}
                          height={35}
                          className=""
                        />
                      </div>
                      <div>
                        <div>
                          <h4 className='font-bold'>
                            {"BTC"}
                          </h4>
                          <p className='text-[.75em] text-[#909090] font-bold'>
                            {"ETC nectwork"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <RiArrowDropDownLine size={35} />
                    </div>
                  </div>
                </div> */}

                  {paymentMethods.map((items, index) => {
                    return (
                      <div key={index} className='bg-[#2f2f2f] p-[0.6px] rounded-full relative h-[3.675rem]  w-72' >
                        <div className='flex  bg-[#181818] justify-between items-center p-2 rounded-full  h-full w-full'>
                          <div className='flex items-center justify-center gap-2'>
                            <div>
                              <Image
                                src={items.icon}
                                alt="coin-icon"
                                width={35}
                                height={35}
                                className=""
                                priority
                              />
                            </div>
                            <div>
                              <div>
                                <h4 className='font-bold'>
                                  {items.name}
                                </h4>
                                <p className='text-[.75em] text-[#909090] font-bold'>
                                  {items.network}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <RiArrowDropDownLine size={35} />
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div>
                  <div className='flex justify-center items-center gap-x-2 mt-10'>
                    <h3 className='text-2xl font-bold'>
                      Step 2 {" "}
                    </h3>
                    <p className='text-[#909090] text-lg font-normal p-0 m-0'>
                      {" "} - Enter the amount of token you would like to purchase
                    </p>
                  </div>
                  <div className="flex justify-center items-center gap-x-3 mt-6 text-white px-12">
                    {/* Left Input Field */}
                    <div className="flex flex-1 items-center bg-black rounded-full px-4 py-2 justify-between">
                      {/* Input Field */}
                      <input
                        type="text"
                        className="bg-transparent text-white text-lg w-full outline-none"
                        defaultValue="1"
                      />

                      {/* Right Side Content */}
                      <div className="flex items-center  gap-2 px-6">
                        <span className="text-gray-400">ETH</span>
                        <Image src={img} alt="SOL" width={40} height={40} />
                      </div>
                    </div>
                    {/* Equal Sign */}
                    <div className="text-5xl font-bold">=</div>

                    {/* Right Output Field */}
                    <div className="flex flex-1 items-center bg-black rounded-full px-4 py-2 ">
                      <span className="text-white text-lg">2659.321234</span>
                      <div className="flex items-center gap-2 ml-auto">
                        <span className="text-gray-400">TICS</span>
                        <Image src={'/center.png'} alt="TICS" width={40} height={40} />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center mt-10 ">
                    <button className="custom_btn buttons_all bg-[#141414]">
                      Connect Wallet
                    </button>
                  </div>
                  <div className="flex justify-center items-center mt-10 ">
                    <button className='flex items-center gap-2 text-[#909090] text-[1.125rem]'>
                      How to buy ?  <FaArrowRightLong size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="relative max-w-screen-xl px-28 mx-auto flex flex-wrap items-center w-full text-white pt-16">
        <div className='flex mx-auto justify-center items-center flex-col text-center'>
          <div>
            <h1 className='text-[4rem] font-bold headings-gr font-title'>
              How to buy
            </h1>
            <p className='text-4xl font-bold mt-6 leading-[3.5rem]'>
              Buying TICS with
              <br />
              ETH, BNB, USDT, USDC or BUSD
            </p>
          </div>
        </div>

        <div className="max-w-screen-lg mx-auto w-full mt-6">
          <div className='border border-white border-opacity-15  w-full pt-6  px-12 bg-[#020202] rounded-3xl mt-3 pb-16'>
            <div className='flex justify-center items-center gap-x-2 mt-10'>
              <h3 className='text-3xl font-bold'>
                Step 1 {" "}
              </h3>
              <p className=' text-3xl font-bold p-0 m-0'>
                {" "} - Wallet Setup
              </p>
            </div>
            <div className='flex justify-center items-center gap-x-2 mt-6'>
              <p className=' text-lg text-[#fffc] text-center font-normal leading-9 p-0 m-0'>
                Welcome aboard! Start by getting MetaMask on your desktop browser or a Wallet Connect-compatible wallet like Trust Wallet for your mobile.
              </p>
            </div>
            <div className='flex justify-center items-center gap-x-2 '>
              <p className=' text-lg text-[#fffc] text-center font-normal leading-9 p-0 m-0'>
                Desktop users, MetaMask is ideal for a smooth purchase process. Mobile users, Trust Wallet or MetaMask connected through Wallet Connect is your go-to.
              </p>
            </div>
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

            <div className='flex justify-center items-center gap-x-2 mt-16'>
              <h3 className='text-3xl font-bold'>
                Step 2 {" "}
              </h3>
              <p className=' text-3xl font-bold p-0 m-0'>
                {" "} - Purchase Process
              </p>
            </div>
            <div className='flex justify-center items-center gap-x-2 mt-6'>
              <p className=' text-md text-[#fffc] text-center font-normal leading-9 p-0 m-0'>
                Ready to invest? Simply pick your preferred currency on our site, input how many TICS tokens you'd like, and hit 'Buy Now'. A prompt will pop up from your wallet for transaction confirmation, where you’ll also see the gas fees.
                Note: Purchasing with USDT/USDC may involve two approvals—one to okay the contract and another for the actual payment.
              </p>
            </div>
            <div className="flex justify-center  mt-14">
              <Image
                src={'https://www.qubetics.com/img/tics/tics.webp'}
                width={700} // Aspect ratio ke liye
                height={700}
                alt="tics"
              />
            </div>


            <div className='flex justify-center items-center gap-x-2 mt-16'>
              <h3 className='text-3xl font-bold'>
                Step 3  {" "}
              </h3>
              <p className=' text-3xl font-bold p-0 m-0'>
                {" "} - Token Reception
              </p>
            </div>
            <div className='flex justify-center items-center gap-x-2 mt-6'>
              <p className=' text-md text-[#fffc] text-center font-normal leading-9 p-0 m-0'>
                Once our presale wraps up, you can collect your TICS tokens through our website or wait for an airdrop straight to your wallet. Meanwhile, keep an eye on your investment and the token prices from your dashboard. Just connect your wallet to our website, and voilà—you’re there!
              </p>
            </div>
            <div className="flex justify-center  mt-14">
              <Image
                src={'https://buy.qubetics.com/assets/token_reception-CyYlPVuV.png'}
                width={280} // Aspect ratio ke liye
                height={280}
                alt="token_reception"
              />
            </div>

          </div>


          <div className='flex mx-auto justify-center items-center flex-col mt-16 mb-10 text-center'>
            <div>
              <p className='text-4xl font-bold mt-6 leading-[3.5rem]'>
                Buying TICS with
                <br />
                BTC, SOL, LTC, TRX, USDT-ERC20 and More
              </p>
            </div>
          </div>
          <div className='border border-white border-opacity-15  w-full pt-6  px-12 bg-[#020202] rounded-3xl mt-3 pb-16'>
            <div className='flex justify-center items-center gap-x-2 mt-10'>
              <h3 className='text-3xl font-bold'>
                Step 1 {" "}
              </h3>
              <p className=' text-3xl font-bold p-0 m-0'>
                {" "} - Get Your Wallet Ready
              </p>
            </div>
            <div className='flex justify-center items-center gap-x-2 mt-6'>
              <p className=' text-lg text-[#fffc] text-center font-normal leading-9 p-0 m-0'>
                Desktop users, MetaMask is your best bet for ease <br />
                Mobile users, Trust Wallet or MetaMask through Wallet Connect will give you a hassle-free experience.
              </p>
            </div>
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

            <div className='flex justify-center items-center gap-x-2 mt-16'>
              <h3 className='text-3xl font-bold'>
                Step 2 {" "}
              </h3>
              <p className=' text-3xl font-bold p-0 m-0'>
                {" "} - Sending Your Payment
              </p>
            </div>
            <div className='flex justify-center items-center gap-x-2 mt-6'>
              <p className=' text-md text-[#fffc] text-center font-normal leading-9 p-0 m-0'>
                Ready to invest? Simply pick your preferred currency on our site, input how many TICS tokens you'd like, and hit 'Buy Now'. A prompt will pop up from your wallet for transaction confirmation, where you’ll also see the gas fees.
                Note: Purchasing with USDT/USDC may involve two approvals—one to okay the contract and another for the actual payment.
              </p>
            </div>
            <div className="flex justify-center  mt-14">
              <Image
                src={'https://buy.qubetics.com/assets/sendPayment-vo6fGDE3.png'}
                width={800} // Aspect ratio ke liye
                height={800}
                alt="tics"
              />
            </div>


            <div className='flex justify-center items-center gap-x-2 mt-16'>
              <h3 className='text-3xl font-bold'>
                Step 3  {" "}
              </h3>
              <p className=' text-3xl font-bold p-0 m-0'>
                {" "} - Claiming Your Tokens
              </p>
            </div>
            <div className='flex justify-center items-center gap-x-2 mt-6'>
              <p className=' text-md text-[#fffc] text-center font-normal leading-9 p-0 m-0'>
                After our presale ends, claiming your TICS tokens will be a breeze—you can do it right from our website or receive them through an airdrop. Your dashboard, accessible by connecting your wallet to our site, will show you all your token details and values.
              </p>
            </div>
            <div className="flex justify-center  mt-14">
              <Image
                src={'https://buy.qubetics.com/assets/token_reception-CyYlPVuV.png'}
                width={280} // Aspect ratio ke liye
                height={280}
                alt="token_reception"
              />
            </div>

          </div>

          <div className='flex justify-center items-center gap-x-2 mt-16'>
            <p className=' text-md text-[#fffc] italic text-center font-normal leading-9 p-0 m-0'>
              Disclaimer: Please note that TICS tokens will be distributed to purchasers through an airdrop or a claim process available on our website. Tokens will only be sent to the wallet address used at the time of purchase. It is crucial to maintain access to your wallet, as recovery of tokens is not possible if access is lost. Keep your wallet details secure.
            </p>
          </div>
        </div>
      </section>
        <SendEmail/>
    </>
  );
};

export default Page;
