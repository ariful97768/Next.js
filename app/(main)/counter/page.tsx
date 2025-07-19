import { Metadata } from "next";
import Count from "./Count";

export const metadata: Metadata = {
  title: "Counter",
};

const Counter = () => {
  return <Count />;
};

export default Counter;
