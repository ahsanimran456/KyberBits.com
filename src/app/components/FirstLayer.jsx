"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import "./HeroSection.css";

gsap.registerPlugin(ScrollTrigger);

const AnimatedSection = () => {
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);
  const heroRef = useRef(null);
  const centerRef = useRef(null);
  let context = useRef(null); // Store GSAP context to clean up properly

  useEffect(() => {
    // Create GSAP context
    context.current = gsap.context(() => {
      // Background image and hero section animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: true,
            markers: false,
          },
        })
        .to(imgRef.current, {
          scale: 4,
          z: 350,
          transformOrigin: "center center",
          ease: "power1.inOut",
        })
        .to(
          heroRef.current,
          {
            scale: 1.1,
            transformOrigin: "center center",
            ease: "power1.inOut",
          },
          "<"
        );

      // Center image animation
      gsap.fromTo(
        centerRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
      );

      // Continuous pulsing effect
      gsap.to(centerRef.current, {
        scale: 1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 1,
      });
    });

    return () => {
      if (context.current) {
        context.current.revert(); // Cleanup GSAP animations
      }

      gsap.killTweensOf("*"); // Kill all animations
      gsap.killTweensOf(centerRef.current); // Stop pulsing animation

      // Cleanup ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      // Reset refs to null
      wrapperRef.current = null;
      imgRef.current = null;
      heroRef.current = null;
      centerRef.current = null;
    };
  }, []);

  return (
    <div ref={wrapperRef} className="wrapper-main">
      <div className="content">
        <section ref={heroRef} className="section main-hero-section  bg-shades-hero ">
          <div className="absolute main-hero-container w-[700px] max-w-screen-2xl mx-auto">
            <div >
              <h1
                className="text-2xl font-title text-center leading-tight  font-bold headings-gr"
                // style={{
                //   backgroundImage:
                //     "linear-gradient(90deg, #0A6ABC, #14EFF4 15%, rgb(0 255 153) 40%, rgb(120 223 147) 50%, rgb(23 255 209) 70%, rgb(121, 255, 247) 90%)",
                // }}
              >
                KyberBits: The World's First Layer 1,
              </h1>
              <h3
                // className="text-2xl font-title text-center leading-tight  font-bold text-transparent bg-clip-text"
                  className="text-2xl font-title  leading-normal font-bold  headings-gr"
                // style={{
                //   backgroundImage:
                //     "linear-gradient(90deg, #0A6ABC, #14EFF4 15%, rgb(0 255 153) 40%, rgb(120 223 147) 50%, rgb(23 255 209) 70%, rgb(121, 255, 247) 90%)",
                // }}
              >
                Web3 Aggregated Ecosystem That Unites Leading Blockchains Including Bitcoin, Ethereum, Solana & More.
              </h3>
              <p className="text-white text-center mt-1 text-sm">
                KyberBits Network is redefining blockchain technology. We aim to build a highly efficient, self-sustaining ecosystem designed to effortlessly manage a large number of transactions.
              </p>
              <div className="flex justify-center flex-wrap mt-2 gap-4 mb-6">
                {/* Gradient Button */}
                <button
                  className="px-6 py-3 text-xs min-w-48 text-black font-semibold rounded-full shadow-lg bg-gradient-to-r from-green-200 via-blue-400 to-purple-500 hover:opacity-90 transition-all duration-300"
                >
                  Join Presale
                </button>

                {/* Dark Button */}
                <button
                  className="px-6 py-3 text-sm text-white min-w-48 font-semibold rounded-full shadow-lg bg-[#1a1a1a] hover:bg-[#333] transition-all duration-300"
                >
                  How to buy?
                </button>
              </div>
            </div>
          </div>
          <div ref={centerRef} className="main-hero-center">
            <Image src="/coin.png" alt="Hero Image" width={180} height={180} priority />
          </div>
        </section>
      </div>

      <div className="image-container">
        <Image
          ref={imgRef}
          // src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
          src="/layer2.png"
          alt="Background Image"
          layout="fill" // Full container ko cover karega
          objectFit="cover" // Image ko stretch hone se bachayega
          priority // Fast loading ke liye
        />
      </div>
    </div>
  );
};

export default AnimatedSection;
