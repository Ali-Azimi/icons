import React from 'react';

const CacheOutlineLargeSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={32} height={32} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16 7.5C16.8284 7.5 17.5 8.17157 17.5 9V15.25L20.9 17.8C21.5627 18.2971 21.6971 19.2373 21.2 19.9C20.7029 20.5627 19.7627 20.6971 19.1 20.2L14.5 16.75V9C14.5 8.17157 15.1716 7.5 16 7.5Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16 4.5C9.64873 4.5 4.5 9.64873 4.5 16C4.5 18.6355 5.38521 21.0623 6.87658 23.0021L9.73934 20.1393L11.8607 22.2607L7.86827 26.253C7.28249 26.8388 6.33274 26.8388 5.74695 26.253C3.12461 23.6307 1.5 20.0036 1.5 16C1.5 7.99187 7.99187 1.5 16 1.5C24.0081 1.5 30.5 7.99187 30.5 16C30.5 24.0081 24.0081 30.5 16 30.5V27.5C22.3513 27.5 27.5 22.3513 27.5 16C27.5 9.64873 22.3513 4.5 16 4.5Z'
                fill={color}
            />
        </svg>
    );
};

export default CacheOutlineLargeSVG;
