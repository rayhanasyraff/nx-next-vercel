import SplitScreen from "@/components/SplitScreen";

const LeftSide = () => {
  return (<h1 className="text-3xl bg-blue-300">I am left</h1>)
}

const RightSide = () => {
  return (<h1 className="text-3xl bg-red-300">I am right</h1>)
}

export default function Split() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <SplitScreen leftWidth={3} rightWidth={1} >
      <LeftSide />
      <RightSide />
    </SplitScreen>

  );
}
