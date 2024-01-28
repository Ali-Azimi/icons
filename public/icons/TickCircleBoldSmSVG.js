import React from 'react';

const TickCircleBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM11.5303 6.53033C11.8232 6.23744 11.8232 5.76256 11.5303 5.46967C11.2374 5.17678 10.7626 5.17678 10.4697 5.46967L7 8.93934L5.53033 7.46967C5.23744 7.17678 4.76256 7.17678 4.46967 7.46967C4.17678 7.76256 4.17678 8.23744 4.46967 8.53033L6.46967 10.5303C6.76256 10.8232 7.23744 10.8232 7.53033 10.5303L11.5303 6.53033Z'
                fill={color}
            />
        </svg>
    );
};

export default TickCircleBoldSmSVG;
