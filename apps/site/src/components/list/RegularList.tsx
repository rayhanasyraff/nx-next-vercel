import { FC } from "react"

interface RegularListProps {
  items: any[],
  sourceName: string,
  ItemComponent: FC<any>
}

const RegularList: FC<RegularListProps> = ({ items, sourceName, ItemComponent }) => {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [sourceName]: item }} />
      ))}
    </>
  )
}

export default RegularList;
