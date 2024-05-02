"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { UploadButton } from "./upload-button";

export const dynamic = "auto";

export const TopNav = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 ">
      <h1 className=" text-xl font-semibold">Folio</h1>
      <div className="flex gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};
