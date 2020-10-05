import React from "react";

interface StarIcon {
  width?: number;
  color?: string;
}

export default ({ width = 15, color = "black" }: StarIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={`${width}px`}
    height={`${width}px`}
    viewBox="0 0 51 48"
  >
    <path
      fill={color}
      stroke="#000"
      d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
    />
  </svg>
);
