import React from 'react';

const FriesMenuOutlineLargeSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={32} height={32} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M3.5 8C3.5 7.17157 4.17157 6.5 5 6.5H27C27.8284 6.5 28.5 7.17157 28.5 8C28.5 8.82843 27.8284 9.5 27 9.5H5C4.17157 9.5 3.5 8.82843 3.5 8Z'
                fill={color}
            />
            <path
                d='M13.5 16C13.5 15.1716 14.1716 14.5 15 14.5H27C27.8284 14.5 28.5 15.1716 28.5 16C28.5 16.8284 27.8284 17.5 27 17.5H15C14.1716 17.5 13.5 16.8284 13.5 16Z'
                fill={color}
            />
            <path
                d='M5 22.5C4.17157 22.5 3.5 23.1716 3.5 24C3.5 24.8284 4.17157 25.5 5 25.5H27C27.8284 25.5 28.5 24.8284 28.5 24C28.5 23.1716 27.8284 22.5 27 22.5H5Z'
                fill={color}
            />
        </svg>
    );
};

export default FriesMenuOutlineLargeSVG;
