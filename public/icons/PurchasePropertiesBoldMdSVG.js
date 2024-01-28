import React from 'react';

const PurchasePropertiesBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M19 5C19 4.44772 19.4477 4 20 4L-nan -nanL20 4C21.6569 4 23 5.34315 23 7V8C23 9.10457 22.1046 10 21 10H19V5Z' fill={color} />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17 4H6C4.89543 4 4 4.89543 4 6V16H10C11.1046 16 12 16.8954 12 18V19C12 19.5523 12.4477 20 13 20H14C15.6569 20 17 18.6569 17 17V4ZM8 7C7.44772 7 7 7.44772 7 8C7 8.55229 7.44772 9 8 9H12C12.5523 9 13 8.55229 13 8C13 7.44772 12.5523 7 12 7H8ZM7 12C7 11.4477 7.44772 11 8 11H12C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13H8C7.44772 13 7 12.5523 7 12Z'
                fill={color}
            />
            <path
                d='M2 18H10V19C10 20.2813 10.8032 21.3749 11.9336 21.8049C11.9732 21.82 12 21.8576 12 21.9C12 21.9552 11.9552 22 11.9 22H4C2.34315 22 1 20.6569 1 19C1 18.4477 1.44772 18 2 18Z'
                fill={color}
            />
        </svg>
    );
};

export default PurchasePropertiesBoldMdSVG;
