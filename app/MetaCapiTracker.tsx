"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    fbq?: any;
  }
}

export default function MetaCapiTracker() {
  const isViewContentSent = useRef(false);

  useEffect(() => {
    // Avoid double sending in development React Strict Mode
    if (isViewContentSent.current) return;
    isViewContentSent.current = true;

    // Parse user details from URL query parameters
    const searchParams = new URLSearchParams(window.location.search);
    const email = searchParams.get('email') || searchParams.get('em') || searchParams.get('mail');
    const phone = searchParams.get('phone') || searchParams.get('ph') || searchParams.get('tel') || searchParams.get('telefone');
    const name = searchParams.get('name') || searchParams.get('nome') || searchParams.get('fn');

    // Save details to localStorage if present
    if (email) localStorage.setItem('user_email', email.trim().toLowerCase());
    if (phone) localStorage.setItem('user_phone', phone.replace(/\D/g, ''));
    if (name) localStorage.setItem('user_name', name.trim());

    // Retrieve from localStorage (for returning/navigating users)
    const storedEmail = localStorage.getItem('user_email');
    const storedPhone = localStorage.getItem('user_phone');
    const storedName = localStorage.getItem('user_name');

    // Resolve or generate a persistent external_id
    let externalId = searchParams.get('external_id') || searchParams.get('ext_id') || localStorage.getItem('user_external_id');
    if (!externalId) {
      if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        externalId = 'ext_' + crypto.randomUUID().replace(/-/g, '');
      } else {
        externalId = 'ext_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      }
      localStorage.setItem('user_external_id', externalId);
    } else {
      localStorage.setItem('user_external_id', externalId);
    }

    const generateEventId = (prefix: string) => {
      const randomStr = typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
        ? crypto.randomUUID().replace(/-/g, '')
        : Math.random().toString(36).substring(2, 15);
      return `${prefix}_${Date.now()}_${randomStr}`;
    };

    const getPayload = (event: string, eventId: string) => {
      const payload: Record<string, any> = {
        event,
        externalId,
        eventId,
      };
      if (storedEmail) payload.email = storedEmail;
      if (storedPhone) payload.phone = storedPhone;
      if (storedName) payload.name = storedName;
      return payload;
    };

    // Generate unique eventId for ViewContent
    const viewContentEventId = generateEventId('vc');

    // Trigger Pixel on browser with eventID for deduplication & IPv6 pairing
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'ViewContent', {
        currency: 'BRL',
        value: 247.00,
      }, { eventID: viewContentEventId });
    }

    // Send ViewContent event to CAPI
    fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(getPayload("ViewContent", viewContentEventId)),
    }).catch((err) => console.error("Error sending ViewContent:", err));

    // Intercept checkout button clicks
    const handleCheckoutClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (link && link.href && link.href.includes("pay.hotmart.com")) {
        // Dynamically append client externalId to Hotmart checkout URL as the sck parameter
        try {
          const url = new URL(link.href);
          if (!url.searchParams.has("sck") && externalId) {
            url.searchParams.set("sck", externalId);
            link.href = url.toString();
          }
        } catch (err) {
          console.error("Error modifying checkout link:", err);
        }

        const checkoutEventId = generateEventId('ic');

        // Trigger Pixel on browser for InitiateCheckout with eventID
        if (typeof window !== 'undefined' && window.fbq) {
          window.fbq('track', 'InitiateCheckout', {
            currency: 'BRL',
            value: 247.00,
          }, { eventID: checkoutEventId });
        }

        // Send InitiateCheckout event to CAPI
        fetch("/api/events", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(getPayload("InitiateCheckout", checkoutEventId)),
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
