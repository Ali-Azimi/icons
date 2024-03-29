import React from 'react';

const CameraAddBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M20 2C20 1.44772 19.5523 1 19 1C18.4477 1 18 1.44772 18 2V4H16C15.4477 4 15 4.44772 15 5C15 5.55228 15.4477 6 16 6H18V8C18 8.55228 18.4477 9 19 9C19.5523 9 20 8.55228 20 8V6H22C22.5523 6 23 5.55228 23 5C23 4.44772 22.5523 4 22 4H20V2Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6.09516 8.02871C6.4479 7.39378 7.11714 7 7.84347 7H12.1565C12.8829 7 13.5521 7.39378 13.9048 8.02871L15 10H16C17.6569 10 19 11.3431 19 13V18C19 20.7614 16.7614 23 14 23H6C3.23858 23 1 20.7614 1 18V13C1 11.3431 2.34315 10 4 10H5L6.09516 8.02871ZM10 19C11.3807 19 12.5 17.8807 12.5 16.5C12.5 15.1193 11.3807 14 10 14C8.61929 14 7.5 15.1193 7.5 16.5C7.5 17.8807 8.61929 19 10 19Z'
                fill={color}
            />
        </svg>
    );
};

export default CameraAddBoldMdSVG;
