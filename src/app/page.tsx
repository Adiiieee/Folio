import Image from "next/image";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/d120e44f-be44-4479-89f9-09e67e3d20d8-gawbxk.jpg",
  "https://utfs.io/f/c7ddb322-66c2-4916-acef-cfe8794b7466-eqaer4.jpg",
  "https://utfs.io/f/c018a167-5136-465a-8178-7bdc6d7ea3bd-edw8i.jpg",
  "https://utfs.io/f/eda89908-823b-4d45-b05f-a0c4f1e43bad-htk5r4.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const post = await db.query.posts.findMany();

  console.log(post);

  return (
    <main className="border-rounded flex flex-col">
      <div className="flex flex-wrap gap-4">
        {post.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <Image src={image.url} alt="image" width={200} height={200} />
          </div>
        ))}
      </div>
    </main>
  );
}
