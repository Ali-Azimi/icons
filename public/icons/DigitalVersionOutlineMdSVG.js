import React from 'react';

const DigitalVersionOutlineMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4 1C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H13C14.6569 23 16 21.6569 16 20V17H3V4C3 3.44772 3.44772 3 4 3H11V1H4ZM3 19V20C3 20.5523 3.44772 21 4 21H13C13.5523 21 14 20.5523 14 20V19H3Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 4C10.8954 4 10 4.89543 10 6V12C10 13.6569 11.3431 15 13 15H20C21.6569 15 23 13.6569 23 12V6C23 4.89543 22.1046 4 21 4H12ZM12.0011 6H20.9989C20.8083 6.00004 20.6157 6.05444 20.4453 6.16806L16.5 8.79826L12.5547 6.16806C12.3843 6.05444 12.1917 6.00004 12.0011 6ZM17.0547 10.8322L21 8.20196V12C21 12.5523 20.5523 13 20 13H13C12.4477 13 12 12.5523 12 12V8.20196L15.9453 10.8322C16.2812 11.0561 16.7188 11.0561 17.0547 10.8322Z'
                fill={color}
            />
        </svg>
    );
};

export default DigitalVersionOutlineMdSVG;
