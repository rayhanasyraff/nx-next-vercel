import { FC } from "react"
import { Author } from "../../data/authors"

interface LargeListItemAuthorProps {
  author: Author
}

const LargeListItemAuthor: FC<LargeListItemAuthorProps> = ({ author }) => {
  const { name, age, country, books } = author

  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{country}</p>
      <h2>Books</h2>
      <ul>
      {
        books.map((book) => {
          return (
            <li key={book}>{book}</li>
          )
        })
      }
      </ul>
    </>
  )
}

export default LargeListItemAuthor
