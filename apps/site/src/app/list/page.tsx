import LargeListItemAuthor from "@/components/authors/LargeListItemAuthor";
import SmallListItemAuthor from "@/components/authors/SmallListItemAuthor";
import LargeListItemBook from "@/components/books/LargeListItemBook";
import NumberedList from "@/components/list/NumberedList";
import RegularList from "@/components/list/RegularList";
import { authors } from "@/data/authors";
import { books } from "@/data/books";

export default function List() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <>
      <RegularList
        items={authors}
        sourceName="author"
        ItemComponent={SmallListItemAuthor}
      />
      <NumberedList
        items={books}
        sourceName="book"
        ItemComponent={LargeListItemBook}
      />
    </>
  );
}
