import Image from "next/image";
import { clerkClient } from "@clerk/nextjs/server";

import { deleteImage, getImage } from "@server/queries";
import { Button } from "@componens/ui/button";

export default async function FullImageView(props: { id: number }) {
  const image = await getImage(props.id);

  const userInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="relative size-full h-[calc(100vh-156px)]">
        <Image
          src={image.url}
          priority
          fill
          alt={image.name}
          style={{ objectFit: "scale-down" }}
        />
      </div>
      <div className="mx-auto flex w-[400px] flex-col justify-center text-white">
        <h1 className="text-preety break-all text-xl font-bold">
          {image.name}
        </h1>
        <h3>Uploaded by: {userInfo.fullName}</h3>
        <h3>Created On: {image.createdAt.toLocaleDateString()}</h3>
        <form
          action={async () => {
            "use server";

            await deleteImage(+image.id);
          }}
        >
          <Button variant="destructive">Delete</Button>
        </form>
      </div>
    </div>
  );
}
