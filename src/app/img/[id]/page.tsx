import FullImageView from "@componens/FullImageView/full-image-view";

export default function ImagePage({
  params: { id },
}: {
  params: { id: string };
}) {
  if (Number.isNaN(+id)) throw new Error("Invalid photo id");

  return (
    <>
      <FullImageView id={+id} />
    </>
  );
}
