import React from 'react';

const VisaSingleOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5.88235 3C5.45129 3 5 3.38974 5 4V20C5 20.6103 5.45129 21 5.88235 21H18.1176C18.5487 21 19 20.6103 19 20V4C19 3.38974 18.5487 3 18.1176 3H5.88235ZM3 4C3 2.40112 4.23422 1 5.88235 1H18.1176C19.7658 1 21 2.40112 21 4V20C21 21.5989 19.7658 23 18.1176 23H5.88235C4.23422 23 3 21.5989 3 20V4ZM17 10C17 12.7614 14.7614 15 12 15C9.23858 15 7 12.7614 7 10C7 7.23858 9.23858 5 12 5C14.7614 5 17 7.23858 17 10ZM15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10ZM9 17C8.44772 17 8 17.4477 8 18C8 18.5523 8.44772 19 9 19H15C15.5523 19 16 18.5523 16 18C16 17.4477 15.5523 17 15 17H9Z'
                fill={color}
            />
        </svg>
    );
};

export default VisaSingleOutlineMdSVG;