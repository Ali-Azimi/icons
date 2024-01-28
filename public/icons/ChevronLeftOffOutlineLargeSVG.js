import React from 'react';

const ChevronLeftOffOutlineLargeSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={32} height={32} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M20.1289 8.01226C20.6744 8.63572 20.6112 9.58336 19.9878 10.1289L13.2779 16L19.9878 21.8712C20.6112 22.4167 20.6744 23.3643 20.1289 23.9878C19.5833 24.6112 18.6357 24.6744 18.0122 24.1289L10.0122 17.1289C9.68672 16.8441 9.5 16.4326 9.5 16C9.5 15.5675 9.68672 15.156 10.0122 14.8712L18.0122 7.87116C18.6357 7.32563 19.5833 7.38881 20.1289 8.01226Z'
                fill={color}
            />
        </svg>
    );
};

export default ChevronLeftOffOutlineLargeSVG;
