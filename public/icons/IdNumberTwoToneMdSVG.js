import React from 'react';

const IdNumberTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M11 2C10.4477 2 10 2.44772 10 3V5H3C1.89543 5 1 5.89543 1 7V16C1 19.3137 3.68629 22 7 22H17C20.3137 22 23 19.3137 23 16V7C23 5.89543 22.1046 5 21 5H14V3C14 2.44772 13.5523 2 13 2H11Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9 3C9 1.89543 9.89543 1 11 1H13C14.1046 1 15 1.89543 15 3V7C15 7.26522 14.8946 7.51957 14.7071 7.70711L13.4142 9C12.6332 9.78105 11.3668 9.78105 10.5858 9L9.29289 7.70711C9.10536 7.51957 9 7.26522 9 7V3ZM13 3H11V6.58579L12 7.58579L13 6.58579V3Z'
                fill='#040A1F'
            />
            <path
                d='M6 13C6 12.4477 6.44772 12 7 12H17C17.5523 12 18 12.4477 18 13C18 13.5523 17.5523 14 17 14H7C6.44772 14 6 13.5523 6 13Z'
                fill='#040A1F'
            />
            <path
                d='M9 17C9 17.5523 9.44772 18 10 18H14C14.5523 18 15 17.5523 15 17C15 16.4477 14.5523 16 14 16H10C9.44772 16 9 16.4477 9 17Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default IdNumberTwoToneMdSVG;
