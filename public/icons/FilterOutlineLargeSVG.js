import React from 'react';

const FilterOutlineLargeSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={32} height={32} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5.5 6C5.5 4.067 7.067 2.5 9 2.5H15C16.933 2.5 18.5 4.067 18.5 6V6.5H29C29.8284 6.5 30.5 7.17157 30.5 8C30.5 8.82843 29.8284 9.5 29 9.5H18.5V10C18.5 11.933 16.933 13.5 15 13.5H9C7.067 13.5 5.5 11.933 5.5 10V9.5H3C2.17157 9.5 1.5 8.82843 1.5 8C1.5 7.17157 2.17157 6.5 3 6.5H5.5V6ZM9 5.5C8.72386 5.5 8.5 5.72386 8.5 6V10C8.5 10.2761 8.72386 10.5 9 10.5H15C15.2761 10.5 15.5 10.2761 15.5 10V6C15.5 5.72386 15.2761 5.5 15 5.5H9Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3 22.5H13.5V22C13.5 20.067 15.067 18.5 17 18.5H23C24.933 18.5 26.5 20.067 26.5 22V22.5H29C29.8284 22.5 30.5 23.1716 30.5 24C30.5 24.8284 29.8284 25.5 29 25.5H26.5V26C26.5 27.933 24.933 29.5 23 29.5H17C15.067 29.5 13.5 27.933 13.5 26V25.5H3C2.17157 25.5 1.5 24.8284 1.5 24C1.5 23.1716 2.17157 22.5 3 22.5ZM16.5 22C16.5 21.7239 16.7239 21.5 17 21.5H23C23.2761 21.5 23.5 21.7239 23.5 22V26C23.5 26.2761 23.2761 26.5 23 26.5H17C16.7239 26.5 16.5 26.2761 16.5 26V22Z'
                fill={color}
            />
        </svg>
    );
};

export default FilterOutlineLargeSVG;
