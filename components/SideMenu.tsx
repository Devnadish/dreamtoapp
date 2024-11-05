import React from "react";
import {
  HomePage,
  ContactUs,
  WhatsAppButton,
} from "@/components/WhatsAppButton";

export default async function SideMenu() {
  return (
    <div className="fixed left-0 bottom-3 w-full h-[60px] flex items-center justify-center ">
      <div className="w-[80%] h-[60px] bg-border border rounded-full flex flex-row justify-evenly items-center">
        <WhatsAppButton title={""} />
        <HomePage title={""} />
        <ContactUs title={""} />
      </div>
    </div>
  );
}
