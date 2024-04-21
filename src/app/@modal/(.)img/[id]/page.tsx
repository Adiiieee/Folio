import Image from "next/image";

import { getImage } from "@server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const image = await getImage(+photoId);

  return (
    <div className="card">
      <Image
        src={image.url}
        width={500}
        height={400}
        alt="modal image"
        className="mx-auto"
      ></Image>
    </div>
  );
}
