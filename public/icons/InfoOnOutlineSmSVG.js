import React from 'react';

const InfoOnOutlineSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M8.75 5.75C8.75 6.16421 8.41421 6.5 8 6.5C7.58579 6.5 7.25 6.16421 7.25 5.75C7.25 5.33579 7.58579 5 8 5C8.41421 5 8.75 5.33579 8.75 5.75Z'
                fill={color}
            />
            <path
                d='M8.5 8C8.5 7.72386 8.27614 7.5 8 7.5C7.72386 7.5 7.5 7.72386 7.5 8V11C7.5 11.2761 7.72386 11.5 8 11.5C8.27614 11.5 8.5 11.2761 8.5 11V8Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z'
                fill={color}
            />
        </svg>
    );
};

export default InfoOnOutlineSmSVG;
