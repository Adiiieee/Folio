"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import { UploadButton } from "~/utils/uploadthing";

export const dynamic = "auto";

export const TopNav = () => {
  const router = useRouter();

  return (
    <nav className="flex w-full items-center justify-between border-b p-4">
      <h1 className=" text-xl font-semibold">Folio</h1>
      <div className="flex">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }}
          />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};
