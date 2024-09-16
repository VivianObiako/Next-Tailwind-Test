"use client";
import { useState } from "react";

const Banner = () => {
  const [bannerDropdown, setBannerDropdown] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-2 md:px-90 md:py-1 font-articulat text-xs leading-5 font-medium text-bannerTextColor bg-jonquil">
      <span className="self-start text-base font-semibold md:text-xs md:leading-5 md:font-medium">Uncovers unique pieces</span>
      <div className="self-end flex justify-around items-center gap-5">
        <span>Blog</span>
        <span>For makers</span>
        <span className="relative">
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5"
            onClick={() => setBannerDropdown(!bannerDropdown)}
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true">
            £ GBP
            <svg className="-mr-1 h-5 w-5 text-bannerTextcolor" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>
          {bannerDropdown && <div className="absolute left-0 z-10 mt-2 w-14 origin-top-right rounded-md bg-white shadow-lg overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
            <div className="py-1" role="none">
              <a href="#" className="block p-1 text-center hover:bg-slate-100" role="menuitem" id="menu-item-0">$ USD</a>
              <a href="#" className="block p-1 text-center hover:bg-slate-100" role="menuitem" id="menu-item-1">€ EUR</a>
            </div>
          </div>}
        </span>
      </div>
    </div>
  )
};

export default Banner;