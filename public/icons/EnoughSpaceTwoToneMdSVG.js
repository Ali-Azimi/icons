import React from 'react';

const EnoughSpaceTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M9 9C6.79086 9 5 10.7909 5 13V14C5 15.1046 5.89543 16 7 16H17C18.1046 16 19 15.1046 19 14V13C19 10.7909 17.2091 9 15 9H9Z'
                fill={color}
            />
            <path d='M1 1H5C5.55228 1 6 1.44772 6 2C6 2.55228 5.55228 3 5 3H3V5C3 5.55228 2.55228 6 2 6C1.44772 6 1 5.55228 1 5V1Z' fill='#040A1F' />
            <path
                d='M9.7203 5C8.40814 5 7.24824 5.85275 6.85686 7.10517L5.73865 10.6834C6.46367 9.66458 7.65425 9 9 9H8.63214C8.49722 9 8.401 8.86913 8.44125 8.74035L8.76582 7.70172C8.89628 7.28425 9.28291 7 9.7203 7H14.2795C14.7169 7 15.1036 7.28425 15.234 7.70173L15.5586 8.74035C15.5988 8.86913 15.5026 9 15.3677 9H15C16.3457 9 17.5361 9.66449 18.2611 10.6833L17.143 7.10518C16.7516 5.85275 15.5917 5 14.2795 5H9.7203Z'
                fill='#040A1F'
            />
            <path d='M9 16H7V18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18V16Z' fill='#040A1F' />
            <path d='M17 16H15V18C15 18.5523 15.4477 19 16 19C16.5523 19 17 18.5523 17 18V16Z' fill='#040A1F' />
            <path
                d='M22 6C22.5523 6 23 5.55228 23 5V1H19C18.4477 1 18 1.44772 18 2C18 2.55228 18.4477 3 19 3H21V5C21 5.55228 21.4477 6 22 6Z'
                fill='#040A1F'
            />
            <path
                d='M19 23C18.4477 23 18 22.5523 18 22C18 21.4477 18.4477 21 19 21H21V19C21 18.4477 21.4477 18 22 18C22.5523 18 23 18.4477 23 19V23H19Z'
                fill='#040A1F'
            />
            <path
                d='M1 19V23H5C5.55228 23 6 22.5523 6 22C6 21.4477 5.55229 21 5 21H3L3 19C3 18.4477 2.55229 18 2 18C1.44772 18 1 18.4477 1 19Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default EnoughSpaceTwoToneMdSVG;