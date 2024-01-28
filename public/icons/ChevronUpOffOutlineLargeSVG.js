import React from 'react';

const ChevronUpOffOutlineLargeSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={32} height={32} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16 9.5C16.4326 9.5 16.8441 9.68672 17.1289 10.0122L24.1289 18.0122C24.6744 18.6357 24.6112 19.5833 23.9878 20.1289C23.3643 20.6744 22.4167 20.6112 21.8712 19.9878L16 13.2779L10.1289 19.9878C9.58336 20.6112 8.63572 20.6744 8.01226 20.1289C7.38881 19.5833 7.32563 18.6357 7.87116 18.0122L14.8712 10.0122C15.156 9.68672 15.5675 9.5 16 9.5Z'
                fill={color}
            />
        </svg>
    );
};

export default ChevronUpOffOutlineLargeSVG;
