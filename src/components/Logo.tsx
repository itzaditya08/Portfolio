import React from "react";

function Logo() {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <title>Logo</title>
      <g>
        <g id="A" transform="translate(25.000000, 35.000000)">
          <path
            fill="currentColor"
            d="M12.5,25 L25,0 L37.5,25 L33.75,25 L30.5,17.5 L17.5,17.5 L14.25,25 L12.5,25 Z M20,15 L27.5,15 L23.75,5.5 L20,15 Z"
          />
        </g>
        <path
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
        />
      </g>
    </svg>
  );
}

export default Logo;
