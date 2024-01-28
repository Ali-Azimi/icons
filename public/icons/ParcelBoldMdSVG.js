import React from 'react';

const ParcelBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M2 4C2 2.34315 3.34315 1 5 1H8C8.55228 1 9 1.44772 9 2V7.06574C9 7.46509 9.44507 7.70328 9.77735 7.48177L11.7226 6.1849C11.8906 6.07293 12.1094 6.07293 12.2773 6.1849L14.2227 7.48177C14.5549 7.70328 15 7.46509 15 7.06574V2C15 1.44772 15.4477 1 16 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4Z'
                fill={color}
            />
        </svg>
    );
};

export default ParcelBoldMdSVG;
