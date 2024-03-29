import React from 'react';

const SexTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M5 10.9C5.32311 10.9656 5.65753 11 6 11C6.34247 11 6.67689 10.9656 7 10.9V13H8C8.55228 13 9 13.4477 9 14C9 14.5523 8.55228 15 8 15H7V16C7 16.5523 6.55228 17 6 17C5.44772 17 5 16.5523 5 16V15H4C3.44772 15 3 14.5523 3 14C3 13.4477 3.44772 13 4 13H5V10.9Z'
                fill='#040A1F'
            />
            <path
                d='M19.1716 15.2426C18.8001 14.6816 18.3184 14.1999 17.7574 13.8284L19.5858 12H19C18.4477 12 18 11.5523 18 11C18 10.4477 18.4477 10 19 10H22C22.5523 10 23 10.4477 23 11V14C23 14.5523 22.5523 15 22 15C21.4477 15 21 14.5523 21 14V13.4142L19.1716 15.2426Z'
                fill='#040A1F'
            />
            <path d='M6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1Z' fill={color} />
            <path
                d='M15 13C12.2386 13 10 15.2386 10 18C10 20.7614 12.2386 23 15 23C17.7614 23 20 20.7614 20 18C20 15.2386 17.7614 13 15 13Z'
                fill={color}
            />
        </svg>
    );
};

export default SexTwoToneMdSVG;
