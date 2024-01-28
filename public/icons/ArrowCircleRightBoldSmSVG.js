import React from 'react';

const ArrowCircleRightBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM9.53033 5.46967C9.23744 5.17678 8.76256 5.17678 8.46967 5.46967C8.17678 5.76256 8.17678 6.23744 8.46967 6.53033L9.18934 7.25H5C4.58579 7.25 4.25 7.58579 4.25 8C4.25 8.41421 4.58579 8.75 5 8.75H9.18934L8.46967 9.46967C8.17678 9.76256 8.17678 10.2374 8.46967 10.5303C8.76256 10.8232 9.23744 10.8232 9.53033 10.5303L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L9.53033 5.46967Z'
                fill={color}
            />
        </svg>
    );
};

export default ArrowCircleRightBoldSmSVG;
