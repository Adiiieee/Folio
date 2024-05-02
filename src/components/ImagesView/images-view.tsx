import Image from "next/image";
import Link from "next/link";

import { getMyImages } from "@server/queries";

const ImagesView = async () => {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-56 flex-col">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              alt="image"
              width={200}
              height={200}
              priority
              className="h-48 rounded"
            />
            <div className="truncate">{image.name}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ImagesView;
