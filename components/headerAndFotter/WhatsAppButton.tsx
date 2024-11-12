"use client";
import React from "react";
import { LogosWhatsappIcon } from "@/components/icons/WhatsApp";
import { useRouter } from "next/navigation";
import { FluentColorHome48 } from "@/components/icons/HomeIcon";
import { MingcuteSendFill } from "@/components/icons/Contact";

export const WhatsAppButton: React.FC<{   title: string }> = ({  title }) => {
  const phoneNumber = "0502699023"; // Replace with the actual phone number
  const message = "Hello, I need assistance!"; // Message to pre-fill
  const encodedMessage = encodeURIComponent(message); // URL encode the message

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank"); // Open the URL in a new tab
  };

  return (
    <button
      onClick={handleClick}
      className="  rounded-full   w-fit hover:bg-white/80 flex items-center justify-center   flex-row p-1"
      aria-label="WhatsApp"
    >
      <div className="animate-pulse">
        <LogosWhatsappIcon />
      </div>
      <span className=" font-tajawal">{title}</span>
    </button>
  );
};

 

export const HomePage: React.FC<{  title: string }> = ({  title }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/`);
  };

  return (
    <button
      onClick={handleClick}
      className="  rounded-full w-fit  hover:bg-white/80 flex items-center justify-center flex-col p-1"
      aria-label="home"
    >
      <FluentColorHome48 width={38} height={38} />
      <span className="text-xs">{title}</span>
    </button>
  );
};

export const ContactUs: React.FC<{  title: string }> = ({  title }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/contactus`);
  };

  return (
    <button
      onClick={handleClick}
      className="  rounded-full   w-fit hover:text-black hover:bg-white/80 flex items-center justify-center   flex-row  p-1"
      aria-label={title}
    >
      <MingcuteSendFill width={38} height={38} />
      <span className="font-tajawal">{title}</span>
    </button>
  );
};
