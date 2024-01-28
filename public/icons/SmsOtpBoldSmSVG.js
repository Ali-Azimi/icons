import React from 'react';

const SmsOtpBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1.5 5C1.5 3.61929 2.61929 2.5 4 2.5H12C13.3807 2.5 14.5 3.61929 14.5 5V9C14.5 10.3807 13.3807 11.5 12 11.5H8.11803L4.22361 13.4472C4.06861 13.5247 3.88454 13.5164 3.73713 13.4253C3.58973 13.3342 3.5 13.1733 3.5 13V11.45C2.35888 11.2184 1.5 10.2095 1.5 9V5ZM8 8C8.55228 8 9 7.55228 9 7C9 6.44772 8.55228 6 8 6C7.44772 6 7 6.44772 7 7C7 7.55228 7.44772 8 8 8ZM12.5 7C12.5 7.55228 12.0523 8 11.5 8C10.9477 8 10.5 7.55228 10.5 7C10.5 6.44772 10.9477 6 11.5 6C12.0523 6 12.5 6.44772 12.5 7ZM4.5 8C5.05229 8 5.5 7.55228 5.5 7C5.5 6.44772 5.05229 6 4.5 6C3.94771 6 3.5 6.44772 3.5 7C3.5 7.55228 3.94771 8 4.5 8Z'
                fill={color}
            />
        </svg>
    );
};

export default SmsOtpBoldSmSVG;