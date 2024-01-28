import React from 'react';

const PasswordOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M13 16.7324C13.5978 16.3866 14 15.7403 14 15C14 13.8954 13.1046 13 12 13C10.8954 13 10 13.8954 10 15C10 15.7403 10.4022 16.3866 11 16.7324V19.01C11 19.5623 11.4477 20.01 12 20.01C12.5523 20.01 13 19.5623 13 19.01V16.7324Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7H16C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V9H19C20.6569 9 22 10.3431 22 12V17C22 20.3137 19.3137 23 16 23H8C4.68629 23 2 20.3137 2 17V12C2 10.3431 3.34315 9 5 9H6V7ZM4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12V17C20 19.2091 18.2091 21 16 21H8C5.79086 21 4 19.2091 4 17V12Z'
                fill={color}
            />
        </svg>
    );
};

export default PasswordOutlineMdSVG;
