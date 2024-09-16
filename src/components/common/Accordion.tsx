import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type AccordionItem = {
  href: string;
  name: string;
};

type AccordionProps = {
  title: string;
  isOpen: boolean;
  data: AccordionItem[];
  toggleAccordion: () => void;
};

const Accordion: React.FC<AccordionProps> = (props) => {
  return (
    <div className="mb-1">
      <button
        className="text-xl font-semibold w-full py-4 text-left uppercase tracking-widest"
        onClick={props.toggleAccordion}
      >
        {props.title}
        <span
          className={`float-right transform ${
            props.isOpen ? "rotate-180" : "rotate-0"
          } transition-transform duration-300`}
        >
          <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
        </span>
      </button>
      {props.isOpen && (
        <div className="flex flex-col gap-5">
          {props.data.map((item, index) => (
            <Link href={item.href} key={index} className="text-base">
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;