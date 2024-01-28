import React from 'react';

const IdNumberOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11 1C9.89543 1 9 1.89543 9 3V7C9 7.26522 9.10536 7.51957 9.29289 7.70711L10.5858 9C11.3668 9.78105 12.6332 9.78105 13.4142 9L14.7071 7.70711C14.8946 7.51957 15 7.26522 15 7V3C15 1.89543 14.1046 1 13 1H11ZM11 3H13V6.58579L12 7.58579L11 6.58579V3Z'
                fill={color}
            />
            <path
                d='M3 5C1.89543 5 1 5.89543 1 7V16C1 19.3137 3.68629 22 7 22H17C20.3137 22 23 19.3137 23 16V7C23 5.89543 22.1046 5 21 5H17V7H21V16C21 18.2091 19.2091 20 17 20H7C4.79086 20 3 18.2091 3 16V7H7V5H3Z'
                fill={color}
            />
            <path
                d='M6 13C6 12.4477 6.44772 12 7 12H17C17.5523 12 18 12.4477 18 13C18 13.5523 17.5523 14 17 14H7C6.44772 14 6 13.5523 6 13Z'
                fill={color}
            />
            <path
                d='M9 17C9 17.5523 9.44771 18 10 18H14C14.5523 18 15 17.5523 15 17C15 16.4477 14.5523 16 14 16H10C9.44771 16 9 16.4477 9 17Z'
                fill={color}
            />
        </svg>
    );
};

export default IdNumberOutlineMdSVG;
