import React from 'react';

const AlertBoldMdSVG = ({ color = '#040A1F', ...props }) => {
    return (
        <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.7584 4.53545C13.4911 2.48819 10.5089 2.48818 9.24147 4.53544L1.4879 17.06C0.150404 19.2205 1.71067 22 4.24638 22H19.7535C22.2892 22 23.8495 19.2205 22.512 17.06L14.7584 4.53545ZM12 9C12.5522 9 13 9.44772 13 10V14C13 14.5523 12.5522 15 12 15C11.4477 15 11 14.5523 11 14V10C11 9.44772 11.4477 9 12 9ZM13 18C13 18.5523 12.5522 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5522 17 13 17.4477 13 18Z'
                fill={color}
            />
        </svg>
    );
};

export default AlertBoldMdSVG;
