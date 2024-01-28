import React from 'react';

const ArrowCircleLeftBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM6.46967 10.5303C6.76256 10.8232 7.23744 10.8232 7.53033 10.5303C7.82322 10.2374 7.82322 9.76256 7.53033 9.46967L6.81066 8.75H11C11.4142 8.75 11.75 8.41421 11.75 8C11.75 7.58579 11.4142 7.25 11 7.25L6.81066 7.25L7.53033 6.53033C7.82322 6.23744 7.82322 5.76256 7.53033 5.46967C7.23744 5.17678 6.76256 5.17678 6.46967 5.46967L4.46967 7.46967C4.17678 7.76256 4.17678 8.23744 4.46967 8.53033L6.46967 10.5303Z'
                fill={color}
            />
        </svg>
    );
};

export default ArrowCircleLeftBoldSmSVG;
