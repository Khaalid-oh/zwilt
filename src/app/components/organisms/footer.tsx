"use client";
import React from "react";
import Buttonz from "../atoms/button";
import ZwiltLogo from "../atoms/zwilt-logo";
import WzwiltLogo from "../atoms/wzwilt-logo";

const FooterLinks = [
  {
    heading: "PLATFORM",
    links: ["Find Work", "Find Talent", "Categories", "About Us"],
  },
  {
    heading: "CATEGORIES",
    links: ["Data Science", "IT & Networking", "Web & Mobile"],
  },
  {
    heading: "HELP",
    links: ["FAQ's", "Contact Us"],
  },
  {
    heading: "GET IN TOUCH @",
    links: ["Instagram", "LinkedIn", "Twitter"],
  },
];

const Footer = () => {
  return (
    <section className="flex flex-col items-center min-h-screen slanted-top pt-20 -mt-12 bg-gray-900 w-full">
      <div className="flex flex-col items-center px-4 md:px-8 pb-5 md:w-full">
        <div className="slanted-footer bg-primary flex flex-col items-center justify-center px-3 py-20 gap-8 mb-28 bg-cup slanted-both w-[90%]">
          <h1 className="text-center text-white text-3xl md:text-5xl font-semibold max-w-[683px]">
            Need a job done, and done well? Get started
          </h1>
          <div className="flex items-center gap-2 text-lg">
            <div className="flex items-center justify-center w-[74px] h-[74px] rounded-[30px] bg-gray-900 rotate-90">
              <WzwiltLogo />
            </div>
          </div>
        </div>
        <div className="w-full md:w-[90%]">
          <footer className="flex flex-col md:flex-row text-white font-light justify-between">
            <aside className="max-w-[284px] mb-8 md:mb-0">
              <ZwiltLogo />
              <p className="text-sm text-gray-400 mt-6">
                We take complex hiring processes - and simplify them. Connecting
                you to the world’s highly qualified talent pool.
              </p>

              <p className="mb-4 mt-6 text-sm text-gray-500 font-semibold">
                LINKS AND REDIRECTS
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex items-center justify-center bg-gray-800 text-sm rounded-xl px-4 py-2 w-[110px] md:w-[162px]">
                  Hire now
                </div>
                <div className="flex items-center justify-center bg-gray-800 text-sm rounded-xl px-4 py-2 w-[110px] md:w-[162px]">
                  Apply now
                </div>
              </div>
            </aside>

            <div className="flex flex-col max-w-[700px]">
              <p className="text-xl md:text-4xl font-semibold mb-8">
                Connecting the right people to the right businesses.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {FooterLinks.map((link, i) => (
                  <nav key={i}>
                    <h6 className="footer-title mb-4 text-gray-500">
                      {link.heading}
                    </h6>
                    {link.links.map((item, i) => (
                      <div key={i} className="mb-3">
                        <div className="group">{item}</div>
                      </div>
                    ))}
                  </nav>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Footer;
