import React from 'react';

// Assuming `svgs` is the object containing your SVG components
const SvgDisplay = ({ svgs }) => {
  return (
    <div>
      {Object.entries(svgs).map(([key, SvgComponent]) => (
        <div key={key}>
          <h2>{key}</h2>
          <SvgComponent />
        </div>
      ))}
    </div>
  );
};

export default SvgDisplay;
