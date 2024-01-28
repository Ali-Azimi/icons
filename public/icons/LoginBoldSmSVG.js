import React from 'react';

const LoginBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M1.75 4C1.75 2.48122 2.98122 1.25 4.5 1.25H8.5C10.0188 1.25 11.25 2.48122 11.25 4V5C11.25 5.41421 10.9142 5.75 10.5 5.75C10.0858 5.75 9.75 5.41421 9.75 5V4C9.75 3.30964 9.19036 2.75 8.5 2.75H4.5C3.80964 2.75 3.25 3.30964 3.25 4V12C3.25 12.6904 3.80964 13.25 4.5 13.25H8.5C9.19036 13.25 9.75 12.6904 9.75 12V11C9.75 10.5858 10.0858 10.25 10.5 10.25C10.9142 10.25 11.25 10.5858 11.25 11V12C11.25 13.5188 10.0188 14.75 8.5 14.75H4.5C2.98122 14.75 1.75 13.5188 1.75 12V4Z'
                fill={color}
            />
            <path
                d='M13.5 8C13.5 8.41422 13.1642 8.75 12.75 8.75L8.75 8.75V9.5C8.75 9.78408 8.5895 10.0438 8.33541 10.1708C8.08132 10.2979 7.77726 10.2705 7.55 10.1L5.55 8.6C5.36115 8.45836 5.25 8.23607 5.25 8C5.25 7.76394 5.36115 7.54165 5.55 7.4L7.55 5.9C7.77726 5.72956 8.08132 5.70214 8.33541 5.82918C8.5895 5.95623 8.75 6.21593 8.75 6.5V7.25L12.75 7.25C13.1642 7.25 13.5 7.58579 13.5 8Z'
                fill={color}
            />
        </svg>
    );
};

export default LoginBoldSmSVG;