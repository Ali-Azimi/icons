import React from 'react';

const AlertTwoToneMdSVG = ({ color = '#23B4FF', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M14.7584 4.53545C13.4911 2.48819 10.5089 2.48818 9.24147 4.53544L1.4879 17.06C0.150404 19.2205 1.71067 22 4.24638 22H19.7535C22.2892 22 23.8495 19.2205 22.512 17.06L14.7584 4.53545Z'
                fill={color}
            />
            <path
                d='M13 10C13 9.44772 12.5522 9 12 9C11.4477 9 11 9.44772 11 10V14C11 14.5523 11.4477 15 12 15C12.5522 15 13 14.5523 13 14V10Z'
                fill='#040A1F'
            />
            <path
                d='M13 18C13 18.5523 12.5522 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5522 17 13 17.4477 13 18Z'
                fill='#040A1F'
            />
        </svg>
    );
};

export default AlertTwoToneMdSVG;
