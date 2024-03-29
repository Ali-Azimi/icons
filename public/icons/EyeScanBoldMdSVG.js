import React from 'react';

const EyeScanBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M1 2C1 1.44772 1.44772 1 2 1H6C6.55228 1 7 1.44772 7 2C7 2.55228 6.55228 3 6 3H3V6C3 6.55229 2.55228 7 2 7C1.44772 7 1 6.55229 1 6V2Z'
                fill={color}
            />
            <path
                d='M22 1C22.5523 1 23 1.44772 23 2V6C23 6.55229 22.5523 7 22 7C21.4477 7 21 6.55228 21 6V3L18 3C17.4477 3 17 2.55228 17 2C17 1.44772 17.4477 1 18 1H22Z'
                fill={color}
            />
            <path
                d='M22 23C22.5523 23 23 22.5523 23 22V18C23 17.4477 22.5523 17 22 17C21.4477 17 21 17.4477 21 18V21H18C17.4477 21 17 21.4477 17 22C17 22.5523 17.4477 23 18 23H22Z'
                fill={color}
            />
            <path
                d='M2 23C1.44772 23 1 22.5523 1 22V18C1 17.4477 1.44772 17 2 17C2.55229 17 3 17.4477 3 18L3 21H6C6.55229 21 7 21.4477 7 22C7 22.5523 6.55228 23 6 23H2Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 6C7.48006 6 4.62562 9.37442 4.02986 11.7575C3.99005 11.9167 3.99005 12.0833 4.02986 12.2425C4.62562 14.6256 7.48006 18 12 18C16.5199 18 19.3744 14.6256 19.9701 12.2425C20.01 12.0833 20.01 11.9167 19.9701 11.7575C19.3744 9.37442 16.5199 6 12 6ZM12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10Z'
                fill={color}
            />
        </svg>
    );
};

export default EyeScanBoldMdSVG;
