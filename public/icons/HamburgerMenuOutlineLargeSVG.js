import React from 'react';

const HamburgerMenuOutlineLargeSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={32} height={32} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M3.5 7C3.5 6.17157 4.17157 5.5 5 5.5H27C27.8284 5.5 28.5 6.17157 28.5 7C28.5 7.82843 27.8284 8.5 27 8.5H5C4.17157 8.5 3.5 7.82843 3.5 7Z'
                fill={color}
            />
            <path
                d='M3.5 16C3.5 15.1716 4.17157 14.5 5 14.5H27C27.8284 14.5 28.5 15.1716 28.5 16C28.5 16.8284 27.8284 17.5 27 17.5H5C4.17157 17.5 3.5 16.8284 3.5 16Z'
                fill={color}
            />
            <path
                d='M5 23.5C4.17157 23.5 3.5 24.1716 3.5 25C3.5 25.8284 4.17157 26.5 5 26.5H27C27.8284 26.5 28.5 25.8284 28.5 25C28.5 24.1716 27.8284 23.5 27 23.5H5Z'
                fill={color}
            />
        </svg>
    );
};

export default HamburgerMenuOutlineLargeSVG;
