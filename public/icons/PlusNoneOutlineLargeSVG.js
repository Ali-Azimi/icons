import React from 'react';

const PlusNoneOutlineLargeSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={32} height={32} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M17.5 9C17.5 8.17157 16.8284 7.5 16 7.5C15.1716 7.5 14.5 8.17157 14.5 9V14.5H9C8.17157 14.5 7.5 15.1716 7.5 16C7.5 16.8284 8.17157 17.5 9 17.5H14.5V23C14.5 23.8284 15.1716 24.5 16 24.5C16.8284 24.5 17.5 23.8284 17.5 23V17.5H23C23.8284 17.5 24.5 16.8284 24.5 16C24.5 15.1716 23.8284 14.5 23 14.5H17.5V9Z'
                fill={color}
            />
        </svg>
    );
};

export default PlusNoneOutlineLargeSVG;
