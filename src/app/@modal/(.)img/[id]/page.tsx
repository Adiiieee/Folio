import { Modal } from "./modal";
import FullImageView from "@componens/FullImageView/FullImageView";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <FullImageView id={+photoId} />
    </Modal>
  );
}
