import React from 'react';

const MinusCircleBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM5 7.25C4.58579 7.25 4.25 7.58579 4.25 8C4.25 8.41421 4.58579 8.75 5 8.75H11C11.4142 8.75 11.75 8.41421 11.75 8C11.75 7.58579 11.4142 7.25 11 7.25H5Z'
                fill={color}
            />
        </svg>
    );
};

export default MinusCircleBoldSmSVG;
