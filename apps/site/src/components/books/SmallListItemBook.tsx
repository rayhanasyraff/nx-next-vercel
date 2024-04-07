
import { FC } from "react"
import { Book } from "../../data/books"

interface SmallListItemBookProps {
  book: Book
}

const SmallListItemBook: FC<SmallListItemBookProps> = ({ book }) => {
  const { name, pages } = book

  return (
    <p>Name: {name}, Pages: {pages}</p>
  )
}

export default SmallListItemBook
