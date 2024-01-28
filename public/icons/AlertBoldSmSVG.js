import React from 'react';

const AlertBoldSmSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.83702 2.74635C8.47494 2.08455 7.52384 2.08455 7.16176 2.74635L1.36671 13.3383C1.017 13.9774 1.48315 14.75 2.20434 14.75H13.7944C14.5156 14.75 14.9818 13.9775 14.6321 13.3383L8.83702 2.74635ZM8 6.25C8.41421 6.25 8.75 6.58579 8.75 7V9.5C8.75 9.91421 8.41421 10.25 8 10.25C7.58579 10.25 7.25 9.91421 7.25 9.5V7C7.25 6.58579 7.58579 6.25 8 6.25ZM9 12C9 12.5523 8.55229 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55229 11 9 11.4477 9 12Z'
                fill={color}
            />
        </svg>
    );
};

export default AlertBoldSmSVG;
