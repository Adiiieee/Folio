import { SignedIn, SignedOut } from "@clerk/nextjs";

import ImagesView from "@componens/ImagesView/ImagesView";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="border-rounded flex flex-col">
      <SignedOut>Please sign in above</SignedOut>
      <SignedIn>
        <ImagesView />
      </SignedIn>
    </main>
  );
}
