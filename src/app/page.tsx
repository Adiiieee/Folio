import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { asc }) => asc(model.id),
  });

  return (
    <main className="border-rounded flex flex-col">
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex w-48 flex-col">
            <Image
              src={image.url}
              alt="image"
              width={200}
              height={200}
              priority
            />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
