"use client";

import React, { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openFaq === i;
        return (
          <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden shadow-xs">
            <button 
              onClick={() => setOpenFaq(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left hover:bg-muted/40 transition-colors focus:outline-none"
              id={`faq-btn-${i}`}
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg md:text-xl text-foreground font-medium">
                {faq.q}
              </span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className={`w-5 h-5 shrink-0 text-primary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="px-5 md:px-6 pb-6 text-muted-foreground text-sm md:text-base leading-relaxed border-t border-border/20 pt-4">
                {faq.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
