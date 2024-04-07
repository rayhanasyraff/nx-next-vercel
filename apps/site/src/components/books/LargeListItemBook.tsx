import { FC } from "react"
import { Book } from "../../data/books"

interface LargeListItemBookProps {
  book: Book
}

const LargeListItemBook: FC<LargeListItemBookProps> = ({ book }) => {
  const { name, pages, title, price } = book

  return (
    <>
      <h2>{name}</h2>
      <p>{pages}</p>
      <p>{title}</p>
      <p>{price}</p>
    </>
  )
}

export default LargeListItemBook
