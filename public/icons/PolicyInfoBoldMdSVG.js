import React from 'react';

const PolicyInfoBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M19 5C19 4.44772 19.4477 4 20 4C21.6569 4 23 5.34315 23 7V8C23 9.10457 22.1046 10 21 10H19.5C19.2239 10 19 9.77614 19 9.5V5Z'
                fill={color}
            />
            <path
                d='M10 19V18.5C10 18.2239 9.77614 18 9.5 18H2C1.44772 18 1 18.4477 1 19C1 20.6569 2.34315 22 4 22H13C11.3431 22 10 20.6569 10 19Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6 4C4.89543 4 4 4.89543 4 6V15.5C4 15.7761 4.22386 16 4.5 16H10C11.1046 16 12 16.8954 12 18V19C12 19.5523 12.4477 20 13 20H14C15.6569 20 17 18.6569 17 17V5C17 4.73902 17 4.61304 17 4.49998C17 4.22384 16.7761 4 16.5 4H6ZM7 8C7 7.44772 7.44772 7 8 7H12C12.5523 7 13 7.44772 13 8C13 8.55229 12.5523 9 12 9H8C7.44772 9 7 8.55229 7 8ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H12C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11H8Z'
                fill={color}
            />
        </svg>
    );
};

export default PolicyInfoBoldMdSVG;
