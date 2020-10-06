import React from "react";

interface DownArrow {
  width?: number;
  color?: string;
}

export default ({ width = 15, color = "black" }: DownArrow) => (
  <svg
    width={`${width}px`}
    height={`${width}px`}
    viewBox="0 0 551.13 551.13"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={color}
      d="m275.565 361.679-223.897-223.896h-51.668l275.565 275.565 275.565-275.565h-51.668z"
    />
  </svg>
);
