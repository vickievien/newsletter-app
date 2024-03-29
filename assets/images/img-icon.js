import * as React from "react"
const SvgImg = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} {...props}>
    <g fill="none">
      <circle cx={10.5} cy={10.5} r={10.5} fill="#FF6155" />
      <path stroke="#FFF" strokeWidth={2} d="M6 11.381 8.735 14 15 8" />
    </g>
  </svg>
)
export default SvgImg;
