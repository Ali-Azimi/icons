import React from 'react';

const ListOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M7 8H12V10H7V8Z' fill={color} />
            <path d='M6 8H4V10H6V8Z' fill={color} />
            <path d='M4 12H6V14H4V12Z' fill={color} />
            <path d='M12 12H7V14H12V12Z' fill={color} />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4 2C2.34315 2 1 3.34315 1 5V18C1 20.2091 2.79086 22 5 22H18C20.7614 22 23 19.7614 23 17V15C23 13.3431 21.6569 12 20 12H17V14H20C20.5523 14 21 14.4477 21 15V17C21 18.6569 19.6569 20 18 20C16.3431 20 15 18.6569 15 17V3C15 2.44772 14.5523 2 14 2H4ZM13 17C13 18.1256 13.3719 19.1643 13.9996 20H5C3.89543 20 3 19.1046 3 18V5C3 4.44772 3.44772 4 4 4H13V17Z'
                fill={color}
            />
        </svg>
    );
};

export default ListOutlineMdSVG;
