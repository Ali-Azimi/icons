import React from 'react';

const LinkOutlineMdV2SVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10 6H7C3.68629 6 1 8.68629 1 12C1 15.3137 3.68629 18 7 18H10V16H7C4.79086 16 3 14.2091 3 12C3 9.79086 4.79086 8 7 8H10V6ZM14 16H17C19.2091 16 21 14.2091 21 12C21 9.79086 19.2091 8 17 8H14V6H17C20.3137 6 23 8.68629 23 12C23 15.3137 20.3137 18 17 18H14V16Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12Z'
                fill={color}
            />
        </svg>
    );
};

export default LinkOutlineMdV2SVG;
