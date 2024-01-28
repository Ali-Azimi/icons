import React from 'react';

const PasswordOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 1.5C6.067 1.5 4.5 3.067 4.5 5V6.50001L4 6.50001C3.17157 6.50001 2.5 7.17158 2.5 8.00001V11C2.5 12.933 4.067 14.5 6 14.5L9.99993 14.5C11.9329 14.5 13.4999 12.933 13.4999 11V8C13.4999 7.17157 12.8284 6.5 11.9999 6.5L11.5 6.5V5C11.5 3.067 9.933 1.5 8 1.5ZM10.5 6.5V5C10.5 3.61929 9.38071 2.5 8 2.5C6.61929 2.5 5.5 3.61929 5.5 5V6.50001L10.5 6.5ZM11.9999 7.5C12.2761 7.5 12.4999 7.72386 12.4999 8V11C12.4999 12.3807 11.3806 13.5 9.99993 13.5L6 13.5C4.61929 13.5 3.5 12.3807 3.5 11V8.00001C3.5 7.72387 3.72386 7.50001 4 7.50001L11.9999 7.5Z'
                fill={color}
            />
        </svg>
    );
};

export default PasswordOutlineSmSVG;
