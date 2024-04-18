import { SignedIn, SignedOut } from "@clerk/nextjs";

import Images from "@componens/Images/Images";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="border-rounded flex flex-col">
      <SignedOut>Please sign in above</SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
