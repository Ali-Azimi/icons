import React from 'react';

const ChevronRightOffOutlineLargeSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={32} height={32} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11.8712 8.01226C12.4167 7.38881 13.3643 7.32563 13.9878 7.87116L21.9878 14.8712C22.3133 15.156 22.5 15.5675 22.5 16C22.5 16.4326 22.3133 16.8441 21.9878 17.1289L13.9878 24.1289C13.3643 24.6744 12.4167 24.6112 11.8712 23.9878C11.3256 23.3643 11.3888 22.4167 12.0123 21.8712L18.7221 16L12.0123 10.1289C11.3888 9.58336 11.3256 8.63572 11.8712 8.01226Z'
                fill={color}
            />
        </svg>
    );
};

export default ChevronRightOffOutlineLargeSVG;
