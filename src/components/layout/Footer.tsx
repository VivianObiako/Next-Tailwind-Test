"use client";

import Link from "next/link";
import { FooterItems } from "@/lib/constants";
import FoooterLogo from "../icons/FoooterLogo";
import VisaIcon from "../icons/VisaIcon";
import AmexIcon from "../icons/AmexIcon";
import MasterIcon from "../icons/MasterIcon";
import PayPalIcon from "../icons/PayPalIcon";
import GooglePayIcon from "../icons/GooglePayIcon";
import ApplePayIcon from "../icons/ApplePayICon";
import KlarnaIcon from "../icons/KlarnaIcon";
import { useState } from "react";
import Accordion from "../common/Accordion";

const Footer = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <footer className="bg-footer-background px-8 md:px-16 pb-8 pt-14 text-white lg:px-[90px] lg:pb-12 lg:pt-20">
      <div className="flex flex-col">
        <div className="justify-between md:flex">
          <div className="flex flex-1 flex-col gap-4 md:pr-14 lg:pr-20">
            <div className="text-4xl uppercase">Sign Up Now</div>
            <p className="text-sm">
              Stay in the loop, with exclusive offers and product previews.
            </p>
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="Email"
                className="w-full max-w-sm border-b border-white bg-transparent py-2 text-sm focus:outline-none"
              />
              <button className="text-nowrap rounded-full bg-[#E9FE97] px-[30px] py-3.5 text-sm text-black transition-colors duration-300 hover:bg-[#D4E87A]">
                Sign Up
              </button>
            </div>
          </div>
          <div className="hidden md:grid w-full flex-1 grid-cols-3 gap-x-6 gap-y-4 lg:gap-x-12">
            {FooterItems.map((footerItem) => {
              return (
                <div className="flex flex-col gap-2" key={footerItem.key}>
                  <div className="pb-1 text-sm uppercase">
                    {footerItem.title}
                  </div>
                  {footerItem.data.map((item, index) => (
                    <Link key={index} href={item.href} className="text-sm">
                      {item.name}
                    </Link>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
        <div className="block md:hidden mt-12">
          {FooterItems.map((footerItem, index) => (
            <Accordion
              key={footerItem.key}
              title={footerItem.title}
              isOpen={openAccordion === index}
              data={footerItem.data}
              toggleAccordion={() => toggleAccordion(index)}
            />
          ))}
        </div>
        <div className="mt-12 md:mt-40 lg:mt-48 flex flex-col">
          <Link href="/">
            <FoooterLogo className="w-full" />
          </Link>
          <div className="mt-12 flex flex-col-reverse md:flex-row justify-between gap-4">
            <div className="flex justify-center gap-4 text-wrap text-xs text-center lg:gap-6 lg:text-nowrap">
              <p>© 2024 Designsnitch. Powered by Markko</p>
              <Link href="/">Terms & Conditions</Link>
              <Link href="/">Privacy Policy</Link>
            </div>
            <div className="flex justify-center gap-[5px]">
              <a href="#">
                <VisaIcon />
              </a>
              <a href="#">
                <AmexIcon />
              </a>
              <a href="#">
                <MasterIcon />
              </a>
              <a href="#">
                <PayPalIcon />
              </a>
              <a href="#">
                <GooglePayIcon />
              </a>
              <a href="#">
                <ApplePayIcon />
              </a>
              <a href="#">
                <KlarnaIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
