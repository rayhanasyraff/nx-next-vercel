
import { FC } from "react"
import { Author } from "../../data/authors"

interface SmallListItemAuthorProps {
  author: Author
}

const SmallListItemAuthor: FC<SmallListItemAuthorProps> = ({ author }) => {
  const { name, age } = author

  return (
    <p>Name: {name}, Age: {age}</p>
  )
}

export default SmallListItemAuthor
