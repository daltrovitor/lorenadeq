"use client";

import { useEffect, useRef } from "react";

export default function MetaCapiTracker() {
  const isViewContentSent = useRef(false);

  useEffect(() => {
    // Avoid double sending in development React Strict Mode
    if (isViewContentSent.current) return;
    isViewContentSent.current = true;

    // Send ViewContent event on page load
    fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ event: "ViewContent" }),
    }).catch((err) => console.error("Error sending ViewContent:", err));

    // Intercept checkout button clicks
    const handleCheckoutClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (link && link.href && link.href.includes("pay.hotmart.com")) {
        fetch("/api/events", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ event: "InitiateCheckout" }),
        }).catch((err) => console.error("Error sending InitiateCheckout:", err));
      }
    };

    document.addEventListener("click", handleCheckoutClick);
    return () => {
      document.removeEventListener("click", handleCheckoutClick);
    };
  }, []);

  return null;
}
