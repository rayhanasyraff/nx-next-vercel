import { FC } from "react";

interface SplitScreenProps {
  children: React.ReactNode[];
  leftWidth: number;
  rightWidth: number;
}

const SplitScreen: FC<SplitScreenProps> = ({ children, leftWidth, rightWidth })  => {

  const [left, right] = [ ...children ]

  return (
    <div className="flex">
      <div style={{ flex: leftWidth }}>
        {left}
      </div>
      <div style={{ flex: rightWidth }}>
        {right}
      </div>
    </div>
  )
}

export default SplitScreen;
