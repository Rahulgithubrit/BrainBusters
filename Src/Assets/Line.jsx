import * as React from "react";
import Svg, { Line } from "react-native-svg";
const Linee = (props) => (
  <Svg
    width={344}
    height={1}
    viewBox="0 0 344 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Line y1={0.5} x2={344} y2={0.5} stroke="#F6F6F6" />
  </Svg>
);
export default Linee;
