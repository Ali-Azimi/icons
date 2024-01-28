import React from 'react';

const ParcelOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5 1C3.34315 1 2 2.34315 2 4V20C2 21.6569 3.34315 23 5 23H19C20.6569 23 22 21.6569 22 20V4C22 2.34315 20.6569 1 19 1H5ZM8 9C8 9.36879 8.20298 9.70765 8.52814 9.88167C8.8533 10.0557 9.24784 10.0366 9.5547 9.83205L12 8.20185L14.4453 9.83205C14.7522 10.0366 15.1467 10.0557 15.4719 9.88167C15.797 9.70765 16 9.36879 16 9V3H19C19.5523 3 20 3.44772 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44772 3 5 3H8V9ZM10 3V7.13148L11.4453 6.16795C11.7812 5.94402 12.2188 5.94402 12.5547 6.16795L14 7.13148V3H10Z'
                fill={color}
            />
        </svg>
    );
};

export default ParcelOutlineMdSVG;
