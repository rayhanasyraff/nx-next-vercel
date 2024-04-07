import Modal from "@/components/Modal";
import LargeListItemAuthor from "@/components/authors/LargeListItemAuthor";
import { authors } from "@/data/authors";

export default function ModalPage() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <>
      <Modal>
        <LargeListItemAuthor author={authors[0]} />
      </Modal>
    </>
  );
}
