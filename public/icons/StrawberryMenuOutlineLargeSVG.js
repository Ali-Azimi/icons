import React from 'react';

const StrawberryMenuOutlineLargeSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={32} height={32} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3.5 8C3.5 7.17157 4.17157 6.5 5 6.5H27C27.8284 6.5 28.5 7.17157 28.5 8C28.5 8.82843 27.8284 9.5 27 9.5H5C4.17157 9.5 3.5 8.82843 3.5 8Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.5 16C7.5 15.1716 8.17157 14.5 9 14.5H23C23.8284 14.5 24.5 15.1716 24.5 16C24.5 16.8284 23.8284 17.5 23 17.5H9C8.17157 17.5 7.5 16.8284 7.5 16Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11.5 24C11.5 23.1716 12.1716 22.5 13 22.5H19C19.8284 22.5 20.5 23.1716 20.5 24C20.5 24.8284 19.8284 25.5 19 25.5H13C12.1716 25.5 11.5 24.8284 11.5 24Z'
                fill={color}
            />
        </svg>
    );
};

export default StrawberryMenuOutlineLargeSVG;
