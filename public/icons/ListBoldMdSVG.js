import React from 'react';

const ListBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 5C1 3.34315 2.34315 2 4 2H14C14.5523 2 15 2.44772 15 3V12H20C21.6569 12 23 13.3431 23 15V17C23 19.7614 20.7614 22 18 22H5C2.79086 22 1 20.2091 1 18V5ZM18 20C19.6569 20 21 18.6569 21 17V15C21 14.4477 20.5523 14 20 14H15V17C15 18.6569 16.3431 20 18 20ZM12 8H7V10H12V8ZM4 8H6V10H4V8ZM6 12H4V14H6V12ZM7 12H12V14H7V12Z'
                fill={color}
            />
        </svg>
    );
};

export default ListBoldMdSVG;
