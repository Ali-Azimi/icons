import React from 'react';

const ParcelTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M5 1C3.34315 1 2 2.34315 2 4V20C2 21.6569 3.34315 23 5 23H19C20.6569 23 22 21.6569 22 20V4C22 2.34315 20.6569 1 19 1H5Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.52814 9.88167C8.20298 9.70766 8 9.3688 8 9V1L10 1V7.13148L11.4453 6.16795C11.7812 5.94402 12.2188 5.94402 12.5547 6.16795L14 7.13148V1L16 1V9C16 9.3688 15.797 9.70766 15.4719 9.88167C15.1467 10.0557 14.7522 10.0366 14.4453 9.83205L12 8.20185L9.5547 9.83205C9.24784 10.0366 8.8533 10.0557 8.52814 9.88167Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default ParcelTwoToneMdSVG;
