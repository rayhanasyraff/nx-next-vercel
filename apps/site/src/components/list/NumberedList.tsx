import { FC } from "react"

interface NumberedListProps {
  items: any[],
  sourceName: string,
  ItemComponent: FC<any>
}

const NumberedList: FC<NumberedListProps> = ({ items, sourceName, ItemComponent }) => {
  return (
    <>
      {items.map((item, i) => (
        <div key={i}>
          <h3>{i + 1}</h3>
          <ItemComponent {...{ [sourceName]: item }} />
        </div>
      ))}
    </>
  )
}

export default NumberedList;
