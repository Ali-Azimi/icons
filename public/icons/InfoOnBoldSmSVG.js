import React from 'react';

const InfoOnBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM8.75 5.75C8.75 6.16421 8.41421 6.5 8 6.5C7.58579 6.5 7.25 6.16421 7.25 5.75C7.25 5.33579 7.58579 5 8 5C8.41421 5 8.75 5.33579 8.75 5.75ZM8.75 8C8.75 7.58579 8.41421 7.25 8 7.25C7.58579 7.25 7.25 7.58579 7.25 8V11C7.25 11.4142 7.58579 11.75 8 11.75C8.41421 11.75 8.75 11.4142 8.75 11V8Z'
                fill={color}
            />
        </svg>
    );
};

export default InfoOnBoldSmSVG;
