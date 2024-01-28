import React from 'react';

const CopyBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M5.25 3C5.25 2.0335 6.0335 1.25 7 1.25H11C13.0711 1.25 14.75 2.92893 14.75 5V10C14.75 10.9665 13.9665 11.75 13 11.75H7C6.0335 11.75 5.25 10.9665 5.25 10V3Z'
                fill={color}
            />
            <path
                d='M7 13H11.45C11.6157 13 11.7527 13.1354 11.7246 13.2987C11.5829 14.1229 10.8647 14.75 10 14.75H4C3.0335 14.75 2.25 13.9665 2.25 13V5C2.25 4.13533 2.87711 3.41712 3.70133 3.27539C3.86461 3.24731 4 3.38432 4 3.55V10C4 11.6569 5.34315 13 7 13Z'
                fill={color}
            />
        </svg>
    );
};

export default CopyBoldSmSVG;
