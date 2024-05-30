import React from "react";
import NavBar from "./components/organisms/navBar";
import Hero from "./components/organisms/hero";
import MarketPlace from "./components/organisms/marketPlace";
import SlantedSession from "./components/organisms/slantedSession";
import FourthSection from "./components/organisms/fourthSection";
import Journey from "./components/organisms/Journey";
import WhySection from "./components/organisms/whySection";
import Faq from "./components/organisms/faqs";
import Footer from "./components/organisms/footer";

function page() {
  return (
    <div className="flex flex-col items-center justify-center pt-10 gap-12 overflow-x-hidden">
      <NavBar />
      <Hero />
      <MarketPlace />
      <SlantedSession />
      <FourthSection />
      <Journey />
      <WhySection />
      <Faq />
      <Footer />
    </div>
  );
}

export default page;
