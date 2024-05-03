import React from 'react';

const IsraelIcon = ({ width = "120px", height = "80px" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 1200 800" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g strokeWidth="1.0445">
        <path d="m0 0h1200v800h-1200z" fill="#fff"/>
        <path d="m0 75h1200v125h-1200z" fill="#0038b8"/>
        <path d="m0 600h1200v125h-1200z" fill="#0038b8"/>
      </g>
      <path d="m473.82 472.85h252.37l-126.18-218.56zm126.18 72.853 126.18-218.56h-252.37z" fill="none" stroke="#0038b8" strokeWidth="27.5"/>
    </svg>
  );
};

export default IsraelIcon;
