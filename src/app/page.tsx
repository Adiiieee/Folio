import { SignedIn, SignedOut } from "@clerk/nextjs";

import ImagesView from "@componens/ImagesView/images-view";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="m-4 flex flex-col overflow-y-scroll rounded border p-4">
      <SignedOut>Please sign in above</SignedOut>
      <SignedIn>
        <ImagesView />
      </SignedIn>
    </main>
  );
}
