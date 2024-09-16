"use client";
import Image from "next/image";
import Banner from "../Banner";
import { useState } from "react";

const Header = () => {
  const [accountDropdown, setAccountDropdown] = useState(false);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  return (
    <header className="w-full">
      <Banner />
      <div className="flex flex-col justify-between bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/header-bg.png')" }}>
        <div className="flex justify-between items-center px-4 py-2 md:hidden">
          <button
            type="button"
            onClick={() => setHamburgerMenu(!hamburgerMenu)}
            className="self-start relative inline-flex items-center justify-center rounded-md p-2 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false">
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>
            {
              hamburgerMenu ? <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg> : <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            }
          </button>
          <Image src="/assets/images/logo.svg" className="m-auto w-32 lg:w-44 xl:w-50" alt="logo" width={200} height={22} />
        </div>
        {hamburgerMenu && <div className="md:hidden absolute top-102 w-full bg-[#4e4f4feb]" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">LifeStyle</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Fashion</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Homewear</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Art</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">DS Collections</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white" aria-current="page">Search</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">WishList</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Basket</a>
          </div>
        </div>}
        <nav className="hidden md:flex justify-between items-center px-4 py-2 lg:px-8 lg:py-6 xl:py-8 xl:px-90">
          <div className="flex justify-center items-center gap-2 lg:gap-4 xl:gap-7.5 font-powerGrotesk font-normal text-xxs lg:text-sm text-white uppercase">
            <span>LifeStyle</span>
            <span>Fashion</span>
            <span>Homewear</span>
            <span>Art</span>
            <span>DS Collections</span>
          </div>
          <Image src="/assets/images/logo.svg" className="w-32 lg:w-44 xl:w-50" alt="logo" width={200} height={22} />
          <div className="flex justify-center items-center gap-2 lg:gap-4 xl:gap-7.5 font-powerGrotesk font-normal text-xxs lg:text-sm text-white uppercase">
            <span>Search</span>
            <span>WishList</span>
            <span>Basket</span>
            <span className="relative">
              <button
                type="button"
                className="inline-flex w-full justify-center items-center gap-0.5 lg:gap-x-1.5 uppercase"
                onClick={() => setAccountDropdown(!accountDropdown)}
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true">
                Account
                <svg className="-mr-1 h-5 w-5 text-bannerTextcolor" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              {accountDropdown && <div className="absolute left-0 z-10 mt-2 w-16 origin-top-right rounded-md bg-tranparent shadow-lg overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                <div className="py-1" role="none">
                  <a href="#" className="block p-1 text-center capitalize" role="menuitem" id="menu-item-0">Sign In</a>
                  <a href="#" className="block p-1 text-center capitalize" role="menuitem" id="menu-item-1">Register</a>
                </div>
              </div>}
            </span>
          </div>
        </nav>
        <div className="px-4 py-10 lg:p-90 flex flex-col gap-4 lg:gap-9 max-w-600 lg:max-w-860">
          <Image src="/assets/images/artwork.svg" className="" alt="logo" width={52} height={14} />
          <div className="flex flex-col gap:3 lg:gap-5">
            <p className="font-powerGrotesk text-4xl lg:text-6xl font-normal uppercase text-white">One-of-a-Kind Creations Stories You’ll Love</p>
            <p className="font-articulat text-lg lg:text-xl leading-7 font-normal text-white">Designsnitch is an online marketplace that uncovers unique pieces, their makers and the stories behind them.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="rounded-full px-7.5 py-3.5 bg-jonquil text-bannerTextColor text-sm font-medium font-articulat">Shop our latest arrivals</button>
            <button className="rounded-full px-7.5 py-3.5 bg-black text-jonquil text-sm font-medium font-articulat">Shop all</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;