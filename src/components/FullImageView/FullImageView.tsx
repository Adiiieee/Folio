import Image from "next/image";

import { getImage } from "@server/queries";

export default async function FullImageView(props: { id: number }) {
  const image = await getImage(props.id);

  return (
    <Image
      src={image.url}
      width={500}
      height={400}
      alt="modal image"
      className="mx-auto"
    ></Image>
  );
}
