import React from 'react';

const LoginBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M7 1C4.79086 1 3 2.79086 3 5V19C3 21.2091 4.79086 23 7 23H16C16.5523 23 17 22.5523 17 22C17 21.4477 16.5523 21 16 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H15C16.1046 3 17 3.89543 17 5V8C17 8.55228 17.4477 9 18 9C18.5523 9 19 8.55228 19 8V5C19 2.79086 17.2091 1 15 1H7Z'
                fill={color}
            />
            <path
                d='M15 14V16C15 16.3788 14.786 16.725 14.4472 16.8944C14.1084 17.0638 13.703 17.0273 13.4 16.8L9.4 13.8C9.14819 13.6112 9 13.3148 9 13C9 12.6852 9.14819 12.3889 9.4 12.2L13.4 9.20001C13.703 8.97274 14.1084 8.93619 14.4472 9.10558C14.786 9.27497 15 9.62123 15 10V12H17C19.2091 12 21 13.7909 21 16V23H19V16C19 14.8954 18.1046 14 17 14H15Z'
                fill={color}
            />
        </svg>
    );
};

export default LoginBoldMdSVG;
