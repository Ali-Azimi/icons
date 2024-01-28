import React from 'react';

const ArrowCircleDownBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8ZM10.5303 9.53033C10.8232 9.23744 10.8232 8.76256 10.5303 8.46967C10.2374 8.17678 9.76256 8.17678 9.46967 8.46967L8.75 9.18934V5C8.75 4.58579 8.41421 4.25 8 4.25C7.58579 4.25 7.25 4.58579 7.25 5V9.18934L6.53033 8.46967C6.23744 8.17678 5.76256 8.17678 5.46967 8.46967C5.17678 8.76256 5.17678 9.23744 5.46967 9.53033L7.46967 11.5303C7.76256 11.8232 8.23744 11.8232 8.53033 11.5303L10.5303 9.53033Z'
                fill={color}
            />
        </svg>
    );
};

export default ArrowCircleDownBoldSmSVG;
