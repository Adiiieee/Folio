import FullImageView from "@componens/FullImageView/FullImageView";

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
