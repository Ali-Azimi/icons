import React from 'react';

const VisaSingleBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3 4C3 2.40112 4.23422 1 5.88235 1H18.1176C19.7658 1 21 2.40112 21 4V20C21 21.5989 19.7658 23 18.1176 23H5.88235C4.23422 23 3 21.5989 3 20V4ZM12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14ZM8 18C8 17.4477 8.44772 17 9 17H15C15.5523 17 16 17.4477 16 18C16 18.5523 15.5523 19 15 19H9C8.44772 19 8 18.5523 8 18Z'
                fill={color}
            />
        </svg>
    );
};

export default VisaSingleBoldMdSVG;
