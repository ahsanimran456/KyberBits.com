'use client';
import { useEffect } from "react";
import Image from "next/image";
import AnimatedSection from "./components/FirstLayer";
import PowerHouse from "./components/PowerHouse";
import Platform from "./components/Platform";
import NetWork from "./components/NetWork";
import DVPN from "./components/DVPN";
import StreamLine from "./components/Streamline";
import NewEra from "./components/NewEra";
import Tokenomics from "./components/Tokenomics";
import RoadMap from "./components/RoadMap";
import Partners from "./components/Partners";
import QNA from "./components/QNA";
import SendEmail from "./components/SendEmail";

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0); // Page load hone par top par scroll hoga
  }, []);

  return (
    <>
      <AnimatedSection />
      <PowerHouse />
      <Platform />
      <NetWork />
      <DVPN />
      <StreamLine />
      <NewEra />
      <div className="bg-[#000000] relative">
      <Tokenomics />
      </div>
      <RoadMap />
      <Partners />
      <QNA />
      <SendEmail />

    </>
  )
    ;
}
