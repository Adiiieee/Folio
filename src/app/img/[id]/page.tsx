import FullImageView from "@componens/FullImageView/FullImageView";

export default function ImagePage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <FullImageView id={+id} />;
}
