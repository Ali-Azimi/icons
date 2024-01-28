import React from 'react';

const PasswordTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7H16C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V9C8 9.55228 7.55228 10 7 10C6.44772 10 6 9.55228 6 9V7Z'
                fill='#040A1F'
            />
            <path
                d='M5 9C3.34315 9 2 10.3431 2 12V17C2 20.3137 4.68629 23 8 23H16C19.3137 23 22 20.3137 22 17V12C22 10.3431 20.6569 9 19 9H5Z'
                fill={color}
            />
            <path
                d='M13 16.7324C13.5978 16.3866 14 15.7403 14 15C14 13.8954 13.1046 13 12 13C10.8954 13 10 13.8954 10 15C10 15.7403 10.4022 16.3866 11 16.7324V19.01C11 19.5623 11.4477 20.01 12 20.01C12.5523 20.01 13 19.5623 13 19.01V16.7324Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default PasswordTwoToneMdSVG;
