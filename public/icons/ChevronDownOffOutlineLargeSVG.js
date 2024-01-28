import React from 'react';

const ChevronDownOffOutlineLargeSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={32} height={32} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.01226 11.8712C8.63572 11.3256 9.58336 11.3888 10.1289 12.0123L16 18.7221L21.8712 12.0123C22.4167 11.3888 23.3643 11.3256 23.9878 11.8712C24.6112 12.4167 24.6744 13.3643 24.1289 13.9878L17.1289 21.9878C16.8441 22.3133 16.4326 22.5 16 22.5C15.5675 22.5 15.156 22.3133 14.8712 21.9878L7.87116 13.9878C7.32563 13.3643 7.38881 12.4167 8.01226 11.8712Z'
                fill={color}
            />
        </svg>
    );
};

export default ChevronDownOffOutlineLargeSVG;
