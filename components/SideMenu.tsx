"use client";
import React, { useState } from "react";
import {
  HomePage,
  ContactUs,
  WhatsAppButton,
} from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import BackButton from "./ui/BackButton";
import ToggleVisibilityButton from "./ToggleVisibilityButton";

export default function SideMenu() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="fixed left-0 bottom-0 w-full flex items-center justify-center transition-all duration-300">
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isVisible ? 1 : 0, height: isVisible ? "50px" : 0 }}
        transition={{ duration: isVisible ? 0.1 : 0.3, ease: "easeInOut" }}
        className="w-[80%] bg-border border rounded-full flex flex-row justify-evenly items-center transition-all bg-opacity-50 overflow-hidden"
      >
        <WhatsAppButton title={""} />
        <HomePage title={""} />
        <ContactUs title={""} />
      </motion.div>
      <ToggleVisibilityButton onClick={toggleVisibility} isVisible={isVisible} />
      <BackButton />
    </div>
  );
}
