import Image from "next/image";

import { getImage } from "@server/queries";

export default async function FullImageView(props: { id: number }) {
  const image = await getImage(props.id);

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="relative size-full w-full overflow-hidden">
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
      </div>
    </div>
  );
}
