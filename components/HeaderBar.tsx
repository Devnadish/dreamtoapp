"use client";
import React from "react";
import Logo from "@/components/header/Logo";
import BuregerMenu from "@/components/header/BuregerMenu";
import Form from "next/form";
import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Input } from "./ui/input";
import { MajesticonsLogin } from "./icons/Login";

function HeaderBar() {
  const { user } = useUser();
  console.log(user);
  return (
    <header className="flex items-center gap-4  justify-between fixed top-0 left-0 w-full p-4 z-10 bg-white/20 backdrop-blur-3xl shadow-lg">
      <Logo />
      <Form
        action="/search"
        className="w-full  sm:w-auto sm:flex-1 sm:mx-4 mt-2 "
      >
        {" "}
        <Input
          type="text"
          placeholder="Search"
          name="search"
          className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md 
      focus:outline-none focus:ring-2 focus:ring-orangeColor  focus:ring-opacity-50   max-w-4xl
      "
        />{" "}
      </Form>
      {/* <BuregerMenu/> */}

      <ClerkLoaded>
        {user ? (
          <div className="flex items-center  flex-col">
            <UserButton />
            <p className="text-xs text-foreground">{user.firstName}</p>
          </div>
        ) : (
          <div className="text-foreground bg-orangeColor  rounded-md w-[40px] h-[40px] flex items-center justify-center">
            <SignInButton mode="modal">
              <MajesticonsLogin className="w-6 h-6" />
            </SignInButton>
          </div>
        )}
      </ClerkLoaded>
    </header>
  );
}

export default HeaderBar;
