import React from 'react';

const MoreCircleVerticalTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12Z'
                fill={color}
            />
            <path
                d='M10.5 17C10.5 17.8284 11.1716 18.5 12 18.5C12.8284 18.5 13.5 17.8284 13.5 17C13.5 16.1716 12.8284 15.5 12 15.5C11.1716 15.5 10.5 16.1716 10.5 17Z'
                fill='#040A1F'
            />
            <path
                d='M10.5 7C10.5 7.82843 11.1716 8.5 12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17158 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17158 10.5 7Z'
                fill='#040A1F'
            />
            <path
                d='M10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default MoreCircleVerticalTwoToneMdSVG;
