"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HeroSection.css";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const AnimatedSection = () => {
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);
  const heroRef = useRef(null);
  const centerRef = useRef(null); // Ref for the center image container

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Existing timeline for background image and hero section
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
          scale: 2,
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

      // "Wow" effect for the center image:
      // 1. Animate from a slightly smaller scale & lower opacity
      gsap.fromTo(
        centerRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
      );

      // 2. Add a continuous subtle pulsing effect (zoom in/out)
      gsap.to(centerRef.current, {
        scale: 1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 1 // delay after the initial entrance animation
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="wrapper-main">
      <div className="content">
        <section ref={heroRef} className="section main-hero-section">
          <div className="absolute main-hero-container max-w-screen-xl mx-auto">
            <div className="max-w-screen-2xl">
              <h1
                className="text-2xl text-center leading-tight font-sans font-bold text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #0A6ABC, #14EFF4 15%, rgb(0 255 153) 40%, rgb(120 223 147) 50%, rgb(23 255 209) 70%, rgb(121, 255, 247) 90%);",
                }}
              >
                KyberBits: The World's First Layer 1, 
              </h1>
              <h3
                className="text-2xl text-center leading-tight font-sans font-bold text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #0A6ABC, #14EFF4 15%, rgb(0 255 153) 40%, rgb(120 223 147) 50%, rgb(23 255 209) 70%, rgb(121, 255, 247) 90%);",
                }}
              >
                Web3 Aggregated Ecosystem  That Unites Leading Blockchains Including Bitcoin, Ethereum, Solana & More.
              </h3>
              <p
                className="text-white text-center mt-1 text-sm"
              >
                KyberBits Network is redefining blockchain technology. We aim to build a highly efficient, self-sustaining ecosystem designed to effortlessly manage a large number of transactions.
              </p>
              <div className="flex justify-center  flex-wrap mt-2 gap-4 mb-6">
                {/* Gradient Button */}
                <button
                  className="px-6 py-3 text-xs min-w-48  text-black font-semibold rounded-full shadow-lg bg-gradient-to-r from-green-200 via-blue-400 to-purple-500 hover:opacity-90 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Presale
                </button>

                {/* Dark Button */}
                <button
                  className="px-6 py-3 text-sm text-white min-w-48 font-semibold rounded-full shadow-lg bg-[#1a1a1a] hover:bg-[#333] transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  How to buy?
                </button>
              </div>
            </div>
          </div>
          <div ref={centerRef} className="main-hero-center">
            <Image
              src="/center.png"
              alt="Hero Image"
              width={300}
              height={300}
              priority
            />
          </div>
        </section>
        {/* <section className="section gradient-purple"></section> */}
        {/* <section className="section gradient-blue">
          
        </section> */}
      </div>

      <div className="image-container">
        <img
          ref={imgRef}
          src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
          alt="Background Image"
        />
      </div>
    </div>
  );
};

export default AnimatedSection;
