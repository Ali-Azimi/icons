import React from 'react';

const PasswordBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4.25 5C4.25 2.92893 5.92893 1.25 8 1.25C10.0711 1.25 11.75 2.92893 11.75 5V6.25L11.9999 6.25C12.9664 6.25 13.7499 7.0335 13.7499 8V11C13.7499 13.0711 12.071 14.75 9.99993 14.75L6 14.75C3.92893 14.75 2.25 13.0711 2.25 11V8.00001C2.25 7.03351 3.0335 6.25001 4 6.25001L4.25 6.25001V5ZM5.75 6.25001V5C5.75 3.75736 6.75736 2.75 8 2.75C9.24264 2.75 10.25 3.75736 10.25 5V6.25L5.75 6.25001Z'
                fill={color}
            />
        </svg>
    );
};

export default PasswordBoldSmSVG;
