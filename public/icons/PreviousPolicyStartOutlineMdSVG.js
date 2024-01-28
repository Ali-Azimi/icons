import React from 'react';

const PreviousPolicyStartOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M8 14H5V17H8V14Z' fill={color} />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 2C8 1.44772 7.55228 1 7 1C6.44772 1 6 1.44772 6 2V3H4C2.34315 3 1 4.34315 1 6V17C1 20.3137 3.68629 23 7 23H17C20.3137 23 23 20.3137 23 17V6C23 4.34315 21.6569 3 20 3H18V2C18 1.44772 17.5523 1 17 1C16.4477 1 16 1.44772 16 2V3H8V2ZM16 6V5H8V6C8 6.55228 7.55228 7 7 7C6.44772 7 6 6.55228 6 6V5H4C3.44772 5 3 5.44772 3 6V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V11H5V9H21V6C21 5.44772 20.5523 5 20 5H18V6C18 6.55228 17.5523 7 17 7C16.4477 7 16 6.55228 16 6Z'
                fill={color}
            />
        </svg>
    );
};

export default PreviousPolicyStartOutlineMdSVG;
