import React from 'react';

const CarUsageBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M15 1C14.4477 1 14 1.44772 14 2C14 2.55228 14.4477 3 15 3H17C17.5523 3 18 2.55228 18 2C18 1.44772 17.5523 1 17 1H15Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11.0362 8.73225L11.6511 6.27239C11.985 4.93689 13.1849 4 14.5615 4H17.9384C19.3151 4 20.515 4.93689 20.8489 6.27239L21.3624 8.32648C22.3344 8.82282 23 9.83368 23 11V13C23 14.1046 22.1046 15 21 15V16C21 16.5523 20.5523 17 20 17C19.4477 17 19 16.5523 19 16V15H15.8306C15.3932 15 15.0066 14.7158 14.8761 14.2983L14.0975 11.8069C13.6646 10.4215 12.5264 9.40287 11.1521 9.09601C10.9796 9.05752 10.9027 8.84796 11.0362 8.73225ZM14.5615 6H17.9384C18.3973 6 18.7973 6.3123 18.9086 6.75746L19.2192 8H13.2808L13.5914 6.75746C13.7027 6.3123 14.1027 6 14.5615 6Z'
                fill={color}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5.72037 10C4.40822 10 3.24832 10.8527 2.85693 12.1052L1.73875 15.6834C1.27357 16.3371 1 17.1366 1 18V19C1 20.1046 1.89543 21 3 21L3 22C3 22.5523 3.44772 23 4 23C4.55228 23 5 22.5523 5 22V21H11V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V21C14.1046 21 15 20.1046 15 19V18C15 17.1366 14.7264 16.337 14.2612 15.6833L13.143 12.1052C12.7517 10.8527 11.5918 10 10.2796 10H5.72037ZM11.2341 12.7017L11.6398 14H4.36018L4.76589 12.7017C4.89635 12.2842 5.28299 12 5.72037 12H10.2796C10.717 12 11.1036 12.2843 11.2341 12.7017Z'
                fill={color}
            />
        </svg>
    );
};

export default CarUsageBoldMdSVG;
