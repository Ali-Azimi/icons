import React from 'react';

const CrossCircleBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM10.5303 5.46967C10.2374 5.17678 9.76256 5.17678 9.46967 5.46967L8 6.93934L6.53033 5.46967C6.23744 5.17678 5.76256 5.17678 5.46967 5.46967C5.17678 5.76256 5.17678 6.23744 5.46967 6.53033L6.93934 8L5.46967 9.46967C5.17678 9.76256 5.17678 10.2374 5.46967 10.5303C5.76256 10.8232 6.23744 10.8232 6.53033 10.5303L8 9.06066L9.46967 10.5303C9.76256 10.8232 10.2374 10.8232 10.5303 10.5303C10.8232 10.2374 10.8232 9.76256 10.5303 9.46967L9.06066 8L10.5303 6.53033C10.8232 6.23744 10.8232 5.76256 10.5303 5.46967Z'
                fill={color}
            />
        </svg>
    );
};

export default CrossCircleBoldSmSVG;
