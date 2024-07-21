'use client'


import Link from "next/link";
import { useEffect, useState } from "react";
export default function Page() {
  const [redered, setRenderd] = useState(false)
  useEffect(() => {
    setRenderd(true)
  }, [])
  if (!redered) return null
  function getMapUrl(address = "Ben Thanh, District 1, Ho Chi Minh City, Vietnam") {
    if (typeof window !== "undefined") {
      const encodedAddress = encodeURIComponent(address);

      // Detect the user's platform
      const userAgent = window.navigator.userAgent;
      console.log("user agen", userAgent)
      let mapUrl = '';

      if (/android/i.test(userAgent)) {
        // Android platform
        mapUrl = `geo:0,0?q=${encodedAddress}`;
      } else if (/iPad|iPhone|iPod/.test(userAgent)) {
        // iOS platform
        mapUrl = `maps:?q=${encodedAddress}`;
      } else {
        // Default to Google Maps web
        mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
      }

      return mapUrl;
    }
    // URL encode the address
    return ''
  }
  return (
    <main className="flex min-h-screen justify-center items-center w-full">
      <a href={getMapUrl()}>address</a>
      <input type="text" inputMode="numeric" className="h-10" />
    </main>
  );
}
